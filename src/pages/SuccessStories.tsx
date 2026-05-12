import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Users, Building, Star, Trophy, Target, Quote, CheckCircle2, VolumeX, Volume2, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { SEO, breadcrumbSchema, organizationSchema } from '../components/SEO';
import { VideoSection } from '../components/VideoSection';
import { DotGrid } from '../components/DotGrid';
import { WorkshopGallery, GalleryImage } from '../components/WorkshopGallery';

const impactStats = [
  { label: 'Total Participants', value: '1,800+', icon: <Users className="w-6 h-6" /> },
  { label: 'Workshops Delivered', value: '60+', icon: <Building className="w-6 h-6" /> },
  { label: 'Program Tracks', value: '3', icon: <Target className="w-6 h-6" /> },
  { label: 'Avg Satisfaction', value: '95%', icon: <Star className="w-6 h-6" /> }
];

const deliveryRecord = [
  { org: 'Metizsoft Software Solutions',      type: 'Corporate Training',       curriculum: 'Agentic AI Automation (N8N)',     participants: '150+', count: 150, location: 'Ahmedabad, GJ' },
  { org: 'Techno NJR — Udaipur',              type: 'Faculty Development',       curriculum: 'Low/No Code AI Tools',           participants: '200+', count: 200, location: 'Udaipur, RJ' },
  { org: 'Parul University',                  type: 'Student Development',       curriculum: 'Code-Based Agentic AI Training', participants: '450+', count: 450, location: 'Vadodara, GJ' },
  { org: 'Vishwakarma University',            type: 'Student Development',       curriculum: 'Code-Based Agentic AI Training', participants: '400+', count: 400, location: 'Ahmedabad, GJ' },
  { org: 'Techno NJR — Udaipur',              type: 'Student Development',       curriculum: 'Code-Based Agentic AI Training', participants: '300+', count: 300, location: 'Udaipur, RJ' },
  { org: 'Saffrony University',               type: 'Student Development',       curriculum: 'Code-Based Agentic AI Training', participants: '300+', count: 300, location: 'Mehsana, GJ' },
  { org: 'Gujarat Technological University',  type: 'FDP + Student Programme',   curriculum: 'Low/No Code AI Tools',           participants: '150+', count: 150, location: 'Ahmedabad, GJ' },
  { org: 'Geetanjali Institute (GITS)',       type: 'Faculty Development',       curriculum: 'Low/No Code AI Tools',           participants: '90+',  count: 90,  location: 'Udaipur, RJ' },
  { org: 'Ahmedabad Institute of Technology', type: 'Faculty Development',       curriculum: 'Low/No Code AI Tools',           participants: '120+', count: 120, location: 'Ahmedabad, GJ' },
];

const galleryImages: GalleryImage[] = [
  { src: '/content/ws1.jpg',       org: 'Saffrony University',               category: 'Student Development',  location: 'Mehsana, GJ'   },
  { src: '/content/ws2.jpg',       org: 'Parul University',                  category: 'Student Development',  location: 'Vadodara, GJ'  },
  { src: '/content/ws3.jpg',       org: 'Techno NJR — Udaipur',              category: 'Faculty Development',  location: 'Udaipur, RJ'   },
  { src: '/content/ws4.jpg',       org: 'Parul University',                  category: 'Student Development',  location: 'Vadodara, GJ'  },
  { src: '/content/ws5.jpg',       org: 'Vishwakarma University',            category: 'Student Development',  location: 'Ahmedabad, GJ' },
  { src: '/content/ws6.jpg',       org: 'Metizsoft Solutions',               category: 'Corporate Training',   location: 'Ahmedabad, GJ' },
  { src: '/content/IMG_8353.jpg',  org: 'Techno NJR — Udaipur',              category: 'Faculty Development',  location: 'Udaipur, RJ'   },
  { src: '/content/IMG_4453.jpg',  org: 'Ahmedabad Institute of Technology', category: 'Faculty Development',  location: 'Ahmedabad, GJ' },
  { src: '/content/IMG_8275.jpg',  org: 'Gujarat Technological University',  category: 'Faculty Development',  location: 'Ahmedabad, GJ' },
];

