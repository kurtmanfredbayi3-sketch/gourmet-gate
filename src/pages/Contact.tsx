import { useState } from "react";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Erreur", description: "Veuillez remplir tous les champs obligatoires.", variant: "destructive" });
      return;
    }
    toast({ title: "Message envoyé ✅", description: "Nous vous répondrons dans les plus brefs délais." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 text-center">Contact</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Parlons de votre projet
          </h1>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
            Remplissez le formulaire ou contactez-nous directement. Nous vous répondons sous 24h.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name">Nom complet *</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jean Dupont" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jean@exemple.com" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+237 6XX XXX XXX" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="message">Votre message *</Label>
                <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Décrivez votre projet..." rows={5} className="mt-1.5" />
              </div>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Envoyer le message
              </Button>
            </form>

            {/* Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Localisation</h3>
                  <p className="text-muted-foreground text-sm">Yaoundé, Cameroun</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Téléphone</h3>
                  <p className="text-muted-foreground text-sm">+237 6XX XXX XXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground text-sm">contact@notorious.agency</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <MessageCircle className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">WhatsApp Business</h3>
                  <a href="https://wa.me/237600000000" target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline">
                    Écrire sur WhatsApp →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Instagram className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Instagram</h3>
                  <a href="https://instagram.com/notorious.agency" target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline">
                    @notorious.agency →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
