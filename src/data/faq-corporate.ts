import { FAQCategory, FAQItem } from '../types';

export const corporateFAQCategories: FAQCategory[] = [
  { id: 'about', label: 'About' },
  { id: 'delivery', label: 'Delivery' },
  { id: 'tools', label: 'Tools & Tech' },
  { id: 'results', label: 'Results' },
];

export const corporateFAQs: FAQItem[] = [
  // ── About ────────────────────────────────────────────────────────────────
  {
    category: 'about',
    question: 'What is Unithink\'s corporate AI training program?',
    answer:
      'Unithink\'s corporate training program is a 1–2 day intensive hands-on workshop designed to upskill business teams in practical AI tools and workflows. Rather than theory-heavy lectures, every session focuses on real business problems your team can solve with AI immediately after the workshop ends.',
  },
  {
    category: 'about',
    question: 'Which industries does Unithink serve?',
    answer:
      'We have delivered corporate AI training across IT services, manufacturing, BFSI, e-commerce, healthcare, education, and professional services. Because we customise every workshop to your domain, the tools and use cases participants practice with are directly relevant to your business — not generic examples.',
  },
  {
    category: 'about',
    question: 'Who in our company should attend the workshop?',
    answer:
      'Our corporate workshops are designed for cross-functional teams — from individual contributors and team leads to department heads. Non-technical roles benefit just as much as engineers because we cover AI tools that anyone can use, such as prompt engineering with ChatGPT and workflow automation with Make.com.',
  },
  {
    category: 'about',
    question: 'Do employees need any technical background to participate?',
    answer:
      'No technical background is required. Our workshop is structured so that participants with no prior AI experience can learn alongside those who already code. We meet participants where they are and ensure everyone leaves with practical skills they can apply from their very next workday.',
  },
  {
    category: 'about',
    question: 'How is this different from generic online AI courses?',
    answer:
      'Generic online courses teach concepts in isolation. Unithink\'s corporate training program is fully customised to your company\'s real workflows, conducted live with your team, and focused on building automations and AI tools your organisation can deploy immediately. The hands-on workshop format means your team learns by doing, not watching.',
  },
  {
    category: 'about',
    question: 'What is the minimum team size for a corporate booking?',
    answer:
      'We work with teams as small as 10 participants for a focused, high-intensity session. For larger organisations we run parallel cohorts of up to 60 participants per batch to maintain the interactive quality that makes our workshops effective.',
  },
  {
    category: 'about',
    question: 'Can we book a pilot session before committing to a full program?',
    answer:
      'Yes — we offer a complimentary discovery call to understand your team\'s goals, and we can structure a condensed pilot session for a smaller group before rolling out the full corporate training program to the entire organisation.',
  },
  {
    category: 'about',
    question: 'Is Unithink\'s corporate workshop available for startups as well as large enterprises?',
    answer:
      'Absolutely. We work with early-stage startups looking to embed AI from the ground up as well as large enterprises upskilling hundreds of employees. Pricing and program structure are scaled accordingly, and we offer a flexible 50% advance / 50% on-completion payment model for all bookings.',
  },

  // ── Delivery ─────────────────────────────────────────────────────────────
  {
    category: 'delivery',
    question: 'Can the workshop be delivered at our office?',
    answer:
      'Yes. On-site delivery is our most popular format for corporate training because it keeps your team in their own environment and allows us to frame exercises around your actual systems and workflows. We handle all preparation — you just need a projector, Wi-Fi, and your team.',
  },
  {
    category: 'delivery',
    question: 'Do you offer online or hybrid AI training formats?',
    answer:
      'We offer fully online and hybrid delivery options. Online sessions are conducted live over video conferencing with interactive screen-sharing and breakout rooms for group exercises. Hybrid formats allow some participants to join in person while others attend remotely — all with the same hands-on workshop experience.',
  },
  {
    category: 'delivery',
    question: 'How quickly can we schedule a workshop after contacting Unithink?',
    answer:
      'Most corporate workshops can be scheduled within 2–3 weeks of initial contact, including time for a discovery call, curriculum customisation, and pre-workshop logistics. For urgent timelines, contact us at +91 9726217070 and we will do our best to accommodate you.',
  },
  {
    category: 'delivery',
    question: 'In which languages is the corporate training delivered?',
    answer:
      'Corporate training is delivered in English or Hindi based on team preference. For Gujarat-based organisations, trainers can incorporate Gujarati for maximum clarity. Language is confirmed during the discovery call so the session feels natural and inclusive for every participant.',
  },
  {
    category: 'delivery',
    question: 'What does a typical 2-day corporate workshop look like?',
    answer:
      'Day 1 covers AI fundamentals, prompt engineering, and core tools (ChatGPT, Claude, Gemini). Day 2 shifts to automation workflows using n8n or Make.com, culminating in teams building and presenting a working AI solution for a real business challenge. Each day runs approximately 6–7 hours with hands-on exercises throughout.',
  },
  {
    category: 'delivery',
    question: 'Can we split the workshop across multiple days or weeks?',
    answer:
      'Yes — we can modularise the content to fit your team\'s schedule. Some organisations prefer four half-day sessions spread across two weeks to minimise disruption to daily operations. We design the format during the discovery call to suit your specific operational constraints.',
  },
  {
    category: 'delivery',
    question: 'What preparation do participants need before the workshop?',
    answer:
      'We send a short pre-workshop briefing covering tool account setup (ChatGPT, n8n, etc.) and an optional 30-minute primer video. No prior study is required — the briefing simply ensures the first workshop hour can be spent building rather than setting up accounts.',
  },

  // ── Tools & Tech ─────────────────────────────────────────────────────────
  {
    category: 'tools',
    question: 'Which AI tools does the corporate workshop cover?',
    answer:
      'The workshop covers the tools most relevant to business productivity: ChatGPT, Claude, Gemini for communication and content; n8n and Make.com for workflow automation; and LangChain for teams that want to explore custom AI pipelines. Tool selection is confirmed during the customisation phase based on your team\'s existing tech stack.',
  },
  {
    category: 'tools',
    question: 'What is n8n and why do you include it in the technology workshop?',
    answer:
      'n8n is an open-source workflow automation platform that lets teams connect applications and build AI-powered automations without deep coding knowledge. We include it in our technology workshop because it enables non-technical employees to build powerful AI workflows — making AI adoption practical and fast across an entire organisation.',
  },
  {
    category: 'tools',
    question: 'Do participants need paid subscriptions to the AI tools?',
    answer:
      'Most exercises are designed around free-tier access. For features that require a paid plan, we provide guidance on free alternatives or shared trainer accounts for workshop exercises. We will confirm the exact requirements during the pre-workshop briefing so there are no surprises on the day.',
  },
  {
    category: 'tools',
    question: 'How does Unithink address data security when using AI tools?',
    answer:
      'We dedicate a session to responsible AI use, covering data privacy, what not to input into public AI models, and how to configure enterprise-grade AI tools with appropriate data handling policies. We recommend using anonymised or sample data during exercises and advise on governance frameworks suitable for your industry.',
  },
  {
    category: 'tools',
    question: 'Can the workshop be customised to focus on a specific tool or use case?',
    answer:
      'Yes. If your team is already using a specific AI platform and wants deeper training on it, or if you want the entire workshop focused on one use case (e.g., AI for customer support or AI for data analysis), we can build the full workshop around that focus area.',
  },
  {
    category: 'tools',
    question: 'Does the workshop cover how to build AI agents for business processes?',
    answer:
      'For teams that want to go beyond basic AI usage, we include a module on how to build AI agents — systems that can autonomously complete multi-step tasks like researching, drafting, and sending reports. This is covered in our advanced corporate track using n8n and LangChain.',
  },
  {
    category: 'tools',
    question: 'Will participants have access to workshop materials after it ends?',
    answer:
      'All participants receive a digital resource pack including prompt templates, workflow blueprints, and reference guides for every tool covered. These materials are designed for immediate use on the job and are updated when major tool changes occur.',
  },

  // ── Results ──────────────────────────────────────────────────────────────
  {
    category: 'results',
    question: 'What measurable outcomes can we expect from the workshop?',
    answer:
      'Corporate teams typically report 2–5 hours saved per employee per week within the first month through AI-assisted writing, research, and automation. We agree on specific KPIs before the workshop — such as tasks automated, time saved, or new workflows deployed — and track progress with you in the 7-day post-workshop support window.',
  },
  {
    category: 'results',
    question: 'How does the 7-day post-workshop support work?',
    answer:
      'After the workshop, all participants join a dedicated WhatsApp group where Unithink trainers are available to answer questions, review automations participants are building, and share additional resources. This support window is critical for embedding learning into daily workflows before momentum fades.',
  },
  {
    category: 'results',
    question: 'Is there a satisfaction guarantee for corporate training?',
    answer:
      'We maintain a 95% satisfaction rate across 1,800+ participants and stand behind every engagement. If post-workshop feedback identifies gaps in delivery, we schedule a follow-up session at no additional cost to address them. Your team\'s success is our success metric.',
  },
  {
    category: 'results',
    question: 'Do you conduct assessments or evaluations during the workshop?',
    answer:
      'We conduct a brief pre-workshop assessment to gauge the team\'s baseline AI literacy and a post-workshop project review where teams present the AI tool or automation they built. This gives leadership a clear picture of the learning gains and identifies who is ready for advanced training.',
  },
  {
    category: 'results',
    question: 'Do employees receive certificates after completing the corporate AI training?',
    answer:
      'Yes — every participant receives a digital certificate of completion from Unithink School. For enterprise clients, we can co-brand certificates with your company logo. These certificates are valuable for internal performance records and for recognising employee upskilling initiatives.',
  },
  {
    category: 'results',
    question: 'What are the payment terms for corporate bookings?',
    answer:
      'We require a 50% advance payment upon booking confirmation and the remaining 50% on the final day of the workshop. This split-payment structure gives organisations budget flexibility while ensuring full commitment before training begins.',
  },
  {
    category: 'results',
    question: 'How do we get started with booking a corporate AI workshop?',
    answer:
      'The first step is a free discovery call — call or WhatsApp us at +91 9726217070. During that 30-minute conversation, we understand your team\'s goals, assess current AI readiness, and propose a customised workshop plan with a timeline and investment breakdown.',
  },
];
