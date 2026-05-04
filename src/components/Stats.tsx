import { motion } from 'motion/react';
import { Users, Building2, Star, Zap } from 'lucide-react';
import { StatItem } from '../types';
import { DotGrid } from './DotGrid';

interface StatsProps {
  items?: StatItem[];
  heading?: string;
  subheading?: string;
  compact?: boolean;
}

const defaultStats: StatItem[] = [
  { value: '1,800+', label: 'Participants Trained',  icon: Users },
  { value: '200+',   label: 'Organizations Served',  icon: Building2 },
  { value: '95%',    label: 'Satisfaction Rate',     icon: Star },
  { value: '20+',    label: 'Workshops Delivered',   icon: Zap },
];

export function Stats({ items = defaultStats, heading, subheading, compact = false }: StatsProps) {
  return (
    <section className="py-8 md:py-10 lg:py-12 bg-color-bg relative overflow-hidden px-3 md:px-5">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(251,176,59,0.07) 0%, transparent 70%)' }}
      />
      <DotGrid intensity="medium" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {(heading || subheading) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.08 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 text-left items-start mb-6 md:mb-8 lg:mb-10"
          >
            {heading && (
              <h2 className="type-h2 text-color-text">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="type-p1 text-color-text-2 max-w-2xl">
                {subheading}
              </p>
            )}
          </motion.div>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0">
          {items.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.08 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
              className="flex flex-col items-center text-center gap-4 group sm:border-r last:border-r-0 border-color-border px-4 sm:px-6"
            >
              {stat.icon && (
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border border-color-accent/20 group-hover:border-color-accent/40 transition-all duration-500 group-hover:shadow-[0_4px_16px_rgba(251,176,59,0.2)]"
                  style={{ background: 'linear-gradient(135deg, rgba(251,176,59,0.14) 0%, rgba(251,176,59,0.05) 100%)' }}
                >
                  <stat.icon className="w-5 h-5 text-color-accent" />
                </div>
              )}
              <div className="relative">
                <span className={`${compact ? 'type-h1' : 'type-display'} block shimmer-text`}>
                  {stat.value}
                </span>
                {/* Animated underline on hover */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-color-accent group-hover:w-12 transition-all duration-700 rounded-full" />
              </div>
              <span className="text-xs uppercase tracking-[0.08em] font-medium text-color-text-muted group-hover:text-color-text transition-colors duration-500">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
