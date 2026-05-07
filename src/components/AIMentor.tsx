import { motion } from 'motion/react';
import { MessageCircle, Map, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const WA_LINK = 'https://wa.me/919726217070?text=Hi%20Unithink%20School!%20I%27m%20interested%20in%20your%20AI%20training%20programs.';

const mentorPlans = [
  {
    title:   'Live Sunday Workshop',
    price:   'FREE',
    tagline: 'Every Sunday · Online · Open to all · Direct Q&A with our AI expert',
    features: [
      'Live 90-minute AI session every Sunday',
      'Ask anything directly to the expert. No filters, no pre-screening',
      'Topic rotates weekly: automation, agents, GenAI tools, career guidance',
      'Hands-on mini project each session',
      'Attendance certificate for consistent participants',
    ],
    cta:  'Join Free Sunday Workshop',   // Fixed: was misleadingly "Schedule Free 1:1 Call"
    note: 'Every Sunday · 10 AM IST · Zoom · No registration fee · No credit card',
    icon: MessageCircle,
  },
  {
    title:   'AI Community Access',
    price:   '₹299',
    tagline: 'Join our exclusive WhatsApp AI learning community with ongoing expert support',
    features: [
      'Private WhatsApp group with 500+ active AI learners',
      'Daily AI tool drops, workflow templates, and prompt packs',
      'Weekly exclusive resources: frameworks, use-case libraries, and case studies',
      'Direct access to Unithink trainers for questions',
      'AI job and opportunity board curated for India market',
      'Monthly live Q&A session with the full expert panel',
    ],
    cta:  'Join the Community',
    note: 'One-time ₹299 · Lifetime access · 500+ active members',
    icon: Users,
  },
  {
    title:   'Personalised AI Roadmap',
    price:   '₹999',
    tagline: 'A custom AI learning path built around where you are now and where you want to go',
    features: [
      '45-minute 1:1 deep-dive call with an Unithink expert',
      'Custom PDF roadmap with milestones, timelines, and weekly targets',
      'Tool and platform recommendations specific to your role and industry',
      'Curated resource list: courses, GitHub repos, papers, and communities',
      '30-day check-in follow-up call to review progress',
      'Community access included at no extra charge (₹299 value)',
    ],
    cta:  'Get My Roadmap',
    note: 'Includes: 1:1 call + Custom PDF roadmap + 30-day follow-up · ₹999 one-time',
    icon: Map,
  },
];

export function AIMentor() {
  return (
    <section id="mentor" className="section bg-color-bg-2 relative overflow-hidden px-3 md:px-5">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-color-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-color-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex flex-col gap-4 text-left items-start"
          >
            <span className="type-h6 text-color-accent">
              AI Mentor
            </span>
            <h2 className="type-h2 text-color-text">
              Learn AI at <span className="text-color-accent">Your Own Pace</span>
            </h2>
            <p className="type-p1 text-color-text-2 max-w-[640px]">
              Not ready for a full workshop? We run free Sunday sessions, a live AI community, and 1:1 expert guidance at prices that actually make sense.
            </p>
          </motion.div>

          {/* Plan Cards */}
          <div className="grid lg:grid-cols-3 gap-8 items-stretch pt-8">
            {mentorPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                className="bg-color-bg rounded-[2.5rem] p-10 flex flex-col gap-8 group hover:border-color-accent/30 transition-all duration-500 relative overflow-hidden border border-color-border shadow-soft"
              >
                {/* Hover glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-color-accent/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="flex flex-col gap-6 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-color-accent/10 text-color-accent flex items-center justify-center group-hover:bg-color-accent group-hover:text-color-bg transition-all duration-500">
                    <plan.icon className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="type-h3 text-color-text group-hover:text-color-accent transition-colors duration-300">
                      {plan.title}
                    </h3>
                    <span className="type-price text-color-accent">
                      {plan.price}
                    </span>
                  </div>
                  <p className="type-p2 text-color-text-2 opacity-80">
                    {plan.tagline}
                  </p>
                </div>

                <div className="flex flex-col gap-4 py-8 border-y border-color-border relative z-10">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm text-color-text-2">
                      <div className="w-5 h-5 rounded-full bg-color-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-color-accent" />
                      </div>
                      <span className="leading-tight font-normal">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-4 relative z-10">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'w-full py-4',
                      plan.price === 'FREE' ? 'btn-secondary' : 'btn-primary'
                    )}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <p className="text-[10px] text-center text-color-text-muted font-medium uppercase tracking-[0.06em] leading-relaxed">
                    {plan.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
