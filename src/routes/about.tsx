import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, User } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MISBA at UMD" },
      { name: "description", content: "Learn about the UMD MIS & Business Analytics Club — our mission, leadership, and community." },
      { property: "og:title", content: "About — MISBA at UMD" },
      { property: "og:description", content: "Our mission, leadership team, and commitment to technology education at UMD." },
    ],
  }),
  component: AboutPage,
});

const leaders = [
  { name: "John Harms", role: "President" },
  { name: "Haley Patel", role: "Vice President" },
  { name: "Jacob Smith", role: "General Coordinator" },
  { name: "Sara Carlson", role: "General Officer" },
  { name: "Abdelrahman Elkenawy", role: "Advisor" },
  { name: "Seung Lee", role: "Advisor" },
  { name: "Nik Hassan", role: "Advisor" },
];

function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="gradient-hero py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-black tracking-tight text-primary-foreground sm:text-5xl">About MISBA</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/75">Our mission, our people, and why we exist.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-foreground">Our Mission</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Welcome to the UMD Management Information Systems (MIS) and Business Analytics Club, where we're passionate about boosting knowledge and skills in IT and technology. Our club welcomes all, including MIS and BA majors, whether you're looking to boost your career, advance your academic journey, or simply want to dive deeper into the world of technology. We regularly host guest speakers who provide valuable insights into the industry. We offer events that assist in resume building and career development to help you succeed in your professional pursuits. Beyond that, we also organize club bonding events, creating a supportive community where lasting connections are forged.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-bold text-foreground">What is MIS?</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Management Information Systems bridges business and technology. MIS professionals design, implement, and manage the tech systems organizations rely on — from databases and networks to enterprise software and cybersecurity.</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-bold text-foreground">What is Business Analytics?</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Business Analytics uses data, statistical methods, and predictive modeling to drive smarter decisions. BA professionals turn raw data into actionable insights that shape strategy across every industry.</p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-bold text-foreground">Leadership</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">The people driving MISBA forward.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((l) => (
              <div key={l.name} className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <User className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-display font-bold text-foreground">{l.name}</h3>
                <p className="text-sm text-muted-foreground">{l.role}</p>
                <a href="https://www.linkedin.com/in/mis-ba-duluth/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs text-primary hover:underline">
                  <Linkedin className="h-3 w-3" /> Connect
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusion Policy */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border bg-card p-8">
          <h2 className="font-display text-xl font-bold text-foreground">Inclusion Statement</h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            The University of Minnesota shall provide equal access to and opportunity in its programs, facilities, and employment without regard to race, color, creed, religion, national origin, gender, age, marital status, disability, public assistance status, veteran status, sexual orientation, gender identity, or gender expression. MISBA is a registered student organization at UMD and adheres fully to this policy. All UMD students are welcome to join.
          </p>
        </div>
      </section>
    </>
  );
}
