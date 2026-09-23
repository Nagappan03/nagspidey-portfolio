import { useEffect, useState } from 'react'
import { Download } from 'lucide-react'
import { profile } from '../data'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
  { href: profile.blog, label: 'Blog', external: true },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-web-black/90 backdrop-blur-md border-b border-spidey-red/20' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-2xl text-spidey-red tracking-wider">
          NAGSPIDEY<span className="text-spidey-blue">.</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noreferrer' : undefined}
                className="font-mono text-sm uppercase tracking-wide text-neutral-300 transition-colors hover:text-spidey-red"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeUrl}
              download
              className="flex items-center gap-1.5 rounded-sm border border-spidey-red/50 px-3 py-1.5 font-mono text-sm uppercase tracking-wide text-spidey-red transition-colors hover:bg-spidey-red hover:text-white"
            >
              <Download size={14} />
              Resume
            </a>
          </li>
        </ul>
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-4 bg-white" />
        </button>
      </nav>
      {open && (
        <ul className="flex flex-col gap-1 border-t border-spidey-red/20 bg-web-black px-6 py-4 md:hidden">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noreferrer' : undefined}
                onClick={() => setOpen(false)}
                className="block py-2 font-mono text-sm uppercase tracking-wide text-neutral-300 hover:text-spidey-red"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeUrl}
              download
              onClick={() => setOpen(false)}
              className="block py-2 font-mono text-sm uppercase tracking-wide text-spidey-red"
            >
              Download Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
