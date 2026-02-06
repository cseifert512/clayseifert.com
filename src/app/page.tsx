import Navigation from '@/components/Navigation'
import Cursor from '@/components/Cursor'
import ModeToggle from '@/components/ModeToggle'
import Opening from '@/sections/Opening'
import Philosophy from '@/sections/Philosophy'
import Domains from '@/sections/Domains'
import WorkingNotes from '@/sections/WorkingNotes'
import Built from '@/sections/Built'
import Contact from '@/sections/Contact'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navigation />
      <ModeToggle />
      <main className="relative">
        {/* Noise Overlay */}
        <div className="fixed inset-0 pointer-events-none z-50 noise-overlay" />
        
        <Opening />
        <Philosophy />
        <Domains />
        <WorkingNotes />
        <Built />
        <Contact />
      </main>
    </>
  )
}
