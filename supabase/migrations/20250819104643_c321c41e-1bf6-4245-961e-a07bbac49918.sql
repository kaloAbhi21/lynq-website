-- Fix security vulnerability: Protect contact form data from unauthorized access
-- Keep INSERT policy for contact form submissions, but restrict SELECT access

-- Remove any existing policies that allow public SELECT access to contacts
DROP POLICY IF EXISTS "Public can view contacts" ON public.contacts;
DROP POLICY IF EXISTS "Anyone can view contacts" ON public.contacts;

-- Ensure only authorized users can view contact form submissions
-- For now, we'll restrict all SELECT access since there's no admin authentication system
-- The contact form submission functionality (INSERT) remains unaffected

-- Optional: Add a policy for future admin access when authentication is implemented
-- CREATE POLICY "Admins can view contacts" ON public.contacts
-- FOR SELECT USING (
--   EXISTS (
--     SELECT 1 FROM public.profiles 
--     WHERE id = auth.uid() AND role = 'admin'
--   )
-- );

-- Verify INSERT policy still exists for contact form submissions
-- This should already exist: "Anyone can submit contact forms"