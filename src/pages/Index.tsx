import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import HeroRing3D from '@/components/HeroRing3D';
import CollectionsGrid from '@/components/CollectionsGrid';
import ReviewsSlider from '@/components/ReviewsSlider';
import GoogleMapSection from '@/components/GoogleMapSection';
import { Link } from 'react-router-dom';

const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(43 76% 53% / 0.06) 0%, transparent 60%)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center z-10"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-body">
            Golden Dream Jewellery — Antwerpen
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl gold-gradient-text leading-tight max-w-4xl mx-auto px-6">
            {t.hero.tagline}
          </h1>
          <p className="mt-6 text-sm md:text-base text-muted-foreground font-body max-w-xl mx-auto px-6">
            {t.hero.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <HeroRing3D />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link
            to="/wedding-rings"
            className="inline-block px-8 py-3 border border-gold/40 text-gold text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-primary-foreground transition-all duration-500 font-body"
          >
            {t.hero.cta}
          </Link>
        </motion.div>
      </section>

      <CollectionsGrid />
      <ReviewsSlider />
      <GoogleMapSection />
    </Layout>
  );
};

export default Index;
