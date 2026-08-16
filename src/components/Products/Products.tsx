import React, { useState, useEffect } from 'react';
import { Star, MessageSquare } from 'lucide-react';
import Image1 from '../../assets/CustomCupboards.jpg';
import Image2 from '../../assets/ShoeRacks.jpg';
import Image3 from '../../assets/kitckenunit.jpg';
import Image4 from '../../assets/tvstand.jpg';
import Image5 from '../../assets/mordenBedsidePedestals.jpg';
import Image6 from '../../assets/modernHeadboards.jpg';
import Image7 from '../../assets/smallmodernWineRacks.jpg';
import Image8 from '../../assets/modernWardrobes.jpg';

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  featured: boolean;
}

const Products: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: 'Custom Cupboards',
      description: 'Handcrafted storage solutions tailored to your space and style preferences.',
      category: 'Storage',
      image: Image1,
      featured: true,
    },
    {
      id: 2,
      name: 'Shoe Racks',
      description: 'Organized shoe storage systems that keep your entryway neat and stylish.',
      category: 'Storage',
      image: Image2,
      featured: false,
    },
    {
      id: 3,
      name: 'Fitted Kitchen Units',
      description: 'Custom kitchen cabinetry and units crafted with precision and premium finishes.',
      category: 'Furniture',
      image: Image3,
      featured: true,
    },
    {
      id: 4,
      name: 'TV Stands & Units',
      description: 'Modern entertainment centers with integrated cable management and storage.',
      category: 'Furniture',
      image: Image4,
      featured: false,
    },
    {
      id: 5,
      name: 'Bedside Pedestals',
      description: 'Stylish nightstands with smooth drawers and compartments for bedroom essentials.',
      category: 'Bedroom',
      image: Image5,
      featured: false,
    },
    {
      id: 6,
      name: 'Luxury Headboards',
      description: 'Custom upholstered & wooden headboards that transform your bedroom.',
      category: 'Bedroom',
      image: Image6,
      featured: true,
    },
    {
      id: 7,
      name: 'Modern Wine Racks',
      description: 'Elegant wine storage solutions designed for connoisseurs and collectors.',
      category: 'Storage',
      image: Image7,
      featured: false,
    },
    {
      id: 8,
      name: 'Built-in Wardrobes',
      description: 'Spacious wardrobes with customizable compartments, racks, and mirrors.',
      category: 'Storage',
      image: Image8,
      featured: true,
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);

  const categories = ['All', 'Storage', 'Furniture', 'Bedroom'];

  useEffect(() => {
    const filtered = selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);
    setVisibleProducts(filtered);
  }, [selectedCategory, products]);

  const handleWhatsAppInquiry = (productName: string) => {
    const text = encodeURIComponent(`Hi Crystal Faith Projects! I am interested in inquiring about your "${productName}". Please send me more details and a quote.`);
    window.open(`https://wa.me/27660539993?text=${text}`, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-3">
              Our Handcrafted Products
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed">
              From custom cupboards to elegant dining tables, we create furniture that combines functionality with timeless South African craftsmanship.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                id={`cat-filter-${category.toLowerCase()}`}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="bg-neutral-50/50 rounded-2xl p-4 border border-neutral-100 shadow-2xs hover:shadow-md hover:border-neutral-200 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Frame with Aspect Ratio */}
                <div className="relative rounded-xl overflow-hidden aspect-4/3 bg-neutral-200 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {product.featured && (
                    <div className="absolute top-2.5 right-2.5 bg-amber-400 text-neutral-950 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md flex items-center gap-1 shadow-xs">
                      <Star className="w-3 h-3 fill-neutral-950" />
                      Featured
                    </div>
                  )}
                  <div className="absolute bottom-2.5 left-2.5 bg-white/90 backdrop-blur-xs text-neutral-800 text-[10px] font-bold px-2 py-0.5 rounded-md">
                    {product.category}
                  </div>
                </div>

                {/* Details */}
                <h3 className="text-base font-bold text-neutral-900 mb-1 group-hover:text-amber-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2 mb-4">
                  {product.description}
                </p>
              </div>

              {/* Inquiry Action */}
              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleWhatsAppInquiry(product.name)}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-white hover:bg-neutral-900 hover:text-white text-neutral-900 text-xs font-semibold py-2 px-3 rounded-lg border border-neutral-200 transition-colors shadow-2xs cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600 group-hover:text-emerald-400" />
                  <span>Inquire Price</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
