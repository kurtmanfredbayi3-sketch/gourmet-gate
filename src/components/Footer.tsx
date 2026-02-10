import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h3 className="font-display text-2xl font-bold mb-4">LES BALMINS</h3>
        <p className="text-primary-foreground/70 text-sm leading-relaxed">
          Une cuisine raffinée, ancrée dans le terroir et sublimée par la passion de notre chef.
        </p>
      </div>

      <div>
        <h4 className="font-display text-lg font-semibold mb-4">Navigation</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          <li><Link to="/" className="hover:text-accent transition-colors">Accueil</Link></li>
          <li><Link to="/carte" className="hover:text-accent transition-colors">La Carte</Link></li>
          <li><Link to="/galerie" className="hover:text-accent transition-colors">Galerie</Link></li>
          <li><Link to="/reservation" className="hover:text-accent transition-colors">Réservation</Link></li>
          <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display text-lg font-semibold mb-4">Horaires</h4>
        <div className="text-sm text-primary-foreground/70 space-y-1">
          <p>Mar – Sam : 12h00 – 14h00 / 19h00 – 22h00</p>
          <p>Dimanche : 12h00 – 14h30</p>
          <p>Lundi : Fermé</p>
        </div>
        <div className="mt-4 space-y-2 text-sm text-primary-foreground/70">
          <p className="flex items-center gap-2"><Phone size={14} /> 04 79 00 00 00</p>
          <p className="flex items-center gap-2"><Mail size={14} /> contact@lesbalmins.fr</p>
          <p className="flex items-center gap-2"><MapPin size={14} /> 12 Rue du Village, 73000 Savoie</p>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/20 py-4 text-center text-xs text-primary-foreground/50">
      © 2026 Les Balmins — Tous droits réservés
    </div>
  </footer>
);

export default Footer;
