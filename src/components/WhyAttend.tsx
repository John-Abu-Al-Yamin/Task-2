import { Section } from './ui/Section';
import { FeatureCard } from './ui/FeatureCard';
import whyImage1 from "../images/why_you_should_come/image_1.jpg";
import whyImage2 from "../images/why_you_should_come/image_2.jpg";
import whyImage3 from "../images/why_you_should_come/image_3.jpg";

const features = [
  {
    title: 'استكشاف التكنولوجيا الحديثة',
    description: 'اكتشف آخر ما توصلت إليه التكنولوجيا الإعلامية وأحدث الابتكارات الرقمية',
    image: whyImage1
  },
  {
    title: 'اكتساب معرفة',
    description: 'شارك في جلسات حوارية وورش عمل يقودها نخبة من المتحدثين والخبراء العالميين',
    image: whyImage2
  },
  {
    title: 'تواصل مع رواد الإعلام',
    description: 'انضم إلى قادة الإعلام ورواد الأعمال الذين يقودون التحول الرقمي في القطاع',
    image: whyImage3
  }
];

export default function WhyAttend() {
  return (
    <Section className="bg-[#07302B]">
      <div className="container text-center">
        <h2 className="text-4xl font-bold mb-12">لماذا يجب أن تكون هنا؟</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </Section>
  );
}