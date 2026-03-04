import { useLanguage } from '@/i18n/LanguageContext';
import RevealSection from './RevealSection';

const GoogleMapSection = () => {
  const { t } = useLanguage();

  return (
    <RevealSection>
      <section className="luxury-section">
        <div className="luxury-container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl gold-gradient-text mb-3">
              {t.sections.visitUs}
            </h2>
            <p className="text-muted-foreground font-body text-sm">{t.sections.visitUsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <p className="text-gold text-xs uppercase tracking-widest mb-2 font-body">{t.sections.hours}</p>
                <p className="text-foreground font-body">{t.sections.hoursDetail}</p>
              </div>
              <div>
                <p className="text-gold text-xs uppercase tracking-widest mb-2 font-body">Address</p>
                <p className="text-foreground font-body">Koningin Astridplein 31</p>
                <p className="text-foreground font-body">2018 Antwerpen, Belgium</p>
              </div>
              <div>
                <p className="text-gold text-xs uppercase tracking-widest mb-2 font-body">Phone</p>
                <a href="tel:+3232930568" className="text-foreground hover:text-gold transition-colors font-body">
                  +32 3 293 05 68
                </a>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden gold-glow aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4998.152478423917!2d4.4203336033471885!3d51.21767119599268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f70170b2202b%3A0x68796e5c13f210df!2sGolden%20Dream%20Jewellery!5e0!3m2!1sen!2sbe!4v1772609623797!5m2!1sen!2sbe"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Golden Dream Jewellery Location"
              />
            </div>
          </div>
        </div>
      </section>
    </RevealSection>
  );
};

export default GoogleMapSection;
