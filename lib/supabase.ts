// Supabase project values. The anon key is intentionally public — RLS on every
// user-scoped table is what actually protects the data. Same key ships in the
// mobile app's .env. Rotating either of these requires updating both.
export const SUPABASE_URL  = "https://ntpvuwxewoeoxydnsqyz.supabase.co";
export const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50cHZ1d3hld29lb3h5ZG5zcXl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyMzUzOTIsImV4cCI6MjA5MjgxMTM5Mn0.sW4mjyqcnAFZHFrN-knM7yM0_rfxOgLhnH8gSKjlSGk";

/** Calls Supabase's GoTrue PUT /auth/v1/user to update the current user's password. */
export async function updatePassword(accessToken: string, password: string) {
  const res = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON,
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ password }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = body?.msg || body?.error_description || body?.error || `HTTP ${res.status}`;
    throw new Error(String(msg));
  }
  return body;
}
