import React, { useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import HeroSlide2 from '../../assets/how we work.jpeg';

const HowWeWork: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const steps = [
    {
      number: '01',
      title: 'Consultation & Site Measure',
      description: 'We listen to your ideas, analyze the physical space, take laser-accurate measurements, and align on your vision and budget.',
      
    },
    {
      number: '02',
      title: 'Custom Blueprint & Material Pick',
      description: 'We select premium woods, finishes, hardware, and structural elements customized specifically for your home.',
   
    },
    {
      number: '03',
      title: 'Handcrafted Precision Build',
      description: 'Our master craftspeople handcraft every cabinet, ceiling piece, and furniture unit to perfection in our workshop.',
      
    },
    {
      number: '04',
      title: 'Professional On-Site Fitting',
      description: 'We deliver, fit, and finish your project on schedule with immaculate attention to detail and zero mess.',
    
    },
  ];

  return (
    <section id="how-we-work" className="py-20 bg-neutral-50/70 border-t border-b border-neutral-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">
            How We Work
          </h2>
          <p className="text-neutral-600 text-base sm:text-[17px] leading-relaxed">
            We follow a collaborative and transparent process, ensuring clear communication and expert execution at every stage of the project. From initial concept to final delivery.
          </p>
        </div>

        {/* Big Showcase Card with Central Play Button (Exact match from the picture) */}
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-neutral-900 aspect-16/9 md:aspect-21/9 max-h-[460px] w-full mb-16 group">
          <img
            src={HeroSlide2}
            alt="Crystal Faith Projects craftsperson on installation site"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          {/* Central Amber Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setIsVideoModalOpen(true)}
              aria-label="View Craftsmanship Showcase"
              className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-400 hover:bg-amber-300 text-neutral-900 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group/btn"
            >
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-neutral-900 text-neutral-900 translate-x-0.5" />
            </button>
          </div>

          {/* Bottom Banner inside Image */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Execution & Delivery</span>
              <p className="text-sm sm:text-base font-semibold">Strict Quality Control & Reliable Turnaround</p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 py-2 rounded-full w-fit transition"
            >
              <span>Schedule Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-xs hover:shadow-md transition-shadow relative"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black text-amber-500/80">{step.number}</span>
                
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Video / Showcase Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-2xl relative text-center">
            <h3 className="text-2xl font-bold text-neutral-900 mb-3">Our Quality Guarantee</h3>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              Every project handled by Crystal Faith Projects undergoes a strict 4-point inspection for structural integrity, smooth drawer slides, flawless door alignment, and premium finishing.
            </p>
            <div className="rounded-2xl overflow-hidden aspect-video bg-neutral-100 mb-6">
              <img
                src={HeroSlide2}
                alt="Showcase preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="px-6 py-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-sm font-semibold transition"
              >
                Close Preview
              </button>
              <a
                href="#contact"
                onClick={() => setIsVideoModalOpen(false)}
                className="px-6 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-semibold transition"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HowWeWork;
