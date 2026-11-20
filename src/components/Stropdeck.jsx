import { motion } from 'framer-motion'
import { ArrowUpRight, Play } from 'lucide-react'
import { stropdeck } from '../data'
import SectionHeading from './SectionHeading'

export default function Stropdeck() {
  return (
    <section id="stropdeck" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Now live on Google Play" title="Stropdeck™ — my Android app" />

      <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg leading-relaxed text-neutral-200">{stropdeck.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400">{stropdeck.story}</p>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {stropdeck.features.map((f) => (
              <li key={f} className="flex gap-2 text-sm text-neutral-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-spidey-red" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {stropdeck.stack.map((s) => (
              <span key={s} className="rounded bg-white/5 px-2 py-1 font-mono text-[11px] text-neutral-400">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={stropdeck.playUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-spidey-red bg-spidey-red px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wide text-white shadow-[4px_4px_0_0_#0d1f52] transition-transform hover:-translate-y-0.5"
            >
              <Play size={16} fill="currentColor" />
              Get it on Google Play
            </a>
            <a
              href="/stropdeck/"
              className="inline-flex items-center gap-1.5 font-mono text-sm uppercase tracking-wide text-neutral-300 transition-colors hover:text-spidey-red"
            >
              Learn more
              <ArrowUpRight size={16} />
            </a>
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-wide text-neutral-500">
            Free to start · Android · Available in India
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto w-full max-w-sm"
        >
          <div className="spidey-card relative rounded-md p-6 shadow-[8px_8px_0_0_#0d1f52]">
            <span className="w-fit rounded-full border border-spidey-blue/50 bg-spidey-blue/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-spidey-blue">
              {stropdeck.card.tag}
            </span>
            <h3 className="font-display mt-5 text-3xl text-white">{stropdeck.card.question}</h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-300">{stropdeck.card.answer}</p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-wide text-neutral-500">
              A real card from the app
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
