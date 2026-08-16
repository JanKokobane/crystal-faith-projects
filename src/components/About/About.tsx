import React from 'react';
import { Award } from 'lucide-react';

import OurMissionImg from '../../assets/On-Site Survey.png';
import HeroSlide4 from '../../assets/WhatsApp Image 2026-08-15 at 16.24.52 (1).jpeg';
import AboutImage from '../../assets/WhatsApp Image 2026-08-15 at 16.24.52.jpeg';
import CfpImage2 from '../../assets/WhatsApp Image 2026-08-15 at 16.24.53.jpeg';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-12 md:py-16 bg-white overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">

        {/* ============================================================ */}
        {/* 1. OUR MISSION */}
        {/* ============================================================ */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Visual */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-md group pb-4 pr-3 sm:pr-4">

              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-4/5 bg-neutral-100 border-4 border-white transition-all duration-500 group-hover:shadow-amber-500/10">

                <img
                  src={OurMissionImg}
                  alt="Crystal Faith Projects woodworking and planning"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                    Woodworking & Planning
                  </p>

                  <p className="text-sm font-bold drop-shadow-sm">
                    Precision Design Phase
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">

            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full mb-2 self-start">
              <span>Core Purpose</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">
              Our Mission
            </h2>

            <p className="text-neutral-600 text-base sm:text-[17px] leading-relaxed mb-5">
              To provide exceptional craftsmanship and home improvement
              services that exceed client expectations through innovation,
              quality craftsmanship, and a commitment to sustainability. We
              aim to build lasting relationships and create spaces that
              inspire and improve the lives of our clients and communities
              across South Africa.
            </p>

            {/* Mission List */}
            <div className="space-y-1.5">

              {/* 01 */}
              <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-neutral-50 transition-colors">

                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  01
                </div>

                <span className="text-neutral-800 text-[15px] font-medium leading-snug">
                  Fostering Sustainable Growth and Green Development
                </span>

              </div>

              {/* 02 */}
              <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-neutral-50 transition-colors">

                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  02
                </div>

                <span className="text-neutral-800 text-[15px] font-medium leading-snug">
                  Innovating for a Sustainable & Modern Future
                </span>

              </div>

              {/* 03 */}
              <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-neutral-50 transition-colors">

                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  03
                </div>

                <span className="text-neutral-800 text-[15px] font-medium leading-snug">
                  Customer-Centric Approach & Personalized Solutions
                </span>

              </div>

              {/* 04 */}
              <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-neutral-50 transition-colors">

                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  04
                </div>

                <span className="text-neutral-800 text-[15px] font-medium leading-snug">
                  Building Stronger Communities & Long-Lasting Trust
                </span>

              </div>

            </div>
          </div>
        </div>


        {/* ============================================================ */}
        {/* 2. OUR VISION */}
        {/* ============================================================ */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Content */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">

            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full mb-2 self-start">
              <span>Future Focus</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">
              Our Vision
            </h2>

            <p className="text-neutral-600 text-base sm:text-[17px] leading-relaxed mb-5">
              At{' '}
              <strong className="text-neutral-900 font-semibold">
                Crystal Faith Projects
              </strong>
              , our vision is to redefine the future of home improvement
              through innovation, sustainability, and excellence. We aim to
              create custom installations that not only inspire but also
              contribute to the long-term well-being of families and
              environments.
            </p>

            {/* Vision List */}
            <div className="space-y-1.5">

              {/* 01 */}
              <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-neutral-50 transition-colors">

                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  01
                </div>

                <span className="text-neutral-800 text-[15px] font-medium leading-snug">
                  Inspiring Modern Architecture & Living Spaces
                </span>

              </div>

              {/* 02 */}
              <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-neutral-50 transition-colors">

                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  02
                </div>

                <span className="text-neutral-800 text-[15px] font-medium leading-snug">
                  Pioneering Sustainable and Durable Craftsmanship
                </span>

              </div>

              {/* 03 */}
              <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-neutral-50 transition-colors">

                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  03
                </div>

                <span className="text-neutral-800 text-[15px] font-medium leading-snug">
                  Uncompromised Precision, Ergonomics & Quality Finishes
                </span>

              </div>

            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative flex justify-center">

            <div className="relative w-full max-w-md group pb-4 pl-3 sm:pl-4">

              {/* Main Image */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-4/5 bg-neutral-100 border-4 border-white transition-all duration-500 group-hover:shadow-amber-500/10">

                <img
                  src={HeroSlide4}
                  alt="Crystal Faith Projects on-site consultation and surveying"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-4 left-5 right-5 text-white">

                  <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                    On-Site Consultation
                  </p>

                  <p className="text-sm font-bold drop-shadow-sm">
                    Surveying & Accurate Measurements
                  </p>

                </div>

              </div>

              {/* Secondary Image */}
              <div className="absolute bottom-0 left-0 w-3/5 rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-square bg-neutral-200 group-hover:translate-y-[-4px] transition-transform duration-500">

                <img
                  src={AboutImage}
                  alt="Precision cabinetry fitting"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-3 left-3 right-3 text-white">

                  <p className="text-[11px] font-bold leading-tight">
                    Precision Cabinetry Fitting
                  </p>

                </div>

              </div>

            </div>
          </div>
        </div>


        {/* ============================================================ */}
        {/* 3. OUR HISTORY */}
        {/* ============================================================ */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-6 border-t border-neutral-100">

          {/* Left Visual */}
          <div className="lg:col-span-6 relative flex justify-center">

            <div className="relative w-full max-w-md group pb-4 pr-3 sm:pr-4">

              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-4/3 bg-neutral-100 border-4 border-white transition-all duration-500 group-hover:shadow-amber-500/10">

                <img
                  src={CfpImage2}
                  alt="Crystal Faith Projects master craftspeople on installation site"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-4 left-5 right-5 text-white">

                  <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                    Installation Site
                  </p>

                  <p className="text-sm font-bold drop-shadow-sm">
                    Master Craftspeople at Work
                  </p>

                </div>

              </div>

              {/* Experience Badge */}
              <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-xl border border-neutral-100 flex items-center gap-2 z-10">

                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold shrink-0">
                  <Award className="w-4 h-4" />
                </div>

                <div>
                  <span className="block text-[9px] uppercase font-extrabold tracking-wider text-amber-700">
                    South Africa
                  </span>

                  <span className="text-xs font-bold text-neutral-900">
                    8+ Years Experience
                  </span>
                </div>

              </div>

            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">

            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full mb-2 self-start">
              <span>Our Heritage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">
              Our History
            </h2>

            <p className="text-neutral-600 text-base sm:text-[17px] leading-relaxed mb-3">
              Founded on a commitment to quality and innovation,{' '}
              <strong className="text-neutral-900 font-semibold">
                Crystal Faith Projects
              </strong>{' '}
              began as a passionate team with a big vision. Over the years,
              we have grown into a trusted name in the South African
              carpentry and home improvement industry, delivering exceptional
              projects that stand the test of time.
            </p>

            <p className="text-neutral-600 text-base sm:text-[17px] leading-relaxed mb-5">
              Our journey is marked by milestones of success, driven by
              passion and a dedication to excellence. From humble beginnings
              to master installations, we remain focused on building strong
              relationships and impactful spaces. Our history is the
              foundation of our future.
            </p>

            {/* History List */}
            <div className="space-y-1.5">

              {/* 01 */}
              <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-neutral-50 transition-colors">

                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  01
                </div>

                <span className="text-neutral-800 text-[15px] font-medium leading-snug">
                  Humble Beginnings & Woodworking Passion
                </span>

              </div>

              {/* 02 */}
              <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-neutral-50 transition-colors">

                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  02
                </div>

                <span className="text-neutral-800 text-[15px] font-medium leading-snug">
                  Milestones and High-End Achievements
                </span>

              </div>

              {/* 03 */}
              <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-neutral-50 transition-colors">

                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  03
                </div>

                <span className="text-neutral-800 text-[15px] font-medium leading-snug">
                  Building a Legacy of Trust Across South Africa
                </span>

              </div>

              {/* 04 */}
              <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-neutral-50 transition-colors">

                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  04
                </div>

                <span className="text-neutral-800 text-[15px] font-medium leading-snug">
                  Shaping the Future, Rooted in Honest Craft
                </span>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;