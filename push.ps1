# Ian Nelson Portfolio - Push to GitHub PowerShell Script
$env:PATH = "C:\Program Files\Git\cmd;C:\Program Files\GitHub CLI;$env:PATH"

Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "  Ian Nelson Portfolio - Push to GitHub" -ForegroundColor Cyan
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host ""

Set-Location $PSScriptRoot

Write-Host "[1/3] Adding changes..." -ForegroundColor Yellow
git add .

Write-Host "[2/3] Committing changes..." -ForegroundColor Yellow
$msg = Read-Host "Enter commit message (or press Enter for default)"
if ([string]::IsNullOrWhiteSpace($msg)) {
    $msg = "Update portfolio website"
}

git commit -m "$msg"

Write-Host "[3/3] Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host ""
Write-Host "===================================================" -ForegroundColor Green
Write-Host "  Done! Your updates are live on GitHub." -ForegroundColor Green
Write-Host "  Repo: https://github.com/ianinafrica9-wq/portfolio" -ForegroundColor Green
Write-Host "===================================================" -ForegroundColor Green
