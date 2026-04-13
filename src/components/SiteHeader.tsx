import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/executive-board", label: "Board" },
  { to: "/join", label: "Join" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggle: toggleDark } = useDarkMode();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-foreground">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg gradient-maroon text-sm font-black text-primary-foreground">M</span>
          MISBA
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleDark}
            className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="https://duluthumn.campusgroups.com/MISBA/club_signup"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex h-9 items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold text-primary-foreground shadow-md transition-all hover:shadow-lg hover:bg-primary/90"
          >
            Join Now
          </a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={toggleDark}
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm font-medium ${
                  location.pathname === link.to
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://duluthumn.campusgroups.com/MISBA/club_signup"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block rounded-lg bg-primary py-2.5 text-center text-sm font-bold text-primary-foreground"
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
