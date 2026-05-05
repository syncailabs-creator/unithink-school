import { DotGrid } from './DotGrid';
import { motion } from 'motion/react';
import { Linkedin, Award } from 'lucide-react';

interface Educator {
  name: string;
  position: string;
  description: string;
  photo: string;
  linkedin?: string;
  tag?: string;
  objectPosition?: string;
}

const educators: Educator[] = [
  {
    name: 'Mihir Sagar',
    position: 'Lead AI Automation Expert',
    description: 'Designs and deploys end-to-end AI automation systems for enterprise and education. Builds intelligent pipelines using n8n, Make.com, and custom agentic workflows.',
    photo: '/content/team/mihir-sagar.png',
    linkedin: 'https://linkedin.com',
    tag: 'AI Automation',
  },
  {
    name: 'Pakshal Ghiya',
    position: 'Lead AI-ML Engineer',
    description: 'Expert in machine learning model development and production deployment. Trains professionals on PyTorch, Scikit-learn, and scalable ML pipelines built for real-world use.',
    photo: '/content/team/pakshal-ghiya.jpeg',
    linkedin: 'https://linkedin.com',
    tag: 'AI-ML',
    objectPosition: 'center',
  },
  {
    name: 'Yash Bhaward',
    position: 'Sr. AI Data Engineer',
    description: 'Senior practitioner in applied data science with deep experience across industry and academia. Specialises in deep learning, NLP, and large-scale data modelling for measurable impact.',
    photo: '/content/team/yash-bhaward.jpeg',
    linkedin: 'https://linkedin.com',
    tag: 'Data Science',
  },
  {
    name: 'Manali Patel',
    position: 'AI Automation Consultant · BA & PM',
    description: 'Leads corporate and faculty AI programmes. Specialist in n8n, Make.com, and no-code AI automation workflows.',
    photo: '/content/team/manali.jpg',
    linkedin: 'https://linkedin.com',
    tag: 'Lead Trainer',
  },
  {
    name: 'Prit Manvar',
    position: 'Data Scientist',
    description: 'Bridges raw data and actionable intelligence. Covers data analysis, visualisation, and predictive modelling using Python, Pandas, and advanced statistical methods.',
    photo: '/content/team/prit-manvar.jpeg',
    linkedin: 'https://linkedin.com',
    tag: 'Data Science',
  },
  {
    name: 'Mitul Karariya',
    position: 'Lead AI/ML Developer',
    description: 'Builds and deploys production-grade AI/ML systems end-to-end. Expert in model development, LLM integration, and scalable ML pipelines that solve real-world problems.',
    photo: '/content/team/mitul-karariya.png',
    linkedin: 'https://linkedin.com',
    tag: 'AI/ML Dev',
  },
];

interface EducatorsSectionProps {
  eyebrow?: string;
  title?: string;
}

export function EducatorsSection({ eyebrow = 'Our Educators', title = 'Trained by Practitioners, Not Theorists.' }: EducatorsSectionProps) {
  return (
    <section className="section bg-color-bg relative overflow-hidden px-3 md:px-5">
      <DotGrid />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-color-accent/4 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col gap-8 md:gap-10">
          {/* Header */}
          <div className="flex flex-col gap-5 max-w-[760px]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-color-accent" />
              <span className="type-h6 text-color-accent">
                {eyebrow}
              </span>
            </div>
            <h2 className="type-h2 text-color-text">
              {title}
            </h2>
            <p className="type-p1 text-color-text-2 max-w-[580px]">
              Every session is led by active AI practitioners — people building with these tools daily, not reading about them.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {educators.map((edu, index) => (
              <motion.div
                key={edu.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.08 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                className="group bg-color-bg-2 border border-color-border rounded-2xl overflow-hidden flex flex-col hover:border-color-accent/30 hover:shadow-xl hover:shadow-color-accent/5 transition-all duration-500"
              >
                {/* Photo — full bleed top */}
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  {edu.photo ? (
                    <img
                      src={edu.photo}
                      alt={edu.name}
                      width={400}
                      height={300}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      style={{ objectPosition: edu.objectPosition ?? 'top' }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, rgba(251,176,59,0.12), rgba(251,176,59,0.04))' }}>
                      <span className="text-7xl font-heading font-black text-color-accent/30">
                        {edu.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  {/* Tag over photo */}
                  {edu.tag && (
                    <span className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-color-accent/30 text-[10px] font-medium text-color-accent">
                      <Award className="w-2.5 h-2.5" />
                      {edu.tag}
                    </span>
                  )}
                  {/* Name overlay at bottom of photo */}
                  <div className="absolute bottom-0 left-0 right-0 px-5 py-4"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)' }}>
                    <h3 className="text-lg font-heading font-semibold text-white tracking-tight">
                      {edu.name}
                    </h3>
                  </div>
                </div>

                {/* Info below photo */}
                <div className="p-5 lg:p-6 flex flex-col gap-3 flex-1">
                  <p className="text-xs font-medium text-color-accent">
                    {edu.position}
                  </p>
                  <p className="text-sm text-color-text-muted leading-relaxed font-normal flex-1">
                    {edu.description}
                  </p>
                  {edu.linkedin && (
                    <a
                      href={edu.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-medium text-color-text-muted hover:text-color-accent transition-colors duration-300 mt-auto pt-3 border-t border-color-border"
                      aria-label={`${edu.name} on LinkedIn`}
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
