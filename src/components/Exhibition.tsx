import { Section } from './ui/Section';

export default function Exhibition() {
  return (
    <Section className="bg-[#07302B]">
      <div className="container text-center">
        <img 
          src="/images/heroLogo.svg" 
          alt="FOMEX"
          className="mx-auto mb-8 h-12"
        />
        <h2 className="text-4xl font-bold mb-6">
          معرض (FOMEX) 2025 , انطلق نحو مستقبل الإعلام!
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          استعد لرحلة استثنائية إلى عالم التقنيات الحديثة في معرض Fomex ، أكبر معرض إعلامي متخصص بتقنيات الإعلام والإنتاج الرقمي في الشرق الأوسط.
        </p>
        <a href="/ar/fomex#spaces-section" className="btn-primary">
          احجز مساحتك الآن
        </a>
      </div>
    </Section>
  );
}