import { DotGrid } from './DotGrid';
import { motion } from 'motion/react';
import { Building2, GraduationCap, School, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const programs = [
  {
    title:       'Corporate AI Training',
    tag:         'For Teams',
    description: 'Your team gets AI skills they actually use at work. Curriculum built around your business, not a generic syllabus.',
    icon:        Building2,
    href:        '/corporate',
    stats: [
      { value: '150+', label: 'Professionals Trained' },
      { value: '40%',  label: 'Efficiency Gain' },
      { value: '14d',  label: 'Avg ROI Timeline' },
    ],
    benefits: [
      'Custom industry-specific curriculum',
      '40% efficiency improvement (avg)',
      'On-site / Online / Hybrid',
      '10–15 hours saved weekly per employee',
    ],
    cta: 'Explore Corporate Programs',
  },
  {
    title:       'AI Workshops for Students',
    tag:         'For Students',
    description: 'Build and ship AI projects in a day or two. Walk out with work you can show recruiters, not just a PDF certificate.',
    icon:        GraduationCap,
    href:        '/students',
    stats: [
      { value: '1,450+', label: 'Students Trained' },
      { value: '3+',     label: 'Projects Per Student' },
      { value: '95%',    label: 'Satisfaction Rate' },
    ],
    benefits: [
      '3+ AI agents per workshop',
      'Portfolio-ready projects',
      'Placement-focused curriculum',
      'Taught by practitioners',
    ],
    cta: 'View Student Programs',
  },
  {
    title:       'Faculty Development Programme',
    tag:         'For Faculty',
    description: 'AI tools that cut prep time, support NAAC documentation, and bring your teaching in line with AICTE requirements.',
    icon:        School,
    href:        '/faculty',
    stats: [
      { value: '350+', label: 'Faculty Trained' },
      { value: '5-Day', label: 'FDP Available' },
      { value: '100%', label: 'NAAC Ready' },
    ],
    benefits: [
      'AICTE & NEP 2020 aligned',
      'GTU & Govt collaboration',
      '5-Day FDP available',
      'Certification provided',
    ],
    cta: 'Explore FDP Programs',
  },
];

export function Programs() {

  return (
    <section id="workshops" className="section bg-color-bg relative overflow-hidden px-3 md:px-5">
      <DotGrid />
      {/* Gradient blobs */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(251,176,59,0.07) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col gap-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.08 }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex flex-col gap-4 max-w-[800px]"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-[1px] bg-color-accent" />
              <span className="text-xs uppercase tracking-[0.06em] font-medium text-color-accent">
                Three Programs, One Clear Goal
              </span>
            </div>
            <h2 className="type-h2 text-color-text">
              Pick the Program <span className="gradient-text">Built for You</span>
            </h2>
            <p className="type-p1 text-color-text-2 max-w-[600px]">
              Running a company, teaching at a college, or building your AI career? We have a focused program for each.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.08 }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.215, 0.61, 0.355, 1] }}
                className="bg-color-bg rounded-2xl p-5 sm:p-6 md:p-7 flex flex-col gap-4 md:gap-5 group transition-all duration-700 relative overflow-hidden border border-color-border shadow-soft hover:border-color-accent/50 hover:shadow-[0_0_0_1px_rgba(251,176,59,0.2),0_16px_48px_rgba(251,176,59,0.1)]"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: 'radial-gradient(ellipse at top right, rgba(251,176,59,0.07) 0%, transparent 60%)' }}
                />

                <div className="flex items-center justify-between relative z-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 bg-color-bg-2 text-color-accent group-hover:bg-color-accent group-hover:text-color-bg">
                    <program.icon className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.06em] font-medium text-color-accent transition-colors duration-500">
                    {program.tag}
                  </span>
                </div>

                <div className="flex flex-col gap-3 relative z-10">
                  <h3 className="type-h3 text-color-text group-hover:text-color-accent transition-colors duration-500">
                    {program.title}
                  </h3>
                  <p className="type-p2 text-color-text-2">
                    {program.description}
                  </p>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 relative z-10">
                  {program.stats.map((s) => (
                    <div key={s.label} className="rounded-xl p-3 text-center border border-color-border bg-color-bg-2 group-hover:border-color-accent/20 transition-colors duration-500">
                      <div className="text-lg font-heading font-bold text-color-accent tracking-tight">{s.value}</div>
                      <div className="text-[10px] text-color-text-muted mt-0.5 font-normal leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2 relative z-10 pt-3 border-t border-color-border">
                  {program.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3 text-sm text-color-text-muted group-hover:text-color-text transition-colors duration-500">
                      <div className="w-5 h-5 rounded-lg bg-color-accent-bg flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-color-accent/20 transition-colors duration-500">
                        <CheckCircle2 className="w-3 h-3 text-color-accent" />
                      </div>
                      <span className="leading-snug font-normal">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-3 relative z-10">
                  <Link
                    to={program.href}
                    className="btn-secondary w-full group/btn py-3.5 text-sm font-medium tracking-[0.02em]"
                  >
                    {program.cta}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-500" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
