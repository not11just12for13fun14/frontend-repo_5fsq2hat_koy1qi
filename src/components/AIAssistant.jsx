import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I can help schedule appointments, triage symptoms, and summarize patient charts. What would you like to do?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSend(e) {
    e.preventDefault();
    if (!input.trim() || loading) return;
    const userMsg = { role: 'user', content: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/ai/assist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.content }),
      });

      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      const reply = data?.reply || 'I am here to help with hospital operations. Could you rephrase that?';
      setMessages((m) => [...m, { role: 'assistant', content: reply }]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content: 'I had trouble reaching the server. For now, imagine I suggested available slots and flagged potential conflicts. Please try again.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="assistant" className="relative w-full bg-[#0b0d12] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">AI Operations Assistant</h2>
            <p className="mt-2 text-white/70">Ask about scheduling, resource allocation, or quick chart summaries.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex h-[420px] flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur">
              <div className="flex-1 space-y-4 overflow-y-auto p-4">
                {messages.map((m, idx) => (
                  <div key={idx} className={`flex items-start gap-3 ${m.role === 'assistant' ? '' : 'justify-end'}`}>
                    {m.role === 'assistant' && (
                      <span className="mt-1 rounded-md bg-cyan-500/15 p-2 text-cyan-300 ring-1 ring-cyan-500/30">
                        <Bot size={16} />
                      </span>
                    )}
                    <p className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                      m.role === 'assistant'
                        ? 'bg-white/10 text-white'
                        : 'bg-cyan-500 text-black'
                    }`}>{m.content}</p>
                    {m.role === 'user' && (
                      <span className="mt-1 rounded-md bg-white/10 p-2 text-white/80 ring-1 ring-white/20">
                        <User size={16} />
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <form onSubmit={handleSend} className="border-t border-white/10 p-3">
                <div className="flex items-center gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask the assistant…"
                    className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/50 outline-none ring-0 focus:border-cyan-400/60"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Send size={16} /> {loading ? 'Thinking…' : 'Send'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h3 className="font-semibold">Quick prompts</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/70">
                <li>Find next available MRI slot for Jane Doe.</li>
                <li>Summarize patient ABC123 last 3 visits.</li>
                <li>Forecast bed occupancy for ICU tomorrow.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h3 className="font-semibold">Privacy-first</h3>
              <p className="mt-1 text-sm text-white/70">
                Conversations are processed securely. PHI is handled according to your data residency and compliance settings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
