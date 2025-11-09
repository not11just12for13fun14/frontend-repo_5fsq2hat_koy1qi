import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0d12]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AIAssistant />
      </main>
      <Footer />
    </div>
  );
}

export default App;
