import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MessageCircle, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { DotGrid } from './DotGrid';

interface FormData {
  interest: string;
  name: string;
  email: string;
  message: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

const WA_LINK = 'https://wa.me/919726217070?text=Hi%20Unithink%20School!%20I%27m%20interested%20in%20your%20AI%20training%20programs.';

const INITIAL: FormData = { interest: 'Corporate Training', name: '', email: '', message: '' };

export function Contact() {
  const [form,     setForm]     = useState<FormData>(INITIAL);
  const [status,   setStatus]   = useState<Status>('idle');
  const [errors,   setErrors]   = useState<Partial<FormData>>({});
  const [cooldown, setCooldown] = useState(false);

  function validate(): boolean {
    const e: Partial<FormData> = {};
    if (!form.name.trim())                          e.name    = 'Name is required';
    if (!form.email.trim())                         e.email   = 'Email is required';
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim())                       e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate() || cooldown) return;
    setStatus('loading');

    const key = import.meta.env.VITE_WEB3FORMS_KEY;

    if (key && key !== 'your_access_key_here') {
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: key,
            subject: `New Inquiry — ${form.interest} | Unithink School`,
            from_name: form.name,
            reply_to: form.email,
            interest: form.interest,
            name: form.name,
            email: form.email,
            message: form.message,
            redirect: 'false',
          }),
        });
        const data = await res.json();
        if (data.success) {
          setStatus('success');
          setForm(INITIAL);
          setCooldown(true);
          setTimeout(() => setCooldown(false), 30_000);
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
    } else {
      // No API key configured — submission cannot complete, direct to WhatsApp
      setStatus('error');
    }
  }

  function resetForm() {
    setStatus('idle');
    setErrors({});
  }

  return (
    <section id="contact" className="section bg-color-bg relative overflow-hidden px-3 md:px-5">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-color-accent/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2" />
      <DotGrid />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left — Contact Info ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.08 }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex flex-col gap-10"
          >
            <div className="flex flex-col gap-6">
              <span className="type-h6 text-color-accent">
                Let's Plan Your AI Training
              </span>
              <h2 className="type-h2 text-color-text">
                Start Your <span className="text-color-accent">AI Journey</span> Today
              </h2>
              <p className="type-p1 text-color-text-2 max-w-[640px]">
                Share your requirements — we'll recommend the right program, structure, and timeline for your team or organisation.
              </p>
            </div>

            <div className="flex flex-col gap-6 pt-8 border-t border-color-border">
              <a
                href="tel:+919726217070"
                className="flex items-center gap-5 group"
                aria-label="Call us"
              >
                <div className="w-14 h-14 rounded-2xl bg-color-bg-2 border border-color-border flex items-center justify-center text-color-text group-hover:bg-color-accent group-hover:text-color-bg group-hover:border-color-accent transition-all duration-500 shadow-soft">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.06em] font-medium text-color-text-muted">Call Us</span>
                  <span className="text-xl font-heading font-bold text-color-text tracking-tight group-hover:text-color-accent transition-colors">
                    +91 9726217070
                  </span>
                </div>
              </a>

              <a
                href="mailto:unithink.school@gmail.com"
                className="flex items-center gap-5 group"
                aria-label="Email us"
              >
                <div className="w-14 h-14 rounded-2xl bg-color-bg-2 border border-color-border flex items-center justify-center text-color-text group-hover:bg-color-accent group-hover:text-color-bg group-hover:border-color-accent transition-all duration-500 shadow-soft">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.06em] font-medium text-color-text-muted">Email Us</span>
                  <span className="text-base font-heading font-bold text-color-text tracking-tight group-hover:text-color-accent transition-colors break-all">
                    unithink.school@gmail.com
                  </span>
                </div>
              </a>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 group"
                aria-label="Chat on WhatsApp"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-soft border"
                  style={{
                    backgroundColor: 'rgba(37,211,102,0.08)',
                    borderColor: 'rgba(37,211,102,0.2)',
                    color: '#25D366',
                  }}
                >
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.06em] font-medium text-color-text-muted">WhatsApp</span>
                  <span className="text-xl font-heading font-bold text-color-text tracking-tight" style={{ color: '#25D366' }}>
                    Chat with an Expert
                  </span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* ── Right — Form ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.08 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-color-bg rounded-[3rem] p-8 md:p-12 shadow-soft border border-color-border relative overflow-hidden"
          >
            {/* Form background glow */}
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-color-accent/10 blur-[60px] rounded-full pointer-events-none" />

            <AnimatePresence mode="wait">

              {/* ── Success State ───────────────────────────────── */}
              {status === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center gap-8 text-center py-8 relative z-10"
                >
                  <div className="w-20 h-20 rounded-full bg-color-accent/15 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-color-accent" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="type-h3 text-color-text">Message Received!</h3>
                    <p className="text-color-text-2 leading-relaxed font-medium">
                      We'll reach out within 24 hours with a tailored plan.
                      <br />Want a faster response?
                    </p>
                  </div>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-wider transition-all duration-300 hover:scale-[1.02]"
                    style={{ backgroundColor: '#25D366', color: '#fff' }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Continue on WhatsApp
                  </a>
                  <button
                    onClick={resetForm}
                    className="text-sm text-color-text-muted hover:text-color-text transition-colors font-medium underline underline-offset-2"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}

              {/* ── Error State ─────────────────────────────────── */}
              {status === 'error' && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-6 text-center py-8 relative z-10"
                >
                  <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                    <AlertCircle className="w-8 h-8 text-red-500" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="type-h4 text-color-text">Something went wrong</h3>
                    <p className="text-color-text-2 font-medium">
                      The form couldn't be submitted. Please reach out directly:
                    </p>
                  </div>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-black uppercase tracking-wider"
                    style={{ backgroundColor: '#25D366', color: '#fff' }}
                  >
                    Message us on WhatsApp
                  </a>
                  <button
                    onClick={resetForm}
                    className="text-sm text-color-text-muted hover:text-color-text transition-colors font-medium underline underline-offset-2"
                  >
                    Try again
                  </button>
                </motion.div>
              )}

              {/* ── Form ────────────────────────────────────────── */}
              {(status === 'idle' || status === 'loading') && (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-6 relative z-10"
                >
                  {/* Interest */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-interest" className="text-[10px] uppercase tracking-[0.06em] font-medium text-color-text-muted">
                      I'm interested in
                    </label>
                    <select
                      id="contact-interest"
                      value={form.interest}
                      onChange={(e) => setForm(f => ({ ...f, interest: e.target.value }))}
                      className="bg-color-bg-2 border border-color-border rounded-2xl px-5 py-4 text-color-text outline-none focus:border-color-accent transition-all appearance-none cursor-pointer font-medium text-sm"
                    >
                      <option>Corporate Training</option>
                      <option>Student Workshop</option>
                      <option>Faculty Development (FDP)</option>
                      <option>AI Mentorship</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-name" className="text-[10px] uppercase tracking-[0.06em] font-medium text-color-text-muted">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Rahul Sharma"
                        value={form.name}
                        onChange={(e) => {
                          setForm(f => ({ ...f, name: e.target.value }));
                          if (errors.name) setErrors(er => ({ ...er, name: undefined }));
                        }}
                        className={`bg-color-bg-2 border rounded-2xl px-5 py-4 text-color-text outline-none transition-all font-medium text-sm ${
                          errors.name ? 'border-red-400 focus:border-red-400' : 'border-color-border focus:border-color-accent'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 font-medium">{errors.name}</p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-email" className="text-[10px] uppercase tracking-[0.06em] font-medium text-color-text-muted">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="rahul@company.com"
                        value={form.email}
                        onChange={(e) => {
                          setForm(f => ({ ...f, email: e.target.value }));
                          if (errors.email) setErrors(er => ({ ...er, email: undefined }));
                        }}
                        className={`bg-color-bg-2 border rounded-2xl px-5 py-4 text-color-text outline-none transition-all font-medium text-sm ${
                          errors.email ? 'border-red-400 focus:border-red-400' : 'border-color-border focus:border-color-accent'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-message" className="text-[10px] uppercase tracking-[0.06em] font-medium text-color-text-muted">
                      Your Requirements *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Tell us about your team size, goals, and when you'd like to run the workshop..."
                      value={form.message}
                      onChange={(e) => {
                        setForm(f => ({ ...f, message: e.target.value }));
                        if (errors.message) setErrors(er => ({ ...er, message: undefined }));
                      }}
                      className={`bg-color-bg-2 border rounded-2xl px-5 py-4 text-color-text outline-none transition-all resize-none font-medium text-sm ${
                        errors.message ? 'border-red-400 focus:border-red-400' : 'border-color-border focus:border-color-accent'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 font-medium">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading' || cooldown}
                    className="btn-primary w-full py-5 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Request Consultation
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-color-text-muted font-medium uppercase tracking-[0.06em]">
                    We respond within 24 hours with a tailored plan.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
