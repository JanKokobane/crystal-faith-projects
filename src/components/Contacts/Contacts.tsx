import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, Clock, MapPin, Sparkles } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Ceiling Installation',
    'Door Installation',
    'Kitchen Units & Wardrobe Fitting',
    'Painting Services',
    'Custom Furniture',
    'General Consultation',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      access_key: 'b6c38c43-69b4-448c-98b4-68a2b3e2af66',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      subject: 'New Contact Form Submission - Crystal Faith Projects',
      from_name: 'Crystal Faith Projects Website',
    };

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.success) {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } else {
      console.error('Submission failed:', result);
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-neutral-600 text-base leading-relaxed">
            Contact us today for a free on-site consultation, custom estimate, or design inquiry across South Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Form Card */}
          <div className="lg:col-span-7 bg-neutral-50 rounded-3xl p-8 sm:p-10 border border-neutral-100 shadow-xs">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Sipho Ndlovu"
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. sipho@example.com"
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+27 66 053 9993"
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    required
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                  Project Details & Dimensions *
                </label>
                <textarea
                  required
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your project, including preferred materials, dimensions, timeline, and location..."
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 cursor-pointer ${
                  isSubmitted
                    ? 'bg-emerald-600 text-white'
                    : 'bg-neutral-900 hover:bg-neutral-800 text-white'
                }`}
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Message Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-amber-400" />
                    <span>Send Project Request</span>
                  </>
                )}
              </button>

              {isSubmitted && (
                <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-medium text-center border border-emerald-200">
                  Thank you for contacting us! Tumelo, Neo, or Desere from our team will get in touch shortly.
                </div>
              )}
            </form>
          </div>

          {/* Right Information & Map Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="bg-neutral-900 text-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span>Contact Details</span>
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-neutral-800 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase font-semibold">Service Area</p>
                    <p className="font-semibold text-white">South Africa Wide</p>
                    <p className="text-xs text-neutral-400">Gauteng, Pretoria, Johannesburg & surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-neutral-800 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase font-semibold">Phone & WhatsApp</p>
                    <a href="tel:+27660539993" className="font-semibold text-white hover:text-amber-400 transition">
                      +27 66 053 9993
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-neutral-800 text-amber-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase font-semibold">Email Address</p>
                    <a href="mailto:crystalfaithprojects@gmail.com" className="font-semibold text-white hover:text-amber-400 transition">
                      crystalfaithprojects@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-neutral-800 text-amber-400 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase font-semibold">Working Hours</p>
                    <p className="text-neutral-200">Mon - Fri: 8:00 AM – 6:00 PM</p>
                    <p className="text-neutral-200">Saturday: 9:00 AM – 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden shadow-md border border-neutral-200 h-52 bg-neutral-100">
              <iframe
                title="Crystal Faith Projects Service Area"
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.038285131089!2d28.047315!3d-26.204103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1717096613140!5m2!1sen!2sus"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
