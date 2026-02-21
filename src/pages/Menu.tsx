import Layout from "@/components/Layout";

const menuData = {
  "Entrées": [
    { name: "Foie Gras Mi-Cuit", desc: "Chutney de figues, pain brioché toasté", price: "7000 FCFA" },
    { name: "Velouté de Châtaignes", desc: "Crème de truffe noire, éclats de noisettes torréfiées", price: "18€" },
    { name: "Tartare de Féra du Lac", desc: "Agrumes, aneth, huile d'olive citronnée", price: "22€" },
    { name: "Œuf Parfait 64°", desc: "Mouillettes de beaufort, crème de cèpes", price: "16€" },
  ],
  "Plats": [
    { name: "Magret de Canard Rôti", desc: "Légumes de saison glacés, jus corsé au miel de montagne", price: "34€" },
    { name: "Filet de Bœuf Charolais", desc: "Gratin dauphinois, sauce au poivre de Sichuan", price: "38€" },
    { name: "Omble Chevalier", desc: "Risotto crémeux aux herbes, beurre blanc au vin de Savoie", price: "32€" },
    { name: "Carré d'Agneau en Croûte", desc: "Tapenade d'olives, ratatouille provençale", price: "36€" },
  ],
  "Desserts": [
    { name: "Soufflé au Chocolat Noir", desc: "Cœur coulant, feuille d'or", price: "14€" },
    { name: "Tarte Fine aux Pommes", desc: "Caramel au beurre salé, glace vanille de Madagascar", price: "12€" },
    { name: "Assiette de Fromages Affinés", desc: "Sélection de nos terroirs, confiture de cerises noires", price: "16€" },
    { name: "Panna Cotta au Génépi", desc: "Coulis de myrtilles sauvages", price: "13€" },
  ],
  "Vins": [
    { name: "Apremont — Cru de Savoie", desc: "Blanc sec, notes florales et minérales", price: "8€ / verre" },
    { name: "Mondeuse — Arbin", desc: "Rouge charpenté, fruits noirs et épices", price: "9€ / verre" },
    { name: "Champagne Brut — Maison Billecart", desc: "Finesse et élégance, bulles délicates", price: "16€ / verre" },
    { name: "Châteauneuf-du-Pape", desc: "Rouge puissant, notes de garrigue et cerise", price: "14€ / verre" },
  ],
};

const Menu = () => (
  <Layout>
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4 text-center">Notre carte</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">La Carte</h1>

        {Object.entries(menuData).map(([section, items]) => (
          <div key={section} className="mb-16">
            <h2 className="font-display text-2xl font-semibold text-accent mb-8 text-center uppercase tracking-widest">
              {section}
            </h2>
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.name} className="flex justify-between items-start border-b border-border pb-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{item.name}</h3>
                    <p className="text-muted-foreground text-sm mt-1 italic">{item.desc}</p>
                  </div>
                  <span className="font-display text-lg font-semibold text-accent ml-4 whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Menu;
