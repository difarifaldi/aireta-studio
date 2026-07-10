import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  ["/", "HOME"],
  ["/our-services", "OUR SERVICES"],
  ["/portfolio", "PORTFOLIO"],
  ["/location", "LOCATION"],
  ["/contact", "CONTACT US"],
];

function NavLink({ to, children, onClick }) {
  const { pathname } = useLocation();
  const active = pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`nav-link ${active ? "nav-link-active" : ""}`}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-30 border-b border-stone-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
        <Link to="/" className="font-serif text-xl tracking-[0.22em] sm:text-2xl">
          AIRETA
        </Link>

        <button
          type="button"
          className="menu-toggle md:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={open ? "translate-y-[6px] rotate-45" : ""} />
          <span className={open ? "opacity-0" : ""} />
          <span className={open ? "-translate-y-[6px] -rotate-45" : ""} />
        </button>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-7 lg:gap-9">
            {links.map(([to, label]) => (
              <li key={to}>
                <NavLink to={to}>{label}</NavLink>
              </li>
            ))}
            <li>
              <Link to="/contact" className="quote-button ml-1">
                REQUEST A QUOTE
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <nav className={`mobile-menu md:hidden ${open ? "mobile-menu-open" : ""}`}>
        <ul className="px-5 pb-6 pt-2">
          {links.map(([to, label]) => (
            <li key={to} className="border-b border-stone-100">
              <NavLink to={to} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            </li>
          ))}
          <li className="pt-5">
            <Link to="/contact" className="quote-button block text-center">
              REQUEST A QUOTE <span aria-hidden="true">→</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
