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
import { studentFAQs, studentFAQCategories } from '../data/faq-students';
import { GraduationCap, Code2, Rocket, Briefcase, Building2, Star } from 'lucide-react';

const studentActivity = [
  { name: 'Aryan from Parul',       action: 'deployed a RAG chatbot',       time: '3h ago' },
  { name: 'Sneha, Final Year CSE',  action: 'built an n8n automation',       time: '1d ago' },
  { name: 'Vishal (Vishwakarma)',   action: 'got placed using AI portfolio',  time: '4d ago' },
];

const studentVideoTestimonials = [
  { src: '/content/fac1.mp4', name: 'Aryan Patel', role: 'Final-Year CSE Student', org: 'Parul University' },
  { src: '/content/fac2.mp4', name: 'Sneha Joshi', role: 'Pre-Placement Batch', org: 'Vishwakarma University' },
  { src: '/content/fac3.mp4', name: 'Rahul Desai', role: 'Technical Club Lead', org: 'Techno NJR University' },
];

const studentTextTestimonials = [
  {
    quote: 'I came in knowing almost nothing about building AI tools. By Day 2 I had a working resume analyser and a document chatbot I actually showed at my placement interview. I got placed at a product company.',
    name: 'Final-Year CSE Student',
    role: 'Student',
    org: 'Parul University',
    initial: 'P',
    category: 'Student',
    color: 'rgba(168,85,247,0.15)',
    border: 'rgba(168,85,247,0.3)',
    textColor: '#c084fc',
  },
  {
    quote: 'We organised a 2-day workshop for our technical club and 45 students attended. Every single one left with a deployed project on GitHub. Our placement numbers this year were the best in 4 years.',
    name: 'Technical Club Secretary',
    role: 'Student',
    org: 'Saffrony Institute of Technology',
    initial: 'S',
    category: 'Student',
    color: 'rgba(251,176,59,0.15)',
    border: 'rgba(251,176,59,0.3)',
    textColor: '#FBB03B',
  },
  {
    quote: 'I had zero coding background. By the end of Day 1 I had built an AI chatbot for my college library using NotebookLM. My HOD asked me to demo it at the next faculty meeting.',
    name: 'BCA 3rd Year',
    role: 'Student',
    org: 'AIT Ahmedabad',
    initial: 'A',
    category: 'Student',
    color: 'rgba(34,197,94,0.15)',
    border: 'rgba(34,197,94,0.3)',
    textColor: '#4ade80',
  },
];

const studentStats = [
  { value: '1,800+', label: 'Students Trained',        icon: GraduationCap },
  { value: '9+',     label: 'Colleges Across India',   icon: Building2 },
  { value: '3+',     label: 'AI Projects Per Workshop',icon: Code2 },
  { value: '95%',    label: 'Satisfaction Rate',       icon: Star },
];

const problemCards = [
  {
    title: "Theory That Doesn't Transfer",
    description: "Your college AI curriculum teaches how models work. Placement interviewers ask what you have built. There is a gap between understanding transformers and deploying a RAG-based document chatbot. Our workshops close that gap in one session."
  },
  {
    title: "Certificates Without Projects",
    description: "You have completed Coursera courses. So have 400 other applicants for the same role. What separates you is a GitHub repository with a deployed AI project, not another certificate PDF. Unithink workshops produce deployable projects, not certificates."
  },
  {
    title: "No Time for Multi-Month Courses",
    description: "You are in your final year. You have exams, projects, and interviews. You cannot commit to a 3-month online course. You need focused, high-density learning that produces a real output in 1–2 days. That is exactly what our workshop format delivers."
  }
];

