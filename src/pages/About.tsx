import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Zap, Users, ShieldCheck, BookOpen, Award, Lightbulb, Search, MessageSquare, UserCheck, FileText, CheckCircle2, Presentation, MapPin, Heart, Building2, Star } from 'lucide-react';
import { SEO, organizationSchema, breadcrumbSchema } from '../components/SEO';
import { Stats } from '../components/Stats';
import { EducatorsSection } from '../components/EducatorsSection';
import { TrustBar } from '../components/TrustBar';
import { DotGrid } from '../components/DotGrid';
import { WorkshopGallery, GalleryImage } from '../components/WorkshopGallery';
import { cn } from '@/src/lib/utils';

const aboutGalleryImages: GalleryImage[] = [
  { src: '/content/ws1.jpg',      org: 'Saffrony University',               category: 'Student Development',  location: 'Mehsana, GJ'   },
  { src: '/content/ws2.jpg',      org: 'Parul University',                  category: 'Student Development',  location: 'Vadodara, GJ'  },
  { src: '/content/ws3.jpg',      org: 'Techno NJR — Udaipur',              category: 'Faculty Development',  location: 'Udaipur, RJ'   },
  { src: '/content/ws4.jpg',      org: 'Parul University',                  category: 'Student Development',  location: 'Vadodara, GJ'  },
  { src: '/content/ws5.jpg',      org: 'Vishwakarma University',            category: 'Student Development',  location: 'Ahmedabad, GJ' },
  { src: '/content/ws6.jpg',      org: 'Metizsoft Solutions',               category: 'Corporate Training',   location: 'Ahmedabad, GJ' },
  { src: '/content/IMG_8353.jpg', org: 'Techno NJR — Udaipur',              category: 'Faculty Development',  location: 'Udaipur, RJ'   },
  { src: '/content/IMG_4453.jpg', org: 'Ahmedabad Institute of Technology', category: 'Faculty Development',  location: 'Ahmedabad, GJ' },
  { src: '/content/IMG_8275.jpg', org: 'Gujarat Technological University',  category: 'Faculty Development',  location: 'Ahmedabad, GJ' },
];

// ── Data ────────────────────────────────────────────────────────────────────

const coreValues = [
  {
    icon: Zap,
    title: 'Build First, Understand Second',
    description: 'Every session starts with a live build. We believe people learn faster by doing than by listening. Theory follows practice — not the other way around.',
    stat: '60 min',
    statLabel: 'to first deployment',
  },
  {
    icon: Target,
    title: 'Real Work, Not Sample Data',
    description: 'Every exercise uses your tools, your context, your problems. We refuse to teach automation on fake datasets when participants have real workflows waiting.',
    stat: '100%',
    statLabel: 'context-specific builds',
  },
  {
    icon: Users,
    title: 'Practitioners, Not Presenters',
    description: 'Our trainers build AI systems daily. They debug real pipelines, ship production agents, and teach from what they have personally deployed — not from a slide deck.',
    stat: '6+',
    statLabel: 'active AI practitioners',
  },
  {
    icon: ShieldCheck,
    title: 'Accountability Beyond Delivery',
    description: '7-day post-workshop support is not a promise — it is a standard. When a participant hits a wall implementing on Monday, we are there. The engagement does not end at Day 2.',
    stat: '7-day',
    statLabel: 'post-workshop support',
  },
];

const milestones = [
  {
    year: '2023',
    month: 'Q1',
    title: 'The First Workshop',
    description: 'Unithink ran its first AI workshop for a corporate team in Ahmedabad. 12 participants. Two days. Every single person deployed a working automation by Day 2.',
    icon: Lightbulb,
  },
  {
    year: '2023',
    month: 'Q3',
    title: 'First College Partnership',
    description: 'Partnership with Parul University brought our first student batch — 450+ final-year engineering students trained in one engagement. The demand for practical AI in colleges became clear.',
    icon: BookOpen,
  },
  {
    year: '2024',
    month: 'Q1',
    title: 'AICTE-Aligned FDP Programme',
    description: 'Launched our Faculty Development Programme aligned to AICTE, NEP 2020, and NAAC requirements. First FDP delivered at Techno NJR University, Udaipur — 200 faculty trained.',
    icon: Award,
  },
  {
    year: '2024',
    month: 'Q2',
    title: 'Multi-State Expansion',
    description: 'Crossed state borders for the first time. Workshops now running across Gujarat, Rajasthan, and Maharashtra. Three cities, three audiences, one consistent standard of delivery.',
    icon: MapPin,
  },
  {
    year: '2024',
    month: 'Q4',
    title: '1,800+ Participants',
    description: 'Crossed 1,800 trained participants across 9+ institutions. Retained a 95% satisfaction rate across every engagement. The focus remains: every participant builds something real.',
    icon: Users,
  },
  {
    year: '2025',
    month: 'Now',
    title: 'Still Building',
    description: 'Expanding to more colleges, corporate teams, and government institutions. Every new workshop is a chance to prove the same thing: AI skills are not taught — they are built.',
    icon: Zap,
  },
];

