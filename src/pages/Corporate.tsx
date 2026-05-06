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
import { corporateFAQs, corporateFAQCategories } from '../data/faq-corporate';
import { Building2, Users, Zap, TrendingUp, Code2, UserCheck, Star } from 'lucide-react';

const corporateActivity = [
  { name: 'Metizsoft team',   action: 'deployed n8n automation',  time: '2h ago' },
  { name: 'Parul University', action: 'completed FDP batch',       time: '1d ago' },
  { name: 'GTU cohort',       action: 'built 3 AI agents',         time: '3d ago' },
];

const corporateVideoTestimonials = [
  { src: '/content/fac1.mp4', name: 'Rohan Mehta', role: 'Operations Head', org: 'Metizsoft Solutions' },
  { src: '/content/fac2.mp4', name: 'Priya Kapoor', role: 'L&D Manager', org: 'Parul University' },
  { src: '/content/fac3.mp4', name: 'Vivek Shah', role: 'CTO', org: 'TechVentures Pvt. Ltd.' },
];

const corporateTextTestimonials = [
  {
    quote: 'Within 2 weeks of the N8N workshop, our team automated 3 recurring workflows that used to take 6 hours combined every week. The workshop paid for itself before the second week was out.',
    name: 'Operations Head',
    role: 'Operations',
    org: 'Metizsoft Software Solutions',
    initial: 'O',
    category: 'Corporate',
    color: 'rgba(59,130,246,0.15)',
    border: 'rgba(59,130,246,0.3)',
    textColor: '#60a5fa',
  },
  {
    quote: 'Our HR team now uses AI to screen initial applications and draft offer letters. What used to take 2 days per hiring cycle now takes under 2 hours. The ROI was immediate.',
    name: 'HR Director',
    role: 'Human Resources',
    org: 'Gujarat Manufacturing Group',
    initial: 'H',
    category: 'Corporate',
    color: 'rgba(251,176,59,0.15)',
    border: 'rgba(251,176,59,0.3)',
    textColor: '#FBB03B',
  },
  {
    quote: 'The custom curriculum was exactly what we needed. No generic examples — every workflow they built was for our actual sales process. My team left ready to deploy, not just learn.',
    name: 'VP Sales',
    role: 'Sales',
    org: 'B2B SaaS Company, Ahmedabad',
    initial: 'V',
    category: 'Corporate',
    color: 'rgba(34,197,94,0.15)',
    border: 'rgba(34,197,94,0.3)',
    textColor: '#4ade80',
  },
];

const corporateStats = [
  { value: '1,800+', label: 'Participants Trained',  icon: Users },
  { value: '95%',    label: 'Satisfaction Rate',     icon: Star },
  { value: '40%',    label: 'Efficiency Improvement',icon: TrendingUp },
  { value: '7-Day',  label: 'Post-Workshop Support', icon: UserCheck },
];

const problemCards = [
  {
    title: "Theory Without Output",
    description: "Generic AI courses teach concepts but don't build systems. Without a live build session, whatever was learned fades fast. People leave knowing what AI is, not what it can do for them."
  },
  {
    title: "No Customisation for Your Industry",
    description: "A logistics company, a pharma firm, and a textile manufacturer have completely different AI needs. Off-the-shelf content treats them all the same. The result is training that feels like it was made for someone else."
  },
  {
    title: "Zero Post-Training Support",
    description: "Most vendors disappear after delivery. When employees try to implement on their own and hit a wall, there's no one to call. Within two weeks, the adoption rate drops to near zero."
  }
];