const caseStudies = [
  {
    title: "Metizsoft Software Solutions",
    subtitle: "Agentic AI Automation (N8N)",
    type: "Corporate Training (CT)",
    participants: "150+",
    format: "Two-Day Intensive, On-Site",
    delivered: "Over two days, the Metizsoft team moved from basic AI awareness to building production-ready multi-agent automation workflows using N8N. Every participant built and deployed at least two live workflows connecting their existing business tools: email, CRM data, spreadsheets, and notification systems. The trainer team worked department by department, customising each workflow to the team's actual daily operations.",
    outcome: "Within two weeks of the workshop, the operations team had automated three recurring workflows that previously required a combined 6 hours of manual effort per week. The ROI on the per-participant workshop cost was recovered before the second week ended.",
    metrics: [
      { label: 'Workflows Automated', value: '3+' },
      { label: 'Hours Saved/Week',    value: '6h' },
      { label: 'ROI Timeline',        value: '14 Days' },
    ],
    quote: "Within 2 weeks of the N8N automation workshop, our team had automated 3 recurring workflows that used to take 6 hours combined every week. The workshop paid for itself before the second week was out.",
    author: "Operations Head, Metizsoft Software Solutions"
  },
  {
    title: "Techno NJR — Udaipur",
    subtitle: "Rajasthan's First Dual-Track AI Programme",
    type: "Faculty Development Programme (FDP) + Student SDP",
    participants: "500+ total (200 Faculty + 300 Students)",
    format: "Multi-Day Dual-Track",
    delivered: "Techno NJR became one of the first institutions in Rajasthan to run a simultaneous Faculty FDP and Student SDP. Over 200 faculty members across departments were trained in practical, low/no-code AI tools covering teaching preparation, question paper generation, research assistance, and administrative documentation. In parallel, 300 students went through the Agentic AI SDP, building and deploying projects over two days. The dual-track format set a new benchmark for institution-wide AI integration.",
    metrics: [
      { label: 'Faculty Trained',   value: '200+' },
      { label: 'Students Trained',  value: '300+' },
      { label: 'Tracks Delivered',  value: '2' },
    ],
    quote: "Running both the faculty FDP and the student workshop in the same week was ambitious. Unithink coordinated everything seamlessly and both cohorts left with real skills and tools they are using today.",
    author: "Director, Techno NJR University, Udaipur"
  },
  {
    title: "Parul University",
    subtitle: "Gujarat's Largest Single-Institution Student AI Programme",
    type: "Student Development Programme (SDP)",
    participants: "450+",
    format: "Two-Day Code-Based AI Workshop",
    delivered: "Parul University hosted one of Unithink's largest single-institution SDP engagements: 450+ students, two full days, all hands-on. The Code-Based Agentic AI workshop took students from near-zero AI experience to deploying RAG chatbots, AI resume analysers, and n8n automation pipelines. Every participant left with at least three documented AI projects ready to link from their GitHub profile and reference in placement interviews.",
    metrics: [
      { label: 'Students Trained',   value: '450+' },
      { label: 'Projects Per Student', value: '3+' },
      { label: 'Placement-Ready',    value: '100%' },
    ],
    quote: "I came in knowing almost nothing about building AI tools. By the end of Day 2, I had a working resume analyser and a document chatbot that I actually showed at my campus placement interview. I got placed at a product company and I genuinely believe the workshop made the difference.",
    author: "Final-Year CSE Student, Parul University"
  }
];

const allExperiences = [
  "Every workshop starts with a live build within the first 60 minutes. No slides, no theory. Participants deploy something before lunch.",
  "Our trainers adapt in real-time. When Metizsoft's operations team showed us their existing tools, we rebuilt the Day 2 exercises around their actual workflows.",
  "At Parul University, we ran parallel breakout tracks: one for students with coding experience and one for beginners. Both cohorts delivered projects by Day 2.",
  "Faculty at Techno NJR had attended FDPs before. By noon on Day 1, several had automated their entire question paper generation process.",
  "GITS had concerns about whether their non-technical faculty could participate. By the end of Day 3, every participant had built and deployed at least one AI tool in their subject area.",
  "At Saffrony, the enthusiasm spread beyond the workshop room. Students who attended on Day 1 brought their friends on Day 2.",
  "Post-workshop support isn't optional. It's part of the delivery. We've resolved implementation blockers for participants weeks after a workshop closed.",
  "Vishwakarma University had students from 4 different engineering branches. We ran use-case tracks by department so every project was domain-relevant.",
];


