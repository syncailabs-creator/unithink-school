import { motion } from 'motion/react';
import { Phone, Mail, MessageSquare, Check, Clock, Send, MapPin, Star, Building, Users, ChevronDown, ArrowRight } from 'lucide-react';
import { SEO, breadcrumbSchema, localBusinessSchema } from '../components/SEO';
import { DotGrid } from '../components/DotGrid';
import { cn } from '@/src/lib/utils';
import React, { useState } from 'react';

const steps = [
  { step: 1, title: 'Requirement Review', desc: 'We review your requirements within 24 hours — by a trainer, not a sales bot.' },
  { step: 2, title: 'Tailored Proposal', desc: 'A specific program recommendation, curriculum outline, and pricing breakdown — in 48 hours.' },
  { step: 3, title: 'Discovery Call (Free)', desc: 'A 30-minute call to finalise scope, timeline, and any customisation needed.' },
  { step: 4, title: 'Booking Confirmation', desc: 'Workshop confirmed. Pre-workshop materials and participant onboarding sent immediately.' },
];

const socialProof = [
  { label: 'Organisations Trained', value: '9+', icon: <Building className="w-5 h-5" /> },
  { label: 'Participants Trained', value: '1,800+', icon: <Users className="w-5 h-5" /> },
  { label: 'Avg Satisfaction', value: '95%', icon: <Star className="w-5 h-5" /> },
  { label: 'Response Time', value: '< 24h', icon: <Clock className="w-5 h-5" /> },
];


const faqs = [
  {
    q: "How quickly will I receive a response?",
    a: "All enquiries submitted through the form receive a response within 24 hours, Monday to Saturday. WhatsApp messages typically receive a response within 2–4 hours during business hours."
  },
  {
    q: "What information should I include for the fastest proposal?",
    a: "The most useful information is: your audience type (corporate / students / faculty), expected number of participants, preferred delivery format (on-site, online, hybrid), your timeline, and any specific AI tools or use-cases you want covered."
  },
  {
    q: "Is the discovery call free?",
    a: "Yes. The initial discovery call is completely free. It is a 30-minute conversation to understand your requirements, with no obligation to proceed. Most organisations receive a firm proposal within 48 hours of the call."
  },
  {
    q: "Can I request a workshop for a specific date?",
    a: "Yes. Mention your preferred date in the message field. Standard formats can be booked and delivered within 7–14 days. Custom programs may require 2–3 weeks."
  },
  {
    q: "Do you have a physical office?",
    a: "We are based in Ahmedabad, Gujarat. For local corporate clients or institutions wanting an in-person meeting, we are happy to schedule one. Contact us on WhatsApp to coordinate."
  },
  {
    q: "Can you deliver workshops online or hybrid?",
    a: "Yes. We deliver fully online, fully on-site, and hybrid formats. Online workshops use Zoom with breakout rooms for hands-on sessions. On-site is available anywhere in Gujarat and major metros across India. Hybrid is available for cohorts of 50+."
  },
  {
    q: "What is the minimum batch size for a corporate workshop?",
    a: "Our standard minimum is 10 participants for a corporate batch. For smaller teams, we recommend our AI Mentor program as a starting point before scaling to a full workshop. We do accommodate smaller batches for senior leadership sessions."
  },
  {
    q: "Do participants receive a certificate?",
    a: "Yes. All participants receive a digital completion certificate from Unithink School. Faculty participants completing AICTE-aligned FDPs receive AICTE-recognised certification documentation. Student workshop participants get portfolio-ready project certificates."
  },
];


