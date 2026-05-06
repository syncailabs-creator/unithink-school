import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { Stats } from '../components/Stats';
import { ProblemSection } from '../components/ProblemSection';
import { AudienceSection } from '../components/AudienceSection';
import { FormatSection } from '../components/FormatSection';
import { Differentiation } from '../components/Differentiation';
import { AIMentor } from '../components/AIMentor';
import { Contact } from '../components/Contact';
import { FAQ } from '../components/FAQ';
import { ToolsSection } from '../components/ToolsSection';
import { EducatorsSection } from '../components/EducatorsSection';
import { VideoSection } from '../components/VideoSection';
import { ParticipantTestimonials } from '../components/ParticipantTestimonials';
import { SEO, courseSchema, faqSchema, breadcrumbSchema } from '../components/SEO';
import { facultyFAQs, facultyFAQCategories } from '../data/faq-faculty';
import { BookOpen, Search, Settings, Zap, ShieldCheck, Users, FileText } from 'lucide-react';

const facultyActivity = [
  { name: 'GTU Faculty Batch',    action: 'completed 5-day FDP',          time: '1d ago' },
  { name: 'Prof. Sharma (SPCE)',  action: 'automated question papers',      time: '2d ago' },
  { name: 'Parul HoD cohort',    action: 'built NAAC docs with AI',        time: '5d ago' },
];

const facultyVideoTestimonials = [
  { src: '/content/fac1.mp4', name: 'Dr. Anjali Mehta', role: 'Assistant Professor, CS', org: 'Techno NJR University' },
  { src: '/content/fac2.mp4', name: 'Prof. Rajesh Patel', role: 'HoD, Electronics', org: 'Parul University' },
  { src: '/content/fac3.mp4', name: 'Dr. Priya Nair', role: 'Research Faculty', org: 'Gujarat Technological University' },
];

const facultyTextTestimonials = [
  {
    quote: "By noon on Day 1, I had automated my entire question paper generation process. I've attended FDPs before — this was the first one where I left with something I actually use the next week.",
    name: 'Assistant Professor, CS Dept',
    role: 'Faculty',
    org: 'Techno NJR University',
    initial: 'A',
    category: 'Faculty',
    color: 'rgba(34,197,94,0.15)',
    border: 'rgba(34,197,94,0.3)',
    textColor: '#4ade80',
  },
  {
    quote: 'The NAAC documentation session alone saved our department 3 weeks of work. I used AI to draft our SAR section and the HOD said it was the best-structured report we had submitted in years.',
    name: 'HoD, Mechanical Engineering',
    role: 'Faculty',
    org: 'Saffrony Institute of Technology',
    initial: 'H',
    category: 'Faculty',
    color: 'rgba(251,176,59,0.15)',
    border: 'rgba(251,176,59,0.3)',
    textColor: '#FBB03B',
  },
  {
    quote: 'I was sceptical about AI for academic research. By Day 3 I had summarised 40 papers in under an hour and drafted a literature review that would have taken me 2 weeks manually.',
    name: 'Research Faculty, Pharmacy Dept',
    role: 'Faculty',
    org: 'Parul University',
    initial: 'R',
    category: 'Faculty',
    color: 'rgba(168,85,247,0.15)',
    border: 'rgba(168,85,247,0.3)',
    textColor: '#c084fc',
  },
];

const facultyStats = [
  { value: '200+',    label: 'Faculty Trained',       icon: Users },
  { value: 'AICTE',   label: 'Aligned Curriculum',    icon: BookOpen },
  { value: 'NEP 2020',label: 'Ready',                 icon: ShieldCheck },
  { value: 'NAAC',    label: 'Documentation Ready',   icon: FileText },
];

