import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields.',
      });
      return;
    }

    setFormStatus({
      type: 'success',
      message: 'Thank you for your message! We will get back to you soon.',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    setTimeout(() => {
      setFormStatus({ type: '', message: '' });
    }, 5000);
  };

  return (
    <div className="bg-dark min-h-screen">
      {/* Page Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80" 
            alt="Contact Us"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 container-custom">
          <span className="text-xs font-bold tracking-[0.5em] text-primary-500 mb-6 block uppercase">Get In Touch</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight">Contact Us</h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-neutral-300 tracking-wide">
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Contact Information (Left Side) */}
            <div className="lg:col-span-5 space-y-12">
              {/* Info Card */}
              <div className="bg-neutral-900/50 p-10 rounded-2xl border border-neutral-800/50 backdrop-blur-sm">
                <h2 className="text-3xl font-serif font-bold mb-10 text-white">Contact Details</h2>
                <div className="space-y-10">
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 mr-6">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">Visit Us</h3>
                      <p className="text-neutral-300 leading-relaxed font-light">
                        26 Pirrama Road<br />
                        120-122 Jones Bay Wharf<br />
                        Pyrmont, Sydney, NSW
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 mr-6">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">Call Us</h3>
                      <p className="text-neutral-300 font-light">
                        <a href="tel:0292117706" className="hover:text-primary-500 transition-colors">
                          (02) 9211 7706
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 mr-6">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">Email Us</h3>
                      <p className="text-neutral-300 font-light">
                        <a href="mailto:Rumilicious@gmail.com" className="hover:text-primary-500 transition-colors">
                          Rumilicious@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-neutral-900/50 p-10 rounded-2xl border border-neutral-800/50 backdrop-blur-sm">
                <h3 className="text-2xl font-serif font-bold mb-8 text-white">Opening Hours</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center border-b border-neutral-800 pb-3">
                    <span className="font-medium text-neutral-400">Monday</span>
                    <span className="text-primary-500 font-bold uppercase tracking-widest text-xs">Closed</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-neutral-800 pb-3">
                    <span className="font-medium text-neutral-400">Tue - Wed</span>
                    <span className="text-white">07:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-neutral-800 pb-3">
                    <span className="font-medium text-neutral-400">Thu - Sat</span>
                    <span className="text-white">07:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="font-medium text-neutral-400">Sunday</span>
                    <span className="text-white">08:00 - 17:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (Right Side) */}
            <div className="lg:col-span-7">
              <div className="bg-neutral-900/50 p-10 rounded-2xl border border-neutral-800/50 backdrop-blur-sm h-full">
                <h2 className="text-3xl font-serif font-bold mb-4 text-white">Send a Message</h2>
                <p className="text-neutral-400 mb-10 font-light tracking-wide">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                
                {formStatus.message && (
                  <div className={`p-4 rounded-xl mb-8 text-sm font-medium ${formStatus.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                    {formStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-primary-500 mb-3 uppercase tracking-[0.2em]">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-b border-neutral-800 focus:border-primary-500 transition-colors text-white focus:outline-none font-light"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-primary-500 mb-3 uppercase tracking-[0.2em]">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-b border-neutral-800 focus:border-primary-500 transition-colors text-white focus:outline-none font-light"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-primary-500 mb-3 uppercase tracking-[0.2em]">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-b border-neutral-800 focus:border-primary-500 transition-colors text-white focus:outline-none font-light"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-bold text-primary-500 mb-3 uppercase tracking-[0.2em]">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-b border-neutral-800 focus:border-primary-500 transition-colors text-white focus:outline-none font-light"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-primary-500 mb-3 uppercase tracking-[0.2em]">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-0 py-3 bg-transparent border-b border-neutral-800 focus:border-primary-500 transition-colors text-white focus:outline-none font-light resize-none"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-primary-500 text-white font-bold py-5 rounded-full hover:bg-primary-600 transition-all duration-300 uppercase tracking-[0.3em] text-xs shadow-xl shadow-primary-500/20 transform hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section (Full Width Bottom) */}
          <div className="mt-32">
            <div className="bg-neutral-900 p-4 rounded-3xl border border-neutral-800/50 h-[500px] overflow-hidden shadow-2xl">
              <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1.5rem', filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
                loading="lazy" 
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Rumilicious%20Pyrmont&t=&z=15&ie=UTF8&iwloc=&output=embed"
                title="Rumilicious Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
