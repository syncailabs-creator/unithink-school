import { motion } from 'motion/react';
import { Check, ArrowRight, MessageSquare, Users, Target, BookOpen, Star, ChevronDown, Quote, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { useState, useRef, useCallback } from 'react';
import { SEO, faqSchema, breadcrumbSchema } from '../components/SEO';
import { DotGrid } from '../components/DotGrid';
import { Hero } from '../components/Hero';

// â”€â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const plans = [
  {
    id: 'free',
    name: 'Live Sunday Workshop',
    price: 'Free',
    tag: 'Start Here',
    description: 'Every Sunday · Online · Open to All · Direct Q&A with Our AI Expert',
    features: [
      'Live 90-minute AI session every Sunday',
      'Ask your questions directly to the expert â€” no pre-screening, no filters',
      'Topic rotates weekly: automation, agents, GenAI tools, AI career guidance',
      'Hands-on mini project each session â€” you build something every week',
      'Attendance certificate for consistent participants (4+ sessions)',
    ],
    cta: "Join Free Sunday Workshop",
    whatsappMsg: "Hi I want to join the free Sunday AI workshop",
    footer: "Every Sunday · 10 AM IST · Zoom · No registration fee"
  },
  {
    id: 'community',
    name: 'AI Community Access',
    price: '₹299',
    period: 'One-Time',
    tag: 'Most Popular',
    description: 'Join 500+ active AI learners. Daily resources. Expert access. Lifetime membership.',
    features: [
      'Private WhatsApp group with 500+ active AI learners across India',
      'Daily AI tool drops, workflow templates, and ready-to-use prompt packs',
      'Weekly exclusive resources: frameworks, use-case libraries, case studies',
      'Direct access to Unithink trainers for questions and implementation guidance',
      'AI job and opportunity board â€” curated for India market',
      'Monthly live Q&A session with the full Unithink expert panel',
      'All recordings from Sunday live sessions archived in the group',
    ],
    cta: "Join Community for ₹299",
    whatsappMsg: "Hi I want to join the AI community for 299",
    footer: "One-time ₹299 · Lifetime access · 500+ active members",
    highlight: true
  },
  {
    id: 'roadmap',
    name: 'Personalised AI Roadmap',
    price: '₹999',
    period: 'One-Time',
    tag: 'Most Impactful',
    description: 'A custom-built AI learning path designed around your specific goals, skills, and career target.',
    features: [
      '45-minute 1:1 deep-dive call with an Unithink expert',
      'Custom PDF roadmap with milestones, weekly learning targets, project checkpoints',
      'Tool and platform recommendations specific to your role, industry, and career goal',
      'Curated resource list: exact courses, GitHub repos, papers, and communities',
      '30-day check-in follow-up call â€” we review your progress and answer blockers',
      'Community access included â€” ₹299 value, at no extra charge',
    ],
    cta: "Get My Roadmap for ₹999",
    whatsappMsg: "Hi I want the personalised AI roadmap for 999",
    footer: "Includes: 1:1 call + Custom PDF Roadmap + 30-day follow-up + Community"
  }
];

const comparison = [
  { feature: 'Live Sunday Workshop (Weekly)', free: true, community: true, roadmap: true },
  { feature: 'Private AI Community (WhatsApp)', free: false, community: true, roadmap: true },
  { feature: 'Daily Tool Drops & Templates', free: false, community: true, roadmap: true },
  { feature: 'Direct Trainer Access', free: false, community: true, roadmap: true },
  { feature: 'AI Job Board (India)', free: false, community: true, roadmap: true },
  { feature: '1:1 Expert Call (45 min)', free: false, community: false, roadmap: true },
  { feature: 'Custom PDF Roadmap', free: false, community: false, roadmap: true },
  { feature: '30-Day Follow-Up Call', free: false, community: false, roadmap: true },
  { feature: 'Personalised Resource List', free: false, community: false, roadmap: true },
];

