import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Award, ShieldCheck, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import HeroSlide1 from '../../assets/costube carbords .png';
import HeroSlide2 from '../../assets/CeilingsDesigns.jpg';
import HeroSlide3 from '../../assets/KitchenUnits&WardrobeFitting.jpg';
import HeroSlide4 from '../../assets/BespokeFurniture.jpg';
import HeroImg2 from '../../assets/surveyNeo.png';

interface HeroSlide {
  id: number;
  tabLabel: string;
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  description: string;
  tagline: string;
  trustPoint1: string;
  trustPoint2: string;
  image: string;
  imageCaption: string;
  imageCategory: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    tabLabel: 'Custom Cupboards',
    badge: 'Master Carpentry & Living Spaces',
    titlePrefix: 'Crafting Excellence',
    titleHighlight: 'Together',
    subtitle: 'Custom Built Cupboards, Ceilings & Bespoke Furniture',
    description:
      'At Crystal Faith Projects, we believe in the power of collaboration to achieve outstanding results. With a team of skilled craftspeople and a steadfast commitment to quality, we work hand-in-hand with our clients to bring their ideas to life.',
    tagline: 'Handcrafted with precision in South Africa for over 8 years.',
    trustPoint1: 'Handcrafted in South Africa',
    trustPoint2: '8+ Years of Master Woodcraft',
    image: HeroSlide1,
    imageCaption: 'Cupboards, Ceilings & Bespoke Furniture',
    imageCategory: 'Custom Woodcraft',
  },
  {
    id: 2,
    tabLabel: 'Ceilings & Doors',
    badge: 'Precision On-Site Fitting',
    titlePrefix: 'Expert Installation &',
    titleHighlight: 'Flawless Finish',
    subtitle: 'Suspended Ceilings, Drywall & Secure Door Fitting',
    description:
      'From laser-aligned suspended ceilings to heavy-duty interior and exterior door fittings, our specialist installation team ensures structural integrity, perfect acoustic balance, and spotless site clean-up.',
    tagline: 'Laser-accurate alignment and guaranteed structural durability.',
    trustPoint1: 'Laser-Accurate Leveling',
    trustPoint2: 'Spotless Site Clean-Up',
    image: HeroSlide2,
    imageCaption: 'Laser-Leveled Ceilings & Door Frames',
    imageCategory: 'Expert Installation',
  },
  {
    id: 3,
    tabLabel: 'Kitchen Units',
    badge: 'Modern Fitted Kitchens',
    titlePrefix: 'Tailored Kitchens &',
    titleHighlight: 'Built-in Storage',
    subtitle: 'Ergonomic Cabinetry & Soft-Close Hardware',
    description:
      'Transform the heart of your home with custom kitchen units designed for everyday living. We combine durable moisture-resistant materials with modern finishes and space-maximizing storage layouts.',
    tagline: 'Customized storage solutions tailored to your unique lifestyle.',
    trustPoint1: 'Soft-Close German Hardware',
    trustPoint2: 'Moisture-Resistant Materials',
    image: HeroSlide3,
    imageCaption: 'Fitted Kitchens & Smart Storage Units',
    imageCategory: 'Modern Kitchens',
  },
  {
    id: 4,
    tabLabel: 'Bespoke Furniture',
    badge: 'Luxury Bedroom & Living Craft',
    titlePrefix: 'Handmade Furniture',
    titleHighlight: 'Built For Life',
    subtitle: 'Headboards, Pedestals, TV Stands & Wine Racks',
    description:
      'Every piece is individually shaped and finished in our workshop. Experience the luxury of custom headboards, sleek bedside pedestals, designer TV stands, and modern wine storage made to your exact dimensions.',
    tagline: 'Timeless aesthetic appeal paired with master artisan durability.',
    trustPoint1: '100% Custom Dimensions',
    trustPoint2: 'Premium Timber & Upholstery',
    image: HeroSlide4,
    imageCaption: 'Custom Headboards, Pedestals & TV Units',
    imageCategory: 'Luxury Furniture',
  },
  {
    id: 5,
    tabLabel: 'On-Site Survey',
    badge: 'Comprehensive Consultation',
    titlePrefix: 'From Vision To',
    titleHighlight: 'Flawless Reality',
    subtitle: 'Accurate Measurements & Transparent Project Estimates',
    description:
      'We visit your premises across Johannesburg and South Africa to understand your architectural requirements, take laser-guided measurements, and provide honest, transparent quotes with zero hidden fees.',
    tagline: 'Transparent timelines and dedicated project management.',
    trustPoint1: 'Free On-Site Consultations',
    trustPoint2: 'South Africa Wide Service',
    image: HeroImg2,
    imageCaption: 'On-Site Surveying & Blueprint Guidance',
    imageCategory: 'Consultation & Survey',
  },
];