const audienceCards = [
  {
    title: "Final-Year Students",
    description: "You are in your final year and your placement window is approaching. You need deployable AI skills, not more theory.",
    icon: <GraduationCap className="w-8 h-8" />
  },
  {
    title: "Pre-Placement Batch",
    description: "Your batch has a placement drive in the next 60 days. This workshop gives every student a deployed project to show on Day 1 of interviews.",
    icon: <Briefcase className="w-8 h-8" />
  },
  {
    title: "Technical Club Members",
    description: "Your technical club wants to organise a high-value, industry-relevant event that actually builds skills participants use.",
    icon: <Code2 className="w-8 h-8" />
  },
  {
    title: "AI-Curious Beginners",
    description: "You've heard about AI but never built anything. This workshop is designed so that by Hour 4, you have already deployed your first AI system.",
    icon: <Rocket className="w-8 h-8" />
  }
];

const formats = [
  {
    title: "One-Day AI Bootcamp",
    price: "₹800 per participant",
    bestFor: "Students who want a strong foundation and at least one deployed project. Ideal as a department event or technical club session.",
    whatHappens: "8 hours of intensive learning. Hours 1-2: AI Tools Orientation. Hours 3-4: GenAI Mastery. Hours 5-6: AI Agent Building. Hours 7-8: Portfolio Build + Demo.",
    includes: [
      "8 hours of hands-on training",
      "1 lead trainer + 1 assistant per 50 participants",
      "3+ deployable AI projects",
      "Complete prompt libraries",
      "Workshop documentation and project templates",
      "Official Unithink certificate of completion"
    ]
  },
  {
    title: "Two-Day Deep Dive",
    price: "₹1,200 per participant",
    bestFor: "Students in the final stretch before placements who want a full AI portfolio and deep practical exposure. The gold standard for pre-placement batches.",
    whatHappens: "16 hours across 2 days. Day 1: Foundations & Tools, Prompt Engineering, Productivity. Day 2: Advanced Builds (RAG Systems, n8n Automation), Portfolio Session.",
    includes: [
      "16 hours of intensive hands-on training",
      "1 lead trainer + 1 assistant per 50 participants",
      "6+ deployable AI projects",
      "Complete prompt libraries, workflow templates, and project documentation",
      "Official Unithink certificate of completion",
      "7-day post-workshop WhatsApp support",
      "Post-workshop career guidance: how to present AI projects in interviews"
    ],
    isPopular: true
  },
  {
    title: "College-Organised Workshop",
    price: "Custom institutional pricing",
    bestFor: "Colleges, universities, and student bodies that want to organise a high-value AI event for an entire department or batch.",
    whatHappens: "End-to-end coordination with your training cell or placement office. Pre-event communication and participant onboarding. On-site delivery with full trainer team.",
    includes: [
      "End-to-end coordination with placement office",
      "Pre-event communication and onboarding",
      "On-site delivery with full trainer team",
      "Post-event satisfaction documentation for NAAC",
      "Certificates for all participants"
    ]
  }
];

