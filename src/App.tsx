import { useState } from "react";
import { Globe, Menu, ChevronUp, ChevronDown } from "lucide-react";
import Hero from "./components/Hero";
import About from "./components/About";
import Exhibition from "./components/Exhibition";
import Awards from "./components/Awards";
import WhyAttend from "./components/WhyAttend";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import logoAr from "../src/images/logoAr.svg";
import NewsSlider from "./components/NewsSlider";
import Navbar from "./components/Navbar";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    {
      name: "الرئيسية",
      active: true,
      items: [
        "عن المنتدى",
        "رسالة المنتدى",
        "المتحدثون",
        "جلسات المنتدى",
        "أسئلة عن المنتدى",
      ],
    },
    {
      name: "المعرض",
      active: false,
      items: ["معرض الإعلام", "العارضون", "خريطة المعرض"],
    },
    {
      name: "جائزة المنتدى",
      active: false,
      items: ["عن الجائزة", "الفئات", "التحكيم"],
    },
    {
      name: "أخرى",
      active: false,
      items: ["الرعاة", "تواصل معنا", "الأسئلة الشائعة"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#242424] text-white">
      <header className="fixed top-0 right-0 w-full z-50 ">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <img src={logoAr} alt="Saudi Media Forum" className="h-12" />
              <div className="flex items-center gap-2 lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="hover:bg-[#234c4a] p-2 rounded-lg transition-colors"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`text-lg font-semibold hover:text-green-400 transition-colors flex items-center gap-1 ${
                      item.active ? "text-green-400" : "text-white"
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === item.name && (
                    <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-1">
                      <div className="text-green-500 font-semibold px-4 py-2 border-b border-gray-100">
                        {item.name}
                      </div>
                      {item.items.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-right text-gray-700 hover:bg-gray-50 hover:text-green-500 transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg transition-colors hover:bg-[#234c4a] lg:p-3">
                <Globe className="h-5 w-5 lg:h-6 lg:w-6" />
              </button>
              <button className="bg-[#006e5f] rounded-2xl hover:bg-[#005c4f] px-4 py-2 lg:px-6 lg:py-2 transition-colors font-semibold">
                تسجيل الدخول
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-[#234c4a]">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <div key={item.name} className="space-y-1">
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )
                      }
                      className={`w-full text-right text-lg font-semibold hover:text-green-400 transition-colors flex items-center justify-between ${
                        item.active ? "text-green-400" : "text-white"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pr-4 space-y-1">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem}
                            href="#"
                            className="block py-2 text-sm hover:text-green-400 transition-colors"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        {/* <Navbar navItems={navItems} /> */}
        <Hero />
        <NewsSlider />
        <About />
        <Exhibition />
        <Awards />
        <WhyAttend />
        <Partners />
      </main>

      <Footer />

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