// ── Feedback video card (auto-plays on scroll, mute toggle) ─────────────────
function FeedbackVideoCard({ src, label, tag, index }: { src: string; label: string; tag: string; index: number }) {
  const videoRef     = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const v = videoRef.current;
        if (!v) return;
        if (entry.isIntersecting) v.play().catch(() => {});
        else { v.pause(); v.muted = true; setMuted(true); }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group rounded-2xl overflow-hidden border border-color-border bg-color-bg shadow-soft hover:border-color-accent/40 transition-all duration-500 flex flex-col"
    >
      <div ref={containerRef} className="relative bg-black overflow-hidden w-full" style={{ aspectRatio: '9/16' }}>
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-contain"
          muted loop playsInline preload="metadata"
          onLoadedMetadata={() => setReady(true)}
        />
        {!ready && <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-white/5 animate-pulse" />}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Tag */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-sm text-white text-[9px] font-medium uppercase tracking-[0.06em]">{tag}</span>
        </div>

        {/* Controls — bottom right on hover */}
        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={() => { if (videoRef.current) { videoRef.current.muted = !muted; setMuted((m: boolean) => !m); } }}
            className="w-8 h-8 rounded-lg bg-black/70 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/90 transition-colors"
            aria-label={muted ? 'Unmute video' : 'Mute video'}
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); videoRef.current?.requestFullscreen?.(); }}
            className="w-8 h-8 rounded-lg bg-black/70 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/90 transition-colors"
            aria-label="Open fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Silent hint */}
        <div className="absolute bottom-3 left-3 opacity-70 group-hover:opacity-0 transition-opacity duration-300">
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/50 text-white text-[9px] font-semibold">
            <VolumeX className="w-2.5 h-2.5" /> silent
          </span>
        </div>
      </div>
      <div className="px-3.5 py-3">
        <p className="text-sm font-heading font-bold text-color-text leading-snug">{label}</p>
      </div>
    </motion.div>
  );
}


