import { createFileRoute } from "@tanstack/react-router";
import { User, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/executive-board")({
  head: () => ({
    meta: [
      { title: "Executive Board — MISBA at UMD" },
      { name: "description", content: "Meet the MISBA executive board and advisors at the University of Minnesota Duluth." },
      { property: "og:title", content: "Executive Board — MISBA at UMD" },
      { property: "og:description", content: "The leadership team driving MISBA forward." },
    ],
  }),
  component: ExecutiveBoardPage,
});

const executives = [
  { name: "John Harms", role: "President", category: "Executive", bio: "Leading MISBA's strategic direction and member experience." },
  { name: "Haley Patel", role: "Vice President", category: "Executive", bio: "Supporting operations and coordinating events." },
  { name: "Jacob Smith", role: "General Coordinator", category: "Executive", bio: "Managing logistics and cross-team collaboration." },
  { name: "Sara Carlson", role: "General Officer", category: "Executive", bio: "Assisting with day-to-day club activities." },
];

const advisors = [
  { name: "Abdelrahman Elkenawy", role: "Advisor", bio: "Providing academic and professional guidance." },
  { name: "Seung Lee", role: "Advisor", bio: "Supporting curriculum and industry connections." },
  { name: "Nik Hassan", role: "Advisor", bio: "Mentoring students and facilitating partnerships." },
];

function PersonCard({ name, role, bio }: { name: string; role: string; bio: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:shadow-md hover:border-primary/30">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
        <User className="h-9 w-9" />
      </div>
      <h3 className="mt-4 font-display text-lg font-bold text-foreground">{name}</h3>
      <p className="text-sm font-medium text-primary">{role}</p>
      <p className="mt-2 text-sm text-muted-foreground">{bio}</p>
      <div className="mt-4 flex justify-center gap-2">
        <a href="https://www.linkedin.com/in/mis-ba-duluth/" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon"><Linkedin className="h-4 w-4" /></Button>
        </a>
      </div>
    </div>
  );
}

function ExecutiveBoardPage() {
  return (
    <>
      <section className="gradient-hero py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-black tracking-tight text-primary-foreground sm:text-5xl">Executive Board</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/75">The dedicated team behind MISBA.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-foreground">Officers</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {executives.map((e) => <PersonCard key={e.name} {...e} />)}
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-foreground">Advisors</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advisors.map((a) => <PersonCard key={a.name} {...a} />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border bg-card p-8 text-center">
          <Download className="mx-auto h-8 w-8 text-primary/40" />
          <h3 className="mt-4 font-display text-lg font-bold text-foreground">Club Resources</h3>
          <p className="mt-2 text-sm text-muted-foreground">Constitution, meeting minutes, and other documents will be available here.</p>
          <p className="mt-1 text-xs text-muted-foreground">Coming soon — contact us for immediate requests.</p>
        </div>
      </section>
    </>
  );
}
