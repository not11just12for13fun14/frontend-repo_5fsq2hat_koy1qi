import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#0b0d12] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold">NeuroCare HMS</h3>
            <p className="mt-1 text-white/70">AI-assisted hospital management built for speed and safety.</p>
          </div>
          <form className="flex w-full max-w-md gap-2 sm:w-auto">
            <input
              type="email"
              placeholder="Work email"
              className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/50 outline-none focus:border-cyan-400/60"
            />
            <button className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-black hover:bg-cyan-400">Request Demo</button>
          </form>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} NeuroCare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