const problemCards = [
  {
    title: "Hours Wasted on Repetitive Tasks",
    description: "A typical faculty member spends 3–5 hours per week creating question papers, preparing lecture notes, generating assignment rubrics, and drafting administrative reports. AI tools can automate 60–80% of this work."
  },
  {
    title: "Compliance Pressure Without Practical Support",
    description: "AICTE mandates, NEP 2020 requirements, and NAAC accreditation criteria all increasingly require evidence of AI integration. Yet most faculty development programs focus on conceptual awareness rather than producing documented, verifiable outcomes."
  },
  {
    title: "FDPs That Don't Change Anything",
    description: "Most FDP programs teach how AI models work. Faculty return to the same manual workflows the next week. Ours is designed so every participant leaves with at least one working AI tool for their teaching or research, not just a completion certificate."
  }
];

const audienceCards = [
  {
    title: "Teaching Faculty",
    description: "Tools for lecture prep, question creation, assessment design, and student Q&A. Save 8–12 hours per week on routine preparation work.",
    icon: <BookOpen className="w-8 h-8" />
  },
  {
    title: "Research Faculty",
    description: "AI for literature review, abstract drafting, data analysis narratives, and publication preparation. Spend more time on original research.",
    icon: <Search className="w-8 h-8" />
  },
  {
    title: "HODs & Coordinators",
    description: "Curriculum design assistance, accreditation documentation generation, departmental report drafting, and meeting minutes automation.",
    icon: <Settings className="w-8 h-8" />
  },
  {
    title: "Principals & VCs",
    description: "Strategic overview of AI integration roadmap, compliance documentation framework, and faculty capability assessment.",
    icon: <ShieldCheck className="w-8 h-8" />
  }
];

const formats = [
  {
    title: "1-Day FDP",
    price: "8 hours total",
    bestFor: "Institutions needing a focused, high-impact introduction to AI tools for faculty — ideal for awareness sessions and leadership briefings.",
    whatHappens: "AI Foundations for Educators · Teaching Efficiency Tools · Live Hands-On Builds · Q&A and Implementation Planning.",
    includes: [
      "8 hours of hands-on training",
      "1 lead trainer + 1 assistant per 30 faculty",
      "Complete tool library and prompt packs",
      "7-day post-workshop support",
      "AICTE FDP documentation package",
      "Official Unithink School certificate"
    ]
  },
  {
    title: "2-Day FDP Intensive",
    price: "16 hours total",
    bestFor: "Institutions requiring comprehensive AI tool coverage, NAAC documentation support, and deeper hands-on practice across teaching, research, and administration.",
    whatHappens: "Day 1: AI Foundations + Teaching Productivity Tools. Day 2: Research Acceleration + Administration AI + Live Project Builds.",
    includes: [
      "16 hours of structured training",
      "1 lead trainer + 1 assistant per 30 faculty",
      "Complete AICTE FDP documentation",
      "NAAC-ready evidence package",
      "Curriculum design templates for AI-integrated courses",
      "7-day post-workshop support channel",
      "Official Unithink School + AICTE-aligned certificate"
    ],
    isPopular: true
  }
];