const Hero: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentSlide = slides[currentSlideIndex];

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 6000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, currentSlideIndex]);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white overflow-hidden scroll-mt-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Hero Row: Left Text + Right Curved Photo Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Breadcrumb + Heading + Paragraph + Actions */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center transition-opacity duration-300">
            {/* Breadcrumb Tag & Category Badge */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              
            
            </div>

            {/* Main Headline with dynamic animated key */}
            <h1
              key={`headline-${currentSlide.id}`}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1] mb-4"
            >
              {currentSlide.titlePrefix} <br />
              <span className="text-amber-600">{currentSlide.titleHighlight}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base font-semibold text-neutral-800 mb-3">
              {currentSlide.subtitle}
            </p>

            {/* Descriptive Body */}
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6 max-w-xl">
              {currentSlide.description}
            </p>

            {/* Hero Quick Trust Points */}
            <div className="flex flex-wrap items-center gap-y-2.5 gap-x-5 text-xs sm:text-sm text-neutral-700 font-medium mb-8 bg-neutral-50 p-3.5 rounded-2xl border border-neutral-100">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold text-neutral-900">{currentSlide.trustPoint1}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="font-semibold text-neutral-900">{currentSlide.trustPoint2}</span>
              </div>
            </div>

            {/* Action Buttons & Slide Arrows */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                id="hero-explore-projects-btn"
                onClick={() => scrollToSection('#products')}
                className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <span>Explore Products & Craft</span>
                <ArrowUpRight className="w-4 h-4 text-amber-400" />
              </button>
              <button
                id="hero-request-quote-btn"
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all active:scale-95 cursor-pointer"
              >
                <span>Request Free Quote</span>
              </button>

              {/* Slider Arrow Controls */}
              <div className="flex items-center gap-1.5 ml-auto pt-2 sm:pt-0">
                <button
                  onClick={prevSlide}
                  aria-label="Previous Slide"
                  className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-900 hover:text-white text-neutral-700 flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-bold text-neutral-500 px-1">
                  0{currentSlideIndex + 1} / 0{slides.length}
                </span>
                <button
                  onClick={nextSlide}
                  aria-label="Next Slide"
                  className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-900 hover:text-white text-neutral-700 flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Rounded Asymmetric Image Showcase with Overlay Badge */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Main Image with Smooth Curvature */}
              <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl bg-neutral-100 aspect-4/3 sm:aspect-5/4 border-4 border-white">
                <img
                  key={`hero-img-${currentSlide.id}`}
                  src={currentSlide.image}
                  alt={currentSlide.imageCaption}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Top Corner Floating Tag */}
                <div className="absolute top-4 left-4 bg-neutral-900/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                  {currentSlide.imageCategory}
                </div>

                {/* Bottom Image Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-lg border border-white/40 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] sm:text-xs font-bold text-amber-600 uppercase tracking-wider">
                      Crystal Faith Craft
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-neutral-900">
                      {currentSlide.imageCaption}
                    </p>
                  </div>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-900 text-amber-400 flex items-center justify-center text-xs font-bold shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  </span>
                </div>
              </div>

              {/* Progress Dots Indicator */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlideIndex === idx
                        ? 'w-8 bg-amber-500'
                        : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slide Tabs Navigation Bar at the Bottom of the Hero Showcase (Desktop only) */}
        <div className="hidden lg:block mt-12 md:mt-16 overflow-x-auto no-scrollbar pb-2">
          <div className="flex items-center gap-2 p-1.5 bg-neutral-100/80 rounded-2xl border border-neutral-200/60 w-max sm:w-fit mx-auto shadow-2xs">
            {slides.map((slide, idx) => {
              const isActive = currentSlideIndex === idx;
              return (
                <button
                  key={slide.id}
                  id={`hero-slide-tab-${slide.id}`}
                  onClick={() => goToSlide(idx)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-neutral-900 text-white shadow-xs scale-100'
                      : 'text-neutral-600 hover:text-neutral-950 hover:bg-white/70'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      isActive ? 'bg-amber-400 text-neutral-950' : 'bg-neutral-200 text-neutral-600'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <span>{slide.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Highlighted Philosophical Statement */}
        <div className="mt-12 md:mt-16 pt-10 border-t border-neutral-100">
          {/* Centered Large Paragraph */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-neutral-700 leading-snug">
              At <span className="font-bold text-neutral-950">Crystal Faith Projects</span> we are committed to revolutionizing custom home improvement and carpentry with innovative, sustainable, and cost-effective solutions. With a proven track record of delivering exceptional projects, we combine{' '}
              <span className="text-neutral-500 font-normal">
                state-of-the-art craftsmanship, skilled expertise, and customer-centric approaches to bring visions to life.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

