import { motion } from 'framer-motion'
import { experience } from '../data'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-28">
      <SectionHeading eyebrow="Web of experience" title="Work Experience" />

      <div className="relative ml-3 border-l-2 border-dashed border-spidey-red/30 pl-8 sm:ml-6">
        {experience.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative mb-14 last:mb-0"
          >
            <span className="absolute -left-[41px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-spidey-red bg-web-black sm:-left-[45px]">
              <span className="h-2 w-2 rounded-full bg-spidey-red" />
            </span>

            <p className="font-mono text-xs uppercase tracking-wide text-spidey-blue">{job.period}</p>
            <h3 className="font-display mt-1 text-2xl text-white">{job.company}</h3>
            <p className="mb-3 font-semibold text-spidey-red">{job.role}</p>

            <ul className="space-y-2">
              {job.points.map((p) => (
                <li key={p} className="flex gap-2 text-sm leading-relaxed text-neutral-300">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-500" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
