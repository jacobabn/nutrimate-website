"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BrandMark } from "@/components/BrandMark";
import { updatePassword } from "@/lib/supabase";
import { APP_STORE_URL } from "@/lib/links";

type State =
  | { kind: "init" }
  | { kind: "no_token" }
  | { kind: "ready" }
  | { kind: "saving" }
  | { kind: "done" }
  | { kind: "error"; message: string };

export function ResetClient() {
  const [state, setState] = useState<State>({ kind: "init" });
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [pw1, setPw1] = useState("");
  const [pw2, setPw2] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.slice(1));
    const token = params.get("access_token");
    const error = params.get("error_description") || params.get("error");
    if (error)  { setState({ kind: "error", message: error.replace(/\+/g, " ") }); return; }
    if (!token) { setState({ kind: "no_token" }); return; }
    setAccessToken(token);
    setState({ kind: "ready" });
    // Hide the token from the visible URL bar.
    try { history.replaceState(null, "", window.location.pathname); } catch { /* ignore */ }
  }, []);

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!accessToken) return;
    if (pw1.length < 6)   { setState({ kind: "error", message: "Use at least six characters." }); return; }
    if (pw1 !== pw2)      { setState({ kind: "error", message: "The passwords don't match." }); return; }
    setState({ kind: "saving" });
    try {
      await updatePassword(accessToken, pw1);
      setState({ kind: "done" });
    } catch (e: any) {
      setState({ kind: "error", message: e?.message ?? "Could not update password." });
    }
  }

  if (state.kind === "init") {
    return (
      <div className="grid place-items-center min-h-[40vh]">
        <BrandMark size={48} />
      </div>
    );
  }

  if (state.kind === "no_token") {
    return (
      <Wrap>
        <BrandMark size={56} className="mx-auto" />
        <h1 className="display-2 mt-7">Open this from the email.</h1>
        <p className="lede mt-4">
          Password resets only work via the link we emailed you. Head to NutriMate, tap <b>Forgot Password</b>, and try again.
        </p>
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-pink mt-7 inline-flex">Open NutriMate</a>
      </Wrap>
    );
  }

  if (state.kind === "done") {
    return (
      <Wrap>
        <BrandMark size={64} className="mx-auto animate-ringPulse" />
        <h1 className="display-2 mt-7">Password updated.</h1>
        <p className="lede mt-4">You can sign in to NutriMate now with your new password.</p>
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-pink mt-7 inline-flex">Open NutriMate</a>
      </Wrap>
    );
  }

  return (
    <Wrap>
      <BrandMark size={48} className="mx-auto" />
      <h1 className="display-2 mt-6">Set a new password.</h1>
      <p className="lede mt-3">Pick something at least six characters long. Save, then sign in to the app.</p>

      <form onSubmit={onSubmit} className="grid gap-4 mt-7 text-left">
        <Field label="New password"     value={pw1} onChange={setPw1} />
        <Field label="Confirm password" value={pw2} onChange={setPw2} />

        {state.kind === "error" && (
          <p className="text-[14px] text-danger font-semibold">{state.message}</p>
        )}

        <button
          type="submit"
          disabled={state.kind === "saving"}
          className="btn-pink h-12 mt-2 disabled:opacity-60"
        >
          {state.kind === "saving" ? "Saving..." : "Save new password"}
        </button>
      </form>

      <p className="meta mt-6">After saving, return to NutriMate and sign in with your new password.</p>
    </Wrap>
  );
}

function Wrap({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="card-lift p-10 text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-50" style={{ background: "radial-gradient(60% 60% at 50% 0%, #FFE4ED 0%, rgba(255,228,237,0) 70%)" }} />
      {children}
    </motion.div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="grid gap-1.5">
      <span className="meta">{label}</span>
      <input
        type="password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="new-password"
        className="h-12 px-4 rounded-2xl border border-line bg-white text-[16px] focus:outline-none focus:ring-2 focus:ring-primary-tint focus:border-primary-dark transition-colors"
      />
    </label>
  );
}
