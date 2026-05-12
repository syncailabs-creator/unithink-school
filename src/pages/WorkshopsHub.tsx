import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { Stats } from '../components/Stats';
import { ProblemSection } from '../components/ProblemSection';
import { AudienceSection } from '../components/AudienceSection';
import { FormatSection } from '../components/FormatSection';
import { ToolsSection } from '../components/ToolsSection';
import { SEO, faqSchema, breadcrumbSchema } from '../components/SEO';
import { Contact } from '../components/Contact';
import { FAQ } from '../components/FAQ';
import { workshopHubFAQs, workshopHubFAQCategories } from '../data/faq-workshops-hub';
import { Building2, GraduationCap, BookOpen, ArrowRight, Check, Zap, Users, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { DotGrid } from '../components/DotGrid';

const hubStats = [
  { value: '1,800+', label: 'Participants Trained',    icon: Users },
  { value: '9+',     label: 'Institutions Across India',icon: Building2 },
  { value: '95%',    label: 'Satisfaction Rate',       icon: Star },
  { value: '3',      label: 'Audience-Specific Tracks',icon: BookOpen },
];

const tracks = [
  {
    title: "Corporate AI Training",
    description: "For businesses and teams that need to implement AI — not just understand it.",
    icon: <Building2 className="w-8 h-8" />,
    href: "/corporate",
    bestFor: "HR/L&D teams, department heads, CXOs, and SMEs looking for operational efficiency.",
    get: [
      "Custom curriculum built around your workflows",
      "Live builds: automation, agents, pipelines",
      "40% average efficiency improvement",
      "10–15 hours saved per employee/week"
    ]
  },
  {
    title: "Student Workshops",
    description: "For engineering students who need more than a certificate to stand out at placements.",
    icon: <GraduationCap className="w-8 h-8" />,
    href: "/students",
    bestFor: "2nd, 3rd, and final-year engineering students looking to build AI portfolios.",
    get: [
      "3+ deployed AI projects during the workshop",
      "Portfolio-ready builds: Agents, RAG, Workflows",
      "Placement-focused curriculum",
      "Taught by active AI practitioners"
    ]
  },
  {
    title: "Faculty Development (FDP)",
    description: "For educators who need to stay ahead of AICTE mandates and NEP 2020.",
    icon: <BookOpen className="w-8 h-8" />,
    href: "/faculty",
    bestFor: "Engineering faculty, lecturers, and HODs seeking AICTE-aligned AI training.",
    get: [
      "Practical AI tools for teaching & research",
      "Custom curriculum design for your courses",
      "AICTE & NEP 2020 aligned certification",
      "5-day accreditation-ready structure"
    ]
  }
];

const principles = [
  {
    principle: "Workshop-First Learning",
    other: "Theory lectures, passive watching",
    unithink: "Build first, understand why second — every session starts with doing"
  },
  {
    principle: "Fully Customised",
    other: "Generic off-the-shelf content for all clients",
    unithink: "Discovery call → curriculum built around your specific challenges"
  },
  {
    principle: "Practitioners as Trainers",
    other: "Academics or career educators",
    unithink: "Active AI builders training from live production experience"
  },
  {
    principle: "Deploy Before You Leave",
    other: "Homework or 'practice later'",
    unithink: "Every participant deploys a working system during the session"
  },
  {
    principle: "Post-Workshop Support",
    other: "FAQ docs and email ticketing",
    unithink: "7-day dedicated WhatsApp support with direct trainer access"
  }
];

const bookingSteps = [
  { title: "Discovery Call (Free)", description: "30-minute call to understand your goals, team, and timeline." },
  { title: "Custom Proposal", description: "Tailored program outline delivered within 48 hours." },
  { title: "Booking Confirmation", description: "50% advance secures your date and starts curriculum prep." },
  { title: "Pre-Workshop Prep", description: "Participant briefing, tool access guide, and assessment." },
  { title: "Workshop Delivery", description: "Live, hands-on session with real builds and deployed systems." },
  { title: "Post-Workshop Support", description: "7-day WhatsApp support channel with trainer access." }
];

export function WorkshopsHub() {
  return (
    <div className="flex flex-col relative overflow-hidden">
      <SEO
        title="AI Training Workshops India | All Programs"
        description="Explore all Unithink AI training programs — Corporate, Students & Faculty. Every workshop ends with a built and deployed AI system. India & Gujarat."
        keywords="AI workshops India, hands-on AI workshop, AI training programs India, corporate AI training, AI workshop for students, AICTE FDP AI, Parivartan Method AI, AI training Ahmedabad, technology workshop India, AI skill development"
        canonical="/ai-workshops"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.unithinkschool.com' },
            { name: 'AI Workshops', url: 'https://www.unithinkschool.com/ai-workshops' },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Unithink School AI Training Programs",
            "description": "All AI workshop tracks offered by Unithink School — Corporate, Student, and Faculty programs.",
            "url": "https://www.unithinkschool.com/ai-workshops",
            "numberOfItems": 3,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Course",
                  "@id": "https://www.unithinkschool.com/corporate#course",
                  "name": "Corporate AI Training Workshop",
                  "url": "https://www.unithinkschool.com/corporate",
                  "description": "Custom AI training for corporate teams. Build automation workflows and AI agents on real business data."
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Course",
                  "@id": "https://www.unithinkschool.com/students#course",
                  "name": "Student AI Workshop",
                  "url": "https://www.unithinkschool.com/students",
                  "description": "Placement-ready AI workshops for engineering students. Build 3+ portfolio-ready AI projects in 1-2 days."
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Course",
                  "@id": "https://www.unithinkschool.com/faculty#course",
                  "name": "Faculty Development Programme (FDP)",
                  "url": "https://www.unithinkschool.com/faculty",
                  "description": "AICTE & NEP 2020-aligned AI Faculty Development Programme for Indian college educators."
                }
              }
            ]
          },
          faqSchema(workshopHubFAQs.map(f => ({ question: f.question, answer: f.answer }))),
        ]}
      />
      {/* Page Specific Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-color-accent/5 blur-[120px]" />
        <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] rounded-full bg-color-cta/5 blur-[130px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] rounded-full bg-color-accent/3 blur-[110px]" />
      </div>

      <Hero
        eyebrow="AI Workshops — India"
        title={<>Workshops Where You <span className="text-color-accent">Build & Deploy</span>.</>}
        subheadline="Purpose-built programs for corporate teams, engineering students, and faculty. One outcome: you leave with something deployed."
        primaryCTA={{ text: "Explore All Programs", href: "#tracks" }}
        secondaryCTA={{ text: "Book a Discovery Call", href: "#contact" }}
        stats={hubStats}
        image={{ src: '/content/ws2.jpg', alt: 'AI Workshops India' }}
      />

      <section className="section bg-color-bg-2 relative overflow-hidden px-3 md:px-5">
        <DotGrid />
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-color-accent/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
              className="flex flex-col gap-5 text-left items-start"
            >
              <span className="type-h6 text-color-accent">
                Hands-On. Customised. Deployed.
              </span>
              <h2 className="type-h2 text-color-text">
                We Measure Success by <span className="text-color-accent">What You Build</span>
              </h2>
              <p className="type-p1 text-color-text-2 max-w-[640px]">
                Every program is structured around one principle: participants deploy at least one working AI system before the session ends. Not a certificate. A system.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="tracks" className="section bg-color-bg relative overflow-hidden px-3 md:px-5">
        <DotGrid />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-color-accent/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
              className="flex flex-col gap-4 text-left items-start"
            >
              <span className="type-h6 text-color-accent">
                Three Programs. One Standard.
              </span>
              <h2 className="type-h2 text-color-text">
                Find Your Program
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {tracks.map((track, index) => (
                <motion.div
                  key={track.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12, margin: "0px 0px -80px 0px" }}
                  transition={{ duration: 0.4, delay: index * 0.15, ease: [0.215, 0.61, 0.355, 1] }}
                  className="bg-color-bg p-8 rounded-3xl border border-color-border hover:border-color-accent/30 transition-all duration-700 group flex flex-col gap-6 shadow-soft relative overflow-hidden"
                >
                  {/* Card Glow */}
                  <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-color-accent/5 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                  <div className="w-16 h-16 rounded-[1.5rem] bg-color-bg-2 border border-color-border flex items-center justify-center text-color-accent group-hover:bg-color-accent group-hover:text-color-bg group-hover:shadow-xl group-hover:shadow-color-accent/20 transition-all duration-700 relative z-10">
                    {track.icon}
                  </div>
                  <div className="flex flex-col gap-5 relative z-10">
                    <h3 className="type-h3 text-color-text group-hover:text-color-accent transition-colors duration-500">
                      {track.title}
                    </h3>
                    <p className="type-p2 text-color-text-2 group-hover:text-color-text transition-colors duration-500">
                      {track.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-5 pt-8 border-t border-color-border relative z-10">
                    <span className="type-h6 text-color-text-muted">What You Get</span>
                    <div className="flex flex-col gap-4">
                      {track.get.map((item) => (
                        <div key={item} className="flex items-start gap-4 group/item">
                          <div className="w-5 h-5 rounded-lg bg-color-accent/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-color-accent/20 transition-colors">
                            <Check className="w-3 h-3 text-color-accent" />
                          </div>
                          <span className="text-sm font-normal text-color-text-2 leading-snug group-hover/item:text-color-text transition-colors">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href={track.href} className="btn-secondary w-full mt-auto py-3 group/btn relative z-10">
                    Explore Track
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-500" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-color-bg-2 relative overflow-hidden px-3 md:px-5">
        <DotGrid />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
              className="flex flex-col gap-6 text-left items-start"
            >
              <span className="type-h6 text-color-accent">
                The Parivartan Method
              </span>
              <h2 className="type-h2 text-color-text">
                The Five Principles That Separate Our Training
              </h2>
            </motion.div>

            <div className="bg-color-bg rounded-[3.5rem] overflow-hidden border border-color-border shadow-soft">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-color-bg-2 border-b border-color-border">
                      <th className="px-8 py-6 text-sm font-semibold text-color-text uppercase tracking-[0.06em]">Principle</th>
                      <th className="px-8 py-6 text-sm font-semibold text-color-text-muted uppercase tracking-[0.06em]">Other Training</th>
                      <th className="px-8 py-6 text-sm font-semibold text-color-accent uppercase tracking-[0.06em]">Unithink School</th>
                    </tr>
                  </thead>
                  <tbody>
                    {principles.map((p, i) => (
                      <motion.tr 
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.12, margin: "0px 0px -80px 0px" }}
                        transition={{ duration: 0.4, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                        className="border-b border-color-border last:border-0 hover:bg-color-bg-2 transition-colors duration-500 group"
                      >
                        <td className="px-8 py-6 text-base font-semibold text-color-text group-hover:text-color-accent transition-colors duration-500">{p.principle}</td>
                        <td className="px-8 py-6 type-p2 text-color-text-2">{p.other}</td>
                        <td className="px-8 py-6 type-p2 text-color-text">{p.unithink}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-color-bg relative overflow-hidden px-3 md:px-5">
        <DotGrid />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
              className="flex flex-col gap-6 text-left items-start"
            >
              <span className="type-h6 text-color-accent">
                Proven Outcomes
              </span>
              <h2 className="type-h2 text-color-text">
                The Numbers That Matter
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {hubStats.map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.12, margin: "0px 0px -80px 0px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center gap-4 group"
                >
                  {stat.icon && (
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border border-color-accent/20 group-hover:border-color-accent/40 transition-all duration-500 group-hover:shadow-[0_4px_16px_rgba(251,176,59,0.2)]"
                      style={{ background: 'linear-gradient(135deg, rgba(251,176,59,0.14) 0%, rgba(251,176,59,0.05) 100%)' }}
                    >
                      <stat.icon className="w-5 h-5 text-color-accent" />
                    </div>
                  )}
                  <span className="type-display shimmer-text">{stat.value}</span>
                  <span className="text-xs uppercase tracking-[0.08em] font-medium text-color-text-muted group-hover:text-color-text transition-colors duration-500">{stat.label}</span>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <TrustBar />

      <section className="section bg-color-bg-2 relative overflow-hidden px-3 md:px-5">
        <DotGrid />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-color-accent/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="flex flex-col gap-6 text-left items-start">
                <span className="type-h6 text-color-accent">
                  From Enquiry to Delivery in 14 Days
                </span>
                <h2 className="type-h2 text-color-text">
                  Simple Process. <span className="text-color-accent">Fast Turnaround.</span>
                </h2>
                <p className="type-p1 text-color-text-2 max-w-[540px]">
                  From your first message to a fully delivered workshop — in as little as 14 days.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a href="#contact" className="btn-primary px-8 py-4 group/btn inline-flex">
                  Start With a Free Discovery Call
                  <ArrowRight className="ml-3 w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-500" />
                </a>
              </div>
            </div>

            {/* Timeline */}
            <div className="w-full">
              {bookingSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -8 : 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.12, margin: "0px 0px -80px 0px" }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                  className="flex gap-8 relative"
                >
                  {/* Connector line */}
                  {i < bookingSteps.length - 1 && (
                    <div className="absolute left-[1.875rem] top-[4rem] w-[1px] h-[calc(100%-1rem)] bg-gradient-to-b from-color-accent/40 to-color-accent/0" />
                  )}
                  {/* Step circle */}
                  <div className="flex-shrink-0 w-15 flex flex-col items-center">
                    <div className={`w-[60px] h-[60px] rounded-full border-2 flex items-center justify-center font-heading font-semibold text-base transition-all duration-500 z-10 ${
                      i === 0 ? 'bg-color-accent border-color-accent text-color-bg' : 'bg-color-bg border-color-accent/40 text-color-accent'
                    }`}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                  {/* Step content */}
                  <div className="flex-1 pb-12 group">
                    <div className="bg-color-bg p-8 rounded-[2.5rem] border border-color-border hover:border-color-accent/30 transition-all duration-500 shadow-soft flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <h3 className="type-h3 text-color-text group-hover:text-color-accent transition-colors duration-500">
                          {step.title}
                        </h3>
                        {i === 0 && (
                          <span className="px-3 py-1 rounded-full bg-color-accent/10 text-color-accent text-[9px] font-medium uppercase tracking-[0.06em]">
                            Free
                          </span>
                        )}
                      </div>
                      <p className="type-p2 text-color-text-2">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ToolsSection audience="general" />

      <FAQ
        eyebrow="AI Workshops — FAQs"
        title="Common Questions About Our Programs"
        description="Everything you need to know about booking, delivery, and outcomes across all Unithink AI workshop tracks."
        items={workshopHubFAQs}
        categories={workshopHubFAQCategories}
      />

      <Contact />
    </div>
  );
}
