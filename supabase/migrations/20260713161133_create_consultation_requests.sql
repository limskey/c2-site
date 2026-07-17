/*
# Create consultation_requests table

1. New Tables
- `consultation_requests`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name
  - `email` (text, not null) — contact email
  - `phone` (text, nullable) — phone number
  - `organization` (text, nullable) — company or agency
  - `service` (text, nullable) — service of interest
  - `timeline` (text, nullable) — urgency/timeline selection
  - `message` (text, nullable) — additional notes
  - `created_at` (timestamp)

2. Security
- Enable RLS on `consultation_requests`.
- Anon + authenticated users can INSERT only when `name` and `email` are
  non-empty and `email` contains an `@` sign — prevents blank/junk submissions.
- No SELECT policy — submissions are write-only for visitors.
*/

CREATE TABLE IF NOT EXISTS consultation_requests (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name         text NOT NULL,
  email        text NOT NULL,
  phone        text,
  organization text,
  service      text,
  timeline     text,
  message      text,
  created_at   timestamptz DEFAULT now()
);

ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_consultation" ON consultation_requests;
CREATE POLICY "anon_insert_consultation" ON consultation_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    name  IS NOT NULL AND length(trim(name))  > 0 AND
    email IS NOT NULL AND length(trim(email)) > 0 AND
    email LIKE '%@%'
  );
