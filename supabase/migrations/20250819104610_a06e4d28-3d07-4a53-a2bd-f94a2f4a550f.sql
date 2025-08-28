-- Fix security vulnerability: Remove public access to subscriber emails
-- Keep INSERT policy for newsletter signups, but restrict SELECT access

-- Remove any existing policies that allow public SELECT access
DROP POLICY IF EXISTS "Public can view subscribers" ON public.subscribers;
DROP POLICY IF EXISTS "Anyone can view subscribers" ON public.subscribers;

-- Ensure only authorized users (admins) can view subscriber data
-- For now, we'll restrict all SELECT access since there's no admin authentication system
-- The newsletter signup functionality (INSERT) remains unaffected

-- Optional: Add a policy for future admin access when authentication is implemented
-- CREATE POLICY "Admins can view subscribers" ON public.subscribers
-- FOR SELECT USING (
--   EXISTS (
--     SELECT 1 FROM public.profiles 
--     WHERE id = auth.uid() AND role = 'admin'
--   )
-- );

-- Verify INSERT policy still exists for newsletter signups
-- This should already exist: "Anyone can subscribe to newsletter"