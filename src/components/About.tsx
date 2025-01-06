import { MapPin } from 'lucide-react';
import { Section } from './ui/Section';
import mediaForm from "../images/partners/mediaturtles logo.svg";

export default function About() {
  return (
    <Section className="bg-[#07302B] py-24">
      
      <div className="container grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">المنتدى السعودي للإعلام 2025</h2>
          <p className="text-xl text-gray-300">منصة الابتكار، التأثير، والمستقبل الإعلامي</p>
          <div className="flex items-center gap-3">
            <MapPin className="text-green-500" />
            <span>الرياض، المملكة العربية السعودية</span>
          </div>
        </div>
        <div className="relative">
          <img 
            src={mediaForm} 
            alt="Media Forum"
            className="rounded-2xl object-cover w-full h-[400px]"
          />
          <div className="absolute inset-0 bg-[#1045404D] rounded-2xl" />
        </div>
      </div>
    </Section>
  );
}