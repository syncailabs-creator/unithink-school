import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { Programs } from '../components/Programs';
import { Stats } from '../components/Stats';
import { Differentiation } from '../components/Differentiation';
import { ParticipantTestimonials } from '../components/ParticipantTestimonials';
import { ToolsSection } from '../components/ToolsSection';
import { EducatorsSection } from '../components/EducatorsSection';
import { VideoSection } from '../components/VideoSection';
import { Pricing } from '../components/Pricing';
import { AIMentor } from '../components/AIMentor';
import { Contact } from '../components/Contact';
import { FAQ } from '../components/FAQ';
import { SEO, organizationSchema, localBusinessSchema, webSiteSchema, faqSchema } from '../components/SEO';
import { homeFAQs, homeFAQCategories } from '../data/faq-home';
import { ShieldCheck } from 'lucide-react';

const homeVideoTestimonials = [
  { src: '/content/student-reviews.mp4', name: 'Final-Year CSE Student', role: 'Student', org: 'Saffrony University' },
  { src: '/content/fac2.mp4', name: 'Operations Head', role: 'Corporate', org: 'Metizsoft Software Solutions' },
  { src: '/content/fac3.mp4', name: 'Assistant Professor, CS', role: 'Faculty', org: 'Techno NJR University' },
];

const homeTextTestimonials = [
  {
    quote: "I came in knowing almost nothing about building AI tools. By Day 2 I had a working resume analyser and a document chatbot I actually showed at my placement interview. I got placed at a product company.",
    name: "Final-Year CSE Student",
    role: "Student",
    org: "Parul University",
    initial: "P",
    category: "Student",
    color: 'rgba(168,85,247,0.15)',
    border: 'rgba(168,85,247,0.3)',
    textColor: '#c084fc',
  },
  {
    quote: "By noon on Day 1, I had automated my entire question paper generation process. I've attended FDPs before — this was the first one where I left with something I actually use the next week.",
    name: "Assistant Professor, CS Dept",
    role: "Faculty",
    org: "Techno NJR University",
    initial: "A",
    category: "Faculty",
    color: 'rgba(34,197,94,0.15)',
    border: 'rgba(34,197,94,0.3)',
    textColor: '#4ade80',
  },
  {
    quote: "Within 2 weeks of the N8N workshop, our team automated 3 recurring workflows that used to take 6 hours combined every week. The workshop paid for itself before the second week was out.",
    name: "Operations Head",
    role: "Corporate",
    org: "Metizsoft Software Solutions",
    initial: "O",
    category: "Corporate",
    color: 'rgba(59,130,246,0.15)',
    border: 'rgba(59,130,246,0.3)',
    textColor: '#60a5fa',
  },
];

export function Home() {
  return (
    <div className="flex flex-col relative overflow-hidden">
      <SEO
        title="Hands-On AI Training India | Build Real AI"
        description="Hands-on AI workshops for corporates, students & faculty in India. Build and deploy real AI from Day 1. 1,800+ trained. AICTE-aligned. Based in Ahmedabad."
        keywords="AI workshops India, hands-on AI workshop, AI training Ahmedabad, corporate AI training, AI workshop for students, AICTE FDP AI, AI school India, AI skill development, AI certification India, agentic AI training, AI implementation training India, Unithink School"
        canonical="/"
        jsonLd={[
          organizationSchema,
          localBusinessSchema,
          webSiteSchema,
          faqSchema(homeFAQs.map(f => ({ question: f.question, answer: f.answer }))),
        ]}
      />
      {/* Page Specific Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-color-accent/5 blur-[130px]" />
        <div className="absolute top-[70%] right-[-10%] w-[500px] h-[500px] rounded-full bg-color-cta/5 blur-[110px]" />
      </div>

      <Hero 
        eyebrow="India's Most Practical AI Training"
        title={<>Build <span className="text-color-accent">Real</span> AI. <br /> Not Just <br /> Knowledge.</>}
        subheadline="AI workshops where you build and ship something real on your first day. For teams, students, and educators across India."
        primaryCTA={{ text: "Book a Workshop", href: "#contact" }}
        secondaryCTA={{ text: "Explore Programs", href: "#workshops" }}
        visualCard={{
          title: "India's Most Practical AI Training",
          description: "Every participant deploys a working AI system before the session ends. Not a certificate — a system.",
          stats: [
            { label: 'Avg ROI Timeline', value: '2 weeks' },
            { label: 'Projects per Workshop', value: '3–6' },
            { label: 'Post-Support', value: '7 days' }
          ]
        }}
        badges={{
          bottom: { icon: <ShieldCheck className="w-8 h-8" />, title: "AICTE", subtitle: "Aligned · 9+ Institutions" }
        }}
      />
      <TrustBar />
      <Programs />
      <Stats heading="The Numbers Speak for Themselves." subheading="Verified outcomes from real workshops across India. Every number tracked from delivery." />
      <Differentiation />
      <VideoSection />

      <ParticipantTestimonials
        eyebrow="What Our Participants Say"
        title="Real Words. Real Results."
        subtitle="From students who got placed, faculty who changed their workflow, and teams that measured ROI in days."
        videoTestimonials={homeVideoTestimonials}
        textTestimonials={homeTextTestimonials}
      />

      <ToolsSection audience="general" />
      <EducatorsSection />
      <Pricing />
      <AIMentor />
      <FAQ
        eyebrow="Everything You Need to Know"
        title="Frequently Asked Questions"
        description="Clear answers about AI workshops, programs, learning outcomes, and certifications."
        items={homeFAQs}
        categories={homeFAQCategories}
      />
      <Contact />
    </div>
  );
}
