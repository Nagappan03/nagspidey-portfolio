import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <p className="font-mono text-xs uppercase tracking-[0.35em] text-spidey-red">{eyebrow}</p>
      <h2 className="font-display mt-2 text-4xl text-white sm:text-5xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 bg-gradient-to-r from-spidey-red to-spidey-blue" />
    </motion.div>
  )
}
