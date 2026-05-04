import { FAQCategory, FAQItem } from '../types';

export const homeFAQCategories: FAQCategory[] = [
  { id: 'general', label: 'General' },
  { id: 'programs', label: 'Programs' },
  { id: 'learning', label: 'Learning' },
  { id: 'outcomes', label: 'Outcomes' },
];

export const homeFAQs: FAQItem[] = [
  // ── General ──────────────────────────────────────────────────────────────
  {
    category: 'general',
    question: 'What is Unithink School and what makes it unique?',
    answer:
      'Unithink School is widely regarded as the first AI school in India to focus entirely on practical, hands-on AI education for corporate teams, engineering students, and college faculty. Based in Ahmedabad, Gujarat, we have trained 1,800+ participants across 9+ institutions nationwide, maintaining a 95% satisfaction rate through real-world project-based learning rather than passive lectures.',
  },
  {
    category: 'general',
    question: 'Is Unithink really the first AI school in India?',
    answer:
      'We are proud to be recognised as the first AI school in India built around immersive, hands-on AI training — not theoretical coursework. Every program we design puts tools in participants\' hands from day one, making Unithink the go-to destination for anyone who wants to learn AI by actually building with it.',
  },
  {
    category: 'general',
    question: 'Where is Unithink School located?',
    answer:
      'Our headquarters are in Ahmedabad, Gujarat, India. While we are rooted in Gujarat, we deliver programs on-site at colleges and corporate offices across India, and also offer fully online sessions so organisations anywhere in the country can access our AI training.',
  },
  {
    category: 'general',
    question: 'Who are the trainers at Unithink School?',
    answer:
      'Our trainers are working AI practitioners — not just educators — with hands-on experience deploying automation, AI agents, and large language model (LLM) workflows in real business and academic settings. Each trainer is vetted for both technical depth and the ability to explain complex concepts in plain language.',
  },
  {
    category: 'general',
    question: 'In which languages are the programs delivered?',
    answer:
      'Programs are delivered in English and Hindi by default. For institutional bookings in Gujarat, sessions can be partially conducted in Gujarati to maximise comprehension and engagement. Language preferences can be specified during the discovery call.',
  },
  {
    category: 'general',
    question: 'How many people has Unithink trained so far?',
    answer:
      'We have trained 1,800+ participants and partnered with 9+ institutions across India since our founding. Our community spans IT professionals, engineering undergraduates, MBA students, and college faculty — all united by the goal of becoming AI-ready.',
  },
  {
    category: 'general',
    question: 'What is the satisfaction rate among Unithink participants?',
    answer:
      'Unithink School consistently achieves a 95% participant satisfaction rate, measured through post-workshop surveys. The high rating is driven by our project-based curriculum, small batch sizes, and the immediacy of results — participants leave with working AI tools and automations they built themselves.',
  },
  {
    category: 'general',
    question: 'How do I get in touch with Unithink School?',
    answer:
      'You can reach us at +91 9726217070 via call or WhatsApp. You can also book a free discovery call through our website to discuss the right program for your college, company, or individual learning goals.',
  },

  // ── Programs ─────────────────────────────────────────────────────────────
  {
    category: 'programs',
    question: 'Which programs does Unithink School offer?',
    answer:
      'Unithink offers three core programs: a 1–2 day corporate AI workshop for business teams, a 3–5 day hands-on workshop for engineering students, and a 3–5 day Faculty Development Programme (FDP) aligned with AICTE and NEP 2020. Each program is customisable to the specific industry, tech stack, or curriculum of the booking institution.',
  },
  {
    category: 'programs',
    question: 'How long is a typical AI workshop at Unithink?',
    answer:
      'Corporate workshops run for 1–2 full days. Student and faculty programs are structured as 3–5 day intensive sessions that allow enough depth for participants to design, build, and deploy working AI projects before the program ends.',
  },
  {
    category: 'programs',
    question: 'What is the hands-on workshop format like?',
    answer:
      'Every session follows a build-first philosophy: short concept explanations followed by immediate guided practice. Participants spend at least 60% of workshop time actively working with AI tools, building automations, and solving real problems — making our hands-on workshop format fundamentally different from lecture-based AI courses.',
  },
  {
    category: 'programs',
    question: 'What is the maximum batch size for a workshop?',
    answer:
      'We cap batches to ensure every participant gets personalised attention. Typical batch sizes range from 20 to 60 participants depending on the program type. Larger cohorts can be split into parallel tracks with dedicated trainers for each group.',
  },
  {
    category: 'programs',
    question: 'Can a program be customised for our specific domain or industry?',
    answer:
      'Yes — customisation is a core part of every Unithink engagement. Whether you need a tech workshop focused on AI in manufacturing, healthcare, finance, or education, we tailor use-cases, datasets, and exercises to reflect challenges your team or students actually face.',
  },
  {
    category: 'programs',
    question: 'Is there an online option for the AI workshop?',
    answer:
      'Absolutely. We offer online, on-site, and hybrid delivery formats. Online sessions use live interactive platforms to maintain the hands-on workshop experience — participants still build real projects and receive trainer feedback in real time.',
  },
  {
    category: 'programs',
    question: 'Do you run open-enrolment workshops or only institutional bookings?',
    answer:
      'Unithink primarily works through institutional and corporate bookings to maintain quality and customisation. We also run occasional open-cohort technology workshops — follow our website or WhatsApp community to stay updated on upcoming public programs.',
  },

  // ── Learning ─────────────────────────────────────────────────────────────
  {
    category: 'learning',
    question: 'Do participants need prior coding or AI experience?',
    answer:
      'No prior experience is required. Our programs are designed to let anyone learn AI from scratch using intuitive tools. We start with the fundamentals and progressively introduce more powerful capabilities, ensuring both beginners and experienced engineers can progress at the right pace.',
  },
  {
    category: 'learning',
    question: 'What AI tools will participants work with?',
    answer:
      'Participants get hands-on experience with industry-leading tools including ChatGPT, Claude, Gemini, n8n, Make.com, and LangChain. The specific toolset is aligned to each program type — automation-heavy for corporate teams, agent-building for students, and research/teaching tools for faculty.',
  },
  {
    category: 'learning',
    question: 'What will participants actually build during the workshop?',
    answer:
      'Participants build working AI projects such as custom chatbots, prompt-engineered workflows, automated reporting pipelines, AI-powered research assistants, and multi-step AI agents. By the end of the program, every participant has at least one deployable tool they built themselves.',
  },
  {
    category: 'learning',
    question: 'How do you teach participants how to build AI agents?',
    answer:
      'We dedicate specific modules to understanding how to build AI agents — autonomous systems that can plan, use tools, and take multi-step actions. Using platforms like n8n and LangChain, participants design and run their own agents during the workshop, demystifying what many consider an advanced AI concept.',
  },
  {
    category: 'learning',
    question: 'What devices or software do participants need to bring?',
    answer:
      'A laptop with a modern browser is all that is needed. All AI tools used in the workshop run in the cloud, so there is no complex software installation. We provide setup guides before the session so participants are ready to build from minute one.',
  },
  {
    category: 'learning',
    question: 'Is the content updated to reflect the latest AI developments?',
    answer:
      'Yes — our curriculum is reviewed and updated every quarter. Given how rapidly the AI landscape evolves, we ensure participants learn current tools and techniques rather than content that is already outdated. We also share post-workshop resource updates via our WhatsApp support channel.',
  },
  {
    category: 'learning',
    question: 'How is this different from watching YouTube tutorials or taking an online course?',
    answer:
      'Unlike self-paced tutorials, Unithink workshops are live, interactive, and guided by expert trainers who can answer questions in real time. The structured workshop environment, cohort energy, and project accountability create a learning pace and depth that solo online study rarely matches.',
  },

  // ── Outcomes ─────────────────────────────────────────────────────────────
  {
    category: 'outcomes',
    question: 'Do participants receive a certificate after the workshop?',
    answer:
      'Yes. Every participant who completes a Unithink workshop receives a digital certificate of completion. For institutional programs, co-branded certificates from the host institution can also be issued. Our AI certificate course in India is increasingly recognised by hiring teams and NAAC documentation processes.',
  },
  {
    category: 'outcomes',
    question: 'Is there an AI certification India employers will recognise?',
    answer:
      'Unithink\'s AI certification in India is built around demonstrated skills rather than just attendance. Certificates include the participant\'s name, program details, tools covered, and hours completed — making them credible additions to LinkedIn profiles, resumes, and NAAC portfolios.',
  },
  {
    category: 'outcomes',
    question: 'How does completing a workshop help my AI career?',
    answer:
      'Completing a Unithink workshop gives you a portfolio of real AI projects, a verifiable certificate, and practical skills in tools that employers are actively seeking. Our outcomes data shows that participants who add their AI projects to LinkedIn and GitHub receive measurably more recruiter outreach within weeks of completing the program.',
  },
  {
    category: 'outcomes',
    question: 'What support is available after the workshop ends?',
    answer:
      'All participants are added to a dedicated WhatsApp support group for 7 days post-workshop. Trainers answer implementation questions, share additional resources, and help troubleshoot projects participants continue to build after returning to their workplace or college.',
  },
  {
    category: 'outcomes',
    question: 'What ROI can a company expect from a corporate AI workshop?',
    answer:
      'Corporate teams typically report measurable time savings within 4 weeks of completing the workshop — particularly in report generation, email drafting, data summarisation, and customer communication. We work with team leads before the workshop to identify high-impact use cases, maximising ROI from day one.',
  },
  {
    category: 'outcomes',
    question: 'Is there a satisfaction guarantee?',
    answer:
      'We stand behind the quality of every program with a 95% satisfaction rate across 1,800+ participants. For institutional bookings, we discuss specific success metrics before the workshop begins and align our delivery to meet them. If outcomes fall short of agreed benchmarks, we work with you to resolve it.',
  },
  {
    category: 'outcomes',
    question: 'What are the payment terms for booking a workshop?',
    answer:
      'We require a 50% advance payment to confirm your booking and 50% on the day of workshop completion. This structure ensures commitment on both sides and gives institutions and companies flexibility in budget planning.',
  },
];
