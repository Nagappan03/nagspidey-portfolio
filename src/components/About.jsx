import { motion } from 'framer-motion'
import { profile } from '../data'
import SectionHeading from './SectionHeading'

const STATS = [
  { value: '9+', label: 'Years Experience' },
  { value: '5', label: 'Companies' },
  { value: '4+', label: 'AI Projects' },
  { value: 'AWS', label: 'Certified' },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28">
      <SectionHeading eyebrow="Behind the mask" title="About Me" />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-neutral-300"
      >
        {profile.summary}
      </motion.p>

      <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="spidey-card rounded-md p-6 text-center"
          >
            <div className="font-display text-3xl text-spidey-red sm:text-4xl">{s.value}</div>
            <div className="mt-1 font-mono text-xs uppercase tracking-wide text-neutral-400">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
