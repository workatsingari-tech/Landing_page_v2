# Test the Edge Function
# Run this script to test your deployed function

param(
    [Parameter(Mandatory=$false)]
    [string]$Email = "test@example.com"
)

Write-Host "🧪 Testing Supabase Edge Function" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

$functionUrl = "https://hsvrwedgrpxaiwvteqay.supabase.co/functions/v1/send-thankyou"

Write-Host "Testing with email: $Email" -ForegroundColor Yellow
Write-Host "Function URL: $functionUrl" -ForegroundColor Gray
Write-Host ""

try {
    $body = @{
        email = $Email
    } | ConvertTo-Json
    
    $response = Invoke-WebRequest -Method POST `
        -Uri $functionUrl `
        -ContentType "application/json" `
        -Body $body `
        -UseBasicParsing
    
    Write-Host "✅ Success!" -ForegroundColor Green
    Write-Host "Status Code: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "Response: $($response.Content)" -ForegroundColor White
    Write-Host ""
    Write-Host "Now check:" -ForegroundColor Yellow
    Write-Host "  1. Supabase table: https://supabase.com/dashboard/project/hsvrwedgrpxaiwvteqay/editor" -ForegroundColor Gray
    Write-Host "  2. Email inbox at: $Email" -ForegroundColor Gray
    Write-Host ""
    
} catch {
    Write-Host "❌ Error!" -ForegroundColor Red
    Write-Host "Status Code: $($_.Exception.Response.StatusCode.value__)" -ForegroundColor Red
    
    # Try to get error details
    try {
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        $errorBody = $reader.ReadToEnd()
        Write-Host "Error Details: $errorBody" -ForegroundColor Red
    } catch {
        Write-Host "Error Message: $($_.Exception.Message)" -ForegroundColor Red
    }
    
    Write-Host ""
    Write-Host "Common issues:" -ForegroundColor Yellow
    Write-Host "  1. Function not deployed yet - run: supabase functions deploy send-thankyou" -ForegroundColor Gray
    Write-Host "  2. Environment variables not set in Supabase dashboard" -ForegroundColor Gray
    Write-Host "  3. SendGrid API key invalid or not set" -ForegroundColor Gray
    Write-Host ""
    Write-Host "Check function logs: supabase functions logs send-thankyou" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "To test with a different email, run:" -ForegroundColor Cyan
Write-Host "  .\test-function.ps1 -Email 'youremail@example.com'" -ForegroundColor Gray
