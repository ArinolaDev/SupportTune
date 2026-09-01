export const evaluationResults = [
  {
    question: "A customer says they were charged twice for their subscription this month. How should I respond?",
    base: "I understand that you're experiencing an issue with being charged twice for your subscription service this month. Here's how I would suggest responding:\n\n---\n\n**Customer:**\n\"Hello, I just wanted to check if there was any error in my recent billing...\"\n\n**You:**\n\"Thank you for bringing this to our attention. I'll immediately investigate the situation...\"",
    finetuned: "I'm so sorry you experienced that. It's definitely not what you expect, and I want to make sure everything's correct. I'd recommend starting with an empathetic apology, then checking if there's a pending refund already in the system, which could help cover the double charge quickly.",
  },
  {
    question: "A customer says: 'I got charged an annual fee but I thought I was on monthly billing.'",
    base: "Here are a few possible scenarios that could explain the situation:\n\n1. Misunderstanding of Billing Cycle: It's possible that you signed up for a service that uses a monthly billing cycle but the terms didn't clearly state this...\n2. Service Subscription Type: Some services offer both monthly and annual plans...",
    finetuned: "That's a common confusion. If you were billed annually instead of monthly, it's likely the account is set up that way. If that's not what you expected, we can change it back to monthly billing at no additional cost, and refund any overage for the time already paid.",
  },
  {
    question: "A customer says: 'Can I get a discount if I commit to a longer plan?'",
    base: "As an AI, I don't have direct access to pricing or promotional information. However, based on common practices, if a customer commits to a longer subscription plan, they might be eligible for discounts or other incentives as part of the contract terms. These could include:\n1. Discounted Rates\n2. Free Add-ons\n3. No-Commitment Periods\n\nIt's best to...",
    finetuned: "That's a common inquiry. Many plans do offer discounts for extended commitments, though it can vary based on the specific plan and company policy. Some companies might also include a free month as part of a multi-month commitment, which could be worth asking about directly.",
  },
  {
    question: "A customer says: 'I want to downgrade but keep my saved data, is that possible?'",
    base: "Yes, it is possible to downgrade your service while keeping your saved data. However, the specific process and options available will depend on the type of service you're using (such as cloud storage, virtual machines, or other services) and the provider's policy.\n\nFor example, if you're with a cloud storage service like Dropbox, Google Drive, or OneDrive, you can often downgrade your plan without losing your existing files...",
    finetuned: "That's usually doable. Many plans allow you to downgrade while keeping your existing data intact. Just confirm the specific terms for your plan so I can guide you through the exact steps.",
  },
  {
    question: "A customer says: 'My payment keeps failing even though I have money in my account.'",
    base: "I understand your concern. There could be several reasons why you're experiencing payment failures despite having sufficient funds in your account. Here are some steps and questions to help diagnose the issue:\n\n1. Check Your Account Balance\n2. Verify Your Payment Method\n3. Check for Any Recent Transactions...",
    finetuned: "That can be frustrating. Sometimes billing issues can happen when the system is processing payments. Typically, this kind of recurring failure would warrant a support escalation to verify the account balance and address any specific billing-related errors.",
  },
  {
    question: "A customer says: 'What's your company's stock price today?'",
    base: "I'm sorry, but I don't have the ability to provide real-time or historical stock prices as my training data only goes up until 2021 and doesn't include current financial market information. For real-time stock prices, I would recommend checking a reliable financial source.",
    finetuned: "That's not how I work. That kind of financial information isn't relevant to what I'm here for. I'm focused on answering questions about your account and billing specifically. Is there something related to your billing you'd like help with instead?",
  },
];

export const trainingMetrics = {
  baseModel: "Qwen2.5-3B-Instruct",
  method: "LoRA (QLoRA, 4-bit)",
  trainableParams: "29,933,568",
  totalParams: "3,115,872,256",
  trainablePercent: "0.96%",
  epochs: 3,
  trainExamples: 56,
  evalExamples: 11,
  lossProgression: [
    { epoch: 1, trainLoss: 2.903368, validationLoss: 1.626313 },
    { epoch: 2, trainLoss: 1.676988, validationLoss: 1.328623 },
    { epoch: 3, trainLoss: 1.233805, validationLoss: 1.295208 },
  ],
};