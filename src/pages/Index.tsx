import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-agency.jpg";
import founderImg from "@/assets/founder.jpg";
import { ArrowRight, Globe, Palette, Search, TrendingUp, CheckCircle2, Star, Users, Zap } from "lucide-react";

const services = [
  { icon: Globe, title: "Site Vitrine", desc: "Un site moderne qui présente votre activité et attire des clients locaux à Yaoundé." },
  { icon: TrendingUp, title: "Site Business", desc: "Plateforme complète avec fonctionnalités avancées pour développer votre chiffre d'affaires." },
  { icon: Palette, title: "Branding", desc: "Identité visuelle unique : logo, charte graphique et supports de communication." },
  { icon: Search, title: "SEO Local", desc: "Référencement optimisé pour que vos clients vous trouvent facilement sur Google." },
];

const reasons = [
  { icon: Zap, title: "Rapidité", desc: "Votre site livré en 7 à 14 jours." },
  { icon: Users, title: "Accompagnement", desc: "Un suivi personnalisé à chaque étape." },
  { icon: CheckCircle2, title: "Résultats", desc: "Des sites conçus pour convertir vos visiteurs en clients." },
];

const testimonials = [
  { name: "Alain Tchoupo", role: "Directeur, Tchoupo Import-Export", text: "NOTORIOUS a transformé notre présence en ligne. En 3 mois, nous avons doublé nos demandes de devis grâce à notre nouveau site." },
  { name: "Marie Ndongo", role: "Gérante, Salon Beauté Prestige", text: "Un travail professionnel, rapide et à l'écoute. Mon salon est maintenant visible sur Google et les réservations ne cessent d'augmenter." },
  { name: "Patrick Essomba", role: "CEO, Essomba Consulting", text: "L'équipe a su capter l'essence de notre marque. Le site reflète parfaitement notre expertise et notre sérieux." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="NOTORIOUS AGENCY — Agence digitale Yaoundé" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <div className="inline-block bg-accent/20 text-accent-foreground border border-accent/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          🚀 Agence digitale #1 à Yaoundé
        </div>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
          Développez votre <span className="text-accent">présence digitale</span>
        </h1>
        <p className="font-body text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/80">
          Nous créons des sites web performants et des stratégies digitales sur mesure pour les entreprises locales au Cameroun.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 text-sm font-semibold hover:bg-accent/90 transition-colors rounded-md"
          >
            Demander un devis <ArrowRight size={16} />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors rounded-md"
          >
            Nos services
          </Link>
        </div>
      </div>
    </section>

    {/* À propos */}
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 text-center">À propos</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">
          Votre partenaire digital à Yaoundé
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="shrink-0">
          <img src={founderImg} alt="M. BAYI PONDI KURT — Fondateur de NOTORIOUS AGENCY" className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover object-top border-4 border-accent/30 shadow-lg" />
            <p className="font-display font-bold text-foreground text-center mt-4">M. BAYI PONDI KURT</p>
            <p className="text-accent text-sm text-center">Fondateur</p>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            <strong className="text-foreground">NOTORIOUS AGENCY</strong> accompagne les entreprises camerounaises dans leur transformation digitale. De la conception de sites web au référencement local, nous mettons notre expertise au service de votre croissance. Notre mission : rendre le digital accessible, performant et rentable pour chaque entrepreneur.
          </p>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="pb-24 px-4">
      <div className="container mx-auto">
        <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 text-center">Nos Services</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">
          Des solutions adaptées à vos besoins
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <s.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:underline">
            Voir toutes nos offres <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* Pourquoi nous */}
    <section className="py-24 px-4 bg-secondary">
      <div className="container mx-auto">
        <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 text-center">Pourquoi nous choisir</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">
          Ce qui nous différencie
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {reasons.map((r) => (
            <div key={r.title} className="text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <r.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Témoignages */}
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 text-center">Témoignages</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">
          Ce que disent nos clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-lg p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA final */}
    <section className="py-24 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
          Prêt à booster votre business ?
        </h2>
        <p className="text-primary-foreground/70 mb-8 text-lg">
          Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis gratuit.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 text-sm font-semibold hover:bg-accent/90 transition-colors rounded-md"
        >
          Demander un devis gratuit <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
