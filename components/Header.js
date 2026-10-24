"use client";
import { useState } from "react";

const setMode = (m) => window.dispatchEvent(new CustomEvent("mode", { detail: m }));

export function ModeLink({ mode, href, children }) {
  return <a href={href} onClick={() => setMode(mode)}>{children}</a>;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="nav">
      <div className="wrap">
        <a className="logo" href="#top"><b>C<i>|</i>L</b><small>Cabinet Immobilier Lejeune</small></a>
        <nav aria-label="Navigation principale">
          <button className="burger" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>Menu</button>
          <ul id="menu" className={open ? "open" : ""} onClick={close}>
            <li><a className="on" href="#top">Accueil</a></li>
            <li><ModeLink mode="rent" href="#biens">Location</ModeLink></li>
            <li><ModeLink mode="sell" href="#biens">Vente</ModeLink></li>
            <li><a href="#services">Gestion</a></li>
            <li><a href="#actus">Actualités</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
