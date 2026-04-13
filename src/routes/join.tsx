import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Newspaper, Users, Briefcase, Heart } from "lucide-react";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join MISBA — UMD MIS & Business Analytics Club" },
      { name: "description", content: "Join the UMD MIS & Business Analytics Club. Open to all students. Sign up, subscribe to our newsletter, and get involved." },
      { property: "og:title", content: "Join MISBA — UMD MIS & Business Analytics Club" },
      { property: "og:description", content: "Become a member of MISBA. Open to all UMD students." },
    ],
  }),
  component: JoinPage,
});

const benefits = [
  { icon: Users, title: "Network & Connect", desc: "Meet peers, alumni, and industry professionals who share your passion for tech." },
  { icon: Briefcase, title: "Career Boost", desc: "Access exclusive resume workshops, mock interviews, and job leads." },
  { icon: Heart, title: "Community", desc: "Build lasting friendships through social events and collaborative projects." },
];

const steps = [
  { num: "1", title: "Sign Up on CampusGroups", desc: "Click the button below to register as an official member." },
  { num: "2", title: "Subscribe to Our Newsletter", desc: "Stay informed about meetings, events, and opportunities." },
  { num: "3", title: "Show Up!", desc: "Attend our next event — no experience required. Everyone is welcome." },
];

function JoinPage() {
  return (
    <>
      <section className="gradient-hero py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-black tracking-tight text-primary-foreground sm:text-5xl">Join MISBA</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/75">Open to all UMD students — MIS/BA majors and non-majors alike.</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-bold text-foreground">Why Join?</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-xl border border-border bg-card p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg gradient-maroon text-primary-foreground">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-bold text-foreground">How to Join</h2>
          <div className="mt-10 space-y-6">
            {steps.map((s) => (
              <div key={s.num} className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full gradient-maroon font-display text-lg font-bold text-primary-foreground">{s.num}</span>
                <div>
                  <h3 className="font-display font-bold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="https://duluthumn.campusgroups.com/MISBA/club_signup" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="lg">Join Now on CampusGroups <ArrowRight className="h-4 w-4" /></Button>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe57A_ZvdChAwKrxAcUDplcVwF8VPrQBijHyChfcuXUQzx4tg/viewform?pli=1" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg"><Newspaper className="h-4 w-4" /> Newsletter Signup</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Inclusion */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border bg-card p-8">
          <div className="flex items-start gap-3">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <h2 className="font-display text-xl font-bold text-foreground">Inclusion Statement</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                The University of Minnesota shall provide equal access to and opportunity in its programs, facilities, and employment without regard to race, color, creed, religion, national origin, gender, age, marital status, disability, public assistance status, veteran status, sexual orientation, gender identity, or gender expression. MISBA is a registered student organization at UMD and adheres fully to this policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
