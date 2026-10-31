import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BIENS } from "@/data/biens";
import { slug as makeSlug } from "@/data/helpers";

const fmt = (n) => n.toLocaleString("fr-FR");
const find = (s) => BIENS.find((b) => makeSlug(b) === s);

export function generateStaticParams() {
  return BIENS.map((b) => ({ slug: makeSlug(b) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const b = find(slug);
  return b ? { title: `${b.ti} à ${b.c} | Cabinet Immobilier Lejeune` } : {};
}

export default async function BienPage({ params }) {
  const { slug } = await params;
  const b = find(slug);
  if (!b) notFound();

  const imgSrc = b.img && (b.img.startsWith("/") || b.img.startsWith("http") ? b.img : `/images/biens/${b.img}`);

  return (
    <main className="wrap detail">
      <Link href="/#biens" className="back">← Retour aux annonces</Link>
      <div className="detail-grid">
        <div>
          <div className="detail-photo" style={{ background: `linear-gradient(135deg,hsl(${b.h} 38% 38%),hsl(${b.h + 30} 45% 55%))` }}>
            {imgSrc && (
              <Image src={imgSrc} alt={`${b.ti} à ${b.c}`} fill priority sizes="(max-width: 900px) 100vw, 60vw" style={{ objectFit: "cover" }} />
            )}
            <span className="tag">{b.ty}</span>
          </div>
          <h1>{b.ti}</h1>
          <p className="loc">{b.c} · {b.t === "rent" ? "Location" : "Vente"}</p>
          <div className="facts">
            <span>{b.r} pièces</span>
            <span>{b.s} m²</span>
            <span>{b.ty}</span>
          </div>
          <p>{b.desc || `${b.ty} de ${b.s} m² situé à ${b.c}, comprenant ${b.r} pièces. Contactez l’agence pour obtenir plus de détails et organiser une visite.`}</p>
        </div>

        <aside className="detail-box">
          <div className="price">{fmt(b.p)} €<small>{b.t === "rent" ? " CC / mois" : ""}</small></div>
          <a className="btn" href="tel:+33344276344">Appeler l’agence</a>
          <a className="btn btn-outline" href={`mailto:contact@lejeuneimmobilier.fr?subject=${encodeURIComponent(`${b.ti} à ${b.c}`)}`}>Envoyer un e-mail</a>
        </aside>
      </div>
    </main>
  );
}