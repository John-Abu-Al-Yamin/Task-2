import { useState } from 'react';
import { Globe, Menu, ChevronUp } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Exhibition from './components/Exhibition';
import Awards from './components/Awards';
import WhyAttend from './components/WhyAttend';
import Partners from './components/Partners';
import Footer from './components/Footer';
import logoAr from "../src/images/logoAr.svg";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll-to-top button when scrolling down
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  // Add scroll listener
  window.addEventListener('scroll', handleScroll);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#242424] text-white">
      {/* Header */}
      <header className="fixed top-0 right-0 w-full z-50 py-5">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <img src={logoAr} alt="Saudi Media Forum" className="h-12" />
            <div className="flex items-center gap-2">
              <button className="lg:hidden">
                <Menu className="h-6 w-6" />
              </button>
              <button>
                <Globe className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Exhibition />
        <Awards />
        <WhyAttend />
        <Partners />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors z-50 flex flex-col items-center"
        >
          <ChevronUp className="h-5 w-5 animate-bounce" />
          <span className="text-xs font-semibold">العودة للأعلى</span>
        </button>
      )}
    </div>
  );
}

export default App;