import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { ErrorBoundary } from './components/ErrorBoundary';

// Route-based code splitting — each page loads only when navigated to
const Home          = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Corporate     = lazy(() => import('./pages/Corporate').then(m => ({ default: m.Corporate })));
const Students      = lazy(() => import('./pages/Students').then(m => ({ default: m.Students })));
const Faculty       = lazy(() => import('./pages/Faculty').then(m => ({ default: m.Faculty })));
const WorkshopsHub  = lazy(() => import('./pages/WorkshopsHub').then(m => ({ default: m.WorkshopsHub })));
const AIMentor      = lazy(() => import('./pages/AIMentor').then(m => ({ default: m.AIMentor })));
const SuccessStories = lazy(() => import('./pages/SuccessStories').then(m => ({ default: m.SuccessStories })));
const Contact       = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Privacy       = lazy(() => import('./pages/Privacy').then(m => ({ default: m.Privacy })));
const Terms         = lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })));
const About         = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const NotFound      = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

// Minimal loading fallback — matches site background so there's no flash
function PageLoader() {
  return (
    <div className="min-h-screen bg-color-bg flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-color-accent border-t-transparent animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen selection:bg-color-accent selection:text-color-bg">
      <ScrollToTop />
      <Navbar />
      <main>
        <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"               element={<Home />} />
            <Route path="/corporate"      element={<Corporate />} />
            <Route path="/students"       element={<Students />} />
            <Route path="/faculty"        element={<Faculty />} />
            <Route path="/ai-workshops"   element={<WorkshopsHub />} />
            <Route path="/ai-mentor"      element={<AIMentor />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/about"          element={<About />} />
            <Route path="/contact"        element={<Contact />} />
            <Route path="/privacy"        element={<Privacy />} />
            <Route path="/terms"          element={<Terms />} />
            {/* Catch-all 404 */}
            <Route path="*"              element={<NotFound />} />
          </Routes>
        </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
