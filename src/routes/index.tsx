import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Newspaper, Mic, Briefcase, Heart, ArrowRight, Instagram } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-pattern.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MISBA — UMD MIS & Business Analytics Club" },
      { name: "description", content: "Join the UMD Management Information Systems and Business Analytics Club. Guest speakers, career events, and a supportive tech community." },
      { property: "og:title", content: "MISBA — UMD MIS & Business Analytics Club" },
      { property: "og:description", content: "Boost your IT knowledge, career skills, and community at UMD." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "102", label: "Members", icon: Users },
  { value: "30", label: "Events Hosted", icon: Calendar },
  { value: "9", label: "Newsletters Sent", icon: Newspaper },
];

const features = [
  { icon: Mic, title: "Guest Speakers", desc: "Industry professionals share real-world insights into IT, analytics, and tech careers." },
  { icon: Briefcase, title: "Career Development", desc: "Resume workshops, mock interviews, and networking events to launch your career." },
  { icon: Heart, title: "Community Bonding", desc: "Build lasting connections through social events and collaborative projects." },
];

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 gradient-hero opacity-85" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold mb-6">
            <Instagram className="h-3.5 w-3.5" />
            <a href="https://www.instagram.com/misbac_umd" target="_blank" rel="noopener noreferrer" className="hover:underline">@misbac_umd</a>
          </div>
          <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
            <span className="text-primary-foreground">Your Future in</span>
            <br />
            <span className="text-gradient-gold">Tech Starts Here</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/75 sm:text-xl">
            The UMD Management Information Systems &amp; Business Analytics Club — boosting knowledge, skills, and connections in IT and technology. Open to <strong className="text-primary-foreground">all</strong> UMD students.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="https://duluthumn.campusgroups.com/MISBA/club_signup" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Join MISBA <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe57A_ZvdChAwKrxAcUDplcVwF8VPrQBijHyChfcuXUQzx4tg/viewform?pli=1" target="_blank" rel="noopener noreferrer">
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                Newsletter Signup
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-12 z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4 rounded-xl bg-card p-6 shadow-lg border border-border">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What We Offer</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Three pillars that make MISBA the premier tech club at UMD.</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:border-primary/30">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg gradient-maroon text-primary-foreground transition-transform group-hover:scale-110">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Event Placeholder */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Upcoming Event</h2>
            <p className="mt-3 text-muted-foreground">Stay tuned for our next meeting or speaker event.</p>
          </div>
          <div className="mx-auto mt-8 max-w-lg rounded-xl border border-border bg-card p-8 text-center shadow-sm">
            <Calendar className="mx-auto h-10 w-10 text-primary/40" />
            <p className="mt-4 font-display text-lg font-semibold text-foreground">Next event coming soon</p>
            <p className="mt-1 text-sm text-muted-foreground">Check our Events page or Instagram for the latest updates.</p>
            <div className="mt-6 flex justify-center gap-3">
              <Link to="/events">
                <Button variant="default" size="sm">View Events</Button>
              </Link>
              <a href="https://www.instagram.com/misbac_umd" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm"><Instagram className="h-3.5 w-3.5" /> Instagram</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Explore MISBA</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { to: "/about", label: "About Us", desc: "Our mission and leadership" },
            { to: "/events", label: "Events", desc: "Speakers, workshops & more" },
            { to: "/executive-board", label: "Executive Board", desc: "Meet the team" },
            { to: "/contact", label: "Contact Us", desc: "Get in touch" },
          ].map((link) => (
            <Link key={link.to} to={link.to} className="group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-md hover:border-primary/30">
              <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">{link.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{link.desc}</p>
              <ArrowRight className="mt-3 h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