const audienceCards = [
  {
    title: "Tech Teams",
    description: "You want your team working with AI tools that fit your stack, not demos on sample data. Our workshops focus on real implementation: building automations and shipping AI-assisted workflows your team can actually maintain.",
    icon: <Code2 className="w-8 h-8" />
  },
  {
    title: "HR & L&D Managers",
    description: "You need training that shows actual results, not a stack of completion certificates. Our workshops include pre- and post-assessments, satisfaction scoring, and documented skill reports you can use internally.",
    icon: <UserCheck className="w-8 h-8" />
  },
  {
    title: "Team Leads & Dept Heads",
    description: "You need your team using AI at work, not just knowing what it is. The curriculum is built around your department's workflows. Sales teams automate follow-ups. Operations teams build reporting tools. Every track is specific.",
    icon: <Users className="w-8 h-8" />
  },
  {
    title: "CXOs & Founders",
    description: "AI adoption is no longer optional. Your competitors are already using it. Our workshops give your organisation a fast, structured entry point with visible output in 2 days and efficiency gains you can track within 2 weeks.",
    icon: <Building2 className="w-8 h-8" />
  }
];

const formats = [
  {
    title: "One-Day AI Awareness Workshop",
    price: "₹1,500 per participant",
    bestFor: "Teams beginning their AI journey. Ideal as a pilot program before a larger rollout, or for senior leadership who need context before approving company-wide adoption.",
    whatHappens: "Participants spend 8 hours moving from zero to practical. They understand what AI can and cannot do, identify the highest-leverage use-cases for their role, and leave with a working prompt system, a basic automation, and a clear personal AI adoption plan.",
    includes: [
      "8 hours of hands-on training (no passive lectures)",
      "1 Lead Trainer + 1 Assistant per 50 participants",
      "Access to all AI tools used during the session",
      "Custom workshop documentation and templates",
      "Prompt library tailored to your industry",
      "Official Unithink certificate of completion",
      "All workshop materials in digital format"
    ]
  },
  {
    title: "Two-Day Intensive Workshop",
    price: "Starting from ₹2,000 per participant",
    bestFor: "Teams that need real transformation, not just awareness. Department-level upskilling, company-wide adoption programs, and organisations that want measurable output by end of Day 2.",
    whatHappens: "Day 1 covers AI foundations, GenAI tool mastery, and prompt engineering for your business context. Day 2 is a live build day. Every participant builds at least one working automation, AI agent, or workflow for their specific role and deploys it before leaving.",
    includes: [
      "16 hours of intensive training across 2 days",
      "1 Lead Trainer + 1 Assistant per 50 participants",
      "Hands-on access to 10+ industry-standard AI platforms",
      "Live AI agent and automation building sessions",
      "Complete prompt libraries for Sales, Marketing, Operations, HR, and Finance",
      "Custom workflow templates for your specific use-cases",
      "Official Unithink certificate of completion",
      "7-day post-workshop WhatsApp support channel",
      "Post-workshop implementation guide"
    ],
    isPopular: true
  },
  {
    title: "Multi-Day Custom Program",
    price: "Custom — contact for a quote",
    bestFor: "Organisations requiring deep transformation across multiple departments, multiple locations, or specialised technical tracks. Also used for long-term AI adoption engagements.",
    whatHappens: "We design everything from scratch. Discovery call, curriculum design, pilot session, then scaled rollout. Programs run from 3 to 5 days or can be broken into shorter sessions over several weeks.",
    includes: [
      "Fully custom curriculum built around your business",
      "3 to 5 day extended programs (or modular multi-week structure)",
      "Advanced and specialised AI tracks by department",
      "Industry-specific AI application development",
      "Long-term implementation support beyond the workshop",
      "Ongoing consultation and progress check-ins",
      "Dedicated trainer team assigned to your account"
    ]
  }
];

