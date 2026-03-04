import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import RevealSection from './RevealSection';

const collections = [
  { key: 'weddingRings', path: '/wedding-rings', emoji: '💍' },
  { key: 'engagementRings', path: '/engagement-rings', emoji: '💎' },
  { key: 'diamondJewelry', path: '/diamond-jewelry', emoji: '✨' },
  { key: 'customDesign', path: '/custom-design', emoji: '🎨' },
  { key: 'cashForGold', path: '/cash-for-gold', emoji: '🪙' },
] as const;

const CollectionsGrid = () => {
  const { t } = useLanguage();

  return (
    <RevealSection>
      <section className="luxury-section">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl gold-gradient-text mb-3">
              {t.sections.collections}
            </h2>
            <p className="text-muted-foreground font-body text-sm">{t.sections.collectionsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {collections.map((col, i) => (
              <motion.div
                key={col.key}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to={col.path}
                  className="block p-8 md:p-10 bg-card border border-border hover:border-gold/40 rounded-sm transition-all duration-500 group"
                >
                  <span className="text-3xl mb-4 block">{col.emoji}</span>
                  <h3 className="font-display text-lg text-foreground group-hover:text-gold transition-colors mb-2">
                    {t.nav[col.key]}
                  </h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-body">
                    {t.pages.exploreCollection} →
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </RevealSection>
  );
};

export default CollectionsGrid;