export function Faculty() {
  return (
    <div className="flex flex-col relative overflow-hidden">
      <SEO
        title="Faculty Development Programme AI | AICTE"
        description="AICTE & NEP 2020-aligned AI Faculty Development Programme. 1-Day and 2-Day FDP covering AI tools, teaching integration, research automation, and NAAC documentation. Gujarat & pan-India."
        keywords="AICTE FDP AI, faculty development programme AI, AI training for faculty, NEP 2020 AI integration, NAAC documentation AI, faculty AI tools, AI in higher education, AI for faculty teaching, FDP AI workshop Gujarat, engineering college AI workshop Gujarat"
        canonical="/faculty"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.unithinkschool.com' },
            { name: 'AI Workshops', url: 'https://www.unithinkschool.com/ai-workshops' },
            { name: 'Faculty Development Programme', url: 'https://www.unithinkschool.com/faculty' },
          ]),
          courseSchema(
            'AI Faculty Development Programme (FDP) — AICTE-Aligned',
            'AICTE & NEP 2020-aligned 5-day AI Faculty Development Programme for Indian colleges. Covers AI tools for teaching, research automation, curriculum design, and NAAC documentation. Gujarat & pan-India delivery.',
            'Unithink School',
            {
              url: 'https://www.unithinkschool.com/faculty',
              educationalLevel: 'Professional Development',
              teaches: ['AI Tools for Teaching', 'Research Automation', 'Curriculum Design with AI', 'NAAC Documentation', 'Generative AI', 'AI for Administration'],
              inLanguage: ['en', 'hi', 'gu'],
              duration: 'P5D',
              courseMode: 'onsite',
              locationName: 'Ahmedabad, Gujarat, India',
              offers: { price: '0', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
            }
          ),
          faqSchema(facultyFAQs.map(f => ({ question: f.question, answer: f.answer }))),
        ]}
      />
      {/* Page Specific Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[5%] left-[10%] w-[400px] h-[400px] rounded-full bg-color-accent/5 blur-[100px]" />
        <div className="absolute top-[50%] right-[-15%] w-[700px] h-[700px] rounded-full bg-color-cta/5 blur-[140px]" />
        <div className="absolute bottom-[15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-color-accent/3 blur-[120px]" />
      </div>

      <Hero 
        eyebrow="Faculty Development Programme"
        title={<>Give Your Faculty the <span className="text-color-accent">AI Tools</span> to Teach Smarter.</>}
        subheadline="AICTE-aligned AI workshops for faculty and academic institutions. Tools for lecture prep, research, NAAC paperwork, and curriculum design. You build and use them in the session itself."
        primaryCTA={{ text: "Request FDP Proposal", href: "#contact" }}
        secondaryCTA={{ text: "Download FDP Brochure", href: "https://wa.me/919726217070?text=Hi%2C%20I%20would%20like%20to%20request%20the%20Faculty%20Development%20Programme%20brochure" }}
        trustLine="AICTE Aligned | GTU Collaboration | NEP 2020 Ready | 200+ Faculty Trained | NAAC Documentation Supported"
        image={{ src: '/content/faculty-banner.jpeg', alt: 'Faculty Development Programme AI Workshop' }}
        activityItems={facultyActivity}
      />
      
      <TrustBar 
        label="Institutions we have trained with"
        items={['Gujarat Technological University', 'Techno NJR University', 'Parul University', 'Saffrony University', 'Ahmedabad Institute of Technology']}
      />

      <Stats
        items={facultyStats}
        heading="Built Around What Faculty Actually Need."
        subheading="AICTE-aligned, NAAC-ready, and rooted in the real pressures of academic life."
        compact
      />

      <ProblemSection
        eyebrow="The Faculty Workload Reality"
        title={"AICTE Mandates AI Integration.\nYour Faculty Needs a Practical Starting Point."}
        description="India's education landscape has changed faster than most faculty development programs can keep up with. The challenge isn't motivation. It's getting access to AI training that's actually practical."
        cards={problemCards}
      />

      <AudienceSection 
        eyebrow="Built for Every Educator Who Wants to Stay Ahead"
        title={"Whether You Teach, Research, or Lead —\nThere Is a Track for You."}
        cards={audienceCards}
        columns={4}
      />

      <div id="formats">
        <FormatSection
          eyebrow="Choose Your Format"
          title="Two FDP Formats. Built Around Your Institution's Needs."
          formats={formats}
          brochureLabel="Request FDP Brochure"
        />
      </div>

      <ToolsSection audience="faculty" />

      <EducatorsSection eyebrow="Your FDP Trainers" title="Facilitated by Active AI Educators." />

      <VideoSection />

      <Differentiation />

      <ParticipantTestimonials
        eyebrow="What Our Participants Say"
        title="Monday Morning. Different Educator."
        subtitle="Real outcomes from faculty who transformed their teaching, research, and admin workflows."
        videoTestimonials={facultyVideoTestimonials}
        textTestimonials={facultyTextTestimonials}
      />

      <AIMentor />

      <FAQ
        eyebrow="Faculty Development — FAQs"
        title="Questions About Our FDP"
        description="Everything you need to know about Unithink's AICTE-aligned AI Faculty Development Programme."
        items={facultyFAQs}
        categories={facultyFAQCategories}
      />

      <Contact />
    </div>
  );
}
