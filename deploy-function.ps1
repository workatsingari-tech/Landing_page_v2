# Quick Deploy Script - Run this AFTER initial setup
# This script just deploys the function (faster than full setup)

Write-Host "📦 Deploying Supabase Edge Function..." -ForegroundColor Cyan

# Deploy the function
supabase functions deploy send-thankyou

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Function deployed successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Function URL: https://hsvrwedgrpxaiwvteqay.supabase.co/functions/v1/send-thankyou" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "View logs: supabase functions logs send-thankyou" -ForegroundColor Gray
} else {
    Write-Host "❌ Deployment failed. Check the error above." -ForegroundColor Red
}
