'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

import { portfolioContent } from '@/data/content';

export default function Contact() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { sectionTitle, sectionSubtitle, formLabels, footer } = portfolioContent.contact;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('loading');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/tho.deb.prof@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Nom: formData.name,
            Email: formData.email,
            Message: formData.message,
            _subject: `Nouvelle transmission de ${formData.name}`,
            _template: 'box'
        })
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-dune-sand text-dune-bg border-t border-dune-bg/20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b-2 border-dune-bg/20 pb-8">
          <h2 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none whitespace-pre-line">
            {sectionTitle}
          </h2>
          <p className="font-body text-xs font-bold tracking-[0.3em] uppercase max-w-xs text-right">
            {sectionSubtitle}
          </p>
        </div>

        <form className="space-y-16" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="relative">
              <label className="block font-body text-[10px] font-bold tracking-[0.3em] uppercase mb-4 text-dune-bg/60">
                {formLabels.name}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-transparent border-b-2 border-dune-bg/30 py-4 text-2xl md:text-3xl font-display uppercase tracking-wider focus:outline-none placeholder:text-dune-bg/20"
                placeholder={formLabels.namePlaceholder}
              />
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-dune-spice"
                initial={{ width: 0 }}
                animate={{ width: focusedField === 'name' ? '100%' : 0 }}
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              />
            </div>

            <div className="relative">
              <label className="block font-body text-[10px] font-bold tracking-[0.3em] uppercase mb-4 text-dune-bg/60">
                {formLabels.email}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-transparent border-b-2 border-dune-bg/30 py-4 text-2xl md:text-3xl font-display uppercase tracking-wider focus:outline-none placeholder:text-dune-bg/20"
                placeholder={formLabels.emailPlaceholder}
              />
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-dune-spice"
                initial={{ width: 0 }}
                animate={{ width: focusedField === 'email' ? '100%' : 0 }}
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              />
            </div>
          </div>

          <div className="relative">
            <label className="block font-body text-[10px] font-bold tracking-[0.3em] uppercase mb-4 text-dune-bg/60">
              {formLabels.message}
            </label>
            <textarea
              rows={3}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-transparent border-b-2 border-dune-bg/30 py-4 text-xl md:text-2xl font-display uppercase tracking-wider focus:outline-none placeholder:text-dune-bg/20 resize-none"
              placeholder={formLabels.messagePlaceholder}
            />
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-dune-spice"
              initial={{ width: 0 }}
              animate={{ width: focusedField === 'message' ? '100%' : 0 }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            />
          </div>

          <button 
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="group relative w-full bg-dune-bg text-dune-text py-10 md:py-16 overflow-hidden flex items-center justify-center mt-12 disabled:opacity-80"
          >
            <div className="absolute inset-0 bg-dune-spice translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
            <span className="relative z-10 font-display text-2xl md:text-5xl font-black uppercase tracking-[0.2em] flex items-center gap-6">
              {status === 'loading' && "Transmission..."}
              {status === 'success' && <><CheckCircle2 className="w-8 h-8 md:w-12 md:h-12" /> Signal Reçu</>}
              {status === 'error' && <><XCircle className="w-8 h-8 md:w-12 md:h-12" /> Échec</>}
              {status === 'idle' && (
                <>
                  {formLabels.submit}
                  <ArrowRight className="w-8 h-8 md:w-12 md:h-12 group-hover:translate-x-6 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
                </>
              )}
            </span>
          </button>
        </form>
        
        <div className="mt-24 pt-8 border-t border-dune-bg/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-body text-[10px] font-bold tracking-[0.3em] uppercase text-dune-bg/60">
            {footer.copyright}
          </span>
          <span className="font-body text-[10px] font-bold tracking-[0.3em] uppercase text-dune-bg/60">
            {footer.location}
          </span>
        </div>
      </div>
    </section>
  );
}
