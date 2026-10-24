"use client";
import { useEffect, useMemo, useState } from "react";
import { BIENS } from "@/data/biens";

const fmt = (n) => n.toLocaleString("fr-FR");
const STEPS = { rent: [600, 800, 1000, 1500, 2000, 2500], sell: [200000, 300000, 400000, 500000] };
const TYPES = {
  sell: [
    "T2", "T3", "Duplex / Triplex", "Maison individuelle", "Maison", "Pavillon",
    "Maison de ville", "Maison traditionnelle", "Maison en pierres",
    "Terrain à bâtir", "Parking couvert",
  ],
  rent: [
    "Appartement rénové", "T2", "T3", "Duplex / Triplex",
    "Maison de ville", "Maison en pierres", "Parking externe",
  ],
};
const init = { ty: "", ci: "", bu: 0, ro: 0 };

export default function Search() {
  const [t, setT] = useState("rent");
  const [f, setF] = useState(init);

  useEffect(() => {
    const h = (e) => { setT(e.detail); setF(init); };
    window.addEventListener("mode", h);
    return () => window.removeEventListener("mode", h);
  }, []);

  const pool = useMemo(() => BIENS.filter((b) => b.t === t), [t]);
  const types = TYPES[t];
  const cities = [...new Set(pool.map((b) => b.c))].sort();
  const res = pool.filter((b) => (!f.ty || b.ty === f.ty) && (!f.ci || b.c === f.ci) && (!f.bu || b.p <= f.bu) && b.r >= f.ro);
  const set = (k) => (e) => setF({ ...f, [k]: k === "bu" || k === "ro" ? +e.target.value : e.target.value });
  const switchTo = (m) => { setT(m); setF(init); };

  return (
    <>
      <div className="wrap">
        <form className="search" aria-label="Recherche de biens" onSubmit={(e) => e.preventDefault()}>
          <div className="seg" role="group" aria-label="Type de transaction">
            {[["rent", "Location"], ["sell", "Vente"]].map(([m, l]) => (
              <button key={m} type="button" className={t === m ? "on" : ""} onClick={() => switchTo(m)}>{l}</button>
            ))}
          </div>
          <div className="fields">
            <div><label htmlFor="fType">Type de bien</label>
              <select id="fType" value={f.ty} onChange={set("ty")}><option value="">Tous les types</option>{types.map((x) => <option key={x}>{x}</option>)}</select></div>
            <div><label htmlFor="fCity">Ville</label>
              <select id="fCity" value={f.ci} onChange={set("ci")}><option value="">Toutes les villes</option>{cities.map((x) => <option key={x}>{x}</option>)}</select></div>
            <div><label htmlFor="fBud">Budget maximum</label>
              <select id="fBud" value={f.bu} onChange={set("bu")}><option value={0}>Sans limite</option>{STEPS[t].map((v) => <option key={v} value={v}>{fmt(v)} €</option>)}</select></div>
            <div><label htmlFor="fRoom">Pièces (min.)</label>
              <select id="fRoom" value={f.ro} onChange={set("ro")}><option value={0}>Indifférent</option>{[2, 3, 4].map((v) => <option key={v} value={v}>{v}</option>)}</select></div>
            <a className="btn" href="#biens">Rechercher</a>
          </div>
        </form>
      </div>
      <section id="biens">
        <div className="wrap">
          <div className="eyebrow">Nos annonces</div>
          <h2 className="sec-h">Biens à découvrir</h2>
          <p className="lead">{res.length} bien{res.length > 1 ? "s" : ""} disponible{res.length > 1 ? "s" : ""} {t === "rent" ? "à la location" : "à la vente"}</p>
          <div className="grid" aria-live="polite">
            {res.length ? res.map((b) => (
              <article className="card" key={b.ti}>
                <div className="ph" style={{ background: `linear-gradient(135deg,hsl(${b.h} 38% 38%),hsl(${b.h + 30} 45% 55%))` }}>
                  <span className="tag">{b.ty}</span>
                  <svg viewBox="0 0 64 64" fill="none" stroke="#fff" strokeWidth="3" strokeLinejoin="round" aria-hidden="true"><path d="M8 30 32 10l24 20M14 26v28h36V26M26 54V38h12v16" /></svg>
                </div>
                <div className="cb">
                  <h3>{b.ti}</h3>
                  <div className="loc">{b.c}</div>
                  <div className="meta"><span>{b.r} pièces</span><span>{b.s} m²</span></div>
                  <div className="price">{fmt(b.p)} €<small>{t === "rent" ? " CC / mois" : ""}</small></div>
                </div>
              </article>
            )) : <p className="empty">Aucun bien ne correspond à ces critères. Essayez d’élargir votre recherche.</p>}
          </div>
        </div>
      </section>
    </>
  );
}
