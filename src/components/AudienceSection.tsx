import { motion } from 'motion/react';
import { AudienceCard } from '../types';
import { cn } from '@/src/lib/utils';
import { ArrowRight } from 'lucide-react';
import { DotGrid } from './DotGrid';

interface AudienceSectionProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  cards: AudienceCard[];
  columns?: number;
  cta?: { text: string; href: string };
}

export function AudienceSection({ eyebrow, title, description, cards, columns = 2, cta }: AudienceSectionProps) {
  return (
    <section className="section bg-color-bg relative overflow-hidden px-3 md:px-5">
      <DotGrid />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-color-accent/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-color-cta/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex flex-col gap-6 text-left items-start"
          >
            <span className="type-h6 text-color-accent">
              {eyebrow}
            </span>
            <h2 className="type-h2 text-color-text" style={{ whiteSpace: 'pre-line' }}>
              {title}
            </h2>
            {description && (
              <p className="type-p1 text-color-text-2 max-w-[640px]">
                {description}
              </p>
            )}
          </motion.div>

          {/* Cards */}
          <div className={cn(
            "grid gap-6",
            columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-4"
          )}>
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                className="bg-color-bg border border-color-border shadow-soft hover:border-color-accent/40 hover:shadow-xl hover:shadow-color-accent/5 transition-all duration-500 group overflow-hidden flex flex-col rounded-2xl lg:rounded-[2.5rem]"
              >
                {/* Card top strip with number */}
                <div className="flex items-center justify-between px-6 lg:px-8 pt-6 lg:pt-8 pb-0">
                  <span className="text-5xl font-heading font-black text-color-accent/20 group-hover:text-color-accent transition-colors duration-500 tracking-tighter select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {card.icon && (
                    <div className="w-14 h-14 rounded-[1.25rem] bg-color-bg flex items-center justify-center text-color-accent border border-color-border group-hover:bg-color-accent group-hover:text-color-bg group-hover:shadow-xl group-hover:shadow-color-accent/20 transition-all duration-700">
                      {card.icon}
                    </div>
                  )}
                </div>

                {/* Card body */}
                <div className="flex flex-col gap-3 px-6 lg:px-8 pb-5 pt-4 flex-1">
                  <h3 className="type-h3 text-color-text group-hover:text-color-accent transition-colors duration-500">
                    {card.title}
                  </h3>
                  <p className="type-p2 text-color-text-2 group-hover:text-color-text transition-colors duration-500">
                    {card.description}
                  </p>
                </div>

                {/* Bottom strip */}
                <div className="px-6 lg:px-8 pb-6 lg:pb-8 mt-auto">
                  <div className="h-[1px] bg-color-border mb-6 group-hover:bg-color-accent/20 transition-colors duration-700" />
                  <a
                    href="#contact"
                    className="flex items-center justify-between"
                    onClick={e => e.stopPropagation()}
                  >
                    <span className="text-[10px] uppercase tracking-[0.06em] font-medium text-color-text-muted group-hover:text-color-accent transition-colors duration-500">
                      Book Your Workshop
                    </span>
                    <div className="w-8 h-8 rounded-full border border-color-border flex items-center justify-center text-color-text-muted group-hover:bg-color-accent group-hover:border-color-accent group-hover:text-color-bg transition-all duration-500">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Optional CTA */}
          {cta && (
            <div className="text-center">
              <a href={cta.href} className="btn-secondary px-10 py-5 group/btn inline-flex">
                {cta.text}
                <ArrowRight className="ml-3 w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-500" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
