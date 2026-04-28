"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BrandMark } from "@/components/BrandMark";

type State =
  | { kind: "checking" }
  | { kind: "ok" }
  | { kind: "error"; message: string };

export function ConfirmedClient({ appStoreUrl }: { appStoreUrl: string }) {
  const [state, setState] = useState<State>({ kind: "checking" });

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const params = new URLSearchParams(hash);
    const error = params.get("error_description") || params.get("error");
    const type  = params.get("type");
    const accessToken = params.get("access_token");

    if (error) {
      setState({ kind: "error", message: error.replace(/\+/g, " ") });
      return;
    }

    // Supabase redirects with #access_token=... after a successful verify.
    // We don't need to do anything with it here, just confirm to the user.
    if (accessToken && (type === "signup" || type === "magiclink" || type === "invite" || !type)) {
      setState({ kind: "ok" });
      // Clean the hash so a refresh doesn't keep showing the access token in the address bar.
      try { history.replaceState(null, "", window.location.pathname); } catch { /* ignore */ }
      return;
    }

    // Direct visit (no hash) — still show success styling, gentler message.
    setState({ kind: "ok" });
  }, []);

  if (state.kind === "checking") {
    return (
      <div className="grid place-items-center min-h-[40vh]">
        <BrandMark size={48} />
      </div>
    );
  }

  if (state.kind === "error") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="card-lift p-10"
      >
        <BrandMark size={56} className="mx-auto" />
        <h1 className="display-2 mt-7">Hmm, that link didn't work.</h1>
        <p className="lede mt-4">{state.message}</p>
        <p className="body text-muted mt-4">
          Try signing in to NutriMate. If you still see a verification screen there, tap <b>Resend email</b> to get a fresh link.
        </p>
        <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-pink mt-7 inline-flex">
          Open NutriMate
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="card-lift p-10 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "radial-gradient(60% 60% at 50% 0%, #FFE4ED 0%, rgba(255,228,237,0) 70%)" }} />
      <motion.div
        initial={{ scale: 0.7, rotate: -8 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.15, duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
        className="mx-auto"
      >
        <BrandMark size={72} className="mx-auto animate-ringPulse" />
      </motion.div>
      <h1 className="display-2 mt-7">You're in.</h1>
      <p className="lede mt-4">Email confirmed. Head back to NutriMate to finish setup. The app picks it up automatically.</p>

      <div className="mt-9 flex items-center justify-center gap-3 flex-wrap">
        <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-pink h-12 px-5">Open NutriMate</a>
        <a href="/" className="btn-ghost h-12 px-5">Back home</a>
      </div>

      <p className="meta mt-6">If the app doesn't refresh on its own, tap <b>Resend email</b> there. The verify screen polls every few seconds.</p>
    </motion.div>
  );
}