const expertSelectionSteps = [
  {
    step: '01',
    icon: Search,
    title: 'Understand the Requirement',
    description: 'Before any trainer is considered, we map the engagement in detail — audience profile, current AI literacy level, industry context, tools already in use, and the specific outcome the client is paying for.',
    tag: 'Discovery',
  },
  {
    step: '02',
    icon: MessageSquare,
    title: 'Define the Impact',
    description: 'We identify exactly what "success" looks like on Day 2 and the week after. Is it a deployed automation? A research workflow? A production agent? The trainer is selected against that outcome, not against a generic profile.',
    tag: 'Impact Mapping',
  },
  {
    step: '03',
    icon: UserCheck,
    title: 'Match the Right Expert',
    description: 'Each trainer has a specialisation — n8n automation, LangChain agents, GenAI for faculty, student portfolio builds. We match based on who has shipped the most relevant real-world work, not who is most available.',
    tag: 'Expert Alignment',
  },
  {
    step: '04',
    icon: FileText,
    title: 'Custom Content Build',
    description: 'Once assigned, the trainer builds a custom deck, live-build plan, and exercise set using the client\'s actual tools, terminology, and workflows. No recycled slides. Every session is built from scratch.',
    tag: 'Custom PPT & Materials',
  },
  {
    step: '05',
    icon: Presentation,
    title: 'Pre-Session Alignment',
    description: 'The trainer reviews participant data, role breakdown, and any pre-submitted questions before arriving. They arrive knowing the room — not discovering it on Day 1.',
    tag: 'Pre-Workshop Briefing',
  },
  {
    step: '06',
    icon: CheckCircle2,
    title: 'Delivery + Post-Support',
    description: 'The trainer leads the full session and owns the 7-day post-workshop WhatsApp support channel. When participants hit a wall at work on Monday, the same expert who built the session is on the other end.',
    tag: 'Accountability',
  },
];

const aboutStats = [
  { value: '1,800+', label: 'Participants Trained',  icon: Users },
  { value: '9+',     label: 'Institutions Served',   icon: Building2 },
  { value: '95%',    label: 'Satisfaction Rate',     icon: Star },
  { value: '6+',     label: 'Active AI Practitioners',icon: UserCheck },
];

// ── Page ────────────────────────────────────────────────────────────────────

