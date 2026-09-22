import { motion } from 'framer-motion'
import { certifications, skills } from '../data'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-28">
      <SectionHeading eyebrow="Spider-sense" title="Skills & Toolkit" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="spidey-card rounded-md p-5"
          >
            <h3 className="mb-3 font-mono text-sm font-semibold uppercase tracking-wide text-spidey-red">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-spidey-blue/30 bg-spidey-blue/10 px-2.5 py-1 text-xs text-neutral-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12 flex flex-col items-center gap-2 text-center"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">Certification</p>
        {certifications.map((c) => (
          <p key={c.name} className="font-display text-2xl text-white">
            {c.name} <span className="text-spidey-blue text-base font-mono ml-2">{c.period}</span>
          </p>
        ))}
      </motion.div>
    </section>
  )
}
