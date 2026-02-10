import Layout from "@/components/Layout";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import plat1 from "@/assets/plat-1.jpg";
import plat2 from "@/assets/plat-2.jpg";
import plat3 from "@/assets/plat-3.jpg";

const images = [
  { src: g4, alt: "Terrasse du restaurant" },
  { src: plat1, alt: "Foie gras mi-cuit" },
  { src: g2, alt: "Cave à vins" },
  { src: g3, alt: "Tartare raffiné" },
  { src: g1, alt: "En cuisine" },
  { src: plat2, alt: "Magret de canard" },
  { src: g5, alt: "Plateau de fromages" },
  { src: plat3, alt: "Soufflé au chocolat" },
  { src: g6, alt: "Table dressée" },
];

const Gallery = () => (
  <Layout>
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4 text-center">Notre univers</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Galerie</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img) => (
            <div key={img.alt} className="overflow-hidden rounded-sm group cursor-pointer">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Gallery;
