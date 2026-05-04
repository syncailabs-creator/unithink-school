import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function Terms() {
  return (
    <div className="pt-20 bg-color-bg min-h-screen">
      <SEO
        title="Terms of Service"
        description="Terms of Service for Unithink School — India's Premier AI Training Institute."
        canonical="/terms"
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
                Terms of Service
              </h1>
              <p className="text-color-text-muted text-sm font-medium">
                Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-12 text-color-text-2 leading-relaxed">
              <section className="flex flex-col gap-4">
                <h2 className="text-2xl font-heading font-black text-color-text">Acceptance of Terms</h2>
                <p>
                  By accessing and using the Unithink School website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="flex flex-col gap-4">
                <h2 className="text-2xl font-heading font-black text-color-text">Services</h2>
                <p>
                  Unithink School provides AI training workshops and educational programs for corporate teams, engineering students, and faculty. Workshop details, pricing, and availability are subject to change without notice.
                </p>
              </section>

              <section className="flex flex-col gap-4">
                <h2 className="text-2xl font-heading font-black text-color-text">Bookings & Payments</h2>
                <p>
                  Workshop bookings are confirmed upon receipt of payment. Our standard payment structure requires 50% advance payment to confirm a booking and 50% on the day of the workshop. Cancellation policies vary by program type and will be communicated at the time of booking.
                </p>
              </section>

              <section className="flex flex-col gap-4">
                <h2 className="text-2xl font-heading font-black text-color-text">Intellectual Property</h2>
                <p>
                  All training materials, curriculum content, workshop recordings, and resources provided by Unithink School are proprietary and protected by copyright. Participants may not reproduce, distribute, or share materials without prior written permission.
                </p>
              </section>

              <section className="flex flex-col gap-4">
                <h2 className="text-2xl font-heading font-black text-color-text">Limitation of Liability</h2>
                <p>
                  Unithink School shall not be liable for any indirect, incidental, or consequential damages arising from the use of our training services. Our maximum liability is limited to the amount paid for the specific workshop or program.
                </p>
              </section>

              <section className="flex flex-col gap-4">
                <h2 className="text-2xl font-heading font-black text-color-text">Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of Gujarat, India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat.
                </p>
              </section>

              <section className="flex flex-col gap-4">
                <h2 className="text-2xl font-heading font-black text-color-text">Contact</h2>
                <p>
                  For questions about these Terms, contact us at{' '}
                  <a href="mailto:unithink.school@gmail.com" className="text-color-accent hover:underline font-semibold">
                    unithink.school@gmail.com
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
