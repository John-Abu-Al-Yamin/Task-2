import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { SocialLink } from './ui/SocialLink';
import logoAr from "../images/logoAr.svg";

export default function Footer() {
  return (
    <footer className="bg-[#07302B] text-white py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo */}
          <div>
            <img src={logoAr} alt="Logo" className="h-12 mb-6" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">روابط سريعة</h3>
            <ul className="space-y-4">
              <li><a href="/" className="hover:text-green-400">الرئيسية</a></li>
              <li><a href="/fomex" className="hover:text-green-400">المعرض</a></li>
              <li><a href="/awards" className="hover:text-green-400">جائزة المنتدى</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">تواصل معنا</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-green-400" />
                <span>+966 535979563</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-green-400" />
                <span>info@saudimf.sa</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-green-400" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12">
          <SocialLink href="https://facebook.com" icon={<Facebook />} />
          <SocialLink href="https://twitter.com" icon={<Twitter />} />
          <SocialLink href="https://instagram.com" icon={<Instagram />} />
          <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 pt-12 border-t border-gray-700">
          <p>جميع الحقوق محفوظة للمنتدى السعودي للإعلام 2025</p>
        </div>
      </div>
    </footer>
  );
}