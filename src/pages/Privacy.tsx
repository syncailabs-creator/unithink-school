import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function Privacy() {
  return (
    <div className="pt-20 bg-color-bg min-h-screen">
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for Unithink School — India's Premier AI Training Institute."
        canonical="/privacy"
        noIndex
      />

      <section className="section px-3 md:px-5">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            {/* Header */}
            <div className="flex flex-col gap-4 mb-16">
              <span className="text-xs uppercase tracking-[0.06em] font-medium text-color-accent">Legal</span>
              <h1 className="text-4xl md:text-5xl font-heading font-black text-color-text tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-color-text-muted text-sm font-medium">
                Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-12 text-color-text-2 leading-relaxed">
              <section className="flex flex-col gap-4">
                <h2 className="text-2xl font-heading font-black text-color-text">Information We Collect</h2>
                <p>
                  Unithink School collects information you provide directly to us, such as when you fill out our contact form, register for a workshop, or communicate with us via email or WhatsApp. This includes your name, email address, phone number, and any message you send.
                </p>
                <p>
                  We may also collect usage data through analytics tools to understand how visitors interact with our website, including pages visited, time spent, and referral sources. This data is aggregated and does not personally identify you.
                </p>
              </section>

              <section className="flex flex-col gap-4">
                <h2 className="text-2xl font-heading font-black text-color-text">How We Use Your Information</h2>
                <ul className="flex flex-col gap-3 list-none">
                  {[
                    'To respond to your inquiries and workshop booking requests',
                    'To send information about workshops, programs, and updates you have requested',
                    'To improve our website and training programs',
                    'To comply with legal obligations',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-color-accent mt-2.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="flex flex-col gap-4">
                <h2 className="text-2xl font-heading font-black text-color-text">Data Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share information with trusted third-party services that help us operate our website (such as form submission services), subject to confidentiality agreements.
                </p>
              </section>

              <section className="flex flex-col gap-4">
                <h2 className="text-2xl font-heading font-black text-color-text">Cookies</h2>
                <p>
                  Our website may use cookies and similar tracking technologies to enhance your experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </section>

              <section className="flex flex-col gap-4">
                <h2 className="text-2xl font-heading font-black text-color-text">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:unithink.school@gmail.com" className="text-color-accent hover:underline font-semibold">
                    unithink.school@gmail.com
                  </a>{' '}
                  or call{' '}
                  <a href="tel:+919726217070" className="text-color-accent hover:underline font-semibold">
                    +91 9726217070
                  </a>.
                </p>
              </section>
            </div>

            {/* Back link */}
            <div className="mt-16 pt-8 border-t border-color-border">
              <Link to="/" className="btn-secondary text-sm font-bold">
                ← Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
