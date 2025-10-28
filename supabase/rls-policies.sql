-- ============================================
-- Row Level Security (RLS) Policies
-- for mailing_list table
-- ============================================

-- Policy 1: Allow Edge Function (service_role) full access
-- This ensures your Edge Function can INSERT emails
CREATE POLICY "service_role_all_access"
ON mailing_list
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Policy 2: Allow anyone to INSERT (add to waitlist)
-- This is a backup - your Edge Function already handles this
CREATE POLICY "public_insert_only"
ON mailing_list
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Policy 3: Allow authenticated users to SELECT (view emails)
-- Useful if you want to build an admin dashboard later
CREATE POLICY "authenticated_select"
ON mailing_list
FOR SELECT
TO authenticated
USING (true);

-- Policy 4: No public SELECT (privacy protection)
-- Prevents anonymous users from reading the email list
-- (Only authenticated users and service_role can read)

-- ============================================
-- HOW TO USE:
-- ============================================
-- 1. Go to: https://supabase.com/dashboard/project/hsvrwedgrpxaiwvteqay/sql/new
-- 2. Copy and paste this entire file
-- 3. Click "Run" button
-- 4. Done! Your RLS is now properly configured
-- ============================================
