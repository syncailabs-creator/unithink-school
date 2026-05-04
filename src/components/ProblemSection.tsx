import { DotGrid } from './DotGrid';
import { motion } from 'motion/react';
import { ProblemCard } from '../types';

interface ProblemSectionProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  cards: ProblemCard[];
}

export function ProblemSection({ eyebrow, title, description, cards }: ProblemSectionProps) {
  return (
    <section className="section bg-color-bg-2 relative overflow-hidden px-3 md:px-5">
      <DotGrid />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-color-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col gap-12">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.08 }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
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
          <div className="grid md:grid-cols-3 gap-10">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.08 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.215, 0.61, 0.355, 1] }}
                className="bg-color-bg p-10 md:p-12 rounded-[3rem] border border-color-border hover:border-color-accent/30 transition-all duration-700 group relative overflow-hidden shadow-soft"
              >
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-color-accent/5 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                <div className="flex flex-col gap-6 relative z-10">
                  <span className="text-color-accent font-heading font-black text-5xl opacity-20 group-hover:opacity-100 transition-all duration-700 tracking-tighter">
                    0{index + 1}
                  </span>
                  <h3 className="type-h3 text-color-text group-hover:text-color-accent transition-colors duration-500">
                    {card.title}
                  </h3>
                  <p className="type-p2 text-color-text-2 group-hover:text-color-text transition-colors duration-500">
                    {card.description}
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
