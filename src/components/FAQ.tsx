import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, BookOpen, Zap, Award, Building2, CalendarDays, Cpu, TrendingUp, Rocket, Briefcase, GraduationCap, ShieldCheck, FileText, Code2, Layers } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { FAQItem, FAQCategory } from '../types';
import { DotGrid } from './DotGrid';

interface FAQProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: FAQItem[];
  categories?: FAQCategory[];
}

// Icon per category id
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  general:    <HelpCircle  className="w-[15px] h-[15px]" />,
  programs:   <Layers      className="w-[15px] h-[15px]" />,
  learning:   <Code2       className="w-[15px] h-[15px]" />,
  outcomes:   <Award       className="w-[15px] h-[15px]" />,
  about:      <Building2   className="w-[15px] h-[15px]" />,
  delivery:   <CalendarDays className="w-[15px] h-[15px]" />,
  tools:      <Cpu         className="w-[15px] h-[15px]" />,
  results:    <TrendingUp  className="w-[15px] h-[15px]" />,
  start:      <Rocket      className="w-[15px] h-[15px]" />,
  workshop:   <Zap         className="w-[15px] h-[15px]" />,
  career:     <Briefcase   className="w-[15px] h-[15px]" />,
  college:    <GraduationCap className="w-[15px] h-[15px]" />,
  aicte:      <ShieldCheck className="w-[15px] h-[15px]" />,
  curriculum: <BookOpen    className="w-[15px] h-[15px]" />,
  docs:       <FileText    className="w-[15px] h-[15px]" />,
  booking:    <CalendarDays className="w-[15px] h-[15px]" />,
  cert:       <Award       className="w-[15px] h-[15px]" />,
};

export function FAQ({
  eyebrow = 'Common Questions',
  title = 'Frequently Asked Questions',
  description = 'Clear answers to help you decide the right AI program for your goals.',
  items,
  categories,
}: FAQProps) {
  const [activeIndex,    setActiveIndex]    = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>(categories?.[0]?.id ?? '');

  const filtered = categories && activeCategory
    ? items.filter(item => item.category === activeCategory)
    : items;

  const icon = CATEGORY_ICONS[activeCategory] ?? <HelpCircle className="w-[15px] h-[15px]" />;

  const switchCategory = (id: string) => {
    setActiveCategory(id);
    setActiveIndex(null);
  };

  return (
    <section className="section bg-color-bg relative overflow-hidden px-3 md:px-5">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(251,176,59,0.04) 0%, transparent 60%)' }}
      />
      <DotGrid />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col gap-10 md:gap-12">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex flex-col gap-6 text-left items-start"
          >
            <span className="type-h6 text-color-accent">
              {eyebrow}
            </span>
            <h2 className="type-h2 text-color-text">
              {title}
            </h2>
            <p className="type-p1 text-color-text-2 max-w-[640px]">
              {description}
            </p>
          </motion.div>

          {/* Category Chips */}
          {categories && categories.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex gap-3 overflow-x-auto no-scrollbar pb-1 px-1 sm:flex-wrap sm:overflow-x-visible sm:pb-0"
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => switchCategory(cat.id)}
                  className={cn(
                    'px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border select-none whitespace-nowrap',
                    activeCategory === cat.id
                      ? 'bg-color-accent text-color-bg border-color-accent shadow-lg shadow-color-accent/25 scale-[1.04]'
                      : 'bg-transparent text-color-text-muted border-color-border hover:border-color-accent/40 hover:text-color-text hover:bg-color-bg-2'
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </motion.div>
          )}

          {/* Accordion */}
          <div className="max-w-[860px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="flex flex-col gap-3"
              >
                {filtered.map((faq, index) => (
                  <div
                    key={index}
                    className={cn(
                      'rounded-2xl overflow-hidden transition-all duration-400 border bg-color-bg',
                      activeIndex === index
                        ? 'border-color-accent/30 bg-color-bg-2 shadow-soft'
                        : 'border-color-border hover:bg-color-bg-2 hover:border-color-border/80'
                    )}
                  >
                    <button
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                      className="w-full px-6 py-5 md:py-6 flex items-center gap-4 text-left group"
                      aria-expanded={activeIndex === index}
                    >
                      {/* Category icon box */}
                      <div className={cn(
                        'w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-300',
                        activeIndex === index
                          ? 'bg-color-accent/10 border-color-accent/30 text-color-accent'
                          : 'bg-color-bg-2 border-color-border text-color-text-muted group-hover:border-color-accent/30 group-hover:text-color-accent'
                      )}>
                        {icon}
                      </div>

                      <span className={cn(
                        'flex-1 text-base font-heading font-semibold tracking-tight transition-colors duration-300',
                        activeIndex === index
                          ? 'text-color-accent'
                          : 'text-color-text group-hover:text-color-accent'
                      )}>
                        {faq.question}
                      </span>

                      <ChevronDown className={cn(
                        'w-5 h-5 shrink-0 transition-all duration-300 text-color-text-muted',
                        activeIndex === index
                          ? 'rotate-180 text-color-accent'
                          : 'group-hover:text-color-accent'
                      )} />
                    </button>

                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.38, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                          <div className="pl-[3.25rem] pr-6 md:pr-8 pb-6 md:pb-7 text-sm text-color-text-2 leading-relaxed font-normal border-t border-color-border/50 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
