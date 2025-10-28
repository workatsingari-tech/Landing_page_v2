# 📝 Deployment Commands

Quick reference for common deployment tasks.

## Deploy Edge Function

```powershell
supabase functions deploy send-thankyou --project-ref hsvrwedgrpxaiwvteqay
```

## Test Function

```powershell
.\test-function.ps1 -Email "test@example.com"
```

Or manually:
```powershell
$body = @{ email = "test@example.com" } | ConvertTo-Json
Invoke-WebRequest -Method POST `
  -Uri "https://hsvrwedgrpxaiwvteqay.supabase.co/functions/v1/send-thankyou" `
  -Headers @{"Content-Type"="application/json"; "Authorization"="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzdnJ3ZWRncnB4YWl3dnRlcWF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1NTEwOTcsImV4cCI6MjA3NzEyNzA5N30.VzwwPLTHPLHaYoXSuV2k1gOgfwywZp1-BSgrYkL1G4E"} `
  -Body $body
```

## View Logs

```powershell
# View function logs (requires project linked locally)
supabase functions logs send-thankyou
```

## Database Queries

Access SQL Editor: https://supabase.com/dashboard/project/hsvrwedgrpxaiwvteqay/sql

```sql
-- View all signups
SELECT * FROM mailing_list ORDER BY created_at DESC;

-- Count total
SELECT COUNT(*) FROM mailing_list;

-- Today's signups
SELECT COUNT(*) FROM mailing_list WHERE created_at::date = CURRENT_DATE;
```

## Environment Variables

Update at: https://supabase.com/dashboard/project/hsvrwedgrpxaiwvteqay/settings/functions

Current variables:
- `PROJECT_URL`
- `SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `FROM_EMAIL`

## Project URLs

- **Dashboard:** https://supabase.com/dashboard/project/hsvrwedgrpxaiwvteqay
- **Database:** https://supabase.com/dashboard/project/hsvrwedgrpxaiwvteqay/editor
- **Functions:** https://supabase.com/dashboard/project/hsvrwedgrpxaiwvteqay/functions
- **Resend:** https://resend.com/emails
