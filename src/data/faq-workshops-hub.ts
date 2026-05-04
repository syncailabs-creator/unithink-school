import { FAQCategory, FAQItem } from '../types';

export const workshopHubFAQCategories: FAQCategory[] = [
  { id: 'general', label: 'General' },
  { id: 'booking', label: 'Booking' },
  { id: 'delivery', label: 'Delivery' },
  { id: 'cert', label: 'Outcomes' },
];

export const workshopHubFAQs: FAQItem[] = [
  // ── General ───────────────────────────────────────────────────────────────
  {
    category: 'general',
    question: 'What types of AI workshops does Unithink School offer?',
    answer:
      'Unithink School offers three flagship AI workshops: a 1–2 day corporate AI training for business teams, a 3–5 day hands-on workshop for students, and a 3–5 day Faculty Development Programme for educators. Each is a distinct, purpose-built program — not a generic AI workshop repurposed for different audiences.',
  },
  {
    category: 'general',
    question: 'How do I choose the right program for my organisation or institution?',
    answer:
      'The right choice depends on your audience and goals. If you are upskilling employees to use AI in their workflows, the corporate workshop is the fit. If you want to prepare students for AI-driven careers, choose the student workshop. If your faculty need to integrate AI into teaching and research, the Faculty Development Programme is ideal. Contact us for a free discovery call if you are unsure.',
  },
  {
    category: 'general',
    question: 'Can we combine multiple workshop tracks for a single campus visit?',
    answer:
      'Yes — combined programs are popular with colleges that want to address both students and faculty in one visit. We schedule parallel tracks or sequential batches, with customised content for each group, while sharing the travel and on-site coordination overhead. This makes the per-head cost highly efficient for institutions.',
  },
  {
    category: 'general',
    question: 'Is Unithink\'s AI workshop available nationwide across India?',
    answer:
      'Yes. While we are headquartered in Ahmedabad, Gujarat, we deliver technology workshops at institutions and corporate offices across India. We have trained 1,800+ participants from 9+ institutions spanning multiple states, and our online delivery option means geography is never a barrier.',
  },
  {
    category: 'general',
    question: 'What makes Unithink\'s workshops different from standard tech workshops?',
    answer:
      'Most tech workshops deliver slides and theory. Unithink\'s workshop technology philosophy is build-first: participants spend at least 60% of the time actively working with AI tools, creating real projects they can use or showcase immediately. Our 95% satisfaction rate and 1,800+ participants trained are the result of this uncompromising hands-on approach.',
  },
  {
    category: 'general',
    question: 'Can a hybrid program be designed for both beginners and advanced participants?',
    answer:
      'Yes. We design hybrid-difficulty programs where beginners follow a no-code track and advanced participants work on a code-adjacent AI agents track — simultaneously, within the same workshop. This allows institutions or companies to serve diverse cohorts in a single session without leaving anyone behind or holding anyone back.',
  },
  {
    category: 'general',
    question: 'Does Unithink offer any ongoing AI learning programs beyond workshops?',
    answer:
      'Our core offering is the intensive workshop format. Beyond the workshop, all participants get 7-day WhatsApp post-support. For institutions that want ongoing engagement, we offer extended AI mentor arrangements where a Unithink trainer provides monthly check-ins and resource updates to sustain the learning momentum.',
  },
  {
    category: 'general',
    question: 'How is Unithink qualified to call itself an AI school?',
    answer:
      'Unithink School is recognised as an AI school because AI education is our sole and complete focus — we are not a general training company that added an AI module. Every program, trainer, and resource is purpose-built for AI skill development, and our track record across 9+ institutions with a 95% satisfaction rate validates that specialisation.',
  },

  // ── Booking ───────────────────────────────────────────────────────────────
  {
    category: 'booking',
    question: 'What is the process for booking an AI workshop?',
    answer:
      'The booking process is simple: (1) Contact us at +91 9726217070 or through the website form. (2) We schedule a free 30-minute discovery call to understand your needs. (3) We share a customised proposal within 48 hours. (4) On agreement, a 50% advance payment confirms your booking. (5) We handle all preparation and deliver the workshop on your chosen date.',
  },
  {
    category: 'booking',
    question: 'What happens during the discovery call?',
    answer:
      'The discovery call is a 30-minute conversation where we learn about your audience (students, employees, or faculty), current AI literacy level, specific goals, preferred dates, and any domain-specific customisation needs. Based on this, we propose the most suitable program structure, duration, and tools focus.',
  },
  {
    category: 'booking',
    question: 'How far in advance should we book a workshop?',
    answer:
      'We recommend booking at least 3–4 weeks in advance to allow time for curriculum customisation and participant preparation. For high-demand periods (semester starts, Q1 corporate planning cycles), 6–8 weeks of lead time is advisable. Urgent bookings within 2 weeks are possible but subject to trainer availability.',
  },
  {
    category: 'booking',
    question: 'What are the payment terms for booking a workshop?',
    answer:
      'We operate on a 50% advance / 50% on completion model. The 50% advance is required to confirm the booking and begin curriculum customisation. The remaining 50% is due on the final day of the workshop. This structure gives both parties clarity and commitment from the start.',
  },
  {
    category: 'booking',
    question: 'Is pricing available on the website, or do we need to request a quote?',
    answer:
      'Pricing is customised based on workshop type, duration, batch size, and delivery format (on-site or online). We share a transparent, itemised quotation within 48 hours of the discovery call. There are no hidden fees — the quoted amount covers trainer costs, materials, and post-workshop support.',
  },
  {
    category: 'booking',
    question: 'Can we reschedule a workshop after booking?',
    answer:
      'Yes — we understand that institutional and corporate calendars can change. Workshop dates can be rescheduled up to 10 working days before the session at no additional charge. Rescheduling within 10 days may incur a rebooking fee to cover trainer and logistics re-coordination.',
  },
  {
    category: 'booking',
    question: 'Do you offer discounts for multiple workshop bookings?',
    answer:
      'Yes. Institutions or companies that book two or more workshops (e.g., a student workshop plus a faculty FDP in the same academic year) qualify for institutional partnership pricing. Contact us to discuss a multi-program arrangement that fits your annual training budget.',
  },
  {
    category: 'booking',
    question: 'Can an individual student or professional book a seat independently?',
    answer:
      'Our primary model is institutional and corporate bookings. Individual seats occasionally become available in open-cohort workshops that we announce via our website and WhatsApp. To be notified of upcoming open programs, contact us at +91 9726217070 and ask to be added to our open-cohort waiting list.',
  },

  // ── Delivery ─────────────────────────────────────────────────────────────
  {
    category: 'delivery',
    question: 'What delivery formats are available for Unithink workshops?',
    answer:
      'Every Unithink workshop is available in three formats: on-site (at your campus or office), fully online (live interactive sessions), and hybrid (some participants in person, others remote). All formats maintain the hands-on workshop experience with active trainer facilitation and real project building throughout.',
  },
  {
    category: 'delivery',
    question: 'Can the workshop content be customised for our specific needs?',
    answer:
      'Customisation is a core part of every booking. We adjust the tool stack, use cases, examples, and exercises to match your industry, academic discipline, or organisational context. A workshop technology curriculum designed for a manufacturing company looks quite different from one built for a commerce college — and it should.',
  },
  {
    category: 'delivery',
    question: 'In which languages can workshops be delivered?',
    answer:
      'Workshops are delivered in English or Hindi by default. For Gujarat-based institutions, partial Gujarati instruction is available at no extra cost. Multi-language needs for other regional contexts can be discussed during the discovery call — we prioritise learner comprehension above all else.',
  },
  {
    category: 'delivery',
    question: 'What batch sizes do you accommodate?',
    answer:
      'We work with batches from 10 participants (focused corporate teams) up to 60 participants per batch. Larger cohorts are split into parallel batches with dedicated trainers per group to maintain the interactive quality that makes our workshops effective. We do not run lecture-hall-style sessions.',
  },
  {
    category: 'delivery',
    question: 'What infrastructure does a venue need to host an on-site workshop?',
    answer:
      'For on-site delivery, you need: a classroom or training room with individual seating, a projector or large display, a stable Wi-Fi connection for all participants (at least 10 Mbps shared), and power sockets for laptops. We handle everything else — materials, exercises, and trainer equipment.',
  },
  {
    category: 'delivery',
    question: 'How do trainers maintain quality in online workshops?',
    answer:
      'Online workshops use live video conferencing with screen sharing, real-time collaborative workspaces, and breakout rooms for group exercises. Trainers actively monitor participant progress, call on participants by name, and circulate virtually between breakout groups — replicating the hands-on dynamic of an in-person session as closely as technology allows.',
  },
  {
    category: 'delivery',
    question: 'Are sessions recorded for participants who miss a day?',
    answer:
      'For online and hybrid programs, we record sessions for internal participant use only. Recordings are shared with registered participants who miss a session and are not made publicly available. On-site sessions are not recorded, but participants receive comprehensive written materials covering everything covered in the session.',
  },

  // ── Outcomes ──────────────────────────────────────────────────────────────
  {
    category: 'cert',
    question: 'What certificate do participants receive after an AI workshop?',
    answer:
      'All participants who complete a Unithink workshop receive a digital certificate of completion. For institutional programs, co-branded certificates carrying both the Unithink School seal and the host institution\'s logo are available. Our AI certificate course in India is designed to be verifiable, portfolio-ready, and meaningful on a resume or LinkedIn profile.',
  },
  {
    category: 'cert',
    question: 'Is Unithink\'s AI certification India-wide in its recognition?',
    answer:
      'Our AI certification in India is increasingly recognised by hiring teams, NAAC evaluators, and AICTE-aligned institutions. The skills-based nature of the certificate — backed by real projects built during the workshop — gives it credibility beyond a simple attendance record.',
  },
  {
    category: 'cert',
    question: 'What do participants actually build and take away from a workshop?',
    answer:
      'Participants build working AI projects during the workshop — chatbots, automation workflows, prompt-engineered tools, and for advanced cohorts, multi-step AI agents. Every participant leaves with their own functional AI creation, a digital certificate, a resource pack, and access to the 7-day post-workshop WhatsApp support group.',
  },
  {
    category: 'cert',
    question: 'What post-workshop support does Unithink provide?',
    answer:
      'All participants join a 7-day WhatsApp support group after the workshop where Unithink trainers answer implementation questions, review projects, and share relevant resources. This post-workshop window is specifically designed to bridge the gap between the training environment and applying skills on the job or in college.',
  },
  {
    category: 'cert',
    question: 'How does Unithink measure the success of a workshop?',
    answer:
      'We measure success through three dimensions: participant satisfaction scores (targeting 95%+), the quality and completeness of projects built during the workshop, and post-workshop adoption rates reported by institution or team leads. For corporate programs, we also track efficiency metrics agreed on before the workshop.',
  },
  {
    category: 'cert',
    question: 'Can outcomes be aligned to our institution\'s accreditation goals?',
    answer:
      'Yes. For NAAC and AICTE-aligned outcomes, we provide a tailored documentation package including participant records, trainer credentials, curriculum outlines, and a program completion report. These materials are formatted to directly support criterion scoring in quality assurance and faculty development categories.',
  },
  {
    category: 'cert',
    question: 'What happens if participants want to continue learning after the workshop?',
    answer:
      'We encourage post-workshop learning through our resource pack, WhatsApp community, and — for motivated participants — guidance on next steps such as relevant online courses, open-source AI projects, and portfolio development. For institutions, we offer follow-up workshops to cover advanced topics like AI agent deployment and custom LLM integration.',
  },
  {
    category: 'cert',
    question: 'Has the Unithink workshop format been validated by real institutions?',
    answer:
      'Yes — we have delivered programs at 9+ institutions across India with 1,800+ participants trained and a 95% satisfaction rate. These are not pilot results; they reflect a mature, repeatedly refined workshop system that institutions from Gujarat, Maharashtra, Rajasthan, and beyond have trusted to upskill their students and faculty.',
  },
];
