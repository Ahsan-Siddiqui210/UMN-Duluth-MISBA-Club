import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Instagram, Linkedin, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MISBA at UMD" },
      { name: "description", content: "Get in touch with the UMD MIS & Business Analytics Club. Questions, partnerships, or general inquiries." },
      { property: "og:title", content: "Contact — MISBA at UMD" },
      { property: "og:description", content: "Reach out to MISBA for questions, partnership, or membership help." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="gradient-hero py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-black tracking-tight text-primary-foreground sm:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/75">Questions? Ideas? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-xl border border-border bg-card p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Send className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-foreground">Message Sent!</h3>
                <p className="mt-2 text-sm text-muted-foreground">We'll get back to you at duluthmisba@gmail.com.</p>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/xpwdvqvq"
                method="POST"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  fetch(form.action, {
                    method: "POST",
                    body: new FormData(form),
                    headers: { Accept: "application/json" },
                  }).then(() => setSubmitted(true)).catch(() => setSubmitted(true));
                }}
                className="space-y-5"
              >
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Your name" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@example.com" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" required placeholder="What's this about?" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" required rows={5} placeholder="Your message..." className="mt-1.5" />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Send className="h-4 w-4" /> Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Get in Touch</h2>
              <p className="mt-2 text-muted-foreground">We typically respond within 1–2 business days.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a href="mailto:duluthmisba@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">duluthmisba@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Instagram</h3>
                  <a href="https://www.instagram.com/misbac_umd" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">@misbac_umd</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/mis-ba-duluth/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Connect with us</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-sm text-muted-foreground">University of Minnesota Duluth<br />Labovitz School of Business and Economics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
