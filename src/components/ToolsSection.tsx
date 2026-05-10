import { DotGrid } from './DotGrid';
import { motion } from 'motion/react';
import { useState } from 'react';

interface Tool {
  name: string;
  category: string;
  icon: string;
}

const tools: Tool[] = [
  { name: 'ChatGPT',       category: 'GenAI',       icon: '/icons/chatgpt.png' },
  { name: 'Claude',        category: 'GenAI',       icon: '/icons/clause.png' },     // file on disk: clause.png
  { name: 'Gemini',        category: 'GenAI',       icon: '/icons/gemini.png' },
  { name: 'Perplexity',    category: 'Research AI', icon: '/icons/perplexity.avif' },
  { name: 'n8n',           category: 'Automation',  icon: '/icons/n8n.png' },
  { name: 'Make.com',      category: 'Automation',  icon: '/icons/make.webp' },
  { name: 'Zapier',        category: 'Automation',  icon: '/icons/zapier.png' },
  { name: 'LangChain',     category: 'Agents',      icon: '/icons/langchain.jpeg' },
  { name: 'LangGraph',     category: 'Agents',      icon: '/icons/langgraph.avif' },
  { name: 'Python',        category: 'Dev Tools',   icon: '/icons/python.webp' },
  { name: 'Cursor',        category: 'Dev Tools',   icon: '/icons/cursor.avif' },
  { name: 'Lovable',       category: 'Dev Tools',   icon: '/icons/lovable-icon-bg-light.png' },
  { name: 'Midjourney',    category: 'Image AI',    icon: '/icons/midjourney.jpg' },
  { name: 'NotebookLM',    category: 'Research AI', icon: '/icons/notebooklm.webp' },
  { name: 'Google Colab',  category: 'Dev Tools',   icon: '/icons/google%20colab.png' }, // URL-encoded space
  { name: 'AntiGravity',   category: 'Productivity',icon: '/icons/antigravity.webp' },
];

interface ToolsSectionProps {
  audience?: 'corporate' | 'students' | 'faculty' | 'general';
}

const audienceContent = {
  corporate: {
    eyebrow: 'Tools We Teach',
    title: 'Industry-Standard AI Platforms. Real Access. Real Builds.',
    description: 'Every tool below is taught live during your workshop — not in demos, but in actual workflow builds. Participants get hands-on experience with the same platforms leading companies are using right now.',
  },
  students: {
    eyebrow: 'Tools You Will Master',
    title: 'The Exact AI Stack That Gets You Hired.',
    description: 'These are the tools recruiters look for on your resume. Every workshop gives you hands-on practice, real project builds, and documented work you can link from your GitHub profile.',
  },
  faculty: {
    eyebrow: 'Tools We Teach',
    title: 'AI Tools That Transform How You Teach, Research, and Administer.',
    description: 'Selected specifically for academic workflows — from lecture preparation to research acceleration to NAAC documentation. Every tool has a direct application in your daily work.',
  },
  general: {
    eyebrow: 'Tools We Teach',
    title: 'The Full AI Tool Stack.',
    description: 'We train on the tools that matter. Every platform below is selected based on real-world adoption and practical utility across industries.',
  },
};

function ToolCard({ tool, index }: { tool: Tool; index: number }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.215, 0.61, 0.355, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group bg-color-bg border border-color-border rounded-2xl p-3 md:p-4 flex flex-col items-center gap-2.5 hover:border-color-accent/30 hover:shadow-lg hover:shadow-color-accent/5 transition-all duration-300 cursor-default"
    >
      <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center bg-color-bg-2 flex-shrink-0 relative">
        {!loaded && (
          <div className="absolute inset-0 bg-color-border animate-pulse rounded-xl" />
        )}
        <img
          src={tool.icon}
          alt={tool.name}
          loading="eager"
          width={40}
          height={40}
          onLoad={() => setLoaded(true)}
          className="w-full h-full object-contain"
          style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.2s' }}
        />
      </div>
      <div className="flex flex-col items-center gap-0.5 text-center">
        <span className="text-[10px] md:text-[11px] font-medium text-color-text group-hover:text-color-accent transition-colors duration-300 leading-tight">
          {tool.name}
        </span>
        <span className="hidden md:block text-[9px] font-normal text-color-text-muted">
          {tool.category}
        </span>
      </div>
    </motion.div>
  );
}

export function ToolsSection({ audience = 'general' }: ToolsSectionProps) {
  const content = audienceContent[audience];

  return (
    <section className="section bg-color-bg-2 relative overflow-hidden px-3 md:px-5">
      <DotGrid />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[700px] h-[700px] bg-color-accent/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex flex-col gap-6 text-left items-start"
          >
            <span className="type-h6 text-color-accent">
              {content.eyebrow}
            </span>
            <h2 className="type-h2 text-color-text">
              {content.title}
            </h2>
            <p className="type-p1 text-color-text-2 max-w-[600px]">
              {content.description}
            </p>
          </motion.div>

          {/* Tools Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 md:gap-4">
            {tools.map((tool, index) => (
              <ToolCard key={tool.name} tool={tool} index={index} />
            ))}
          </div>

          <p className="text-xs text-color-text-muted text-center font-normal">
            Tool selection is customised per workshop · All tools have free tiers or access is provided
          </p>
        </div>
      </div>
    </section>
  );
}
