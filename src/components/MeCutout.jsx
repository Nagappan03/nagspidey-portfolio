import { motion } from 'framer-motion'

export default function MeCutout() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
      whileHover={{ scale: 1.03 }}
      className="absolute right-3 top-[100px] w-[74px] sm:top-[96px] sm:w-[120px] lg:left-4 lg:right-auto lg:top-[27%] lg:w-[165px] xl:left-[7%] xl:w-[230px]"
    >
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-2xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(200,16,46,0.40), rgba(26,58,143,0.25) 60%, transparent)',
        }}
      />
      <img
        src="/me-cutout.webp"
        alt="Nagappan, miniature-style portrait"
        width="520"
        height="828"
        className="block w-full select-none"
        style={{ filter: 'drop-shadow(0 14px 16px rgba(0,0,0,0.6))' }}
        draggable="false"
      />

      <span className="hi-bubble absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[50%] border-[3px] border-web-black bg-white px-2.5 py-1 font-display text-base leading-none tracking-wide text-web-black shadow-[3px_3px_0_0_#1a3a8f] sm:px-3 sm:py-1.5 sm:text-lg lg:-top-11 lg:px-4 lg:py-2 lg:text-2xl xl:text-3xl">
        Hey there!
        <span className="absolute -bottom-2.5 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b-[3px] border-r-[3px] border-web-black bg-white" />
      </span>
    </motion.div>
  )
}
