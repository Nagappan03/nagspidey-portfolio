import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { profile } from '../data'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="animate-swing mb-6 text-spidey-red"
      >
        <SpideySymbol className="h-16 w-16" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="font-mono text-sm uppercase tracking-[0.3em] text-spidey-red"
      >
        Friendly Neighborhood
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="font-display text-outline mt-3 text-6xl leading-none text-white sm:text-8xl"
      >
        {profile.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.7 }}
        className="mt-5 max-w-2xl text-lg text-neutral-300 sm:text-xl"
      >
        {profile.title} — <span className="text-spidey-blue font-semibold">9+ years</span> spinning
        scalable web applications across fintech, insurance &amp; enterprise, now weaving in{' '}
        <span className="text-spidey-red font-semibold">AI-powered</span> systems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="mt-9 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#projects"
          className="rounded-sm border-2 border-spidey-red bg-spidey-red px-7 py-3 font-mono text-sm font-semibold uppercase tracking-wide text-white shadow-[4px_4px_0_0_#0d1f52] transition-transform hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#0d1f52]"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-sm border-2 border-neutral-500 px-7 py-3 font-mono text-sm font-semibold uppercase tracking-wide text-neutral-200 transition-colors hover:border-spidey-blue hover:text-spidey-blue"
        >
          Get In Touch
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 flex gap-6 text-neutral-400"
      >
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-spidey-red">
          <GithubIcon size={22} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-spidey-red">
          <LinkedinIcon size={22} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-spidey-red">
          <Mail size={22} />
        </a>
      </motion.div>

      <a href="#about" aria-label="Scroll down" className="absolute bottom-8 animate-bounce text-neutral-500">
        <ArrowDown size={24} />
      </a>
    </section>
  )
}

function SpideySymbol({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
      <path d="M50 4c3 8 3 16 0 24 6-6 13-10 22-11-5 7-8 14-9 22 8-3 16-3 24 0-7 5-12 11-15 19 8 0 15 3 21 8-8 2-15 6-20 12 7 3 13 8 17 15-8-1-16 0-23 4 4 7 6 15 6 23-6-5-13-9-21-11 1 8-1 16-5 23-4-7-6-15-5-23-8 2-15 6-21 11 0-8 2-16 6-23-7-4-15-5-23-4 4-7 10-12 17-15-5-6-12-10-20-12 6-5 13-8 21-8-3-8-8-14-15-19 8-3 16-3 24 0-1-8-4-15-9-22 9 1 16 5 22 11-3-8-3-16 0-24z" />
    </svg>
  )
}
