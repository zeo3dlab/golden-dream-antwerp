import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import RevealSection from '@/components/RevealSection';

interface CategoryPageProps {
  titleKey: 'wedding' | 'engagement' | 'diamond' | 'custom' | 'cashForGold';
  galleryImages?: string[];
  children?: ReactNode;
}

const CategoryPage = ({ titleKey }: CategoryPageProps) => {
  const { t } = useLanguage();
  const data = t[titleKey];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center top, hsl(43 76% 53% / 0.08) 0%, transparent 50%)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center z-10 px-6"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-body">
            Golden Dream Jewellery
          </p>
          <h1 className="font-display text-4xl md:text-6xl gold-gradient-text mb-4">
            {data.title}
          </h1>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            {data.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Description */}
      <RevealSection>
        <section className="luxury-section">
          <div className="luxury-container max-w-3xl text-center">
            <p className="text-foreground font-body text-lg leading-relaxed">
              {data.description}
            </p>
            {'bestPrice' in data && (
              <div className="mt-8 inline-block px-6 py-3 border border-gold/40 text-gold text-sm font-body uppercase tracking-widest">
                {(data as any).bestPrice}
              </div>
            )}
          </div>
        </section>
      </RevealSection>

      {/* Gallery Grid Placeholder */}
      <RevealSection>
        <section className="luxury-section bg-card">
          <div className="luxury-container">
            <h2 className="font-display text-2xl md:text-3xl gold-gradient-text text-center mb-12">
              {t.pages.gallery}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="aspect-square bg-muted/30 rounded-sm border border-border flex items-center justify-center"
                >
                  <span className="text-3xl opacity-30">
                    {['💍', '💎', '✨', '🪙', '👑', '🌟'][i]}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* CTA */}
      <RevealSection>
        <section className="luxury-section">
          <div className="luxury-container text-center">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              {t.pages.contactCta}
            </h2>
            <p className="text-muted-foreground font-body mb-8 max-w-md mx-auto">
              {t.pages.contactCtaText}
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 border border-gold/40 text-gold text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-primary-foreground transition-all duration-500 font-body"
            >
              {t.pages.bookAppointment}
            </Link>
          </div>
        </section>
      </RevealSection>
    </Layout>
  );
};

export default CategoryPage;
