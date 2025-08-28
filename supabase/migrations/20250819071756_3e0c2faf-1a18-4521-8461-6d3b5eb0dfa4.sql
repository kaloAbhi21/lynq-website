-- Remove the public read policy that exposes subscriber email addresses
DROP POLICY "Public can view subscribers" ON public.subscribers;

-- Keep the insert policy so newsletter signups still work
-- The "Anyone can subscribe to newsletter" policy remains intact