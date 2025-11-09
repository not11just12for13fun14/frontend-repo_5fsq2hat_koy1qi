import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-[#0b0d12] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to improve contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#0b0d12]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/5 to-amber-400/10" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-20 sm:py-28">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            AI-Assisted Healthcare
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            Hospital Management, Reimagined
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70 sm:text-lg">
            Manage appointments, patients, and clinical workflows with an intelligent assistant that learns from your operations — all in one secure, modern dashboard.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#assistant"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              Try the AI Assistant
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
