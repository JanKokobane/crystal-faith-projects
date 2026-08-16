import { Phone, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import TumeloImg from '../../assets/TumeloBapedi.jpg';
import NeoImg from '../../assets/WhatsApp Image 2025-10-04 at 16.55.10_4631e73d.jpg';
import RefilweImg from '../../assets/Refilwe.jpg';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  phone?: string;
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Tumelo Bapedi',
      role: 'Master Carpenter & Lead Craftsperson',
      image: TumeloImg,
      phone: '+27660539993',
    },
    {
      name: 'Neo Legasa Masha',
      role: 'Senior Carpenter & Installation Specialist',
      image: NeoImg,
      phone: '+27660539993',
    },
    {
      name: 'Desere Refilwe Motshabane',
      role: 'Client Relations & Project Administrator',
      image: RefilweImg,
      phone: '+27660539993',
    },
  ];

  return (
    <section id="team" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row with Title, Subtitle, and Contact Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-3">
              Crafting Excellence as a Team
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed">
              Our success is built on the dedication and expertise of our team, who work together to bring innovative ideas and exceptional craftsmanship to every project. Together, we turn visions into reality.
            </p>
          </div>

          <a
            href="#contact"
            id="team-explore-all-btn"
            className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-neutral-900 text-sm font-bold px-6 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all active:scale-95 shrink-0 self-start md:self-auto"
          >
            <span>Contact Our Team</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-900" />
          </a>
        </div>

        {/* 3-Card Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              id={`team-member-${index}`}
              className="group flex flex-col"
            >
              {/* Photo Container with Rounded Corners & Hover Overlay */}
              <div className="relative rounded-[2rem] overflow-hidden aspect-4/5 bg-neutral-100 mb-4 border border-neutral-100 shadow-xs group-hover:shadow-lg transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Social / Contact Hover Overlay on Right Side */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://www.instagram.com/crystalfaithprojects?igsh=eDNrZnljZGNjNzV3"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-neutral-800 hover:bg-amber-400 hover:text-neutral-900 flex items-center justify-center shadow-md transition"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/19d7Zj3R5o/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-neutral-800 hover:bg-amber-400 hover:text-neutral-900 flex items-center justify-center shadow-md transition"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="tel:+27660539993"
                    aria-label="Call Team"
                    className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-neutral-800 hover:bg-amber-400 hover:text-neutral-900 flex items-center justify-center shadow-md transition"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Text Information */}
              <div>
                <h3 className="text-lg font-bold text-neutral-900 group-hover:text-amber-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-neutral-500 mt-0.5">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
