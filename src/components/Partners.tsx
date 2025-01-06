import { Section } from './ui/Section';
import alula from "../images/partners/alula 1.svg";
import arabSat from "../images/partners/IGNITE.svg";
import aramco from "../images/partners/Jahez-2-01.svg";
import mbcAcademy from "../images/partners/MBC Academy.svg";
import neom from "../images/partners/NEOM-01-1.svg";
import rotana from "../images/partners/kaciid.svg";

const partners = [
  { name: 'Alula', logo: alula },
  { name: 'Ignite', logo: arabSat },
  { name: 'Aramco', logo: aramco },
  { name: 'MBC Academy', logo: mbcAcademy },
  { name: 'NEOM', logo: neom },
  { name: 'Rotana', logo: rotana }
];

export default function Partners() {
  return (
    <Section>
      <div className="container text-center">
        <h2 className="text-4xl font-bold mb-12">فخورون بأن نكون شركاء رحلتكم نحو التميز</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}