// Testimonials â€” add photo path once images are available; leave empty for initials fallback
const testimonials = [
  {
    quote: "The Sunday live sessions are the best 90 minutes I spend all week. I've built more AI tools in the last 2 months than in the last 2 years of watching tutorials.",
    author: "Rahul Mehta",
    role: "Software Engineer",
    location: "Ahmedabad",
    plan: "Community Member",
    rating: 5,
    initial: "RM",
    photo: '',
  },
  {
    quote: "I got the ₹999 roadmap before deciding whether to attend a full workshop. The 45-minute call gave me more clarity about where to focus than anything I had read online.",
    author: "Priya Shah",
    role: "Marketing Manager",
    location: "Surat",
    plan: "Personalised Roadmap",
    rating: 5,
    initial: "PS",
    photo: '',
  },
  {
    quote: "I was skeptical about paying only ₹299 for lifetime community access. Six months in, I've attended 24 Sunday sessions and landed a job that specifically mentioned my AI automation skills.",
    author: "Arjun Patel",
    role: "Recent Graduate",
    location: "Vadodara",
    plan: "Community Member",
    rating: 5,
    initial: "AP",
    photo: '',
  },
  {
    quote: "As a freelancer, the community gave me frameworks I could immediately package into client services. Earned back the ₹299 on day two.",
    author: "Neha Joshi",
    role: "Freelance Designer",
    location: "Pune",
    plan: "Community Member",
    rating: 5,
    initial: "NJ",
    photo: '',
  },
  {
    quote: "The roadmap PDF they created for me is still my reference document 3 months later. The 30-day follow-up call kept me honest about my progress.",
    author: "Sameer Desai",
    role: "Product Manager",
    location: "Mumbai",
    plan: "Personalised Roadmap",
    rating: 5,
    initial: "SD",
    photo: '',
  },
  {
    quote: "I came in knowing nothing about AI agents. After 4 Sunday sessions I had deployed a working n8n automation for my business. The trainers respond within hours.",
    author: "Kavya Nair",
    role: "Business Owner",
    location: "Bangalore",
    plan: "Community Member",
    rating: 5,
    initial: "KN",
    photo: '',
  },
];

const faqs = [
  {
    q: "Is the Sunday workshop really free?",
    a: "Yes. The Live Sunday Workshop is completely free. No registration fee, no credit card, no catch. We run it every Sunday at 10 AM IST on Zoom. All you need to do is send a WhatsApp message to join the group and you will receive the Zoom link every week."
  },
  {
    q: "What happens after I pay for the ₹299 community?",
    a: "You will receive a WhatsApp link within 24 hours to join the private AI community group. You will immediately have access to the archived resources, daily drops, and trainer channels. There are no recurring charges. Your access is lifetime."
  },
  {
    q: "How long does the ₹999 roadmap process take?",
    a: "After purchase, we schedule your 45-minute 1:1 call within 3â€“5 business days. Your custom PDF roadmap is delivered within 48 hours of the call. The 30-day follow-up call is scheduled at the time of your first call. Total engagement: under 2 hours of your time, spread across 30 days."
  },
  {
    q: "Can I upgrade from the free plan to ₹299 or ₹999?",
    a: "Yes. There is no barrier to upgrading. If you are on the free Sunday sessions and want community access, simply pay for the ₹299 plan. If you want the 1:1 roadmap, pay ₹999 â€” the community access is included at no extra charge."
  },
  {
    q: "Is the AI Mentor right for beginners?",
    a: "Yes. The Sunday free sessions start from zero and build progressively. The ₹999 roadmap is specifically designed to assess your current level first before building a learning path. You do not need any prior AI knowledge."
  },
  {
    q: "Can this lead into a full workshop later?",
    a: "Many AI Mentor participants convert to workshop participants after experiencing the quality of Unithink's guidance. The roadmap process often identifies whether a full workshop is the logical next step for your goals. There is no obligation â€” but many people find it becomes the obvious next move."
  },
  {
    q: "What AI tools are covered in the Sunday sessions?",
    a: "Topics rotate weekly and cover tools like ChatGPT, Claude, Gemini, n8n automation, LangChain agents, Perplexity, Notion AI, Midjourney, Runway, and emerging tools relevant to the India market. Each session focuses on one theme with a live build component â€” not just a demo."
  },
  {
    q: "How is the ₹999 roadmap different from just Googling a learning path?",
    a: "A Google search gives you a generic list of courses. The ₹999 roadmap is personalised to your current skill level, your specific job role or career target, and your available time each week. The 45-minute call surfaces constraints and goals that no algorithm can infer. The PDF roadmap includes milestone checkpoints, specific tools, GitHub repos, and a 30-day follow-up to review your actual progress."
  },
  {
    q: "Can organisations use the AI Mentor program for their team?",
    a: "Yes. The community access (₹299) works well for individual employees exploring AI independently. For structured team learning, we recommend our Corporate AI Training workshops, which are purpose-built for organisational deployment."
  },
  {
    q: "What is the refund policy for the paid plans?",
    a: "For the ₹299 community: if you are not satisfied within 7 days of joining, we will refund you in full â€” no questions asked. For the ₹999 roadmap: if the 1:1 call does not meet your expectations, we offer a full refund before the PDF roadmap is delivered."
  },
];