export function About() {
  return (
    <div className="flex flex-col relative overflow-hidden">
      <SEO
        title="About Us | AI Training Company India"
        description="Unithink School is India's most practical AI training company. Founded in Ahmedabad, we train students, faculty, and corporate teams to build and deploy real AI — not just understand it. Meet our team and story."
        keywords="about Unithink School, AI training company India, AI workshop founders India, AI educators Ahmedabad, hands-on AI training India, Unithink team, AI workshop company Gujarat, practical AI training India, AI skill development company"
        canonical="/about"
        jsonLd={[
          organizationSchema,
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.unithinkschool.com' },
            { name: 'About Us', url: 'https://www.unithinkschool.com/about' },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Unithink School",
            "url": "https://www.unithinkschool.com/about",
            "description": "Learn about Unithink School — India's hands-on AI training company for students, faculty, and corporate teams.",
            "mainEntity": {
              "@type": "EducationalOrganization",
              "name": "Unithink School",
              "foundingDate": "2023",
              "foundingLocation": "Ahmedabad, Gujarat, India",
              "areaServed": ["Gujarat", "Rajasthan", "Maharashtra"],
              "knowsAbout": ["Artificial Intelligence", "Machine Learning", "AI Automation", "Generative AI", "AI Agent Development"],
            }
          }
        ]}
      />

      {/* Page-level background blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] rounded-full bg-color-accent/5 blur-[140px]" />
        <div className="absolute top-[45%] right-[-15%] w-[700px] h-[700px] rounded-full bg-color-cta/5 blur-[150px]" />
        <div className="absolute bottom-[15%] left-[5%] w-[500px] h-[500px] rounded-full bg-color-accent/3 blur-[120px]" />
      </div>

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] md:min-h-screen pt-[72px] md:pt-[100px] pb-12 md:pb-20 overflow-hidden flex items-center bg-color-bg px-3 md:px-5">

        {/* Halftone dot system — top-left */}
        <div className="absolute top-0 left-0 w-[540px] h-[540px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 70% at 0% 0%, rgba(251,176,59,0.18) 0%, rgba(251,176,59,0.06) 44%, transparent 68%)' }}
        />
        <motion.div
          className="absolute top-0 left-0 w-[480px] h-[480px] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='13'%3E%3Ccircle cx='6.5' cy='6.5' r='1.2' fill='%23FBB03B' fill-opacity='0.55'/%3E%3C/svg%3E"), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ccircle cx='10' cy='10' r='0.8' fill='%23FBB03B' fill-opacity='0.22'/%3E%3C/svg%3E")`,
            backgroundSize: '13px 13px, 20px 20px',
            backgroundPosition: '0 0, 7px 9px',
            WebkitMaskImage: 'radial-gradient(ellipse 88% 88% at 0% 0%, black 0%, black 20%, rgba(0,0,0,0.75) 38%, rgba(0,0,0,0.28) 58%, transparent 74%)',
            maskImage: 'radial-gradient(ellipse 88% 88% at 0% 0%, black 0%, black 20%, rgba(0,0,0,0.75) 38%, rgba(0,0,0,0.28) 58%, transparent 74%)',
            transform: 'perspective(900px) rotateX(9deg) rotateY(9deg)',
            transformOrigin: 'top left',
          }}
          animate={{ x: [0, 5, 2, 0], y: [0, -4, -6, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Halftone — bottom-right */}
        <div className="absolute -bottom-16 -right-16 w-[500px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 65% 65% at 88% 88%, rgba(251,176,59,0.14) 0%, rgba(251,176,59,0.05) 44%, transparent 68%)' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[440px] h-[440px] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='13'%3E%3Ccircle cx='6.5' cy='6.5' r='1.1' fill='%23FBB03B' fill-opacity='0.48'/%3E%3C/svg%3E"), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19' height='19'%3E%3Ccircle cx='9.5' cy='9.5' r='0.75' fill='%23FBB03B' fill-opacity='0.20'/%3E%3C/svg%3E")`,
            backgroundSize: '13px 13px, 19px 19px',
            backgroundPosition: '0 0, 8px 5px',
            WebkitMaskImage: 'radial-gradient(ellipse 88% 88% at 100% 100%, black 0%, black 18%, rgba(0,0,0,0.65) 36%, rgba(0,0,0,0.22) 56%, transparent 72%)',
            maskImage: 'radial-gradient(ellipse 88% 88% at 100% 100%, black 0%, black 18%, rgba(0,0,0,0.65) 36%, rgba(0,0,0,0.22) 56%, transparent 72%)',
            transform: 'perspective(900px) rotateX(-8deg) rotateY(-8deg)',
            transformOrigin: 'bottom right',
          }}
          animate={{ x: [0, -4, -2, 0], y: [0, 5, 7, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
        />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 md:gap-16 lg:gap-20 items-center">

            {/* Left: copy */}
            <div className="flex flex-col gap-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 w-fit px-5 py-2 rounded-full bg-color-accent/10 border border-color-accent/20 text-color-accent text-[10px] font-medium uppercase tracking-[0.06em]"
              >
                <Heart className="w-4 h-4" />
                About Us
              </motion.div>

              <div className="flex flex-col gap-6">
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                  className="type-h1 text-color-text"
                >
                  We Don't Teach AI.<br />
                  <span className="text-color-accent">We Build It With You.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
                  className="type-p1 text-color-text-2 max-w-[540px]"
                >
                  Unithink School is an Ahmedabad-based AI training company. We run hands-on workshops for corporate teams, engineering students, and academic faculty across India. Every session ends with something deployed — not just something understood.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact" className="btn-primary btn-glow group px-8 py-5">
                  Work With Us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/success-stories" className="btn-secondary px-8 py-5">
                  See Our Work
                </Link>
              </motion.div>

              {/* Trust strip */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="pt-8 border-t border-color-border"
              >
                <p className="text-[10px] uppercase tracking-[0.06em] text-color-text-muted font-medium mb-5">Founded in Ahmedabad · Operating across Gujarat, Rajasthan & Maharashtra</p>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: '2023', label: 'Founded' },
                    { value: '9+', label: 'Institutions' },
                    { value: '3', label: 'States' },
                  ].map(s => (
                    <div key={s.label} className="flex flex-col gap-1.5">
                      <span className="text-2xl md:text-3xl font-heading font-bold text-color-text tracking-tight shimmer-text">{s.value}</span>
                      <span className="text-[10px] uppercase tracking-[0.06em] text-color-text-muted font-medium">{s.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: story card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative hidden lg:block"
            >
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -right-4 z-20 flex items-center gap-2 px-4 py-2 rounded-2xl shadow-soft border border-color-border bg-color-bg"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-medium uppercase tracking-[0.06em] text-color-text">Active & Growing</span>
              </motion.div>

              {/* Main visual card */}
              <div className="rounded-[2.5rem] overflow-hidden relative bg-color-bg border border-color-border"
                style={{ boxShadow: '0 0 0 1px rgba(251,176,59,0.15), 0 32px 72px rgba(0,0,0,0.22)' }}>

                {/* Top image strip */}
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <img src="/content/about-banner.png" alt="Unithink team at AI Experts Summit 2024" className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }} />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-heading font-bold text-xl leading-tight">AI Experts Summit 2024.<br />Bengaluru, India.</p>
                    <p className="text-white/60 text-xs font-medium mt-1">Shaping the Future — 15th December 2024</p>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-7 flex flex-col gap-5">
                  <p className="type-p2 text-color-text-2">
                    We started because we got frustrated watching smart people sit through AI awareness sessions and return to doing the same things manually on Monday morning.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { v: '1,800+', l: 'Participants' },
                      { v: '95%',    l: 'Satisfaction' },
                      { v: '9+',     l: 'Institutions' },
                      { v: 'Day 1',  l: 'First Deploy' },
                    ].map(s => (
                      <div key={s.l} className="rounded-xl p-3.5 border border-color-border bg-color-bg-2 text-center">
                        <div className="text-xl font-heading font-bold text-color-accent">{s.v}</div>
                        <div className="text-[10px] uppercase tracking-[0.06em] text-color-text-muted font-medium mt-0.5">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom floating badge */}
              <motion.div
                animate={{ y: [0, 8, 0], rotate: [0, -1, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-5 -left-8 z-20 px-5 py-3.5 rounded-[1.5rem]"
                style={{
                  background: 'rgba(10,10,10,0.90)',
                  boxShadow: '0 0 0 1px rgba(251,176,59,0.2), 0 16px 40px rgba(0,0,0,0.4)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'rgba(251,176,59,0.2)' }}>
                    <MapPin className="w-4 h-4 text-color-accent" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Ahmedabad, Gujarat</p>
                    <p className="text-white/50 text-[10px] font-medium uppercase tracking-[0.06em]">Founded Here. Growing Everywhere.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 2. MISSION + VALUES ──────────────────────────────────────────── */}
      <section className="py-14 md:py-20 lg:py-24 bg-color-bg-2 relative overflow-hidden px-3 md:px-5">
        <DotGrid />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.08 }}
            transition={{ duration: 0.7 }}
            className="text-left mb-8 md:mb-14 lg:mb-20"
          >
            <span className="type-h6 text-color-accent block mb-6">Our Philosophy</span>
            <h2 className="type-h2 text-color-text mb-5 text-balance max-w-[600px]">
              The Four Things We Refuse to Compromise On.
            </h2>
            <p className="type-p1 text-color-text-2 max-w-[580px]">
              Every workshop decision — curriculum, format, trainer selection, post-support — comes back to these four principles.
            </p>
          </motion.div>

          {/* Values grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {coreValues.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.08 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-color-bg rounded-[2.5rem] p-8 md:p-10 border border-color-border shadow-soft group hover:border-color-accent/30 transition-all duration-500 flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-color-accent/10 border border-color-accent/20 flex items-center justify-center group-hover:bg-color-accent group-hover:border-color-accent transition-all duration-500">
                    <val.icon className="w-6 h-6 text-color-accent group-hover:text-color-bg transition-colors duration-500" />
                  </div>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="type-h3 text-color-text group-hover:text-color-accent transition-colors duration-300">
                    {val.title}
                  </h3>
                  <p className="type-p2 text-color-text-2 flex-1">
                    {val.description}
                  </p>
                  <div className="flex items-baseline gap-2 pt-3 border-t border-color-border">
                    <span className="text-2xl font-heading font-bold text-color-accent">{val.stat}</span>
                    <span className="text-[10px] uppercase tracking-[0.06em] text-color-text-muted font-medium">{val.statLabel}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. OUR STORY — TIMELINE ──────────────────────────────────────── */}
      <section className="py-14 md:py-20 lg:py-24 bg-color-bg relative overflow-hidden px-3 md:px-5">
        <DotGrid />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-color-accent/4 blur-[200px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.08 }}
            transition={{ duration: 0.7 }}
            className="max-w-[700px] mb-8 md:mb-14 lg:mb-20"
          >
            <span className="type-h6 text-color-accent block mb-6">Our Story</span>
            <h2 className="type-h2 text-color-text mb-5">
              From One Workshop to<br className="hidden sm:block" /> a Growing Movement.
            </h2>
            <p className="type-p1 text-color-text-2">
              Unithink didn't start with a business plan. It started with a belief — that most AI training was failing people because it prioritised understanding over output.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-color-accent/60 via-color-accent/25 to-transparent pointer-events-none" />

            <div className="flex flex-col gap-12">
              {milestones.map((m, i) => {
                const isRight = i % 2 === 0;
                return (
                  <motion.div
                    key={m.title}
                    initial={{ opacity: 0, x: isRight ? -24 : 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.08 }}
                    transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
                    className={cn(
                      'relative flex items-start gap-6 md:gap-0',
                      'md:grid md:grid-cols-2',
                    )}
                  >
                    {/* Dot on the line */}
                    <div className={cn(
                      'absolute top-5 z-10 w-8 h-8 rounded-full border-2 border-color-accent bg-color-bg flex items-center justify-center flex-shrink-0',
                      'left-0 md:left-1/2 md:-translate-x-1/2',
                    )}>
                      <m.icon className="w-3.5 h-3.5 text-color-accent" />
                    </div>

                    {/* Left column (even: content, odd: empty on desktop) */}
                    <div className={cn(
                      'pl-14 md:pl-0',
                      isRight ? 'md:pr-16' : 'md:col-start-2 md:pl-16',
                    )}>
                      <div className="bg-color-bg-2 rounded-[2rem] p-7 border border-color-border group hover:border-color-accent/30 transition-all duration-500 shadow-soft">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-[10px] font-medium uppercase tracking-[0.06em] text-color-accent px-3 py-1.5 rounded-full border border-color-accent/20 bg-color-accent/10">
                            {m.year} · {m.month}
                          </span>
                        </div>
                        <h3 className="type-h3 text-color-text mb-3 group-hover:text-color-accent transition-colors duration-300">
                          {m.title}
                        </h3>
                        <p className="type-p2 text-color-text-2">
                          {m.description}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for alternate side on desktop */}
                    {!isRight && <div className="hidden md:block md:col-start-1 md:row-start-1" />}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. BY THE NUMBERS ────────────────────────────────────────────── */}
      <Stats
        items={aboutStats}
        heading="What We've Built Together."
        subheading="Every number below comes from a real delivery. No projections, no targets — only verified outcomes from sessions that have already happened."
      />

      {/* ── 5. MEET THE TEAM ─────────────────────────────────────────────── */}
      <EducatorsSection
        eyebrow="The People Behind the Sessions"
        title="Practitioners Who Build What They Teach."
      />

      {/* ── 6. HOW WE CHOOSE OUR EXPERTS ─────────────────────────────── */}
      <section className="section bg-color-bg-2 relative overflow-hidden px-3 md:px-5">
        <DotGrid />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-color-accent/4 blur-[200px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col gap-14">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.08 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-6 text-left items-start"
            >
              <span className="type-h6 text-color-accent">Expert Selection Process</span>
              <h2 className="type-h2 text-color-text text-balance max-w-[620px]">
                How We Choose Who Stands in Front of Your Team.
              </h2>
              <p className="type-p1 text-color-text-2 max-w-[560px]">
                We don't assign trainers by availability. Every expert is matched to an engagement based on outcomes, audience, and real-world specialisation — then given the tools to deliver it precisely.
              </p>
            </motion.div>

            {/* Steps — 2-col grid on desktop, single col on mobile */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {expertSelectionSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.08 }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                  className="bg-color-bg rounded-[2rem] p-7 border border-color-border shadow-soft group hover:border-color-accent/30 hover:shadow-xl hover:shadow-color-accent/5 transition-all duration-500 flex flex-col gap-5"
                >
                  {/* Step number + icon row */}
                  <div className="flex items-start justify-between">
                    <span className="text-5xl font-heading font-black text-color-accent/15 group-hover:text-color-accent/30 transition-colors duration-500 leading-none tracking-tighter select-none">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-color-accent/10 border border-color-accent/20 flex items-center justify-center text-color-accent group-hover:bg-color-accent group-hover:text-color-bg transition-all duration-500 flex-shrink-0">
                      <step.icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Tag */}
                  <span className="self-start text-[11px] font-medium uppercase tracking-[0.06em] px-3 py-1 rounded-full bg-color-accent/10 text-color-accent border border-color-accent/20">
                    {step.tag}
                  </span>

                  {/* Content */}
                  <div className="flex flex-col gap-3 flex-1">
                    <h3 className="type-h3 text-color-text group-hover:text-color-accent transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="type-p2 text-color-text-2">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom callout */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.08 }}
              transition={{ duration: 0.6 }}
              className="rounded-[2.5rem] p-8 md:p-12 border border-color-accent/20 flex flex-col md:flex-row items-center justify-between gap-8"
              style={{ background: 'linear-gradient(135deg, rgba(251,176,59,0.06) 0%, transparent 60%)' }}
            >
              <div className="flex flex-col gap-3 max-w-[520px]">
                <span className="type-h6 text-color-accent">The Standard</span>
                <h3 className="type-h3 text-color-text">
                  No trainer walks in cold. Every session is built for your room.
                </h3>
                <p className="type-p1 text-color-text-2">
                  Custom PPT, live-build plan, exercises using your tools and terminology — prepared specifically for your team before the session begins.
                </p>
              </div>
              <Link
                to="/contact"
                className="btn-primary btn-glow group inline-flex items-center px-8 py-5 flex-shrink-0"
              >
                Discuss Your Workshop
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 7. TRUSTED BY ────────────────────────────────────────────────── */}
      <TrustBar label="Institutions and companies that have trained with us" />

      {/* ── 8. WORKSHOP GALLERY ─────────────────────────────────────────── */}
      <WorkshopGallery
        images={aboutGalleryImages}
        eyebrow="In the Room"
        title="Where the Building Happens."
        subtitle="Every photo is from a live session. Real participants, real builds, real energy."
      />

      {/* ── 9. CTA ──────────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 lg:py-28 bg-color-bg relative overflow-hidden px-3 md:px-5">
        <DotGrid />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-color-accent/6 blur-[200px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.08 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 items-start"
          >
            <span className="type-h6 text-color-accent">Let's Build Something</span>

            <h2 className="type-h2 text-color-text max-w-[600px] text-balance">
              Ready to See What Your Team Can{' '}
              <span className="text-color-accent">Build in 48 Hours?</span>
            </h2>

            <p className="type-p1 text-color-text-2 max-w-[580px]">
              Every engagement starts with a conversation about your goals, your team, and what you want to walk away with. No templates, no generic proposals — just a focused plan for your context.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn-primary btn-glow group px-10 py-5">
                Start the Conversation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/success-stories" className="btn-secondary px-10 py-5">
                View All Our Work
              </Link>
            </div>

            {/* Final trust strip */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-4">
              {[
                'AICTE Aligned',
                'NEP 2020 Ready',
                'GTU Collaboration',
                '9+ Institutions',
                '95% Satisfaction',
              ].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-color-accent" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.06em] text-color-text-muted">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
