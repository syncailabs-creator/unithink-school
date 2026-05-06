import { motion } from 'motion/react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { DotGrid } from './DotGrid';

const plans = [
  {
    title: 'One-Day Workshop',
    price: 'â‚¹1,500',
    label: 'AWARENESS',
    perfectFor: 'AI awareness, pilot programs, leadership briefings, large department introductions',
    features: [
      '8 hours of hands-on training',
      '1 Lead Trainer + 1 Assistant per 50 participants',
      'Practical AI tool access during the session',
      'Course documentation & templates',
      'Prompt library tailored to your context',
      'Official Unithink certificate of completion',
      'All workshop materials in digital format'
    ],
    cta: 'Book One-Day Workshop',
    popular: false
  },
  {
    title: 'Two-Day Intensive',
    price: 'â‚¹2,000',
    label: 'MOST POPULAR',
    perfectFor: 'Department transformation, pre-placement student batches, AICTE FDP programs, company-wide AI rollouts',
    features: [
      '16 hours of intensive training across 2 days',
      '1 Lead Trainer + 1 Assistant per 50 participants',
      'Hands-on access to 10+ industry-standard AI platforms',
      'Live AI agent and automation building sessions',
      'Complete prompt libraries for your use-cases',
      'Custom workflow templates',
      'Official Unithink certificate of completion',
      '7-day post-workshop WhatsApp support channel'
    ],
    cta: 'Book Two-Day Workshop',
    popular: true
  },
  {
    title: 'Multi-Day Custom Program',
    price: 'Custom Pricing',
    label: 'ENTERPRISE',
    perfectFor: 'Institution-wide transformation, multi-department rollouts, advanced specialisation programs, long-term AI adoption engagements',
    features: [
      'Fully custom curriculum built around your organisation',
      '3 to 5 day extended programs (or modular multi-week structure)',
      'Advanced and specialised AI tracks by department or role',
      'Industry-specific application development during the workshop',
      'Long-term implementation support beyond delivery',
      'Ongoing consultation and progress check-ins',
      'Dedicated trainer team assigned to your account'
    ],
    cta: 'Request a Custom Quote',
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="section bg-color-bg relative overflow-hidden px-3 md:px-5">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-color-accent/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-color-accent/5 blur-[180px] rounded-full pointer-events-none" />
      <DotGrid />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col gap-8 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex flex-col gap-6 text-left items-start"
          >
            <span className="type-h6 text-color-accent">
              Simple, Transparent Pricing
            </span>
            <h2 className="type-h2 text-color-text">
              Workshops that <span className="text-color-accent">pay for themselves</span>
            </h2>
            <p className="type-p1 text-color-text-2 max-w-[640px]">
              No hidden extras. The price you see is what you pay, and it covers everything on the list below.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 items-stretch pt-4 lg:pt-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.215, 0.61, 0.355, 1] }}
                className={cn(
                  "bg-color-bg rounded-[1.5rem] lg:rounded-[2rem] p-5 sm:p-6 lg:p-8 flex flex-col gap-4 lg:gap-5 relative transition-all duration-700 hover:border-color-accent/40 shadow-soft border border-color-border",
                  plan.popular ? "border-color-accent/50 shadow-color-accent/5 lg:scale-[1.02] z-10 bg-color-bg-2" : ""
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-color-accent text-color-bg px-8 py-2 rounded-full text-[10px] font-semibold uppercase tracking-[0.06em] flex items-center gap-2 shadow-xl shadow-color-accent/30">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <span className="type-h6 text-color-accent">{plan.label}</span>
                  <h3 className="type-h3 text-color-text">{plan.title}</h3>
                  <div className="flex items-baseline gap-2 mt-3">
                    <span className="type-price text-color-accent">{plan.price}</span>
                    {plan.price !== 'Custom Pricing' && <span className="type-h6 text-color-text-muted">/ per participant</span>}
                  </div>
                </div>

                <p className="type-p2 text-color-text-2 italic opacity-80 border-l-2 border-color-accent/30 pl-4">
                  Perfect for: {plan.perfectFor}
                </p>

                <div className="flex flex-col gap-2 py-3 lg:py-4 border-y border-color-border">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm text-color-text-2">
                      <div className="w-5 h-5 rounded-lg bg-color-accent-bg flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-color-accent" />
                      </div>
                      <span className="leading-snug font-normal">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3 mt-auto">
                  <a
                    href="#contact"
                    className={cn(
                      "btn-primary w-full py-3.5 group/btn",
                      !plan.popular && "btn-secondary"
                    )}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-500" />
                  </a>
                  <p className="text-[10px] text-center text-color-text-muted font-medium uppercase tracking-[0.06em]">
                    Minimum batch: 50 participants
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