export function SuccessStories() {
  return (
    <div className="pt-20 relative overflow-hidden">
      <SEO
        title="Our Work — Real AI Deployments Across India"
        description="Verified AI training outcomes from 9 organisations including Metizsoft, Parul University, Techno NJR, Vishwakarma, and GTU. 1,800+ participants trained. Real case studies and workshop gallery."
        keywords="AI training success stories India, corporate AI results, student AI placement, faculty AI training outcomes, Unithink case studies"
        canonical="/success-stories"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.unithinkschool.com' },
            { name: 'Success Stories', url: 'https://www.unithinkschool.com/success-stories' },
          ]),
          organizationSchema,
        ]}
      />

      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-color-accent/5 blur-[130px]" />
        <div className="absolute top-[50%] right-[-15%] w-[700px] h-[700px] rounded-full bg-color-cta/5 blur-[140px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-color-accent/3 blur-[120px]" />
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-color-bg relative pt-10 pb-14 md:pt-16 md:pb-20 lg:pb-28 overflow-hidden px-3 md:px-5">
        <DotGrid />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 md:gap-16 lg:gap-20 items-center">

            {/* Left: copy */}
            <div className="flex flex-col gap-10">
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 w-fit px-5 py-2 rounded-full bg-color-accent/10 border border-color-accent/20 text-color-accent text-[10px] font-medium uppercase tracking-[0.06em] shadow-xl shadow-color-accent/5"
              >
                <Trophy className="w-4 h-4" />
                Our Work
              </motion.div>

              <div className="flex flex-col gap-6">
                <motion.h1
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                  className="type-h1 text-color-text"
                >
                  Real Outcomes. <br />
                  <span className="text-color-accent">Real Deployments.</span>
                </motion.h1>

                <motion.p
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
                  className="type-p1 text-color-text-2 max-w-[520px]"
                >
                  Every engagement below is a verified delivery. 9+ organisations, 1,800+ participants, tracked outcomes measured by what got built and deployed, not by certificates issued.
                </motion.p>
              </div>

              <motion.div
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="grid grid-cols-3 gap-6 pt-8"
                style={{ borderTop: '1px solid rgba(251,176,59,0.15)' }}
              >
                {[
                  { icon: Users,    value: '1,800+', label: 'Participants' },
                  { icon: Building, value: '9+',     label: 'Organisations' },
                  { icon: Target,   value: '3',      label: 'Program Types' },
                ].map(({ icon: Icon, value, label }) => (
                  <div key={label} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-color-accent opacity-70" />
                      <span className="text-2xl md:text-3xl font-heading font-black text-color-text tracking-tight shimmer-text">{value}</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.06em] text-color-text-muted font-medium">{label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Workshop photo with overlay */}
            <motion.div
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative w-full sm:max-w-[560px] sm:mx-auto lg:mx-0 pt-8 lg:pt-6 pb-8 lg:pb-6"
            >
              {/* Verified badge — floating */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -right-4 z-20 hidden lg:flex items-center gap-2 px-4 py-2 rounded-2xl shadow-soft border border-color-border bg-color-bg"
              >
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-[10px] font-black uppercase tracking-wider text-color-text">Verified Data</span>
              </motion.div>

              {/* Workshop photo card */}
              <div className="rounded-[2.5rem] overflow-hidden relative" style={{ aspectRatio: '4/3', boxShadow: '0 0 0 1px rgba(251,176,59,0.18), 0 32px 72px rgba(0,0,0,0.35)' }}>
                <img
                  src="/content/ws1.jpg"
                  alt="Live workshop session"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)' }} />

                {/* Bottom stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-7 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-color-accent mb-1">Live from the floor</p>
                    <p className="text-xl font-heading font-black text-white leading-tight">1,800+ participants.<br />9+ organisations &amp; growing.</p>
                  </div>
                  <div className="flex flex-col gap-2 text-right">
                    {[
                      { v: '95%', l: 'Satisfaction' },
                      { v: '3', l: 'Program Tracks' },
                    ].map(s => (
                      <div key={s.l} className="px-4 py-2 rounded-2xl text-center" style={{ background: 'rgba(251,176,59,0.2)', border: '1px solid rgba(251,176,59,0.35)', backdropFilter: 'blur(8px)' }}>
                        <div className="text-xl font-heading font-black text-color-accent">{s.v}</div>
                        <div className="text-[8px] uppercase tracking-widest text-white/80 font-bold">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating stat badge */}
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute -bottom-6 -left-8 p-4 rounded-[1.5rem] z-20 hidden lg:flex"
                style={{
                  background: 'rgba(15,15,20,0.92)',
                  boxShadow: '0 0 0 1px rgba(251,176,59,0.2), 0 16px 40px rgba(0,0,0,0.4)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(251,176,59,0.25), rgba(251,176,59,0.1))' }}>
                    <Star className="w-5 h-5 text-color-accent" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-heading font-black text-white">95%</span>
                    <span className="text-[9px] uppercase tracking-[0.2em] font-extrabold text-white/60">Satisfaction Rate</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-color-accent/5 rounded-full blur-[180px] -z-10" />
      </section>

      {/* ── Impact Stats ─────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 lg:py-24 bg-color-bg-2 relative overflow-hidden px-3 md:px-5">
        <DotGrid />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col gap-6 text-left items-start mb-6 md:mb-10 lg:mb-16">
            <span className="type-h6 text-color-accent">Impact at a Glance</span>
            <h2 className="type-h2 text-color-text">60+ Workshops. Still Growing.</h2>
            <p className="type-p1 text-color-text-2 max-w-[640px]">
              Different cities, different audiences, different goals. Every workshop delivered to the same standard.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, i) => (
              <motion.div
                key={i}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="bg-color-bg p-6 lg:p-8 rounded-2xl lg:rounded-[2.5rem] border border-color-border text-center group hover:border-color-accent/30 transition-all duration-700 shadow-soft"
              >
                <div className="w-12 h-12 rounded-2xl bg-color-accent/10 flex items-center justify-center text-color-accent mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  {stat.icon}
                </div>
                <div className="type-display shimmer-text mb-4">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-[0.08em] font-medium text-color-text-muted">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Workshop Gallery ─────────────────────────────────────────── */}
      <WorkshopGallery images={galleryImages} />

      <VideoSection />

      {/* ── Text + Video Testimonials ─────────────────────────────────── */}
      <section className="py-14 md:py-20 lg:py-24 bg-color-bg-2 relative overflow-hidden px-3 md:px-5">
        <DotGrid />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-left mb-6 md:mb-10 lg:mb-16">
            <span className="type-h6 text-color-accent block mb-6">Hear It From Them</span>
            <h2 className="type-h2 text-color-text">
              What Participants Say.
            </h2>
            <p className="type-p1 text-color-text-muted max-w-2xl mt-5">
              Real words from students, faculty, and professionals who went through the programme.
            </p>
          </div>

          {/* ── 4 feedback videos ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { src: '/content/fac1.mp4', label: 'Student Feedback', tag: 'Student SDP' },
              { src: '/content/fac2.mp4', label: 'Corporate Feedback', tag: 'Corporate' },
              { src: '/content/fac3.mp4', label: 'Faculty Feedback', tag: 'Faculty FDP' },
              { src: '/content/fac1.mp4', label: 'Project Showcase', tag: 'Showcase' },
            ].map((v, i) => (
              <FeedbackVideoCard key={v.src} src={v.src} label={v.label} tag={v.tag} index={i} />
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: "I came in knowing almost nothing about building AI tools. By Day 2 I had a working resume analyser and a document chatbot that I actually showed at my campus placement interview. I got placed at a product company.",
                name: "Final-Year CSE Student",
                org: "Parul University",
                category: "Student",
              },
              {
                quote: "By noon on Day 1, I had automated my entire question paper generation process. I've attended FDPs before. This was the first one where I left with something I actually use.",
                name: "Assistant Professor, Computer Science",
                org: "Techno NJR University",
                category: "Faculty",
              },
              {
                quote: "Within 2 weeks of the N8N workshop, our team automated 3 recurring workflows that used to take 6 hours combined every week. The workshop paid for itself before the second week was out.",
                name: "Operations Head",
                org: "Metizsoft Software Solutions",
                category: "Corporate",
              },
              {
                quote: "Our students from 4 different engineering branches all built domain-relevant projects. Vishwakarma has done many technical events — none produced this level of output in a single day.",
                name: "Training & Placement Officer",
                org: "Vishwakarma University",
                category: "Faculty",
              },
              {
                quote: "I was skeptical because our faculty are non-technical. By Day 3, every single participant had built and deployed at least one AI tool in their subject area. GITS will do this again.",
                name: "Principal",
                org: "GITS, Udaipur",
                category: "Faculty",
              },
              {
                quote: "The enthusiasm spread beyond the workshop room. Students who attended Day 1 brought their friends on Day 2. That doesn't happen at every event. The energy was real.",
                name: "Student Council President",
                org: "Saffrony University",
                category: "Student",
              },
            ].map((t, i) => {
              const cs = t.category === 'Corporate'
                ? { bg: 'rgba(59,130,246,0.15)', color: '#60a5fa', border: 'rgba(59,130,246,0.3)' }
                : t.category === 'Faculty'
                ? { bg: 'rgba(34,197,94,0.15)',  color: '#4ade80', border: 'rgba(34,197,94,0.3)' }
                : { bg: 'rgba(168,85,247,0.15)', color: '#c084fc', border: 'rgba(168,85,247,0.3)' };
              return (
                <motion.div
                  key={i}
                  transition={{ duration: 0.35, delay: (i % 3) * 0.1 }}
                  className="bg-color-bg rounded-[2.5rem] p-8 border border-color-border shadow-soft flex flex-col gap-6 group hover:border-color-accent/25 transition-all duration-500"
                >
                  {/* Quote mark */}
                  <Quote className="w-8 h-8 text-color-accent/25 group-hover:text-color-accent/50 transition-colors duration-500 flex-shrink-0" />

                  {/* Text */}
                  <p className="type-p1 text-color-text-2 flex-1 group-hover:text-color-text transition-colors duration-500">
                    "{t.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between pt-4 border-t border-color-border">
                    <div>
                      <p className="text-sm font-semibold text-color-text">{t.name}</p>
                      <p className="text-xs text-color-text-muted font-semibold mt-0.5">{t.org}</p>
                    </div>
                    <span className="text-[9px] font-medium uppercase tracking-[0.06em] px-3 py-1.5 rounded-full"
                      style={{ background: cs.bg, color: cs.color, border: `1px solid ${cs.border}` }}>
                      {t.category}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Delivery Record ───────────────────────────────────────────── */}
      <section className="py-14 md:py-20 lg:py-24 bg-color-bg relative overflow-hidden px-3 md:px-5">
        <DotGrid />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-left mb-6 md:mb-10 lg:mb-16">
            <span className="type-h6 text-color-accent block mb-6">Verified Delivery Register</span>
            <h2 className="type-h2 text-color-text mb-6">Complete Delivery Record</h2>
            <p className="type-p1 text-color-text-muted max-w-3xl">
              Each row is a verified workshop. Source of truth: internal delivery register.
            </p>
          </div>
          <div className="bg-color-bg rounded-[3.5rem] border border-color-border overflow-hidden shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-color-bg-2">
                    <th className="py-6 px-8 text-left text-sm font-semibold text-color-text uppercase tracking-[0.06em] border-b border-color-border">Organisation</th>
                    <th className="py-6 px-8 text-left text-sm font-semibold text-color-text uppercase tracking-[0.06em] border-b border-color-border">Program Type</th>
                    <th className="py-6 px-8 text-left text-sm font-semibold text-color-text uppercase tracking-[0.06em] border-b border-color-border hidden md:table-cell">Curriculum</th>
                    <th className="py-6 px-8 text-left text-sm font-semibold text-color-text uppercase tracking-[0.06em] border-b border-color-border hidden lg:table-cell">Location</th>
                    <th className="py-6 px-8 text-right text-sm font-semibold text-color-text uppercase tracking-[0.06em] border-b border-color-border">Participants</th>
                  </tr>
                </thead>
                <tbody>
                  {deliveryRecord.map((row, i) => (
                    <motion.tr
                      key={i}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="border-b border-color-border hover:bg-color-bg-2 transition-colors duration-300 group"
                    >
                      <td className="py-6 px-8 text-base font-normal text-color-text group-hover:text-color-accent transition-colors duration-300">{row.org}</td>
                      <td className="py-6 px-8">
                        <span className={cn(
                          "text-xs font-medium uppercase tracking-[0.06em] px-3 py-1 rounded-full",
                          row.type.includes('Corporate') ? "bg-blue-500/10 text-blue-500" :
                          row.type.includes('Faculty')   ? "bg-green-500/10 text-green-500" :
                                                           "bg-purple-500/10 text-purple-500"
                        )}>
                          {row.type}
                        </span>
                      </td>
                      <td className="py-6 px-8 text-base font-normal text-color-text-2 hidden md:table-cell">{row.curriculum}</td>
                      <td className="py-6 px-8 text-base font-normal text-color-text-2 hidden lg:table-cell">{row.location}</td>
                      <td className="py-6 px-8">
                        <div className="flex items-center justify-end gap-3">
                          <div className="w-20 hidden sm:block">
                            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(251,176,59,0.12)' }}>
                              <motion.div
                                initial={{ width: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.4, 0, 0.2, 1] }}
                                className="h-full rounded-full"
                                style={{ background: 'linear-gradient(90deg, #FBB03B, rgba(251,176,59,0.5))' }}
                              />
                            </div>
                          </div>
                          <span className="text-base font-normal text-color-accent tabular-nums">{row.participants}</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experiences from the Floor ───────────────────────────────── */}
      <section className="py-14 md:py-20 lg:py-24 bg-color-bg-2 relative overflow-hidden px-3 md:px-5">
        <DotGrid />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col gap-10">
            <div className="text-left">
              <span className="type-h6 text-color-accent block mb-6">From Our Trainers</span>
              <h2 className="type-h2 text-color-text">
                What Happens Inside Every Room.
              </h2>
              <p className="type-p1 text-color-text-muted max-w-2xl mt-5">
                Notes from the sessions. The things that don't show up on slides.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {allExperiences.map((exp, i) => (
                <motion.div
                  key={i}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.1 }}
                  className="bg-color-bg p-8 rounded-[2.5rem] border border-color-border shadow-soft flex gap-6 group hover:border-color-accent/20 transition-all duration-500"
                >
                  <Quote className="w-8 h-8 text-color-accent/20 group-hover:text-color-accent/40 transition-colors duration-500 flex-shrink-0 mt-1" />
                  <p className="type-p1 text-color-text-2 group-hover:text-color-text transition-colors duration-500">
                    {exp}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Case Studies ─────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 lg:py-24 bg-color-bg relative overflow-hidden px-3 md:px-5">
        <DotGrid />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-left mb-10 md:mb-16 lg:mb-24">
            <span className="type-h6 text-color-accent block mb-6">Deep Dives</span>
            <h2 className="type-h2 text-color-text">Outcome Highlights</h2>
            <p className="type-p1 text-color-text-muted max-w-2xl mt-5">
              Three of our most significant engagements, in detail.
            </p>
          </div>
          <div className="space-y-16">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={i}
                transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                className="grid lg:grid-cols-12 gap-12 items-start"
              >
                <div className="lg:col-span-5 space-y-6">
                  <div className="bg-color-bg-2 p-10 rounded-[3.5rem] border border-color-border shadow-soft relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-color-accent/5 blur-3xl rounded-full" />
                    <h3 className="type-h3 text-color-text mb-2">{cs.title}</h3>
                    <p className="type-p1 text-color-accent font-semibold mb-8">{cs.subtitle}</p>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-color-border">
                        <span className="text-[10px] font-medium uppercase tracking-[0.06em] text-color-text-muted">Type</span>
                        <span className="text-sm font-bold text-color-text text-right max-w-[60%]">{cs.type}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-color-border">
                        <span className="text-[10px] font-medium uppercase tracking-[0.06em] text-color-text-muted">Participants</span>
                        <span className="text-base font-heading font-bold text-color-text">{cs.participants}</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span className="text-[10px] font-medium uppercase tracking-[0.06em] text-color-text-muted">Format</span>
                        <span className="text-sm font-bold text-color-text text-right max-w-[60%]">{cs.format}</span>
                      </div>
                    </div>
                  </div>

                  {/* Metrics with mini visual bars */}
                  <div className="grid grid-cols-3 gap-3">
                    {cs.metrics.map((m, j) => (
                      <motion.div
                        key={j}
                        transition={{ duration: 0.4, delay: j * 0.1 }}
                        className="bg-color-bg p-5 rounded-[2rem] border border-color-border text-center group hover:border-color-accent/30 transition-all duration-500"
                      >
                        <div className="text-2xl font-heading font-black text-color-accent tracking-tight group-hover:scale-110 transition-transform duration-300">{m.value}</div>
                        <div className="text-[9px] font-black uppercase tracking-[0.1em] text-color-text-muted mt-1">{m.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-10 pt-4">
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-[1px] bg-color-accent" />
                      <h4 className="type-h6 text-color-text">What Was Delivered</h4>
                    </div>
                    <p className="type-p1 text-color-text-muted">{cs.delivered}</p>
                  </div>
                  {cs.outcome && (
                    <div className="space-y-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-[1px] bg-color-accent" />
                        <h4 className="type-h6 text-color-text">Reported Outcome</h4>
                      </div>
                      <p className="type-p1 text-color-text-muted">{cs.outcome}</p>
                    </div>
                  )}
                  {cs.quote && (
                    <div className="bg-color-bg-2 p-10 rounded-[3.5rem] border border-color-border relative shadow-soft group hover:border-color-accent/20 transition-all duration-700">
                      <Star className="absolute -top-5 -left-5 w-14 h-14 text-color-accent/10 fill-color-accent/5 group-hover:text-color-accent/20 transition-colors duration-1000" />
                      <p className="type-p1 text-color-text italic mb-8">"{cs.quote}"</p>
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-[2px] bg-color-accent rounded-full" />
                        <p className="text-base font-heading font-bold text-color-text">{cs.author}</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 lg:py-24 bg-color-bg-2 relative overflow-hidden px-3 md:px-5">
        <DotGrid />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
            className="bg-color-bg p-8 md:p-14 rounded-2xl lg:rounded-[3rem] border border-color-border text-center shadow-soft relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(var(--color-accent-rgb),0.05)_0%,transparent_50%)]" />
            <h2 className="type-h2 text-color-text mb-8 relative z-10">
              Want to be the <br />
              <span className="text-color-accent">Next Success Story?</span>
            </h2>
            <p className="type-p1 text-color-text-muted mb-12 max-w-2xl mx-auto relative z-10">
              Whether you lead a company, run an institution, or prepare students for placements, we deliver the same documented outcomes for your organisation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 relative z-10">
              <Link to="/contact" className="btn-primary px-10 py-5 group">
                Book a Free Discovery Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
              <Link to="/contact" className="btn-secondary px-10 py-5">
                Request a Custom Proposal
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-color-accent/5 rounded-full blur-[200px] -z-10" />
      </section>
    </div>
  );
}