const audienceCards = [
  { icon: Target, title: "Professionals", desc: "Wanting to use AI in their current job to save time, improve outputs, and stay ahead of colleagues who haven't started yet." },
  { icon: Users, title: "Freelancers", desc: "Wanting to offer AI-powered services to clients â€” but need a structured approach to what to learn and how to position it." },
  { icon: MessageSquare, title: "Career Changers", desc: "Targeting AI-adjacent roles and need a clear, personalised learning roadmap to close the skill gap in 60â€“90 days." },
  { icon: BookOpen, title: "Students", desc: "Curious about AI but not yet ready to commit to a full 2-day workshop. The Sunday sessions are the perfect starting point." },
];

// â”€â”€â”€ HoverVideoCard â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Autoplay muted on mount; hover â†’ unmute; mouse leave â†’ mute

interface HoverVideoCardProps {
  src: string;
  label: string;
  index: number;
}

function HoverVideoCard({ src, label, index }: HoverVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const handleMouseEnter = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    setMuted(false);
    v.play().catch(() => {});
  }, []);

  const handleMouseLeave = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    setMuted(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative rounded-[2rem] overflow-hidden border border-color-border bg-color-bg shadow-soft hover:border-color-accent/40 hover:shadow-xl hover:shadow-color-accent/8 transition-all duration-500 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video */}
      <div className="relative aspect-video bg-color-bg-2">
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Sound state indicator â€” bottom left corner */}
        <div
          className={cn(
            "absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-medium uppercase tracking-[0.06em] transition-all duration-300",
            muted
              ? "bg-black/50 text-white/60 backdrop-blur-sm"
              : "bg-color-accent text-color-bg shadow-lg shadow-color-accent/30"
          )}
        >
          {muted
            ? <><VolumeX className="w-3 h-3" /> Hover for sound</>
            : <><Volume2 className="w-3 h-3" /> Sound on</>
          }
        </div>

        {/* Subtle accent overlay on hover */}
        <div className="absolute inset-0 bg-color-accent/0 group-hover:bg-color-accent/4 transition-all duration-500 pointer-events-none" />
      </div>

      {/* Label */}
      <div className="p-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-color-text">{label}</p>
          <p className="text-[11px] text-color-text-muted font-semibold uppercase tracking-wider mt-0.5">Workshop Recording</p>
        </div>
        <div className="w-8 h-8 rounded-xl bg-color-accent-bg flex items-center justify-center group-hover:bg-color-accent group-hover:text-color-bg transition-all duration-300">
          <Volume2 className="w-4 h-4 text-color-accent group-hover:text-color-bg" />
        </div>
      </div>
    </motion.div>
  );
}

