import { motion } from 'framer-motion'
import { clientProjects, projects } from '../data'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Gadgets & inventions" title="AI Engineering Projects" />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="spidey-card group flex flex-col rounded-md p-6"
          >
            <span className="w-fit rounded-full border border-spidey-blue/50 bg-spidey-blue/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-spidey-blue">
              {p.tag}
            </span>
            <h3 className="font-display mt-4 text-2xl text-white group-hover:text-spidey-red transition-colors">
              {p.name}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-300">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="rounded bg-white/5 px-2 py-1 font-mono text-[11px] text-neutral-400">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24">
        <h3 className="font-display mb-10 text-center text-3xl text-white">Client Projects</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {clientProjects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-md border border-white/10 p-6"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h4 className="font-semibold text-white">{p.name}</h4>
                <span className="shrink-0 font-mono text-[11px] text-spidey-red">{p.period}</span>
              </div>
              <ul className="mt-3 space-y-1.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-sm text-neutral-400">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-600" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
