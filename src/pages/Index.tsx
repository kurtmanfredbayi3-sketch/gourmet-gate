import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-restaurant.jpg";
import plat1 from "@/assets/plat-1.jpg";
import plat2 from "@/assets/plat-2.jpg";
import plat3 from "@/assets/plat-3.jpg";

const dishes = [
  { img: plat1, name: "Foie Gras Mi-Cuit", desc: "Chutney de figues, pain brioché toasté" },
  { img: plat2, name: "Magret de Canard", desc: "Légumes de saison, jus corsé au miel" },
  { img: plat3, name: "Soufflé au Chocolat", desc: "Cœur coulant, feuille d'or" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Restaurant Les Balmins" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="relative z-10 text-center text-primary-foreground px-4">
        <p className="text-sm uppercase tracking-[0.4em] mb-4 opacity-80">Restaurant Gastronomique</p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-wide">LES BALMINS</h1>
        <p className="font-body text-lg md:text-xl max-w-xl mx-auto mb-8 opacity-90">
          L'art culinaire au cœur de la Savoie, une invitation au voyage des sens.
        </p>
        <Link
          to="/reservation"
          className="inline-block bg-accent text-accent-foreground px-8 py-3 text-sm uppercase tracking-widest font-semibold hover:bg-accent/80 transition-colors rounded-sm"
        >
          Réserver une table
        </Link>
      </div>
    </section>

    {/* Philosophie */}
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">Notre Philosophie</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 text-foreground">
          Une cuisine sincère, enracinée dans le terroir
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Chez Les Balmins, chaque assiette raconte une histoire. Nos produits sont sélectionnés avec soin auprès de
          producteurs locaux, et sublimés par le savoir-faire de notre chef. Simplicité, authenticité et raffinement
          guident chacune de nos créations.
        </p>
      </div>
    </section>

    {/* Plats signatures */}
    <section className="pb-24 px-4">
      <div className="container mx-auto">
        <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4 text-center">Nos Signatures</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12 text-foreground text-center">
          Plats d'exception
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((d) => (
            <div key={d.name} className="group">
              <div className="overflow-hidden rounded-sm mb-4">
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{d.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{d.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/carte"
            className="inline-block border border-foreground text-foreground px-8 py-3 text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors rounded-sm"
          >
            Découvrir la carte
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
