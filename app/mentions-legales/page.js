import Link from "next/link";

export const metadata = {
  title: "Mentions légales | Cabinet Immobilier Lejeune (maquette)",
};

export default function MentionsLegales() {
  return (
    <main className="wrap detail article">
      <Link href="/" className="back">← Retour à l’accueil</Link>
      <h1>Mentions légales</h1>

      <p>
        <strong>Ce site est une maquette de redesign réalisée à titre d’exercice personnel.</strong>{" "}
        Il n’est pas le site officiel du Cabinet Immobilier Lejeune et n’a pas été commandé par l’agence.
        Les annonces, les prix et les actualités sont fictifs.
      </p>

      <h2>Réalisation</h2>
      <p>Conception et développement : Jelena, développeuse full-stack.</p>

      <h2>Hébergeur</h2>
      <p>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>

      <h2>Site officiel de l’agence</h2>
      <p>
        Pour consulter les annonces réelles et contacter l’agence, rendez-vous sur{" "}
        <a href="https://www.lejeuneimmobilier.fr" target="_blank" rel="noopener noreferrer">lejeuneimmobilier.fr</a>.
      </p>

      <h2>Données personnelles</h2>
      <p>Les formulaires de cette maquette ne transmettent ni n’enregistrent aucune donnée. Le site n’utilise aucun cookie de suivi.</p>
    </main>
  );
}