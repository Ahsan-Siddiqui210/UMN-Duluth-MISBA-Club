import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, ExternalLink } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg gradient-maroon text-xs font-black text-primary-foreground">M</span>
              MISBA
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              UMD Management Information Systems &amp; Business Analytics Club. Open to all students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">Pages</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { to: "/about", label: "About Us" },
                { to: "/events", label: "Events" },
                { to: "/executive-board", label: "Executive Board" },
                { to: "/join", label: "Join MISBA" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}><Link to={l.to} className="hover:text-foreground transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://duluthumn.campusgroups.com/misba/home/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors inline-flex items-center gap-1">CampusGroups <ExternalLink className="h-3 w-3" /></a></li>
              <li><a href="https://linktr.ee/MISBA_Club" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors inline-flex items-center gap-1">Linktree <ExternalLink className="h-3 w-3" /></a></li>
              <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSe57A_ZvdChAwKrxAcUDplcVwF8VPrQBijHyChfcuXUQzx4tg/viewform?pli=1" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Newsletter Signup</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">Connect</h3>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/misbac_umd" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/mis-ba-duluth/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="mailto:duluthmisba@gmail.com" className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">duluthmisba@gmail.com</p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} MISBA — University of Minnesota Duluth. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
