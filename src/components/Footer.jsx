import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center">
      <p className="font-mono text-xs text-neutral-500">
        © {new Date().getFullYear()} {profile.name} — Built with React, JavaScript &amp; Tailwind, spun together with a whole lot of web fluid.
      </p>
    </footer>
  )
}
