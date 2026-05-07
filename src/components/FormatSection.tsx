import { motion } from 'motion/react';
import { FormatCard } from '../types';
import { Check, ArrowRight, Download } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useState } from 'react';
import { DotGrid } from './DotGrid';

interface FormatSectionProps {
  eyebrow: string;
  title: string;
  description?: string;
  note?: string;
  formats: FormatCard[];
  brochureLabel?: string;
}

export function FormatSection({ eyebrow, title, description, note, formats, brochureLabel }: FormatSectionProps) {
  const [activeIndex, setActiveIndex] = useState(
    formats.findIndex(f => f.isPopular) >= 0 ? formats.findIndex(f => f.isPopular) : 0
  );

  const active = formats[activeIndex];

  return (
    <section className="section bg-color-bg-2 relative overflow-hidden px-3 md:px-5">
      <DotGrid />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-color-accent/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex flex-col gap-6 text-left items-start"
          >
            <span className="type-h6 text-color-accent">
              {eyebrow}
            </span>
            <h2 className="type-h2 text-color-text">
              {title}
            </h2>
            {description && (
              <p className="type-p1 text-color-text-2 max-w-[640px]">
                {description}
              </p>
            )}
            {note && (
              <p className="text-sm text-color-text-muted font-medium leading-relaxed max-w-[560px] mt-2">
                {note}
              </p>
            )}
          </motion.div>

          {/* Tabbed Layout */}
          <div className="grid lg:grid-cols-12 gap-6 items-start">
            {/* Left: Tab selectors */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible -mx-6 px-6 lg:mx-0 lg:px-0 pb-1 lg:pb-0">
              {formats.map((format, index) => (
                <button
                  key={format.title}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "flex-shrink-0 lg:flex-shrink text-left p-5 lg:p-6 rounded-2xl border transition-all duration-300 group relative overflow-hidden",
                    activeIndex === index
                      ? "bg-color-bg border-color-accent shadow-lg shadow-color-accent/10"
                      : "bg-color-bg border-color-border/60 hover:border-color-accent/30"
                  )}
                >
                  {format.isPopular && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-color-accent text-color-bg text-[9px] font-medium uppercase tracking-[0.06em]">
                      Popular
                    </span>
                  )}
                  <div className="flex items-start gap-5">
                    <span className={cn(
                      "text-3xl font-heading font-bold tracking-tighter transition-colors duration-500",
                      activeIndex === index ? "text-color-accent" : "text-color-text/30 group-hover:text-color-accent/60"
                    )}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex flex-col gap-2 pt-1">
                      <span className={cn(
                        "text-lg font-heading font-semibold tracking-tight transition-colors duration-500 leading-tight",
                        activeIndex === index ? "text-color-text" : "text-color-text group-hover:text-color-text"
                      )}>
                        {format.title}
                      </span>
                      <span className={cn(
                        "text-sm font-semibold transition-colors duration-500",
                        activeIndex === index ? "text-color-accent" : "text-color-text-muted group-hover:text-color-accent/60"
                      )}>
                        {format.price}
                      </span>
                    </div>
                  </div>
                  {activeIndex === index && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 rounded-r-full bg-color-accent"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right: Active format details */}
            <div className="lg:col-span-8">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                className="bg-color-bg rounded-2xl lg:rounded-[3rem] border border-color-border shadow-soft p-6 md:p-10 flex flex-col gap-8"
              >
                {/* Top: Title + Price */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="type-h3 text-color-text">
                      {active.title}
                    </h3>
                    <div className="type-price text-color-accent">
                      {active.price}
                    </div>
                  </div>
                  {active.isPopular && (
                    <div className="inline-flex items-center self-start px-5 py-2 rounded-full bg-color-accent/10 border border-color-accent/30 text-color-accent text-[10px] font-medium uppercase tracking-[0.06em]">
                      ★ Most Popular
                    </div>
                  )}
                </div>

                {/* Best For + What Happens */}
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <span className="type-h6 text-color-text-muted">Best For</span>
                    <p className="type-p2 text-color-text-2 leading-relaxed">{active.bestFor}</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="type-h6 text-color-text-muted">What Happens</span>
                    <p className="type-p2 text-color-text-2 leading-relaxed">{active.whatHappens}</p>
                  </div>
                </div>

                {/* Includes */}
                <div className="pt-8 border-t border-color-border flex flex-col gap-6">
                  <span className="type-h6 text-color-text-muted">What's Included</span>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {active.includes.map((item) => (
                      <div key={item} className="flex items-start gap-3 group/item">
                        <div className="w-6 h-6 rounded-xl bg-color-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-color-accent" />
                        </div>
                        <span className="text-sm text-color-text-2 leading-snug font-normal">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="#contact"
                    className={cn(
                      "btn-primary flex-1 py-5 group/btn justify-center",
                      !active.isPopular && "btn-secondary"
                    )}
                  >
                    Book This Format
                    <ArrowRight className="ml-3 w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-500" />
                  </a>
                  {brochureLabel && (
                    <a
                      href="https://wa.me/919726217070?text=Hi%2C%20I%20would%20like%20to%20request%20the%20brochure"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl border border-color-border text-color-text-2 text-sm font-medium hover:border-color-accent/50 hover:text-color-accent transition-all duration-500"
                    >
                      <Download className="w-4 h-4" />
                      {brochureLabel}
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
