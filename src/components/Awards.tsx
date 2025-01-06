import { Section } from './ui/Section';
import { AwardCard } from './ui/AwardCard';
import { motion } from 'framer-motion';
import awardsImage from "../images/awards/frame.svg";

const awards = [
  {
    title: 'المحتوى الإعلامي (غير الصحفي)',
    description: 'تتويج المتميزين من الافراد والجهات الأكثر تأثيرا في انتاج المحتوى المرئي والمسموع',
    image: awardsImage
  },
  {
    title: 'التواصل والعلاقات العامة',
    description: 'تتويج افضل الحملات الإعلانية المتكاملة علي مستوى القطاع الحكومي والقطاع الخاص',
    image: awardsImage
  },
  {
    title: 'الصحافة',
    description: 'تتويج افضل الاعمال الصحفية وأكثر الصحفيين و المراسلين نشاطا وتأثيرا في انتاج محتوى إعلامي مميز',
    image: awardsImage
  },
  {
    title: 'الجوائز الخاصة',
    description: 'تتويج الأعمال والشخصيات الإعلامية الاكثر تميزا في تقديم المحتوى الاعلامي الصحفي والرقمي',
    image: awardsImage
  }
];

export default function Awards() {
  return (
    <Section className="bg-[#07302B]">
      <div className="container text-center">
        <h2 className="text-4xl font-bold mb-8">جائزة المنتدى السعودي للإعلام 2025</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          جائزة المنتدى السعودي للإعلام تُكرّم وتتوج المبدعين والمتميزين في صناعة المحتوى الإعلامي
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.5 }} // إعادة تشغيل الأنيميشن عند الظهور
            >
              <AwardCard {...award} image={award.image} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
