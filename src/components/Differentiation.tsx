import { DotGrid } from './DotGrid';
import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const comparison = [
  {
    feature: 'Learning format',
    online:   'Pre-recorded videos',
    unithink: 'Live builds with expert guidance',
  },
  {
    feature: 'Content relevance',
    online:   'Generic examples for everyone',
    unithink: 'Built around your actual problems',
  },
  {
    feature: 'Completion',
    online:   'Self-paced, easy to drop halfway',
    unithink: 'Dedicated workshop time with peer accountability',
  },
  {
    feature: 'Trainer access',
    online:   'Forum posts, no direct line',
    unithink: 'Real-time in the session',
  },
  {
    feature: 'What you build',
    online:   'Tutorial projects on sample data',
    unithink: 'Deployed systems on your real data',
  },
  {
    feature: 'Post-training support',
    online:   'Self-service knowledge base',
    unithink: '7-day direct trainer support',
  },
  {
    feature: 'Time to ROI',
    online:   'Months, if completed',
    unithink: 'Monday morning after the workshop',
  },
];

export function Differentiation() {
  return (
    <section className="section bg-color-bg-2 relative overflow-hidden px-3 md:px-5">
      <DotGrid />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-color-accent/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col gap-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex flex-col gap-6 text-left items-start"
          >
            <span className="type-h6 text-color-accent">
              The Parivartan Method
            </span>
            <h2 className="type-h2 text-color-text">
              Why Our Training <span className="text-color-accent">Actually Works</span>
            </h2>
            <p className="type-p1 text-color-text-2 max-w-[640px]">
              Unithink Workshops vs. Online Courses. We teach AI by building it, with you, on your actual work.
            </p>
          </motion.div>

          {/* Desktop Table */}
          <div className="hidden md:block bg-color-bg rounded-2xl overflow-hidden border border-color-border shadow-soft">
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-color-border bg-color-bg-2">
                    <th className="px-4 md:px-6 py-3 md:py-4 text-xs font-medium uppercase tracking-[0.06em] text-color-text-2">Feature</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-xs font-medium uppercase tracking-[0.06em] text-color-text-2">Online Courses</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-xs font-medium uppercase tracking-[0.06em] text-color-accent bg-color-accent-bg">
                      Unithink School
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <motion.tr
                      key={row.feature}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.12 }}
                      transition={{ duration: 0.35, delay: index * 0.07, ease: [0.215, 0.61, 0.355, 1] }}
                      className={cn(
                        'transition-all duration-500 border-b border-color-border last:border-0 group',
                        'hover:bg-color-bg-2'
                      )}
                    >
                      <td className="px-4 md:px-6 py-3 md:py-4 font-heading font-semibold text-color-text text-sm tracking-tight group-hover:text-color-accent transition-colors duration-500">
                        {row.feature}
                      </td>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-sm text-color-text-2 font-medium">
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-lg bg-red-500/15 flex items-center justify-center shrink-0 mt-0.5">
                            <X className="w-3 h-3 text-red-400" />
                          </div>
                          <span className="leading-snug">{row.online}</span>
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-sm text-color-text font-normal bg-color-accent-bg group-hover:bg-color-accent/10 transition-colors duration-500">
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-lg bg-color-accent/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-color-accent transition-all duration-500">
                            <Check className="w-3 h-3 text-color-accent group-hover:text-color-bg transition-colors duration-500" />
                          </div>
                          <span className="leading-snug">{row.unithink}</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile: Stacked Cards */}
          <div className="flex flex-col gap-4 md:hidden">
            {/* Unithink School card (top) */}
            <div className="bg-color-accent-bg rounded-2xl overflow-hidden border border-color-accent/30 shadow-soft">
              <div className="px-4 py-3 bg-color-accent flex items-center gap-2">
                <Check className="w-4 h-4 text-color-bg" />
                <span className="text-xs font-semibold uppercase tracking-[0.06em] text-color-bg">Unithink School</span>
              </div>
              <div className="divide-y divide-color-accent/15">
                {comparison.map((row, index) => (
                  <motion.div
                    key={`u-${row.feature}`}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-4 py-3 flex flex-col gap-1"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.06em] text-color-accent">{row.feature}</span>
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-md bg-color-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-color-accent" />
                      </div>
                      <span className="text-sm text-color-text font-normal leading-snug">{row.unithink}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Online Courses card (bottom) */}
            <div className="bg-color-bg rounded-2xl overflow-hidden border border-color-border shadow-soft">
              <div className="px-4 py-3 bg-color-bg-2 flex items-center gap-2 border-b border-color-border">
                <X className="w-4 h-4 text-red-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.06em] text-color-text-muted">Online Courses</span>
              </div>
              <div className="divide-y divide-color-border">
                {comparison.map((row, index) => (
                  <motion.div
                    key={`o-${row.feature}`}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-4 py-3 flex flex-col gap-1"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.06em] text-color-text-muted">{row.feature}</span>
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-md bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-2.5 h-2.5 text-red-400" />
                      </div>
                      <span className="text-sm text-color-text-2 font-normal leading-snug">{row.online}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