export function Corporate() {
  return (
    <div className="flex flex-col relative overflow-hidden">
      <SEO
        title="Corporate AI Training India | AI Workshops"
        description="Custom corporate AI training for teams across India. Build automation workflows & AI agents on real data. On-site or online. Gujarat & India-wide."
        keywords="corporate AI training India, business AI upskilling, AI automation workshop, AI agents for teams, AI skill development, corporate AI training Gujarat, AI workshop Ahmedabad, n8n automation training, AI for professionals, AI certification India"
        canonical="/corporate"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.unithinkschool.com' },
            { name: 'AI Workshops', url: 'https://www.unithinkschool.com/ai-workshops' },
            { name: 'Corporate AI Training', url: 'https://www.unithinkschool.com/corporate' },
          ]),
          courseSchema(
            'Corporate AI Training Workshop',
            'Customised, hands-on AI workshop for corporate teams in India. Build automation workflows, AI agents, and pipelines on your real business data. 1–2 day intensive with live builds and 7-day post-workshop support.',
            'Unithink School',
            {
              url: 'https://www.unithinkschool.com/corporate',
              educationalLevel: 'Intermediate',
              teaches: ['AI Automation', 'AI Agents', 'n8n Workflows', 'LangChain', 'Generative AI', 'Business Process Automation'],
              inLanguage: ['en', 'hi', 'gu'],
              duration: 'P2D',
              courseMode: 'blended',
              locationName: 'Ahmedabad, Gujarat, India',
              offers: { price: '1500', priceCurrency: 'INR' },
            }
          ),
          faqSchema(corporateFAQs.map(f => ({ question: f.question, answer: f.answer }))),
        ]}
      />
      {/* Page Specific Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-color-accent/5 blur-[120px]" />
        <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] rounded-full bg-color-cta/5 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-color-accent/3 blur-[150px]" />
      </div>

      <Hero
        eyebrow="Corporate AI Training"
        title={<>Give Your Team <span className="text-color-accent">AI Skills</span> They Use on Monday.</>}
        subheadline="AI workshops built around your business. Your tools, your workflows, your problems — solved by your team before the day ends."
        primaryCTA={{ text: "Book a Free Discovery Call", href: "#contact" }}
        secondaryCTA={{ text: "Download Brochure", href: "https://wa.me/919726217070?text=Hi%2C%20I%20would%20like%20to%20request%20the%20Corporate%20AI%20Training%20brochure" }}
        trustLine="Trusted by Metizsoft, GTU, Parul University & 200+ organisations across India"
        image={{ src: '/content/corporate-banner.jpeg', alt: 'Corporate AI Training Workshop' }}
        activityItems={corporateActivity}
      />
      
      <TrustBar 
        label="Companies that have trained with us"
        items={['Metizsoft Solutions', 'Gujarat Technological University', 'Parul University', 'Vishwakarma University', 'Saffrony University', 'AIT Ahmedabad']}
      />

      <Stats
        items={corporateStats}
        heading="Results Businesses Measure."
        subheading="Every number comes from a real engagement. Tracked post-workshop, not estimated."
      />

      <ProblemSection
        eyebrow="Why Most AI Training Fails"
        title={"Your team attended a training.\nNothing changed on Monday morning."}
        description="That's not a people problem. That's a training design problem. Most corporate AI programs are built for awareness, not application."
        cards={problemCards}
      />

      <AudienceSection
        eyebrow="Built for Decision-Makers and Doers"
        title={"From the Boardroom to the Build Room —\nThere's a Track for Every Role."}
        cards={audienceCards}
        columns={4}
      />

      <div id="formats">
        <FormatSection
          eyebrow="Choose Your Format"
          title="Three Formats. Built Around Your Timeline and Goals."
          note="All formats include certified trainers, hands-on curriculum, real project builds, and post-workshop support. Minimum batch: 50 participants."
          formats={formats}
          brochureLabel="Request Brochure"
        />
      </div>

      <ToolsSection audience="corporate" />

      <EducatorsSection eyebrow="Your Trainers" title="Led by Active AI Practitioners." />

      <VideoSection />

      <Differentiation />

      <ParticipantTestimonials
        eyebrow="What Our Participants Say"
        title="Monday Morning. Different Team."
        subtitle="Real results from corporate teams who went from AI awareness to actual deployment."
        videoTestimonials={corporateVideoTestimonials}
        textTestimonials={corporateTextTestimonials}
      />

      <AIMentor />

      <FAQ
        eyebrow="Corporate AI Training — FAQs"
        title="Questions About Our Corporate Programs"
        description="Everything you need to know before booking a corporate AI training workshop for your team."
        items={corporateFAQs}
        categories={corporateFAQCategories}
      />

      <Contact />
    </div>
  );
}
