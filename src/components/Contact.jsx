import { motion } from 'framer-motion'
import { Download, Mail, MapPin, Phone, Rss } from 'lucide-react'
import { profile } from '../data'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-28 text-center">
      <SectionHeading eyebrow="Signal the spider" title="Let's Build Something" />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-xl text-neutral-300"
      >
        Open to senior full stack and AI engineering roles. Whether it's a complex migration or an
        agentic AI system — drop a line.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href={`mailto:${profile.email}`}
          className="inline-block rounded-sm border-2 border-spidey-red bg-spidey-red px-8 py-4 font-mono text-sm font-semibold uppercase tracking-wide text-white shadow-[4px_4px_0_0_#0d1f52] transition-transform hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#0d1f52]"
        >
          {profile.email}
        </a>
        <a
          href={profile.resumeUrl}
          download
          className="inline-flex items-center gap-2 rounded-sm border-2 border-spidey-blue px-8 py-4 font-mono text-sm font-semibold uppercase tracking-wide text-spidey-blue transition-colors hover:bg-spidey-blue hover:text-white"
        >
          <Download size={16} />
          Download CV
        </a>
      </motion.div>

      <div className="mt-10 flex flex-col items-center gap-3 font-mono text-sm text-neutral-400 sm:flex-row sm:justify-center sm:gap-8">
        <span className="flex items-center gap-2">
          <Phone size={16} className="text-spidey-red" /> {profile.phone}
        </span>
        <span className="flex items-center gap-2">
          <MapPin size={16} className="text-spidey-red" /> {profile.location}
        </span>
      </div>

      <div className="mt-8 flex justify-center gap-6 text-neutral-400">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-spidey-red">
          <GithubIcon size={22} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-spidey-red">
          <LinkedinIcon size={22} />
        </a>
        <a href={profile.blog} target="_blank" rel="noreferrer" aria-label="Blog" className="hover:text-spidey-red">
          <Rss size={22} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-spidey-red">
          <Mail size={22} />
        </a>
      </div>
    </section>
  )
}
