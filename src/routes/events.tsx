import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Clock, MapPin, ExternalLink, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — MISBA at UMD" },
      { name: "description", content: "Upcoming and past MISBA events — guest speakers, workshops, and community bonding at UMD." },
      { property: "og:title", content: "Events — MISBA at UMD" },
      { property: "og:description", content: "See what's coming up at MISBA. Guest speakers, career workshops, and more." },
    ],
  }),
  component: EventsPage,
});

const placeholderEvents = [
  { title: "Industry Guest Speaker: Data Analytics in Healthcare", date: "TBD", time: "5:00 PM – 6:30 PM", location: "LSBE 120", type: "Speaker" },
  { title: "Resume & LinkedIn Workshop", date: "TBD", time: "4:00 PM – 5:30 PM", location: "Library 140", type: "Career" },
  { title: "End-of-Semester Social", date: "TBD", time: "6:00 PM – 8:00 PM", location: "Kirby Student Center", type: "Social" },
  { title: "Intro to SQL & Databases Workshop", date: "TBD", time: "5:00 PM – 6:30 PM", location: "LSBE Lab", type: "Workshop" },
];

const typeColors: Record<string, string> = {
  Speaker: "bg-primary/10 text-primary",
  Career: "bg-gold/15 text-gold-foreground",
  Social: "bg-accent/15 text-accent-foreground",
  Workshop: "bg-secondary text-secondary-foreground",
};

function EventsPage() {
  return (
    <>
      <section className="gradient-hero py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-black tracking-tight text-primary-foreground sm:text-5xl">Events</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/75">Speakers, workshops, career prep, and community bonding.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-xl border border-border bg-card p-6 text-center">
          <p className="text-sm text-muted-foreground">📅 Events are loaded as placeholders. Follow us on Instagram for real-time updates.</p>
          <a href="https://www.instagram.com/misbac_umd" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
            <Instagram className="h-4 w-4" /> @misbac_umd
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {placeholderEvents.map((evt, i) => (
            <div key={i} className="group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-md hover:border-primary/30">
              <div className="flex items-start justify-between">
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${typeColors[evt.type] ?? "bg-muted text-muted-foreground"}`}>{evt.type}</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-foreground">{evt.title}</h3>
              <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <p className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5" /> {evt.date}</p>
                <p className="flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> {evt.time}</p>
                <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> {evt.location}</p>
              </div>
              <div className="mt-4">
                <a href="https://duluthumn.campusgroups.com/misba/home/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm"><ExternalLink className="h-3.5 w-3.5" /> RSVP</Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events / Showcase */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-bold text-foreground">Past Highlights</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">A look back at successful events and projects.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["Industry Speaker Night", "Fall Career Fair Prep", "Club Bowling Social"].map((title, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-border bg-card">
                <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Calendar className="h-10 w-10 text-primary/40" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Photos and recap coming soon.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
