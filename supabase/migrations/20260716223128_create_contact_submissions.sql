/*
# Create contact_submissions table

1. New Tables
- `contact_submissions`
- `id` (uuid, primary key)
- `name` (text, not null) — submitter's full name
- `email` (text, not null) — submitter's email address
- `organization` (text, nullable) — submitter's company or agency
- `service` (text, nullable) — selected service of interest
- `message` (text, not null) — the message body
- `sent` (boolean, default false) — whether the email was successfully forwarded
- `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_submissions`.
- This is a no-auth public form (single-tenant), so anon + authenticated can INSERT.
- No SELECT/UPDATE/DELETE for anon — only the service role (edge function) reads rows.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  organization text,
  service text,
  message text NOT NULL,
  sent boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions" ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);
