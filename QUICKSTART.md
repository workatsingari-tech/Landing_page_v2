# 🎯 QUICK START - DO THIS NOW!

> **Time needed: 15-20 minutes**

## ✅ What's Already Done

✨ I've set up everything automatically:
- ✅ Edge Function code created
- ✅ Frontend form updated to call real API
- ✅ Environment files configured
- ✅ Security setup (secrets protected)
- ✅ Helper scripts created

## 🚀 Your 5-Step Checklist

### 📋 Step 1: Get Resend API Key (3 min)
1. Go to → https://resend.com/signup
2. Sign up (free account - 100 emails/day, 3,000/month)
3. Go to API Keys → Create API Key
4. **Copy the key** (starts with `re_...`)

**Note:** Resend is simpler than SendGrid and included with many Supabase plans!

### 📋 Step 2: Set Environment Variables (3 min)
1. Go to → https://supabase.com/dashboard/project/hsvrwedgrpxaiwvteqay/settings/functions
2. Click "Add new secret" and add these **4 variables**:

| Variable Name | Value |
|--------------|-------|
| `PROJECT_URL` | `https://hsvrwedgrpxaiwvteqay.supabase.co` |
| `SERVICE_ROLE_KEY` | **[Get from Supabase Dashboard → Settings → API → service_role key]** |
| `RESEND_API_KEY` | [Paste your Resend API key from Step 1] |
| `FROM_EMAIL` | `onboarding@resend.dev` (or your verified domain) |

**⚠️ Important:** Don't use the `SUPABASE_` prefix - it's reserved by Supabase!

3. Click "Save"

### 📋 Step 3: Verify Sender Email (Optional, 2 min)

**For testing:** You can use `onboarding@resend.dev` (no verification needed!)

**For production:** Add your own domain in Resend:
1. Go to Resend → Domains → Add Domain
2. Add DNS records to your domain
3. Use `noreply@yourdomain.com` as `FROM_EMAIL`

### 📋 Step 4: Install Supabase CLI (3 min)

**Open PowerShell as Administrator** and run:

```powershell
# Install Scoop (package manager)
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
irm get.scoop.sh | iex

# Install Supabase CLI
scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
scoop install supabase
```

### 📋 Step 5: Deploy Function (5 min)

**In PowerShell**, navigate to your project and run:

```powershell
cd "C:\Users\sajal\OneDrive\Documents\GitHub\Landing_page_v2"

# Login (opens browser)
supabase login

# Link to your project
supabase link --project-ref hsvrwedgrpxaiwvteqay

# Deploy!
supabase functions deploy send-thankyou
```

## 🧪 Test It!

**Test 1: Via PowerShell**
```powershell
.\test-function.ps1 -Email "your-email@gmail.com"
```

**Test 2: Check Database**
Go to: https://supabase.com/dashboard/project/hsvrwedgrpxaiwvteqay/editor
→ Click `mailing_list` table
→ You should see your email!

**Test 3: Check Email Inbox**
Check your inbox for the thank you email.

**Test 4: Test Website Form**
```powershell
npm run dev
```
Go to http://localhost:5173 and try the waitlist form!

## 🎉 Done!

Your waitlist is now live! Every time someone signs up:
1. ✅ Email saved to Supabase database
2. ✅ Thank you email sent automatically
3. ✅ User sees success message

## 📞 Having Issues?

Check function logs:
```powershell
supabase functions logs send-thankyou
```

Common fixes:
- **"RESEND_API_KEY undefined"** → Check Step 2, redeploy function
- **"Failed to send email"** → Check API key is correct (starts with `re_`)
- **"DB insert failed"** → Check service_role key in Step 2

## 📚 More Help

- Full guide: `SETUP_INSTRUCTIONS.md`
- Technical details: `SUPABASE_SETUP.md`

---

**Why Resend?**
- ✅ Simpler API than SendGrid
- ✅ 100 emails/day free (3,000/month)
- ✅ No sender verification needed for testing
- ✅ Works great with Supabase

**Need a different email provider?** Let me know! I can set up:
- SendGrid
- Mailgun
- Postmark
- AWS SES
