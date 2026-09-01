# SupportTune — verify/complete folder structure (PowerShell)
# Run this from inside the supporttune folder (after setup.ps1 has already run):
#   .\setup_backend.ps1

Write-Host "Verifying SupportTune project structure..."

$backendDirs = @(
    "backend\app\core",
    "backend\app\api",
    "backend\app\models"
)
foreach ($dir in $backendDirs) {
    New-Item -ItemType Directory -Path $dir -Force | Out-Null
}

$hfSpaceDirs = @(
    "hf_space"
)
foreach ($dir in $hfSpaceDirs) {
    New-Item -ItemType Directory -Path $dir -Force | Out-Null
}

function New-EmptyFile($path) {
    if (-Not (Test-Path $path)) {
        New-Item -ItemType File -Path $path -Force | Out-Null
    }
}

New-EmptyFile "hf_space\app.py"
New-EmptyFile "hf_space\requirements.txt"
New-EmptyFile "hf_space\README.md"

Write-Host "Done. hf_space/ folder added for the Hugging Face Space code."
