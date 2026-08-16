import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import Image1 from '../../assets/Ceiling Installation.png';
import Image2 from '../../assets/door instalation .png';
import Image3 from '../../assets/Kitchen Units & Wardrobe Fitting.png';
import Image4 from '../../assets/painting.png';
import Image5 from '../../assets/civil.png';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  benefits: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: 'ceiling-installation',
    title: 'Ceiling Installation',
    description: 'Professional ceiling installation services including suspended ceilings, plasterboard, and decorative finishes with precision and quality.',
    features: ['Suspended Ceilings', 'Plasterboard', 'Decorative Finishes'],
    image: Image1,
    benefits: [
      'Laser-Accurate Leveling',
      'Thermal & Acoustic Optimization',
      'Long-Lasting Warranty',
      'Spotless Site Clean-up',
    ],
  },
  {
    id: 'door-installation',
    title: 'Door Installation',
    description: 'Expert door fitting services for interior and exterior doors with precise measurements, quality hardware, and perfect alignment.',
    features: ['Interior Doors', 'Exterior Doors', 'Quality Hardware'],
    image: Image2,
    benefits: [
      'Smooth Glide & Perfect Swings',
      'Heavy-Duty Security Hardware',
      'Weatherproofing & Seal Fitting',
      'Flawless Finish Guarantee',
    ],
  },
  {
    id: 'kitchen-wardrobe-fitting',
    title: 'Kitchen Units & Wardrobe Fitting',
    description: 'Custom kitchen units and wardrobe installation with meticulous attention to detail, perfect measurements, and flawless finish.',
    features: ['Custom Design', 'Perfect Fit', 'Premium Finish'],
    image: Image3,
    benefits: [
      'Tailored Ergonomic Layouts',
      'Soft-Close Precision Hinges',
      'Moisture-Resistant Materials',
      'Lifetime Craft Support',
    ],
  },
  {
    id: 'painting-services',
    title: 'Painting & Surface Finishing',
    description: 'Professional interior and exterior painting services using premium materials for a durable, beautiful, and long-lasting finish.',
    features: ['Interior Painting', 'Exterior Painting', 'Premium Materials'],
    image: Image4,
    benefits: [
      'Comprehensive Surface Prep',
      'Premium Scrub-Resistant Coats',
      'Custom Palette Matching',
      'Streak-Free Clean Execution',
    ],
  },
  {
    id: 'civil-engineering',
    title: 'Civil Engineering',
    description: 'Comprehensive civil engineering solutions including structural design, site development, and infrastructure projects with expert precision.',
    features: ['Structural Design', 'Site Development', 'Infrastructure Projects'],
    image: Image5,
    benefits: [
      'Safety-First Engineering Standards',
      'Sustainable Materials & Practices',
      'Precision Structural Calculations',
      'End-to-End Project Management',
    ],
  },
];

const Services: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-neutral-50/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Expert Home Improvement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">
            Our Professional Services
          </h2>
          <p className="text-neutral-600 text-base sm:text-[17px] leading-relaxed">
            Delivering excellence in every project with precision, quality, and attention to detail across South Africa.
          </p>
        </div>

        {/* Services 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-[2rem] p-6 sm:p-8 border border-neutral-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Rounded Shape */}
                <div className="relative rounded-2xl overflow-hidden aspect-16/9 bg-neutral-100 mb-6 border border-neutral-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {service.features.map((feat, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-semibold bg-neutral-900/80 text-white backdrop-blur-md px-2.5 py-1 rounded-full"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Benefits Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 pt-4 border-t border-neutral-100">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={scrollToContact}
                className="w-full inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold py-3 px-4 rounded-xl transition-colors active:scale-98 cursor-pointer"
              >
                <span>Request Service Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
