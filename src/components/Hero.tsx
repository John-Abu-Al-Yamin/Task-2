import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Calendar,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion"; // استيراد مكتبة الحركة
import NoOutro from "../images/NoOutro.mp4";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  reverse?: boolean;
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}
export default function Hero() {

  const stats = [
    { number: "+32K", label: "زائر" },
    { number: "+200", label: "جهة مشاركة" },
    { number: "+2000", label: "إعلامي ومتحدث" },
    { number: "+80", label: "جلسة" },
    { number: "+196M", label: "وصول إعلامي" },
    { number: "+11M", label: "مشاهدات" },
  ];

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
      <div className="relative z-30 container mx-auto flex flex-col items-center justify-center min-h-screen px-4 py-24">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span>الإعلام</span>
            <br />
            في عالم يتشكل
          </h1>

          {/* Buttons Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="/ar/fomex#spaces-section"
              className="bg-[#006e5f] hover:bg-[#005c4f] px-8 py-3 rounded-lg transition-colors font-semibold"
            >
              احجز مساحتك الآن
            </a>
            <a
              href="/ar/sign-up"
              className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg transition-colors font-semibold"
            >
              سجل الآن
            </a>
          </motion.div>

          {/* Social Links Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
            className="flex justify-center gap-6 text-lg"
          >
            <SocialLink href="https://facebook.com" icon={<Facebook />} />
            <SocialLink href="https://twitter.com" icon={<Twitter />} />
            <SocialLink href="https://instagram.com" icon={<Instagram />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
          </motion.div>
        </motion.div>

        {/* Info Cards Animation */}
        <div className="flex flex-wrap justify-center md:justify-between w-full gap-8 mt-auto">
          {[
            {
              icon: <MapPin className="h-6 w-6" />,
              title: "الرياض،",
              subtitle: "المملكة العربية السعودية",
            },
            {
              icon: <Calendar className="h-6 w-6" />,
              title: "19 - 21 فبراير",
              subtitle: "2025",
            },
            {
              icon: <Clock className="h-6 w-6" />,
              title: "43 : 18",
              subtitle: "يوم ساعة",
              reverse: true,
            },
          ].map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <InfoCard {...info} />
            </motion.div>
          ))}
        </div>

        {/* Stats Section Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
          className="w-full mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#006e5f] rounded-lg p-4 text-center"
            >
              <div className="text-2xl font-bold mb-1">{stat.number}</div>
              <div className="text-[#97cc3f]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

function SocialLink({ href, icon }: SocialLinkProps) {
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

function InfoCard({ icon, title, subtitle, reverse = false }: InfoCardProps) {
  return (
    <div className="bg-[#006e5f]/20 backdrop-blur-sm rounded-lg px-8 py-6 min-w-[240px] text-center">
      <div className="flex items-center justify-center mb-3">{icon}</div>
      <div
        className={`space-y-1 ${
          reverse ? "flex items-center justify-center gap-2" : ""
        }`}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <p
          className={`text-gray-300 ${reverse ? "text-xl font-semibold" : ""}`}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}