// â”€â”€â”€ TestimonialCard (used in marquee) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[340px] md:w-[380px] bg-color-bg-elevated rounded-[2rem] p-7 border border-color-border flex flex-col gap-5 hover:border-color-accent/30 transition-all duration-500 shadow-soft">
      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(t.rating)].map((_, j) => (
          <Star key={j} className="w-3.5 h-3.5 text-color-accent fill-color-accent" />
        ))}
      </div>

      {/* Quote */}
      <div className="relative flex-1">
        <Quote className="w-7 h-7 text-color-accent/20 absolute -top-1 -left-1" />
        <p className="type-p2 text-color-text-2 pl-6">
          {t.quote}
        </p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-color-border">
        {t.photo ? (
          <img
            src={t.photo}
            alt={t.author}
            width={40}
            height={40}
            loading="lazy"
            className="w-10 h-10 rounded-full object-cover border-2 border-color-accent/30 flex-shrink-0"
          />
        ) : (
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-black text-color-accent flex-shrink-0 border border-color-accent/30"
            style={{ background: 'rgba(251,176,59,0.12)' }}>
            {t.initial}
          </div>
        )}
        <div className="min-w-0">
          <p className="text-sm font-bold text-color-text truncate">{t.author}</p>
          <p className="text-[10px] text-color-text-muted font-semibold uppercase tracking-wider truncate">
            {t.role} · {t.location}
          </p>
        </div>
        <span className="ml-auto text-[9px] font-medium uppercase tracking-[0.06em] px-2.5 py-1 rounded-full border flex-shrink-0"
          style={{ background: 'rgba(251,176,59,0.1)', color: '#FBB03B', borderColor: 'rgba(251,176,59,0.25)' }}>
          {t.plan}
        </span>
      </div>
    </div>
  );
}

