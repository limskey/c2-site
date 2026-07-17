/*
# Fix consultation_requests INSERT policy

1. Modified Tables
- `consultation_requests` — no structural changes

2. Security
- Replace the always-true INSERT policy with one that enforces minimum data
  integrity: `name` and `email` must be non-empty strings.
- This prevents blank/junk submissions while still allowing any anonymous
  visitor to submit a valid consultation request.
- No SELECT/UPDATE/DELETE policies are added — submissions remain write-only
  for visitors (staff access goes through the Supabase dashboard with
  service-role credentials).
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
