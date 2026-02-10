import { useState } from "react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Nom requis").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().min(8, "Téléphone requis").max(20),
  date: z.string().min(1, "Date requise"),
  time: z.string().min(1, "Heure requise"),
  guests: z.string().min(1, "Nombre de convives requis"),
  message: z.string().max(500).optional(),
});

const Reservation = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", guests: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast.success("Demande de réservation envoyée ! Nous vous confirmerons par email.");
    setForm({ name: "", email: "", phone: "", date: "", time: "", guests: "", message: "" });
  };

  const update = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  return (
    <Layout>
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-xl">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4 text-center">Votre table vous attend</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Réservation</h1>
          <p className="text-muted-foreground text-center mb-12 text-sm">
            Remplissez le formulaire ci-dessous et nous vous confirmerons votre réservation dans les plus brefs délais.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nom complet</Label>
                <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
                {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" value={form.date} onChange={(e) => update("date", e.target.value)} />
                {errors.date && <p className="text-destructive text-xs mt-1">{errors.date}</p>}
              </div>
              <div>
                <Label htmlFor="time">Heure</Label>
                <Input id="time" type="time" value={form.time} onChange={(e) => update("time", e.target.value)} />
                {errors.time && <p className="text-destructive text-xs mt-1">{errors.time}</p>}
              </div>
              <div>
                <Label htmlFor="guests">Convives</Label>
                <Input id="guests" type="number" min="1" max="20" value={form.guests} onChange={(e) => update("guests", e.target.value)} />
                {errors.guests && <p className="text-destructive text-xs mt-1">{errors.guests}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="message">Message (optionnel)</Label>
              <Textarea id="message" value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Allergies, occasion spéciale..." />
            </div>

            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/80 uppercase tracking-widest text-sm py-6">
              Envoyer la demande
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Reservation;
