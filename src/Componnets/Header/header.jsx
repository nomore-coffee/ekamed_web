// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";         // lightweight icon set

const navLinks = [
  { label: "Home",      href: "/" },
  { label: "About",     href: "/about" },
  { label: "Products",  href: "/products" },
  { label: "Pricing",   href: "/pricing" },
  { label: "Contact Us", href: "/contact" },
  { label: "My Account", href: "/account" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#2C69D1] text-white shadow-lg">
      <nav className="container mx-auto flex h-20 items-center justify-between px-4">

        {/* logo */}
        <a href="/" className="flex items-center gap-2 text-lg font-semibold hover:opacity-90 transition-opacity">
          {/* simple angle‑shape logo — replace with <img> if you have one */}
          <span className="inline-block rotate-180 rounded-sm border-4 border-white p-[3px] transition-transform hover:scale-110" />
          EKAMED
        </a>

        {/* desktop links */}
        <ul className="hidden gap-8 lg:flex">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="relative py-2 transition-colors hover:text-yellow-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-yellow-200 after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* call‑to‑action */}
        <a
          href="/console"
          className="hidden rounded-full bg-white px-6 py-2 text-sm font-medium text-[#2C69D1] transition-all duration-200 hover:bg-yellow-50 hover:shadow-md hover:scale-105 lg:inline-block"
        >
          Sign In to Console
        </a>

        {/* mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 lg:hidden rounded-md hover:bg-white/10 transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* mobile drawer */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="space-y-4 border-t border-white/20 bg-[#2C69D1] px-4 py-6">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="block text-white transition-all duration-200 hover:text-yellow-200 hover:translate-x-2 py-2"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="/console"
              className="block rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-[#2C69D1] transition-all duration-200 hover:bg-yellow-50 hover:shadow-md"
              onClick={() => setOpen(false)}
            >
              Sign In to Console
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}