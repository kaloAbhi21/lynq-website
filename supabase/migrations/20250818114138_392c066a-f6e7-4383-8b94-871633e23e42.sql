-- Remove the public read policy that exposes customer contact information
DROP POLICY "Public can view all contacts" ON public.contacts;

-- Keep the insert policy so contact forms still work
-- The "Anyone can submit contact forms" policy remains intact