export function Students() {
  return (
    <div className="flex flex-col relative overflow-hidden">
      <SEO
        title="AI Workshop for Students India | Portfolio"
        description="Placement-ready AI workshops for engineering students. Build 3+ AI agents, automation tools & GenAI projects in 1-2 days. Gujarat, Maharashtra, Rajasthan."
        keywords="AI workshop for students India, student AI bootcamp, AI for engineering students, AI placement preparation, AI projects portfolio, college AI workshop, hands-on AI workshop, AI career India, AI certification India, smallest AI careers, workshop for students"
        canonical="/students"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.unithinkschool.com' },
            { name: 'AI Workshops', url: 'https://www.unithinkschool.com/ai-workshops' },
            { name: 'Student AI Workshops', url: 'https://www.unithinkschool.com/students' },
          ]),
          courseSchema(
            'Student AI Workshop — Build Portfolio-Ready AI Projects',
            'Placement-ready 1–2 day AI workshop for engineering students. Build and deploy 3+ AI agents, automation tools, and GenAI projects. Taught by active AI practitioners across Gujarat, Maharashtra, and Rajasthan.',
            'Unithink School',
            {
              url: 'https://www.unithinkschool.com/students',
              educationalLevel: 'Beginner to Intermediate',
              teaches: ['AI Agents', 'LangChain', 'n8n Automation', 'Generative AI', 'RAG Systems', 'AI Portfolio Projects'],
              inLanguage: ['en', 'hi', 'gu'],
              duration: 'P2D',
              courseMode: 'onsite',
              locationName: 'Gujarat, Maharashtra, Rajasthan, India',
              offers: { price: '0', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
            }
          ),
          faqSchema(studentFAQs.map(f => ({ question: f.question, answer: f.answer }))),
        ]}
      />
      {/* Page Specific Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[15%] right-[-10%] w-[600px] h-[600px] rounded-full bg-color-accent/5 blur-[130px]" />
        <div className="absolute top-[60%] left-[-10%] w-[500px] h-[500px] rounded-full bg-color-cta/5 blur-[110px]" />
        <div className="absolute bottom-[5%] right-[10%] w-[400px] h-[400px] rounded-full bg-color-accent/3 blur-[140px]" />
      </div>

      <Hero 
        eyebrow="Student AI Workshops"
        title={<>Graduate With <span className="text-color-accent">AI Skills</span> That Beat 95% of Your Batch.</>}
        subheadline="1–2 day workshops where engineering students build AI agents, ship automation systems, and leave with projects that actually impress placement recruiters."
        primaryCTA={{ text: "Register for Next Workshop", href: "#contact" }}
        secondaryCTA={{ text: "Download Student Brochure", href: "https://wa.me/919726217070?text=Hi%2C%20I%20would%20like%20to%20request%20the%20Student%20Workshop%20brochure" }}
        trustLine="Trusted by 1,800+ students across Parul, Vishwakarma, Techno NJR, Saffrony & more"
        image={{ src: '/content/student-banner.jpeg', alt: 'Student AI Workshop' }}
        activityItems={studentActivity}
      />
      
      <TrustBar 
        label="Colleges we have partnered with"
        items={['Parul University', 'Vishwakarma University', 'Techno NJR', 'Saffrony University', 'AIT Ahmedabad', 'GTU']}
      />

      <Stats
        items={studentStats}
        heading="Students Who Build, Get Placed."
        subheading="Every number below tracks real student outcomes — workshops delivered, projects built, and satisfaction measured after the fact."
      />

      <ProblemSection
        eyebrow="The Placement Reality Check"
        title={"A Degree Isn't Enough Anymore.\nWho Has the AI Portfolio?"}
        description="Placement season isn't just about your CGPA anymore. Recruiters are screening for AI skills. Not awareness. Actual, demonstrated capability."
        cards={problemCards}
      />

      <AudienceSection
        eyebrow="Built for Students Who Want to Stand Out"
        title={"You Don't Need AI Expertise.\nYou Need One Working Project."}
        cards={audienceCards}
        columns={4}
      />

      <div id="formats">
        <FormatSection
          eyebrow="Choose Your Format"
          title="Two Formats. Both Built for Portfolio-Ready AI Builders."
          note="For college-organised workshops, minimum batch size is 50 participants. For individual registrations in open cohorts, seats are limited so register early."
          formats={formats}
          brochureLabel="Request Brochure"
        />
      </div>

      <ToolsSection audience="students" />

      <EducatorsSection eyebrow="Your Trainers" title="Taught by People Who Build AI Every Day." />

      <VideoSection />

      <Differentiation />

      <ParticipantTestimonials
        eyebrow="What Our Participants Say"
        title="Monday Morning. Different Student."
        subtitle="Real placements. Real projects. Real stories from students who built their way in."
        videoTestimonials={studentVideoTestimonials}
        textTestimonials={studentTextTestimonials}
      />

      <AIMentor />

      <FAQ
        eyebrow="Student AI Workshops — FAQs"
        title="Questions About the Student Workshop"
        description="Everything you need to know before joining an AI workshop as a student or booking one for your college batch."
        items={studentFAQs}
        categories={studentFAQCategories}
      />

      <Contact />
    </div>
  );
}
