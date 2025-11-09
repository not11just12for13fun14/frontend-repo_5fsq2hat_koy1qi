import React from 'react';
import { Hospital, Bot, Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0b0d12]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-white">
        <a href="#" className="inline-flex items-center gap-2 font-semibold">
          <span className="rounded-md bg-cyan-500/20 p-1.5 text-cyan-300 ring-1 ring-cyan-500/30"><Hospital size={18} /></span>
          NeuroCare HMS
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#assistant" className="hover:text-white inline-flex items-center gap-1"><Bot size={16}/> Assistant</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#" className="rounded-lg bg-cyan-500 px-3 py-1.5 font-semibold text-black hover:bg-cyan-400">Get Demo</a>
        </nav>
        <button className="sm:hidden text-white/90" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="sm:hidden border-t border-white/10 bg-[#0b0d12] px-6 py-3 text-white/80">
          <div className="flex flex-col gap-3">
            <a href="#features">Features</a>
            <a href="#assistant" className="inline-flex items-center gap-1"><Bot size={16}/> Assistant</a>
            <a href="#contact">Contact</a>
            <a href="#" className="rounded-lg bg-cyan-500 px-3 py-1.5 text-center font-semibold text-black">Get Demo</a>
          </div>
        </div>
      )}
    </header>
  );
}
