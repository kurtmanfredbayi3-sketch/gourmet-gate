import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Essentiel",
    price: "150 000",
    desc: "Idéal pour les entrepreneurs qui démarrent leur présence en ligne.",
    features: [
      "Site vitrine 1–2 pages",
      "Design responsive mobile",
      "Formulaire de contact",
      "Optimisation SEO de base",
      "Hébergement 1 an inclus",
      "Livraison en 7 jours",
    ],
    highlighted: false,
  },
  {
    name: "Business",
    price: "350 000",
    desc: "Pour les entreprises qui veulent se démarquer et convertir plus de clients.",
    features: [
      "Site jusqu'à 7 pages",
      "Design premium personnalisé",
      "Intégration WhatsApp & réseaux sociaux",
      "SEO local avancé (Google My Business)",
      "Blog intégré",
      "Hébergement 1 an + domaine offert",
      "Livraison en 10 jours",
      "Support prioritaire 3 mois",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "700 000",
    desc: "Solution complète pour les entreprises ambitieuses qui visent l'excellence.",
    features: [
      "Site sur mesure illimité",
      "Branding complet (logo + charte)",
      "E-commerce ou fonctionnalités avancées",
      "Stratégie SEO complète",
      "Rédaction de contenu professionnel",
      "Formation à la gestion du site",
      "Hébergement 2 ans + domaine",
      "Maintenance & support 6 mois",
    ],
    highlighted: false,
  },
];

const Services = () => (
  <Layout>
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 text-center">Nos Offres</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Des solutions pour chaque ambition
        </h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          Choisissez l'offre qui correspond à vos besoins. Tous nos packs incluent un design professionnel et un accompagnement personnalisé.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground border-2 border-accent shadow-2xl scale-[1.02]"
                  : "bg-card border border-border"
              }`}
            >
              {plan.highlighted && (
                <span className="bg-accent text-accent-foreground text-xs font-bold uppercase px-3 py-1 rounded-full self-start mb-4">
                  Populaire
                </span>
              )}
              <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.desc}
              </p>
              <div className="mb-6">
                <span className="font-display text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ml-1 ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  FCFA
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={16} className={`mt-0.5 shrink-0 ${plan.highlighted ? "text-accent" : "text-accent"}`} />
                    <span className={plan.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "border border-foreground text-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                Choisir cette offre <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
