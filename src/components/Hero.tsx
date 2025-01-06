import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import NoOutro from "../images/NoOutro.mp4";

export default function Hero() {
  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-1"
      >
        <source src={NoOutro} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,48,43,0.35)] via-[rgba(6,40,35,0.8)] to-[rgba(5,36,32,0.737)] -z-1" />

      {/* Content */}
      <div className="relative z-30 container mx-auto flex items-center justify-center min-h-screen px-4 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span>الإعلام</span>
            <br />
            في عالم يتشكل
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="/ar/fomex#spaces-section" className="btn-primary">
              احجز مساحتك الآن
            </a>
            <a href="/ar/sign-up" className="btn-secondary">
              سجل الآن
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 text-lg">
            <SocialLink href="https://facebook.com" icon={<Facebook />} />
            <SocialLink href="https://twitter.com" icon={<Twitter />} />
            <SocialLink href="https://instagram.com" icon={<Instagram />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-white hover:text-green-400 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}
