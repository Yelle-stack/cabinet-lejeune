import Link from "next/link";

export const metadata = {
  title: "Mentions légales | Cabinet Immobilier Lejeune",
};

export default function MentionsLegales() {
  return (
    <main className="wrap detail article">
      <Link href="/" className="back">← Retour à l’accueil</Link>
      <h1>Mentions légales</h1>

      <p><strong>Information :</strong> ce site est une maquette de redesign réalisée à titre d’exercice. Les annonces, les prix et les actualités sont fictifs.</p>

      <h2>Éditeur du site</h2>
      <p>
        Cabinet Immobilier Lejeune<br />
        14 rue Gaston Wateau, 60460 Précy-sur-Oise<br />
        Téléphone : 03 44 27 63 44<br />
        E-mail : contact@lejeuneimmobilier.fr
      </p>

      <h2>Directeur de la publication</h2>
      <p>[À compléter]</p>

      <h2>Hébergeur</h2>
      <p>
        Vercel Inc.<br />
        440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
        vercel.com
      </p>

      <h2>Données personnelles</h2>
      <p>Les formulaires de ce site sont des démonstrations : aucune donnée n’est enregistrée ni transmise. Le site n’utilise pas de cookies de suivi.</p>
    </main>
  );
}