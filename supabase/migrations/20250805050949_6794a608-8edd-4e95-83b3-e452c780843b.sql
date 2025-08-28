-- Create subscribers table for newsletter signups
CREATE TABLE public.subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to subscribe
CREATE POLICY "Anyone can subscribe to newsletter" 
ON public.subscribers 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading subscribers (for admin purposes)
CREATE POLICY "Public can view subscribers" 
ON public.subscribers 
FOR SELECT 
USING (true);