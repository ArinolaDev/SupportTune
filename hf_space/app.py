import gradio as gr
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
from peft import PeftModel

BASE_MODEL = "Qwen/Qwen2.5-3B-Instruct"
ADAPTER_PATH = "./adapter"

print("Loading tokenizer...")
tokenizer = AutoTokenizer.from_pretrained(BASE_MODEL)

print("Loading base model...")
base_model = AutoModelForCausalLM.from_pretrained(
    BASE_MODEL,
    torch_dtype=torch.float32,
    device_map="cpu",
)

print("Loading fine-tuned adapter...")
model = PeftModel.from_pretrained(base_model, ADAPTER_PATH)
model.eval()

print("Model ready.")


def generate(prompt, use_finetuned):
    messages = [{"role": "user", "content": prompt}]
    inputs = tokenizer.apply_chat_template(
        messages,
        add_generation_prompt=True,
        return_tensors="pt",
        return_dict=True,
    )

    with torch.no_grad():
        if use_finetuned:
            outputs = model.generate(
                **inputs,
                max_new_tokens=200,
                temperature=0.7,
                do_sample=True,
            )
        else:
            with model.disable_adapter():
                outputs = model.generate(
                    **inputs,
                    max_new_tokens=200,
                    temperature=0.7,
                    do_sample=True,
                )

    response = tokenizer.decode(
        outputs[0][inputs["input_ids"].shape[1]:], skip_special_tokens=True
    )
    return response


def chat_fn(message, history):
    return generate(message, use_finetuned=True)


def compare_fn(message):
    base_response = generate(message, use_finetuned=False)
    finetuned_response = generate(message, use_finetuned=True)
    return base_response, finetuned_response


with gr.Blocks(title="SupportTune") as demo:
    gr.Markdown("# SupportTune — Fine-Tuned Billing Support Assistant")
    gr.Markdown(
        "This is a demonstration project. Responses are simulated guidance, "
        "not real account actions."
    )

    with gr.Tab("Chat"):
        gr.ChatInterface(fn=chat_fn)

    with gr.Tab("Compare Base vs Fine-Tuned"):
        input_box = gr.Textbox(label="Customer question")
        compare_btn = gr.Button("Compare")
        with gr.Row():
            base_output = gr.Textbox(label="Base Model (before)", lines=8)
            finetuned_output = gr.Textbox(label="Fine-Tuned Model (after)", lines=8)
        compare_btn.click(
            compare_fn, inputs=input_box, outputs=[base_output, finetuned_output]
        )

demo.launch()