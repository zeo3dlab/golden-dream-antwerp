import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card">
      <div className="luxury-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl gold-gradient-text mb-4">Golden Dream</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">
              Jewellery
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex flex-col gap-3">
              <Link to="/wedding-rings" className="text-sm text-muted-foreground hover:text-gold transition-colors font-body">
                {t.nav.weddingRings}
              </Link>
              <Link to="/engagement-rings" className="text-sm text-muted-foreground hover:text-gold transition-colors font-body">
                {t.nav.engagementRings}
              </Link>
              <Link to="/diamond-jewelry" className="text-sm text-muted-foreground hover:text-gold transition-colors font-body">
                {t.nav.diamondJewelry}
              </Link>
              <Link to="/custom-design" className="text-sm text-muted-foreground hover:text-gold transition-colors font-body">
                {t.nav.customDesign}
              </Link>
              <Link to="/cash-for-gold" className="text-sm text-muted-foreground hover:text-gold transition-colors font-body">
                {t.nav.cashForGold}
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <a href="tel:+3232930568" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors font-body">
              <Phone className="w-4 h-4" /> +32 3 293 05 68
            </a>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
              <MapPin className="w-4 h-4 shrink-0" /> {t.contact.address}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
              <Clock className="w-4 h-4" /> {t.contact.businessHours}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-body">{t.footer.rights}</p>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground font-body">{t.footer.privacy}</span>
            <span className="text-xs text-muted-foreground font-body">{t.footer.terms}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
