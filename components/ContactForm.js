"use client";
import { useState } from "react";

export function ContactForm() {
  const [ok, setOk] = useState(false);
  const submit = (e) => { e.preventDefault(); e.target.reset(); setOk(true); }; // à brancher sur une route API
  return (
    <form onSubmit={submit}>
      <div className="row2">
        <div><label htmlFor="n">Nom *</label><input id="n" required autoComplete="name" /></div>
        <div><label htmlFor="t">Téléphone</label><input id="t" type="tel" autoComplete="tel" /></div>
      </div>
      <div><label htmlFor="e">Email *</label><input id="e" type="email" required autoComplete="email" /></div>
      <div><label htmlFor="m">Message *</label><textarea id="m" rows={4} required /></div>
      <label className="chk"><input type="checkbox" required /> J’ai lu et j’accepte les conditions générales d’utilisation</label>
      <button className="btn" type="submit">Envoyer</button>
      {ok && <div className="ok" style={{ display: "block" }} role="status">Merci, votre message est bien parti (démo).</div>}
    </form>
  );
}

export function Newsletter() {
  const [ok, setOk] = useState(false);
  return (
    <>
      <form className="nl" onSubmit={(e) => { e.preventDefault(); e.target.reset(); setOk(true); }}>
        <input type="email" required placeholder="Votre adresse e-mail" aria-label="Adresse e-mail" />
        <button className="btn" type="submit">S’inscrire</button>
      </form>
      {ok && <div className="ok" style={{ display: "block", marginTop: 12 }} role="status">Inscription enregistrée (démo).</div>}
    </>
  );
}
