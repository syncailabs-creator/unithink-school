import { FAQCategory, FAQItem } from '../types';

export const studentFAQCategories: FAQCategory[] = [
  { id: 'start', label: 'Getting Started' },
  { id: 'workshop', label: 'Workshop' },
  { id: 'career', label: 'Career & Certificate' },
  { id: 'college', label: 'College & Batch' },
];

export const studentFAQs: FAQItem[] = [
  // ── Getting Started ───────────────────────────────────────────────────────
  {
    category: 'start',
    question: 'Who can join a Unithink student AI workshop?',
    answer:
      'Any engineering, science, management, or arts undergraduate or postgraduate student can join. Our AI programs for students are deliberately designed to be accessible regardless of branch — whether you are in Computer Science, Mechanical, Civil, Commerce, or even Fine Arts, there is something you can build with AI.',
  },
  {
    category: 'start',
    question: 'Do I need coding experience to attend the workshop?',
    answer:
      'No coding experience is required. Our workshop for students is structured so that complete beginners can participate fully alongside students who already code. We use no-code and low-code AI tools for most exercises, and optional coding tracks are available for students who want to go deeper.',
  },
  {
    category: 'start',
    question: 'What should I bring to the workshop?',
    answer:
      'Bring a laptop, a charger, and your curiosity. All AI tools run in a web browser — no special software installation is needed. We send a pre-workshop setup guide a few days before the session so you can create the necessary free accounts ahead of time and hit the ground running.',
  },
  {
    category: 'start',
    question: 'Can I join if I have never heard of ChatGPT or AI before?',
    answer:
      'Absolutely. Many participants arrive with zero AI exposure and leave having built working projects. We start every session with a friendly introduction that contextualises AI in everyday life before moving into hands-on practice — so no prior knowledge of any AI tool is assumed.',
  },
  {
    category: 'start',
    question: 'What devices are supported for the workshop?',
    answer:
      'A Windows or Mac laptop is ideal. Chromebooks work for most exercises. Tablets and smartphones are not recommended because building AI workflows and running automation tools requires a full browser environment with multiple tabs. If you have device concerns, contact us before the session.',
  },
  {
    category: 'start',
    question: 'Is there a minimum age requirement?',
    answer:
      'There is no strict age minimum, but our student programs are designed for college-level learners (17+). If you are a school student interested in AI, reach out to us directly — we occasionally run special sessions for school-level tech clubs and youth programs.',
  },
  {
    category: 'start',
    question: 'What will I be able to do after just one workshop?',
    answer:
      'After completing our workshop, you will know how to use AI tools for research, writing, coding assistance, and automation — skills that make you more productive in college and more hireable after graduation. Most students also leave with at least one complete project they built during the session.',
  },
  {
    category: 'start',
    question: 'Is the workshop available in my city?',
    answer:
      'We deliver student workshops on-site at colleges across India. If your institution has not yet partnered with Unithink, ask your placement cell or faculty coordinator to contact us — we can typically schedule an on-site workshop within a few weeks of a booking inquiry.',
  },

  // ── Workshop ──────────────────────────────────────────────────────────────
  {
    category: 'workshop',
    question: 'What will I actually build during the student AI workshop?',
    answer:
      'You will build projects such as a custom AI chatbot, an automated research tool, a prompt-engineered content workflow, and optionally a basic AI agent that can complete multi-step tasks. Every project is guided but yours to keep — you walk away with a portfolio of working AI tools.',
  },
  {
    category: 'workshop',
    question: 'What AI tools does the student workshop cover?',
    answer:
      'The workshop covers ChatGPT, Claude, and Gemini for intelligence tasks; n8n and Make.com for workflow automation; and an introduction to LangChain for students who want to build more complex AI pipelines. The toolset is chosen to give you broad, job-relevant exposure across the AI landscape.',
  },
  {
    category: 'workshop',
    question: 'How is the workshop session structured across the days?',
    answer:
      'A typical student workshop runs 3–5 days. Day 1 covers AI fundamentals and prompt engineering. Days 2–3 dive into tool-specific projects. Days 4–5 (in longer formats) focus on automation and AI agents. Each day is roughly 6 hours with a mix of trainer-led demos and student build time.',
  },
  {
    category: 'workshop',
    question: 'How do you teach students how to build AI agents?',
    answer:
      'We dedicate a full module to showing students how to build AI agents — autonomous systems that can plan, execute multi-step tasks, and use external tools. Using n8n and LangChain in guided exercises, students design and run their own agents during the workshop, making agent-building tangible rather than theoretical.',
  },
  {
    category: 'workshop',
    question: 'Is the workshop purely technical, or does it cover broader AI concepts?',
    answer:
      'Both. We blend conceptual understanding (what AI can and cannot do, how LLMs work, ethical considerations) with heavy practical time. This balance ensures students leave with critical thinking about AI alongside hands-on skills — a combination that stands out in interviews and project work.',
  },
  {
    category: 'workshop',
    question: 'How much time is spent on hands-on practice versus lectures?',
    answer:
      'At least 60–70% of the workshop is hands-on practice. Our tech workshop philosophy is that you learn AI by using AI — not by listening to someone describe it. Trainers demo briefly, then immediately hand control back to participants to experiment and build.',
  },
  {
    category: 'workshop',
    question: 'Will trainers help me individually if I am stuck?',
    answer:
      'Yes. Our small batch sizes (capped per session) mean trainers can circulate and give individual attention. We also pair participants for collaborative exercises so you can learn from peers, which often accelerates understanding more than one-on-one trainer help alone.',
  },
  {
    category: 'workshop',
    question: 'Are workshop materials available after the session?',
    answer:
      'All participants receive a resource pack with prompt libraries, workflow templates, and tool guides. You also get access to a 7-day post-workshop WhatsApp support group where trainers answer questions as you continue building on your own.',
  },

  // ── Career & Certificate ──────────────────────────────────────────────────
  {
    category: 'career',
    question: 'Do I receive a certificate after completing the student workshop?',
    answer:
      'Yes. Every student who completes a Unithink workshop receives a digital certificate of completion. This AI certificate course in India is designed to be portfolio-ready — it includes your name, program details, tools covered, and project description, making it a credible addition to your resume and LinkedIn profile.',
  },
  {
    category: 'career',
    question: 'Is there an AI certification in India that employers recognise?',
    answer:
      'Unithink\'s AI certification in India is skills-based, not just attendance-based. Employers in IT, product, and consulting increasingly look for candidates who can demonstrate hands-on AI tool proficiency — and our certificate, backed by a real project you built, signals exactly that.',
  },
  {
    category: 'career',
    question: 'What AI career paths can I pursue after completing the workshop?',
    answer:
      'After our workshop, students are well-positioned for AI career paths including AI/ML roles, data analysis, product management, automation consulting, content and marketing (AI-augmented), and AI research support. The workshop gives you a real foundation to explore further certifications or build independent projects.',
  },
  {
    category: 'career',
    question: 'Will Unithink help with placement after the workshop?',
    answer:
      'We provide career guidance including how to present your AI projects on LinkedIn and GitHub, how to describe AI skills in a resume, and which roles to target. While we are not a placement agency, our trainers and alumni network actively share job leads and opportunities with workshop graduates.',
  },
  {
    category: 'career',
    question: 'How do I add the certificate to my LinkedIn profile?',
    answer:
      'Your digital certificate comes with a unique verification link. In LinkedIn, go to the Licences & Certifications section, add "Unithink School" as the issuing organisation, paste your credential ID and the verification URL. Profiles with verified AI certificates receive significantly more recruiter engagement.',
  },
  {
    category: 'career',
    question: 'How does AI for students translate into a competitive advantage?',
    answer:
      'Students who understand and can use AI tools graduate with a skill set that most of their peers — even from top colleges — still lack. AI for students at the practical level means faster research, better project submissions, stronger internship contributions, and a demonstrable edge in technical and non-technical job interviews.',
  },
  {
    category: 'career',
    question: 'Can I use my workshop project in my academic portfolio or college submissions?',
    answer:
      'Absolutely. Projects built during the workshop are yours to own, extend, and showcase. Many students submit them as mini-projects for college credit, showcase them in hackathons, or use them as the foundation for final-year projects — all with trainer guidance on how to document and present them effectively.',
  },

  // ── College & Batch ───────────────────────────────────────────────────────
  {
    category: 'college',
    question: 'How does a college book a student AI workshop from Unithink?',
    answer:
      'The placement cell, department head, or principal can initiate a booking by calling or WhatsApping us at +91 9726217070. We schedule a discovery call to discuss the student cohort, preferred dates, and customisation needs, then share a formal proposal within 48 hours.',
  },
  {
    category: 'college',
    question: 'What is the pricing for an institutional student workshop booking?',
    answer:
      'Pricing is based on batch size, workshop duration (3 or 5 days), and whether delivery is on-site or online. We offer institutional rates for colleges booking multiple batches and provide a detailed quotation after the discovery call. Payment is 50% advance, 50% on workshop completion.',
  },
  {
    category: 'college',
    question: 'Can the workshop count toward NAAC documentation for our institution?',
    answer:
      'Yes. Unithink provides institutional documentation including participation reports, attendance records, trainer credentials, and program outlines that support NAAC criterion scoring related to student skill development and industry linkages. We have supported 9+ institutions with this documentation.',
  },
  {
    category: 'college',
    question: 'What batch size do you recommend for a college student workshop?',
    answer:
      'We recommend batches of 30–60 students for the optimal balance of interaction and scale. Larger cohorts can be split into parallel batches with dedicated trainers. Smaller groups of 15–25 are available for advanced or elective cohorts where deeper individual attention is preferred.',
  },
  {
    category: 'college',
    question: 'Can our placement cell co-brand the workshop certificates with our college logo?',
    answer:
      'Yes — institutional co-branding is available for college partnerships. Co-branded certificates carry both the Unithink School seal and your institution\'s logo and name, enhancing perceived value for students and giving your placement cell a tangible outcome to highlight.',
  },
  {
    category: 'college',
    question: 'How far in advance should a college book a student workshop?',
    answer:
      'We recommend booking at least 3–4 weeks in advance to allow time for curriculum customisation, pre-workshop student briefings, and logistics. For semester-start slots (June–July and December–January), we advise booking 6–8 weeks ahead as those dates fill quickly.',
  },
  {
    category: 'college',
    question: 'Can multiple departments at the same college book different workshop tracks?',
    answer:
      'Yes. We regularly run parallel tracks for different departments — for example, a coding-focused AI agents track for Computer Science students and a no-code automation track for MBA or Commerce students — within the same campus visit, optimising travel and coordination costs.',
  },
];
