import Layout from "@/components/Layout";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import { ExternalLink } from "lucide-react";

const projects = [
  { img: gallery1, title: "Site Vitrine — Restaurant Le Baobab", category: "Site Vitrine", desc: "Design moderne et responsive pour un restaurant haut de gamme à Yaoundé." },
  { img: gallery2, title: "Branding — Salon Beauté Prestige", category: "Branding", desc: "Identité visuelle complète : logo, charte graphique et supports de communication." },
  { img: gallery3, title: "Site Business — Tchoupo Import-Export", category: "Site Business", desc: "Plateforme professionnelle avec catalogue de produits et formulaire de devis." },
  { img: gallery4, title: "SEO Local — Cabinet Essomba Consulting", category: "SEO", desc: "Optimisation Google My Business et référencement local pour plus de visibilité." },
  { img: gallery5, title: "Site E-commerce — Afro Fashion Store", category: "E-commerce", desc: "Boutique en ligne complète avec paiement mobile money intégré." },
  { img: gallery6, title: "Landing Page — Event Cameroun", category: "Site Vitrine", desc: "Page d'atterrissage optimisée pour la conversion d'un événement professionnel." },
];

const Portfolio = () => (
  <Layout>
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 text-center">Portfolio</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Nos réalisations
        </h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          Découvrez quelques-uns de nos projets récents. Chaque création est pensée pour répondre aux objectifs de nos clients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-accent/30 transition-all duration-300">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                  <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={28} />
                </div>
              </div>
              <div className="p-6">
                <span className="text-accent text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                <h3 className="font-display text-lg font-bold text-foreground mt-2 mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Portfolio;
