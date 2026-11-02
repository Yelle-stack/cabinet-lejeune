import Link from "next/link";
import { notFound } from "next/navigation";
import { ACTUS } from "@/data/actus";

const find = (s) => ACTUS.find((a) => a.slug === s);

export function generateStaticParams() {
  return ACTUS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = find(slug);
  return a ? { title: `${a.titre} | Cabinet Immobilier Lejeune`, description: a.resume } : {};
}

export default async function ActuPage({ params }) {
  const { slug } = await params;
  const a = find(slug);
  if (!a) notFound();

  return (
    <main className="wrap detail article">
      <Link href="/#actus" className="back">← Retour aux actualités</Link>
      <time>{a.date}</time>
      <h1>{a.titre}</h1>
      {a.paragraphes.map((p, i) => <p key={i}>{p}</p>)}
      <Link href="/#contact" className="btn">Nous contacter</Link>
    </main>
  );
}