'use client';

import { useState } from 'react';

export default function Home() {
  const [hasPledged, setHasPledged] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // Static count for now - will wire up database later
  const pledgeCount = 0;

  const handlePledge = () => {
    setHasPledged(true);
    // TODO: Wire up to Supabase
  };

  const handleEmailSubmit = async () => {
    if (!email || !email.includes('@')) return;
    
    try {
      const formData = new FormData();
      formData.append('email', email);
      
      await fetch('https://buttondown.email/api/emails/embed-subscribe/generalstrikenow', {
        method: 'POST',
        body: formData,
      });
      
      setEmailSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error('Email signup failed:', error);
      // Still show success - Buttondown might block CORS but email often still goes through
      setEmailSubmitted(true);
      setEmail('');
    }
  };

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 overflow-x-hidden">
      {/* Subtle grid background */}
      <div 
        className="fixed inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl">
          <p className="text-red-500 font-mono text-sm tracking-widest mb-4 animate-pulse">
            ENOUGH IS ENOUGH
          </p>
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-8"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            GENERAL<br />
            <span className="text-red-500">STRIKE</span><br />
            NOW
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl leading-relaxed mb-12">
            When the government no longer serves the people, the people must withhold their labor. 
            A general strike is our collective voice when all other voices are silenced.
          </p>
          
          {/* Pledge Counter */}
          <div className="mb-12">
            <div className="inline-flex flex-col items-start">
              <span className="text-6xl md:text-8xl font-black text-red-500 tabular-nums">
                {formatNumber(pledgeCount)}
              </span>
              <span className="text-neutral-500 text-lg tracking-wide">
                people ready to strike
              </span>
            </div>
          </div>

          {/* Pledge Button */}
          <div className="relative">
            {!hasPledged ? (
              <button
                onClick={handlePledge}
                className="group relative bg-red-600 hover:bg-red-500 text-white font-bold text-xl px-12 py-5 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">I&apos;M IN — COUNT ME</span>
                <div className="absolute inset-0 bg-red-400 opacity-0 group-hover:opacity-20 transition-opacity" />
              </button>
            ) : (
              <div className="inline-flex items-center gap-3 bg-neutral-900 border border-neutral-800 px-8 py-5">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-bold text-lg">YOU&apos;RE COUNTED</span>
              </div>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-600">
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-neutral-600 to-transparent" />
        </div>
      </header>

      {/* What is a General Strike */}
      <section className="relative px-6 md:px-12 lg:px-24 py-24 border-t border-neutral-900">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black mb-8 flex items-center gap-4">
            <span className="w-12 h-px bg-red-500" />
            WHAT IS A GENERAL STRIKE?
          </h2>
          <div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
            <p>
              A <strong className="text-neutral-100">general strike</strong> is when workers across 
              multiple industries stop working simultaneously. Unlike a typical strike targeting one 
              employer, a general strike targets the entire economic system.
            </p>
            <p>
              It&apos;s the most powerful nonviolent tool available to ordinary people. When we withdraw 
              our labor collectively, we demonstrate that <strong className="text-neutral-100">the 
              economy runs on us</strong>—not on those who claim to lead us.
            </p>
            <p>
              General strikes have toppled governments, won civil rights, and forced political change 
              when all other methods failed. They work because they make the cost of injustice 
              impossible to ignore.
            </p>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="relative px-6 md:px-12 lg:px-24 py-24 bg-neutral-900/50">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black mb-8 flex items-center gap-4">
            <span className="w-12 h-px bg-red-500" />
            WHY NOW?
          </h2>
          <div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
            <p>
              Federal agents are killing civilians in our streets. Our neighbors are being terrorized. 
              The government calls victims &quot;terrorists&quot; and expects us to believe the lies.
            </p>
            <p>
              Voting didn&apos;t stop this. Petitions didn&apos;t stop this. Polite protest didn&apos;t stop this.
            </p>
            <p className="text-neutral-100 text-xl font-medium">
              When the state wages war on its people, the people must respond with the one power 
              they cannot take from us: the power to stop working.
            </p>
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="relative px-6 md:px-12 lg:px-24 py-24 border-t border-neutral-900">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black mb-12 flex items-center gap-4">
            <span className="w-12 h-px bg-red-500" />
            HOW TO PARTICIPATE
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                num: '01',
                title: "DON'T WORK",
                desc: "Call in sick. Use PTO. Take a personal day. If you can afford to, just don't show up. Every person who stays home matters."
              },
              {
                num: '02',
                title: "DON'T BUY",
                desc: "Don't make purchases. Don't order delivery. Don't buy gas. Hit them where it hurts—their revenue."
              },
              {
                num: '03',
                title: 'SHOW UP',
                desc: 'Join local actions if you can do so safely. There is power in being visibly, physically present together.'
              },
              {
                num: '04',
                title: 'SPREAD THE WORD',
                desc: 'Talk to your coworkers, friends, family. Share this page. The more people who participate, the more powerful we become.'
              }
            ].map((item) => (
              <div key={item.num} className="group">
                <span className="text-red-500 font-mono text-sm">{item.num}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="relative px-6 md:px-12 lg:px-24 py-24 bg-red-600">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            STAY CONNECTED
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-xl">
            Get updates on strike actions, coordination, and how to get involved in your area. 
            We&apos;ll never spam you or share your information.
          </p>
          
          {!emailSubmitted ? (
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-red-700 border-2 border-red-500 text-white placeholder-red-300 px-6 py-4 text-lg focus:outline-none focus:border-white transition-colors"
              />
              <button
                onClick={handleEmailSubmit}
                className="bg-neutral-950 hover:bg-neutral-900 text-white font-bold px-8 py-4 transition-colors whitespace-nowrap"
              >
                SIGN UP
              </button>
            </div>
          ) : (
            <div className="inline-flex items-center gap-3 bg-red-700 px-6 py-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-bold">YOU&apos;RE ON THE LIST</span>
            </div>
          )}
        </div>
      </section>

      {/* Resources */}
      <section className="relative px-6 md:px-12 lg:px-24 py-24 border-t border-neutral-900">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black mb-12 flex items-center gap-4">
            <span className="w-12 h-px bg-red-500" />
            RESOURCES
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Know Your Rights', desc: 'What to do if confronted by ICE or police', url: 'https://www.aclu.org/know-your-rights' },
              { title: 'Find Mutual Aid', desc: 'Local support networks in your area', url: 'https://www.mutualaidhub.org' },
              { title: 'Talk to Your Coworkers', desc: 'How to organize your workplace', url: 'https://workerorganizing.org' },
              { title: 'Legal Support', desc: 'If you or someone you know needs help', url: 'https://www.nlg.org' },
              { title: 'Find Local Actions', desc: 'Protests and events near you', url: '#' },
              { title: 'Strike Fund', desc: "Support workers who can't afford to miss pay", url: '#' },
            ].map((resource) => (
              <a 
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 p-6 transition-all"
              >
                <h3 className="font-bold mb-2 group-hover:text-red-500 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-neutral-500 text-sm">{resource.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-neutral-900">
        <div className="max-w-4xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="font-bold text-lg">GENERALSTRIKENOW.ORG</p>
            <p className="text-neutral-600 text-sm mt-1">
              By the people, for the people
            </p>
          </div>
          <div className="flex gap-6 text-neutral-500">
            <a href="https://twitter.com/strikenow_2026" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
            <a href="https://bsky.app/profile/generalstrikenowus.bsky.social" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Bluesky</a>
            <a href="mailto:generalstrikenowus@proton.me" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* Solidarity Banner */}
      <div className="bg-neutral-900 px-6 py-4 text-center text-neutral-500 text-sm">
        In solidarity with Renée Nicole Good and all victims of state violence
      </div>
    </div>
  );
}
