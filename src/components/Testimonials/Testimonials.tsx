import { Star, CheckCircle } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Nthabiseng Mokoena',
      location: 'Midrand, Gauteng',
      project: 'Custom Kitchen & Built-in Wardrobes',
      review: 'Crystal Faith Projects completely transformed our home. The quality of the kitchen units and the precision of the wardrobe fitting exceeded all our expectations. Clean, reliable, and true masters of their craft.',
      rating: 5,
    },
    {
      name: 'David van der Merwe',
      location: 'Pretoria East',
      project: 'Ceiling Installation & Custom Furniture',
      review: 'Tumelo and his team did an outstanding job with our suspended ceilings and custom dining table. They finished right on schedule and the finishing details are top-tier.',
      rating: 5,
    },
    {
      name: 'Lerato Sithole',
      location: 'Johannesburg South',
      project: 'Modern Bedroom Headboard & Pedestals',
      review: 'Exceptional customer service from Desere and the installation team. They listened carefully to my design requirements and created bespoke bedroom furniture that looks like it came from a luxury catalogue.',
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-neutral-50/70 border-t border-neutral-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching picture */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">
            Why Say Our Customers
          </h2>
          <p className="text-neutral-600 text-base sm:text-[17px] leading-relaxed">
            Our clients trust us for our reliability, attention to detail, and dedication to delivering projects on time and within budget. Hear from those who have experienced the quality and professionalism that sets us apart.
          </p>
        </div>

        {/* Reviews 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Star Rating Row */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-neutral-700 text-[15px] leading-relaxed italic mb-6">
                  "{rev.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">{rev.name}</h4>
                  <p className="text-xs text-neutral-500">{rev.location}</p>
                  <p className="text-[11px] font-semibold text-amber-600 mt-0.5">{rev.project}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