export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="pt-20 relative overflow-hidden">
      <SEO
        title="Contact Us — Book Your AI Training"
        description="Get in touch with Unithink School to plan your AI training. We respond within 24 hours with a tailored program recommendation. Based in Ahmedabad, delivering workshops across India."
        keywords="contact AI training India, book AI workshop, AI training enquiry, Unithink School contact, AI workshop Ahmedabad"
        canonical="/contact"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.unithinkschool.com' },
            { name: 'Contact', url: 'https://www.unithinkschool.com/contact' },
          ]),
          localBusinessSchema,
        ]}
      />
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-color-accent/5 blur-[100px]" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-color-cta/5 blur-[130px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-color-accent/3 blur-[120px]" />
      </div>

      {/* Hero */}
      <section className="bg-color-bg relative py-16 md:py-24 overflow-hidden px-3 md:px-5">
        <DotGrid />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-color-accent/10 border border-color-accent/20 text-color-accent text-xs font-medium uppercase tracking-[0.06em] mb-8"
            >
              <MessageSquare className="w-4 h-4" />
              Get in Touch
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="type-h1 text-color-text mb-6"
            >
              Let's Plan Your{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-color-bg px-4 py-1 bg-color-accent">AI Training.</span>
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="type-p1 text-color-text-2 mb-10 max-w-3xl"
            >
              Tell us about your team, your goals, and your timeline. We'll recommend the right program and have a tailored proposal in your inbox within 48 hours.
            </motion.p>

            {/* Quick stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              {socialProof.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl border shadow-soft transition-all duration-300 hover:border-color-accent/30 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(251,176,59,0.06) 0%, rgba(251,176,59,0.02) 100%)',
                    borderColor: 'rgba(251,176,59,0.2)',
                  }}
                >
                  <div className="w-8 h-8 rounded-xl bg-color-accent/10 flex items-center justify-center text-color-accent">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-lg font-heading font-semibold text-color-text leading-none">{item.value}</div>
                    <div className="text-[9px] font-medium uppercase tracking-[0.06em] text-color-text-muted">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-color-accent/5 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Main Split Layout */}
      <section className="py-16 md:py-24 bg-color-bg-2 relative overflow-hidden px-3 md:px-5">
        <DotGrid />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(251,176,59,0.04) 0%, transparent 60%)' }}
        />
        <div className="max-w-7xl mx-auto w-full relative">
          <div className="grid lg:grid-cols-12 gap-10 items-start">

            {/* Left: Context + Trust */}
            <div className="lg:col-span-5">

              {/* What happens after */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.08 }}
                transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
                className="rounded-[2.5rem] border border-color-border overflow-hidden shadow-soft"
                style={{ background: 'var(--color-bg)' }}
              >
                {/* Card header */}
                <div
                  className="px-8 py-6 border-b border-color-border"
                  style={{ background: 'linear-gradient(135deg, rgba(251,176,59,0.06) 0%, transparent 70%)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-[2px] rounded-full" style={{ background: 'linear-gradient(to right, #FBB03B, transparent)' }} />
                    <h2 className="type-h6 text-color-accent">What Happens Next</h2>
                  </div>
                  <p className="type-h3 text-color-text mt-2">After You Submit</p>
                </div>

                <div className="p-8">
                  <div className="space-y-0">
                    {steps.map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.08 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex gap-5 group"
                      >
                        <div className="relative flex-shrink-0 flex flex-col items-center">
                          <div
                            className="w-12 h-12 rounded-2xl flex items-center justify-center font-heading font-black text-xl transition-all duration-500 group-hover:scale-110"
                            style={{
                              background: 'linear-gradient(135deg, rgba(251,176,59,0.18), rgba(251,176,59,0.06))',
                              border: '1px solid rgba(251,176,59,0.3)',
                              color: '#FBB03B',
                            }}
                          >
                            {step.step}
                          </div>
                          {i < steps.length - 1 && (
                            <div className="w-[1.5px] flex-grow my-1" style={{ background: 'linear-gradient(to bottom, rgba(251,176,59,0.3), rgba(251,176,59,0.05))' }} />
                          )}
                        </div>
                        <div className={cn("pb-6", i === steps.length - 1 && "pb-0")}>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[9px] font-medium uppercase tracking-[0.06em] text-color-accent opacity-70">Step {step.step}</span>
                          </div>
                          <h4 className="font-heading font-bold text-color-text mb-1 group-hover:text-color-accent transition-colors duration-500 text-base">{step.title}</h4>
                          <p className="type-p2 text-color-text-muted">{step.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.08 }}
                transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
                className="rounded-[2.5rem] border border-color-border sticky top-28 shadow-soft overflow-hidden"
                style={{ background: 'var(--color-bg)' }}
              >
                {/* Gradient top border accent */}
                <div
                  className="h-[3px] w-full"
                  style={{ background: 'linear-gradient(to right, transparent, rgba(251,176,59,0.5) 30%, #FBB03B 50%, rgba(251,176,59,0.5) 70%, transparent)' }}
                />

                {formState === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20 px-10"
                  >
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center text-color-accent mx-auto mb-8"
                      style={{ background: 'linear-gradient(135deg, rgba(251,176,59,0.2), rgba(251,176,59,0.08))' }}
                    >
                      <Check className="w-12 h-12" />
                    </div>
                    <h3 className="type-h3 text-color-text mb-4">Message Received!</h3>
                    <p className="text-color-text-muted mb-2 font-medium max-w-sm mx-auto">
                      We've received your enquiry. A trainer will respond within 24 hours with a tailored recommendation.
                    </p>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-color-accent mb-10">
                      Check WhatsApp — we often respond there first.
                    </p>
                    <button
                      onClick={() => setFormState('idle')}
                      className="btn-secondary px-8 py-3"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <div className="p-8 md:p-10">
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-color-accent shadow-glow animate-pulse" />
                        <span className="text-[10px] font-medium uppercase tracking-[0.06em] text-color-accent">We respond within 24 hours</span>
                      </div>
                      <h3 className="type-h3 text-color-text mb-2">Request a Consultation</h3>
                      <p className="text-sm text-color-text-muted font-medium">Fill in your details — we'll come back with a specific program recommendation.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-[10px] font-medium uppercase tracking-[0.06em] text-color-text-muted">I'm interested in *</label>
                          <select required className="w-full bg-color-bg-2 border border-color-border rounded-2xl px-4 py-3.5 text-color-text focus:outline-none focus:border-color-accent/50 transition-colors font-medium text-sm">
                            <option value="">Select a program</option>
                            <option value="corporate">Corporate AI Training</option>
                            <option value="student">Student Workshop</option>
                            <option value="faculty">Faculty Development (FDP)</option>
                            <option value="mentor">AI Mentor</option>
                            <option value="general">General Enquiry</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-medium uppercase tracking-[0.06em] text-color-text-muted">Full Name *</label>
                          <input required type="text" placeholder="Your full name" className="w-full bg-color-bg-2 border border-color-border rounded-2xl px-4 py-3.5 text-color-text focus:outline-none focus:border-color-accent/50 transition-colors font-medium text-sm" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-[10px] font-medium uppercase tracking-[0.06em] text-color-text-muted">Email Address *</label>
                          <input required type="email" placeholder="you@organisation.com" className="w-full bg-color-bg-2 border border-color-border rounded-2xl px-4 py-3.5 text-color-text focus:outline-none focus:border-color-accent/50 transition-colors font-medium text-sm" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-medium uppercase tracking-[0.06em] text-color-text-muted">WhatsApp Number *</label>
                          <input required type="tel" placeholder="+91 XXXXX XXXXX" className="w-full bg-color-bg-2 border border-color-border rounded-2xl px-4 py-3.5 text-color-text focus:outline-none focus:border-color-accent/50 transition-colors font-medium text-sm" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-[10px] font-medium uppercase tracking-[0.06em] text-color-text-muted">Organisation / College *</label>
                          <input required type="text" placeholder="Your company or institution" className="w-full bg-color-bg-2 border border-color-border rounded-2xl px-4 py-3.5 text-color-text focus:outline-none focus:border-color-accent/50 transition-colors font-medium text-sm" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-medium uppercase tracking-[0.06em] text-color-text-muted">Your Role</label>
                          <input type="text" placeholder="e.g. HR Manager, HOD, Student" className="w-full bg-color-bg-2 border border-color-border rounded-2xl px-4 py-3.5 text-color-text focus:outline-none focus:border-color-accent/50 transition-colors font-medium text-sm" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-[10px] font-medium uppercase tracking-[0.06em] text-color-text-muted">Expected Audience Size</label>
                          <select className="w-full bg-color-bg-2 border border-color-border rounded-2xl px-4 py-3.5 text-color-text focus:outline-none focus:border-color-accent/50 transition-colors font-medium text-sm">
                            <option value="">Select size</option>
                            <option value="10-50">10–50</option>
                            <option value="50-100">50–100</option>
                            <option value="100-200">100–200</option>
                            <option value="200-500">200–500</option>
                            <option value="500+">500+</option>
                            <option value="not-sure">Not Sure Yet</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-medium uppercase tracking-[0.06em] text-color-text-muted">Preferred Timeline</label>
                          <select className="w-full bg-color-bg-2 border border-color-border rounded-2xl px-4 py-3.5 text-color-text focus:outline-none focus:border-color-accent/50 transition-colors font-medium text-sm">
                            <option value="">Select timeline</option>
                            <option value="2-weeks">Within 2 weeks</option>
                            <option value="1-month">Within a month</option>
                            <option value="1-3-months">1–3 months</option>
                            <option value="exploring">Just exploring</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-medium uppercase tracking-[0.06em] text-color-text-muted">Message / Requirements</label>
                        <textarea
                          rows={4}
                          placeholder="Your team's current AI level, specific tools you want covered, key challenges, or any other context that helps us tailor our proposal."
                          className="w-full bg-color-bg-2 border border-color-border rounded-2xl px-4 py-3.5 text-color-text focus:outline-none focus:border-color-accent/50 transition-colors resize-none font-medium text-sm"
                        />
                      </div>

                      <button
                        disabled={formState === 'submitting'}
                        className="w-full btn-primary py-5 group"
                      >
                        {formState === 'submitting' ? (
                          <span className="flex items-center justify-center gap-3">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                              className="w-5 h-5 border-2 border-color-bg border-t-transparent rounded-full"
                            />
                            Processing...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-3">
                            Request Free Consultation
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </span>
                        )}
                      </button>
                      <p className="text-[10px] text-center text-color-text-muted uppercase tracking-[0.06em] font-medium">
                        Response within 24h · Tailored proposal · No spam · No commitment required
                      </p>
                    </form>
                  </div>
                )}
              </motion.div>
            </div>
          </div>

          {/* Direct Line — full width below both columns */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.08 }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            className="mt-10 rounded-[2.5rem] border border-color-border overflow-hidden shadow-soft"
            style={{ background: 'var(--color-bg)' }}
          >
            <div
              className="px-8 py-6 border-b border-color-border"
              style={{ background: 'linear-gradient(135deg, rgba(251,176,59,0.06) 0%, transparent 70%)' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] rounded-full" style={{ background: 'linear-gradient(to right, #FBB03B, transparent)' }} />
                <h2 className="type-h6 text-color-accent">Direct Line</h2>
              </div>
              <p className="type-h3 text-color-text mt-2">Reach Us Directly</p>
            </div>

            <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                {
                  href: "tel:+919726217070",
                  icon: Phone,
                  label: "Call / WhatsApp",
                  value: "+91 9726217070",
                  note: "Mon–Sat, 9 AM – 7 PM IST",
                  hoverColor: 'rgba(251,176,59,1)',
                  hoverBg: 'rgba(251,176,59,0.08)',
                },
                {
                  href: "https://wa.me/919726217070",
                  icon: MessageSquare,
                  label: "WhatsApp",
                  value: "Fastest Response",
                  note: "Typically replies in 2–4 hours",
                  hoverColor: '#25D366',
                  hoverBg: 'rgba(37,211,102,0.08)',
                },
                {
                  href: "mailto:unithink.school@gmail.com",
                  icon: Mail,
                  label: "Email",
                  value: "unithink.school@gmail.com",
                  note: "For detailed proposals",
                  hoverColor: 'rgba(251,176,59,1)',
                  hoverBg: 'rgba(251,176,59,0.08)',
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.08 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-transparent transition-all duration-300 group"
                  style={{ background: 'rgba(var(--color-bg-2-rgb, 248,248,250), 1)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = item.hoverBg;
                    (e.currentTarget as HTMLElement).style.borderColor = item.hoverColor + '33';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(var(--color-bg-2-rgb, 248,248,250), 1)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'transparent';
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-soft"
                    style={{ background: 'rgba(251,176,59,0.1)', color: '#FBB03B' }}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] text-color-text-muted uppercase tracking-[0.06em] font-medium mb-0.5">{item.label}</p>
                    <p className="text-sm font-semibold text-color-text tracking-tight truncate group-hover:text-color-accent transition-colors duration-300">{item.value}</p>
                    <p className="text-[10px] text-color-text-muted font-medium">{item.note}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-color-text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                </motion.a>
              ))}

              <div className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: 'rgba(var(--color-bg-2-rgb, 248,248,250), 1)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft" style={{ background: 'rgba(251,176,59,0.1)', color: '#FBB03B' }}>
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] text-color-text-muted uppercase tracking-[0.06em] font-medium mb-0.5">Based In</p>
                  <p className="text-sm font-semibold text-color-text tracking-tight">Ahmedabad, Gujarat</p>
                  <p className="text-[10px] text-color-text-muted font-medium">Delivering workshops across India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ — Accordion */}
      <section className="pt-24 md:pt-36 pb-12 md:pb-20 lg:pb-28 bg-color-bg relative overflow-hidden px-3 md:px-5">
        <DotGrid />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(251,176,59,0.04) 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto w-full relative">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.08 }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex flex-col gap-6 text-left items-start mb-14"
          >
            <span className="type-h6 text-color-accent">Quick Answers</span>
            <h2 className="type-h2 text-color-text">
              Booking Process <span className="text-color-accent">FAQ</span>
            </h2>
            <p className="type-p1 text-color-text-2 max-w-[640px]">
              Everything you need to know before reaching out.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.08 }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="rounded-[2rem] border border-color-border shadow-soft overflow-hidden transition-all duration-300 hover:border-color-accent/20"
                style={{ background: 'var(--color-bg)' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-7 text-left group"
                >
                  <h3 className="text-base font-heading font-bold text-color-text group-hover:text-color-accent transition-colors duration-300 pr-4 tracking-tight">
                    {faq.q}
                  </h3>
                  <div
                    className={cn(
                      "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300",
                      openFaq === i
                        ? "bg-color-accent text-color-bg"
                        : "bg-color-bg-2 text-color-text-muted group-hover:bg-color-accent/10 group-hover:text-color-accent"
                    )}
                  >
                    <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", openFaq === i ? "rotate-180" : "")} />
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-7 pb-7">
                    <div className="h-[1px] bg-color-border mb-4" />
                    <p className="text-color-text-muted leading-relaxed font-medium text-sm">
                      {faq.a}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
