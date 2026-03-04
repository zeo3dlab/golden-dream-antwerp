import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import RevealSection from '@/components/RevealSection';
import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future: integrate with backend
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at center top, hsl(43 76% 53% / 0.08) 0%, transparent 50%)',
        }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-6"
        >
          <h1 className="font-display text-4xl md:text-6xl gold-gradient-text mb-4">
            {t.contact.title}
          </h1>
          <p className="text-muted-foreground font-body">{t.contact.subtitle}</p>
        </motion.div>
      </section>

      <section className="luxury-section">
        <div className="luxury-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form */}
            <RevealSection>
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { key: 'name', type: 'text' },
                  { key: 'email', type: 'email' },
                  { key: 'phone', type: 'tel' },
                ].map(({ key, type }) => (
                  <div key={key}>
                    <label className="text-xs uppercase tracking-widest text-gold mb-2 block font-body">
                      {t.contact[key as keyof typeof t.contact]}
                    </label>
                    <input
                      type={type}
                      value={formData[key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                      className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground font-body transition-colors"
                      required={key !== 'phone'}
                    />
                  </div>
                ))}
                <div>
                  <label className="text-xs uppercase tracking-widest text-gold mb-2 block font-body">
                    {t.contact.message}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground font-body transition-colors resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 border border-gold/40 text-gold text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-primary-foreground transition-all duration-500 font-body"
                >
                  {t.contact.send}
                </button>
              </form>
            </RevealSection>

            {/* Contact Info */}
            <RevealSection delay={0.2}>
              <div className="space-y-8">
                <a
                  href="tel:+3232930568"
                  className="flex items-center gap-4 p-6 bg-card border border-border hover:border-gold/40 rounded-sm transition-all group"
                >
                  <Phone className="w-5 h-5 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gold mb-1 font-body">{t.contact.callUs}</p>
                    <p className="text-foreground font-body">+32 3 293 05 68</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/3232930568"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-card border border-border hover:border-gold/40 rounded-sm transition-all group"
                >
                  <MessageCircle className="w-5 h-5 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gold mb-1 font-body">{t.contact.whatsapp}</p>
                    <p className="text-foreground font-body">WhatsApp</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-6 bg-card border border-border rounded-sm">
                  <Clock className="w-5 h-5 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gold mb-1 font-body">{t.contact.businessHours}</p>
                    <p className="text-foreground font-body">{t.contact.businessHours}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-card border border-border rounded-sm">
                  <MapPin className="w-5 h-5 text-gold shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gold mb-1 font-body">Address</p>
                    <p className="text-foreground font-body">{t.contact.address}</p>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>

          {/* Map */}
          <RevealSection className="mt-16">
            <div className="rounded-sm overflow-hidden gold-glow aspect-video max-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4998.152478423917!2d4.4203336033471885!3d51.21767119599268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f70170b2202b%3A0x68796e5c13f210df!2sGolden%20Dream%20Jewellery!5e0!3m2!1sen!2sbe!4v1772609623797!5m2!1sen!2sbe"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Golden Dream Jewellery"
              />
            </div>
          </RevealSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
