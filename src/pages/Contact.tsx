import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => (
  <Layout>
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4 text-center">Nous trouver</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Contact</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-accent mt-1 shrink-0" size={20} />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Adresse</h3>
                <p className="text-muted-foreground text-sm">12 Rue du Village, 73000 Savoie, France</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-accent mt-1 shrink-0" size={20} />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Téléphone</h3>
                <p className="text-muted-foreground text-sm">04 79 00 00 00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-accent mt-1 shrink-0" size={20} />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Email</h3>
                <p className="text-muted-foreground text-sm">contact@lesbalmins.fr</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-accent mt-1 shrink-0" size={20} />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Horaires</h3>
                <div className="text-muted-foreground text-sm space-y-1">
                  <p>Mar – Sam : 12h00 – 14h00 / 19h00 – 22h00</p>
                  <p>Dimanche : 12h00 – 14h30</p>
                  <p>Lundi : Fermé</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-sm overflow-hidden h-80 md:h-auto">
            <iframe
              title="Localisation Les Balmins"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89216.07068498482!2d5.8773!3d45.5646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ba8149f1c4b53%3A0x408ab2ae4baa580!2sChamb%C3%A9ry!5e0!3m2!1sfr!2sfr!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
