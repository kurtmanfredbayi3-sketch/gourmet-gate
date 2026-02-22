import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h3 className="font-display text-2xl font-bold mb-4">
          <span className="text-accent">[</span>NOTORIOUS<span className="text-accent">]</span>
        </h3>
        <p className="text-primary-foreground/70 text-sm leading-relaxed">
          Agence digitale à Yaoundé. Nous créons des sites web performants et des stratégies digitales sur mesure pour les entreprises locales.
        </p>
      </div>

      <div>
        <h4 className="font-display text-lg font-semibold mb-4">Navigation</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          <li><Link to="/" className="hover:text-accent transition-colors">Accueil</Link></li>
          <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
          <li><Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
          <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
        <div className="space-y-2 text-sm text-primary-foreground/70">
          <p className="flex items-center gap-2"><Phone size={14} /> +237 687 185 835</p>
          <p className="flex items-center gap-2"><Mail size={14} /> contact@notorious.agency</p>
          <p className="flex items-center gap-2"><MapPin size={14} /> Yaoundé, Cameroun</p>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/20 py-4 text-center text-xs text-primary-foreground/50">
      © 2026 NOTORIOUS AGENCY — Tous droits réservés
    </div>
  </footer>
);

export default Footer;
