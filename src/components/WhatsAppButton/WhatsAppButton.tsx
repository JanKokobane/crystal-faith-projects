import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 6000);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleWhatsAppClick = () => {
    setShowForm((prev) => !prev);
    setShowTooltip(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = '27660539993';
    const message = encodeURIComponent(
      `Hi Crystal Faith Projects 👋\n\nName: ${name}\nEmail: ${email}\nMessage: ${userMessage}`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');

    setName('');
    setEmail('');
    setUserMessage('');
    setShowForm(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Tooltip speech bubble */}
      {showTooltip && !showForm && (
        <div className="mb-3 max-w-[280px] sm:max-w-xs bg-white text-neutral-800 p-3.5 sm:p-4 rounded-2xl shadow-xl border border-neutral-100 relative animate-bounce">
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Close tooltip"
            className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-700 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="text-xs font-bold text-neutral-900 mb-1">Need a Quick Quote?</p>
          <p className="text-[11px] sm:text-xs text-neutral-600">
            Chat directly with our master craftspeople on WhatsApp for instant assistance!
          </p>
        </div>
      )}

      {/* WhatsApp Chat Form Modal / Popover */}
      {showForm && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-sm bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-neutral-100">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900 leading-tight">Crystal Faith Projects</h4>
                <span className="text-[11px] font-medium text-emerald-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Usually replies in minutes
                </span>
              </div>
            </div>
            <button
              onClick={() => setShowForm(false)}
              className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />
            <textarea
              rows={3}
              placeholder="Tell us what you'd like made or installed..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              required
              className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Start WhatsApp Chat</span>
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={handleWhatsAppClick}
        aria-label="Open WhatsApp Chat"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 relative cursor-pointer group"
      >
        <img
          src="https://img.icons8.com/color/48/whatsapp--v1.png"
          alt="WhatsApp logo"
          className="w-7 h-7"
        />
        <span className="sr-only">Chat on WhatsApp</span>
      </button>
    </div>
  );
};

export default WhatsAppButton;
