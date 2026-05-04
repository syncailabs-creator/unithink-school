import { FAQCategory, FAQItem } from '../types';

export const facultyFAQCategories: FAQCategory[] = [
  { id: 'aicte', label: 'AICTE & NEP' },
  { id: 'curriculum', label: 'Curriculum' },
  { id: 'delivery', label: 'Delivery' },
  { id: 'docs', label: 'Docs & Cert' },
];

export const facultyFAQs: FAQItem[] = [
  // ── AICTE & NEP ───────────────────────────────────────────────────────────
  {
    category: 'aicte',
    question: 'Is Unithink\'s Faculty Development Programme aligned with AICTE guidelines?',
    answer:
      'Yes. Our Faculty Development Programme (FDP) is designed in alignment with AICTE guidelines for technical faculty training. The program covers AI competencies recommended for faculty under the National Education Policy 2020 framework, making it directly relevant to compliance and quality benchmarks your institution needs to meet.',
  },
  {
    category: 'aicte',
    question: 'How does Unithink\'s FDP support NEP 2020 implementation?',
    answer:
      'NEP 2020 mandates that higher education institutions integrate emerging technologies into teaching and research. Our faculty training program equips educators with hands-on AI skills — from AI-assisted curriculum design to research productivity tools — directly supporting the technology integration pillar of NEP 2020.',
  },
  {
    category: 'aicte',
    question: 'Can FDP completion hours be claimed for AICTE credit requirements?',
    answer:
      'Our FDP is structured as a 3–5 day intensive, providing 18–30 contact hours depending on the chosen format. These hours are documented in official participation certificates and program reports, which institutions can use to substantiate faculty development credit claims with AICTE and internal HR records.',
  },
  {
    category: 'aicte',
    question: 'Does completing the FDP help with NAAC accreditation documentation?',
    answer:
      'Yes. Unithink provides comprehensive documentation including faculty attendance records, program schedules, trainer credentials, and detailed session outlines — all formatted to align with NAAC criterion requirements related to faculty qualification and professional development activities.',
  },
  {
    category: 'aicte',
    question: 'How does AI in higher education connect to institutional quality frameworks?',
    answer:
      'AI in higher education is rapidly becoming a benchmark indicator for institutional modernity and research output. Institutions that invest in faculty AI competency are better positioned for NAAC scoring in teaching-learning innovation, research culture, and industry linkage — three areas where Unithink\'s FDP generates documented evidence.',
  },
  {
    category: 'aicte',
    question: 'Is Unithink\'s FDP suitable for faculty at non-engineering colleges?',
    answer:
      'Absolutely. While we are AICTE-aligned for technical institutions, our faculty development programme is equally valuable for arts, commerce, management, and science colleges. We customise the curriculum to the specific disciplines of your faculty, demonstrating AI applications relevant to humanities research, business analytics, and social sciences.',
  },
  {
    category: 'aicte',
    question: 'Does Unithink provide any ongoing support after the FDP for institutional compliance?',
    answer:
      'Yes. Beyond the 7-day post-FDP WhatsApp support, we can provide additional documentation, clarification letters, and program summaries required for AICTE self-appraisal reports or NAAC peer team visits. Institutions can contact us at +91 9726217070 for any post-program documentation needs.',
  },

  // ── Curriculum ────────────────────────────────────────────────────────────
  {
    category: 'curriculum',
    question: 'What does the Unithink faculty development programme curriculum cover?',
    answer:
      'The curriculum spans AI literacy fundamentals, prompt engineering for educators, AI tools for research acceleration (ChatGPT, Claude, Gemini), workflow automation with n8n and Make.com, and an advanced module on building AI agents. Faculty also explore how to integrate AI tools ethically and effectively into their own course delivery and student assessments.',
  },
  {
    category: 'curriculum',
    question: 'Can the curriculum be customised for our specific department or subject area?',
    answer:
      'Yes — curriculum customisation is built into every Unithink FDP. A Physics faculty cohort will explore AI applications in simulation and research paper drafting, while a Management faculty cohort will focus on AI for case study analysis and business data insights. We tailor examples, exercises, and tools to your faculty\'s actual teaching subjects.',
  },
  {
    category: 'curriculum',
    question: 'How does the FDP help faculty use AI for their own research?',
    answer:
      'We dedicate modules to AI-powered research workflows: literature review acceleration, hypothesis generation, writing assistance with Claude and ChatGPT, and data summarisation. Faculty leave with reusable AI workflows that can meaningfully reduce research preparation time and support more frequent publication output.',
  },
  {
    category: 'curriculum',
    question: 'Does the FDP teach faculty how to integrate AI into classroom teaching?',
    answer:
      'Yes. A core component of our faculty training program is pedagogical AI integration — how to use AI tools in lesson planning, personalised student feedback, quiz generation, and interactive teaching. Faculty design at least one AI-enhanced lesson plan or assessment during the hands-on workshop sessions.',
  },
  {
    category: 'curriculum',
    question: 'Does the curriculum address ethical and responsible use of AI?',
    answer:
      'Responsible AI is woven throughout the curriculum, not treated as an add-on. We cover academic integrity in an AI era, how to set AI-use policies for students, data privacy considerations, and how to critically evaluate AI outputs — ensuring faculty can model good AI citizenship for their students.',
  },
  {
    category: 'curriculum',
    question: 'Can faculty learn how to build AI agents during the FDP?',
    answer:
      'In the advanced track of our 5-day FDP, faculty learn how to build AI agents — automated systems that can complete research tasks, compile reports, or assist in administrative workflows. Using n8n, faculty create and run their own agents in a guided environment, gaining skills they can then teach to advanced students.',
  },
  {
    category: 'curriculum',
    question: 'Is the curriculum updated to reflect the latest AI tools and developments?',
    answer:
      'Our curriculum is reviewed quarterly. The AI tool landscape evolves rapidly, and we ensure faculty are trained on current, stable tools rather than outdated ones. Post-FDP resource updates are shared via WhatsApp when significant new tools or capabilities become relevant to teaching and research.',
  },
  {
    category: 'curriculum',
    question: 'How does the FDP compare to other faculty development programmes in AI?',
    answer:
      'Most faculty development programmes in AI remain theory-heavy. Unithink\'s FDP is distinguished by its hands-on workshop intensity — faculty spend the majority of time actually using and building with AI tools, not listening to presentations about them. This practical approach, combined with our 95% satisfaction rate, sets us apart.',
  },

  // ── Delivery ─────────────────────────────────────────────────────────────
  {
    category: 'delivery',
    question: 'How is the faculty development programme delivered?',
    answer:
      'We offer on-site campus delivery, fully online live sessions, and hybrid formats. On-site delivery is preferred for the immersive experience it creates within a faculty peer group. Online programs are equally interactive, using live video, screen-sharing, and collaborative workspace tools to maintain the hands-on workshop quality.',
  },
  {
    category: 'delivery',
    question: 'What languages is the FDP delivered in?',
    answer:
      'The FDP is delivered in English or Hindi depending on the faculty cohort\'s preference. For Gujarat-based institutions, we can incorporate Gujarati explanations for maximum clarity. Language is confirmed during the discovery call, and bilingual delivery is available at no additional cost.',
  },
  {
    category: 'delivery',
    question: 'What is the recommended batch size for the FDP?',
    answer:
      'The optimal batch size is 20–40 faculty participants. This range allows for interactive discussion, individual project work, and the kind of peer learning that makes faculty development programmes most effective. Larger faculties can be accommodated across two parallel batches.',
  },
  {
    category: 'delivery',
    question: 'How do we schedule an FDP around the academic calendar?',
    answer:
      'We work around your institution\'s semester schedule, exam periods, and faculty availability. Popular windows include semester breaks, summer vacations, and inter-semester weeks. We recommend booking 4–6 weeks in advance for preferred academic calendar slots as our schedule fills during peak periods.',
  },
  {
    category: 'delivery',
    question: 'Who are the trainers delivering the faculty development programme?',
    answer:
      'Our FDP trainers are AI practitioners with both industry and education sector experience. They understand the academic context — how research gets done, how classes are structured, and how institutions are evaluated — which makes their guidance directly actionable rather than generically theoretical.',
  },
  {
    category: 'delivery',
    question: 'Can the FDP be run as a two-session program across two semesters?',
    answer:
      'Yes. We can structure the FDP as a Foundation module in one semester and an Advanced module in the next, allowing faculty to apply their initial learning and return with real-world questions for the advanced session. This split format deepens skill retention significantly.',
  },
  {
    category: 'delivery',
    question: 'Is an AI mentor available to faculty after the formal FDP sessions?',
    answer:
      'Our trainers act as AI mentors for the 7-day post-FDP support period via WhatsApp. For institutions that want ongoing mentorship beyond that window, we offer extended AI mentor engagement on a retainer basis — particularly useful for faculty leading AI-focused research projects or curriculum redesign initiatives.',
  },

  // ── Docs & Cert ───────────────────────────────────────────────────────────
  {
    category: 'docs',
    question: 'What certificates do faculty receive after completing the FDP?',
    answer:
      'Every participating faculty member receives a digital certificate of completion from Unithink School. The certificate includes the faculty member\'s name, designation, institution, program title, duration, and tools covered — making it a comprehensive record for professional portfolios and institutional HR files.',
  },
  {
    category: 'docs',
    question: 'Can the FDP certificate be co-branded with our institution?',
    answer:
      'Yes — institutional co-branding is available for all FDP bookings. Co-branded certificates carry both the Unithink School emblem and your institution\'s official seal or logo. This is particularly valued by colleges that want FDP outputs to align with their internal branding and NAAC evidence portfolios.',
  },
  {
    category: 'docs',
    question: 'What institutional documents does Unithink provide after the FDP?',
    answer:
      'We provide a comprehensive post-FDP documentation package including: faculty attendance register with signatures, program schedule and session outlines, trainer credentials and brief bios, tool list and curriculum overview, and a program completion report — all formatted for AICTE and NAAC submission.',
  },
  {
    category: 'docs',
    question: 'Are Unithink FDP certificates recognised for AICTE API score documentation?',
    answer:
      'Our FDP certificates are issued by Unithink School with clear program details, making them suitable for faculty API score documentation under the professional development category. We recommend faculty verify the specific category requirements with their institution\'s API score committee, and we can provide supplementary documentation if needed.',
  },
  {
    category: 'docs',
    question: 'Are the certificates issued digitally or as physical documents?',
    answer:
      'Certificates are issued digitally with a unique verification QR code and URL. Digital certificates can be shared directly on LinkedIn under the Licences & Certifications section, attached to job applications, and printed if a physical copy is needed. Physical printed certificates can be arranged for institutional events on request.',
  },
  {
    category: 'docs',
    question: 'How long after the FDP are certificates issued?',
    answer:
      'Digital certificates are typically issued within 5–7 working days of program completion. Institutional documentation packages (attendance reports, program outlines, trainer credentials) are delivered within 10 working days. Expedited processing is available for institutions with urgent NAAC or AICTE submission deadlines.',
  },
  {
    category: 'docs',
    question: 'What if a faculty member misses one day of the FDP?',
    answer:
      'Certificates are issued for faculty who attend a minimum of 80% of the program. For faculty who miss sessions due to unavoidable circumstances, we can arrange a make-up session within the 7-day post-FDP support window or provide recorded content from the missed session to bring them up to speed.',
  },
];
