import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';
import { SEO } from '../components/SEO';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-color-bg relative overflow-hidden">
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Head back to explore Unithink School's AI training programs."
        noIndex
      />

      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-color-accent/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-color-cta/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-3 md:px-5 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="flex flex-col items-center gap-8 max-w-2xl mx-auto"
        >
          {/* 404 number */}
          <div className="relative">
            <span className="text-[10rem] md:text-[14rem] font-heading font-black leading-none tracking-tighter text-color-accent/10 select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-7xl md:text-8xl font-heading font-black text-color-accent tracking-tighter">
                404
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl font-heading font-black text-color-text tracking-tight">
              Page Not Found
            </h1>
            <p className="text-lg text-color-text-2 leading-relaxed font-medium max-w-md mx-auto">
              The page you're looking for doesn't exist or may have moved. Let's get you back on track.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="btn-primary group px-8 py-4 text-sm font-bold">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link to="/contact" className="btn-secondary px-8 py-4 text-sm font-bold group">
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Quick nav */}
          <div className="flex flex-col gap-3 pt-4 border-t border-color-border w-full max-w-sm">
            <p className="text-xs uppercase tracking-[0.2em] font-black text-color-text-muted">Quick Links</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { name: 'Corporate Training', href: '/corporate' },
                { name: 'Student Workshops', href: '/students' },
                { name: 'Faculty FDP', href: '/faculty' },
                { name: 'AI Mentor', href: '/ai-mentor' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-xs font-bold text-color-text-muted hover:text-color-accent transition-colors px-3 py-1.5 rounded-lg hover:bg-color-accent/10"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