// â”€â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export function AIMentor() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Duplicate for seamless marquee loop
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()];

  return (
    <div className="pt-20 relative overflow-hidden">
      <SEO
        title="AI Mentor India | Free Sunday Workshop"
        description="Your personal AI growth partner. Free Sunday AI workshops, ₹299 community access, or ₹999 personalised roadmap. Expert-led. For India's AI learners."
        keywords="AI mentor India, free AI workshop India, AI learning roadmap, AI community India, personalised AI guidance, AI for beginners India, AI career guidance, Sunday AI workshop, learning agent in AI, AI roadmap for students India"
        canonical="/ai-mentor"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.unithinkschool.com' },
            { name: 'AI Mentor', url: 'https://www.unithinkschool.com/ai-mentor' },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Mentor by Unithink School",
            "url": "https://www.unithinkschool.com/ai-mentor",
            "description": "Personal AI growth partner offering free Sunday live workshops, ₹299 private community access, and ₹999 personalised AI roadmap with 1:1 expert call.",
            "provider": {
              "@type": "Organization",
              "name": "Unithink School",
              "url": "https://www.unithinkschool.com"
            },
            "areaServed": { "@type": "Country", "name": "India" },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Mentor Plans",
              "itemListElement": [
                { "@type": "Offer", "name": "Live Sunday Workshop", "price": "0", "priceCurrency": "INR" },
                { "@type": "Offer", "name": "AI Community Access", "price": "299", "priceCurrency": "INR" },
                { "@type": "Offer", "name": "Personalised AI Roadmap", "price": "999", "priceCurrency": "INR" }
              ]
            }
          },
          faqSchema(faqs.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />

      {/* Page background blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-color-accent/5 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-color-cta/5 blur-[130px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full bg-color-accent/3 blur-[110px]" />
      </div>

      <Hero
        eyebrow="AI Mentor"
        title={<>Your Personal AI <span className="text-color-accent">Growth Partner.</span></>}
        subheadline="Not ready for a full workshop? Start your AI journey with direct expert guidance â€” at your pace, around your goals, at a price that removes every barrier."
        primaryCTA={{ text: "Join Free Sunday Session", href: "https://wa.me/919726217070?text=Hi%20I%20want%20to%20join%20the%20free%20Sunday%20AI%20workshop" }}
        secondaryCTA={{ text: "Get Personalised Roadmap", href: "/contact" }}
        trustLine="500+ Active Community Members · Live Every Sunday 10 AM IST · Expert-Led · No Pre-Recorded Content"
        image={{ src: '/content/ai-mentor-banner.jpeg', alt: 'AI Mentor Program' }}
      />

      {/* â”€â”€ Positioning â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-14 md:py-20 lg:py-24 bg-color-bg-2 border-y border-color-border relative overflow-hidden px-3 md:px-5">
        <DotGrid />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-lg bg-color-accent-bg border border-color-accent/20 text-color-accent text-[10px] font-medium uppercase tracking-[0.06em] mb-6">
                The Gap Between Curiosity and Capability
              </div>
              <h2 className="type-h2 text-color-text mb-8">
                You Know AI Is Important.{' '}
                <span className="text-color-text-2">You Are Not Sure Where to Start.</span>
              </h2>
              <div className="space-y-5 type-p1 text-color-text-2">
                <p>
                  Most people who want to learn AI face the same three problems: they don't know which tools are actually worth learning, they don't have a structured path from where they are to where they want to be, and they don't have anyone to ask when they hit a wall.
                </p>
                <p>
                  AI Mentor solves all three. Not a course. Not pre-recorded video. Direct access to practising AI experts who will help you figure out exactly what to learn, in what order, for your specific goal.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {audienceCards.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.08 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-color-bg p-7 rounded-[2.5rem] border border-color-border shadow-soft hover:border-color-accent/20 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-color-accent-bg flex items-center justify-center text-color-accent mb-5 group-hover:scale-110 group-hover:bg-color-accent group-hover:text-color-bg transition-all duration-500">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-color-text mb-2 group-hover:text-color-accent transition-colors duration-500 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="type-p2 text-color-text-2">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ Pricing Plans â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-14 md:py-20 lg:py-24 bg-color-bg relative overflow-hidden px-3 md:px-5">
        <DotGrid />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            className="flex flex-col gap-6 text-left items-start mb-8 md:mb-14 lg:mb-20"
          >
            <span className="type-h6 text-color-accent">Choose Your Starting Point</span>
            <h2 className="type-h2 text-color-text">
              Start Free.{' '}
              <span className="text-color-text-2 font-extrabold">Scale When You're Ready.</span>
            </h2>
            <p className="type-p1 text-color-text-2 max-w-[640px]">
              Every plan moves you from where you are to where you want to be. No pressure to upgrade â€” the value speaks for itself.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className={cn(
                  "relative flex flex-col p-10 rounded-[3rem] border transition-all duration-500",
                  plan.highlight
                    ? "bg-color-bg border-color-accent shadow-2xl shadow-color-accent/10 lg:scale-[1.02] z-10"
                    : "bg-color-bg-2 border-color-border hover:border-color-text-muted/20"
                )}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-color-accent text-color-bg text-[10px] font-medium uppercase tracking-[0.06em]">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <span className="type-h6 text-color-accent mb-2 block">{plan.tag}</span>
                  <h3 className="type-h3 text-color-text mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="type-price text-color-accent">{plan.price}</span>
                    {plan.period && <span className="type-h6 text-color-text-muted">{plan.period}</span>}
                  </div>
                  <p className="type-p2 text-color-text-2">{plan.description}</p>
                </div>

                <div className="flex-grow space-y-4 mb-10">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-color-accent-bg flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-color-accent" />
                      </div>
                      <span className="type-p2 text-color-text-2">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto space-y-3">
                  <a
                    href={`https://wa.me/919726217070?text=${encodeURIComponent(plan.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "w-full py-4 rounded-2xl font-semibold text-sm transition-all flex items-center justify-center gap-2 group",
                      plan.highlight
                        ? "bg-color-accent text-color-bg hover:bg-color-accent/90"
                        : "bg-color-bg text-color-text border border-color-border hover:border-color-accent/30"
                    )}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-[10px] text-center text-color-text-muted uppercase tracking-[0.06em] font-medium">
                    {plan.footer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Comparison Table â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-14 md:py-20 lg:py-24 bg-color-bg-2 relative overflow-hidden px-3 md:px-5">
        <DotGrid />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(251,176,59,0.05) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex flex-col gap-6 text-left items-start mb-14"
          >
            <span className="type-h6 text-color-accent">Side by Side</span>
            <h2 className="type-h2 text-color-text">
              Plan <span className="text-color-accent">Comparison</span>
            </h2>
            <p className="type-p1 text-color-text-2 max-w-[640px]">
              See exactly what's included in each tier â€” pick the one that matches where you are right now.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[3rem] border border-color-border overflow-hidden shadow-soft bg-color-bg"
          >
            <div className="h-[2px]"
              style={{ background: 'linear-gradient(to right, transparent, rgba(251,176,59,0.4) 20%, #FBB03B 50%, rgba(251,176,59,0.4) 80%, transparent)' }} />
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-left border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-color-border">
                    <th className="px-8 py-6 text-[10px] font-medium uppercase tracking-[0.06em] text-color-text-muted bg-color-bg-2">Feature</th>
                    <th className="px-6 py-6 text-center bg-color-bg-2">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-[9px] font-medium uppercase tracking-[0.06em] text-color-text-muted">Free</span>
                        <span className="text-xl font-heading font-black text-color-text">Free</span>
                      </div>
                    </th>
                    <th className="px-6 py-6 text-center" style={{ background: 'rgba(251,176,59,0.06)' }}>
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-color-accent">Community</span>
                        <span className="text-xl font-heading font-black text-color-accent">₹299</span>
                      </div>
                    </th>
                    <th className="px-6 py-6 text-center bg-color-bg-2">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-[9px] font-medium uppercase tracking-[0.06em] text-color-text-muted">Roadmap</span>
                        <span className="text-xl font-heading font-black text-color-text">₹999</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.08 }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="border-b border-color-border last:border-0 hover:bg-color-bg-2 group transition-all duration-300"
                    >
                      <td className="px-8 py-5 text-sm font-semibold text-color-text-2 group-hover:text-color-text transition-colors duration-300">
                        {row.feature}
                      </td>
                      <td className="px-6 py-5 text-center">
                        {row.free
                          ? <div className="w-6 h-6 rounded-full bg-color-accent/15 flex items-center justify-center mx-auto"><Check className="w-3.5 h-3.5 text-color-accent" /></div>
                          : <span className="text-color-text-muted/30 text-lg font-light">â€”</span>}
                      </td>
                      <td className="px-6 py-5 text-center" style={{ background: 'rgba(251,176,59,0.03)' }}>
                        {row.community
                          ? <div className="w-6 h-6 rounded-full flex items-center justify-center mx-auto" style={{ background: 'rgba(251,176,59,0.2)' }}><Check className="w-3.5 h-3.5 text-color-accent" /></div>
                          : <span className="text-color-text-muted/30 text-lg font-light">â€”</span>}
                      </td>
                      <td className="px-6 py-5 text-center">
                        {row.roadmap
                          ? <div className="w-6 h-6 rounded-full bg-color-accent/15 flex items-center justify-center mx-auto"><Check className="w-3.5 h-3.5 text-color-accent" /></div>
                          : <span className="text-color-text-muted/30 text-lg font-light">â€”</span>}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ What Our Participants Say â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-14 md:py-20 lg:py-24 bg-color-bg relative overflow-hidden px-3 md:px-5">
        <DotGrid />

        {/* Section header */}
        <div className="max-w-7xl mx-auto w-full relative z-10 mb-6 md:mb-10 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6 text-left items-start"
          >
            <span className="type-h6 text-color-accent">Community Voices</span>
            <h2 className="type-h2 text-color-text">
              What Our <span className="text-color-accent">Participants Say</span>
            </h2>
            <p className="type-p1 text-color-text-2 max-w-[640px]">
              Real feedback from community members, workshop attendees, and roadmap clients.
            </p>
          </motion.div>
        </div>

        {/* Row 1 â€” scrolls left */}
        <div className="overflow-hidden mb-5 relative z-10">
          <div className="flex gap-5 animate-marquee">
            {row1.map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>

        {/* Row 2 â€” scrolls right */}
        <div className="overflow-hidden relative z-10">
          <div className="flex gap-5 animate-marquee-reverse">
            {row2.map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>
      </section>

      {/* â”€â”€ Workshop Videos â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-14 md:py-20 lg:py-24 bg-color-bg-2 relative overflow-hidden px-3 md:px-5">
        <DotGrid />
        <div className="max-w-7xl mx-auto w-full relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6 text-left items-start mb-6 md:mb-10 lg:mb-14"
          >
            <span className="type-h6 text-color-accent">See It Live</span>
            <h2 className="type-h2 text-color-text">
              Inside Our <span className="text-color-accent">Sunday Sessions</span>
            </h2>
            <p className="type-p1 text-color-text-2 max-w-[640px]">
              Hover over any video to hear it. See exactly what happens in a live session before you join.
            </p>
          </motion.div>

          {/* 3 Video cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: '/content/ws_video3.mp4', label: 'Live Sunday AI Session' },
              { src: '/content/ws_video3.mp4', label: 'Community Q&A Highlight' },
              { src: '/content/fac2.mp4', label: 'AI Agent Build — n8n Demo' },
            ].map((v, i) => (
              <HoverVideoCard key={i} src={v.src} label={v.label} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ FAQ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-14 md:py-20 lg:py-24 bg-color-bg relative overflow-hidden px-3 md:px-5">
        <DotGrid />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(251,176,59,0.04) 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex flex-col gap-6 text-left items-start mb-14"
          >
            <span className="type-h6 text-color-accent">Got Questions?</span>
            <h2 className="type-h2 text-color-text">
              Frequently Asked <span className="text-color-accent">Questions</span>
            </h2>
            <p className="type-p1 text-color-text-2 max-w-[640px]">
              Everything about the AI Mentor program â€” answered clearly and honestly.
            </p>
          </motion.div>

          <div className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ delay: Math.min(i * 0.05, 0.3), duration: 0.5 }}
                className="bg-color-bg-2 rounded-[2rem] border border-color-border shadow-soft overflow-hidden transition-all duration-300 hover:border-color-accent/20"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-7 text-left group"
                >
                  <h3 className="text-sm md:text-base font-heading font-bold text-color-text group-hover:text-color-accent transition-colors duration-300 pr-4 tracking-tight">
                    {faq.q}
                  </h3>
                  <div
                    className={cn(
                      "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300",
                      openFaq === i
                        ? "bg-color-accent text-color-bg"
                        : "bg-color-bg text-color-text-muted group-hover:bg-color-accent/10 group-hover:text-color-accent"
                    )}
                  >
                    <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", openFaq === i ? "rotate-180" : "")} />
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-7 pb-7">
                    <div className="h-[1px] bg-color-border mb-4" />
                    <p className="type-p2 text-color-text-muted">{faq.a}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Final CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-14 md:py-20 lg:py-24 bg-color-bg relative overflow-hidden px-3 md:px-5">
        <DotGrid />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="bg-color-bg-2 p-12 md:p-24 rounded-[48px] border border-color-border shadow-soft text-center relative overflow-hidden">
            <DotGrid intensity="medium" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(var(--color-accent-rgb),0.05)_0%,transparent_50%)]" />
            <div className="relative z-10">
              <h2 className="type-h2 text-color-text mb-6">
                Your AI Journey{' '}
                <span className="text-color-accent">Starts This Sunday.</span>
              </h2>
              <p className="type-p1 text-color-text-2 mb-12 max-w-2xl mx-auto">
                No commitment. No payment required to start. Join the free Sunday session this week and see what Unithink is about before spending a single rupee.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://wa.me/919726217070?text=Hi%20I%20want%20to%20join%20the%20free%20Sunday%20AI%20workshop"
                  className="btn-primary btn-glow px-10 py-5 group"
                >
                  Join Free Sunday Session
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link to="/contact" className="btn-secondary px-10 py-5">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-color-accent/5 rounded-full blur-[150px] -z-10" />
      </section>
    </div>
  );
}
