import React from 'react';
import { Shield, Calendar, Users, Stethoscope } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    desc: 'AI-optimized appointment slots reduce no-shows and balance clinician workloads.',
  },
  {
    icon: Users,
    title: 'Patient 360°',
    desc: 'Unified patient profiles with visit history, vitals, medications, and documents.',
  },
  {
    icon: Stethoscope,
    title: 'Clinical Workflows',
    desc: 'Customizable care pathways, orders, lab results, and discharge summaries.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    desc: 'Role-based access, audit trails, and encryption for enterprise-grade safety.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-[#0b0d12] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Built for modern hospitals</h2>
          <p className="mt-3 text-white/70">
            Streamline administration and elevate patient care with tools designed for speed, clarity, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-500/30">
                  <Icon size={20} />
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
