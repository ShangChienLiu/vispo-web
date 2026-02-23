-- Run this in your Supabase SQL Editor to set up the waitlist table
-- Supabase Dashboard > SQL Editor > New query

CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  whitelisted BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for fast email lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Create index for filtering whitelisted users
CREATE INDEX IF NOT EXISTS idx_waitlist_whitelisted ON waitlist(whitelisted);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anonymous users (for the waitlist form)
CREATE POLICY "Allow anonymous inserts" ON waitlist
  FOR INSERT
  WITH CHECK (true);

-- Allow service role full access (for admin management / whitelisting)
CREATE POLICY "Allow service role full access" ON waitlist
  FOR ALL
  USING (true)
  WITH CHECK (true);
