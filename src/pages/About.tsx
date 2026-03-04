import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import RevealSection from '@/components/RevealSection';
import { Gem, Award, Shield } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Gem, title: t.about.craftsmanship, text: t.about.craftsmanshipText },
    { icon: Award, title: t.about.excellence, text: t.about.excellenceText },
    { icon: Shield, title: t.about.trust, text: t.about.trustText },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
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
            {t.about.title}
          </h1>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">{t.about.subtitle}</p>
        </motion.div>
      </section>

      {/* Story */}
      <RevealSection>
        <section className="luxury-section">
          <div className="luxury-container max-w-3xl text-center">
            <h2 className="font-display text-2xl md:text-3xl gold-gradient-text mb-8">
              {t.about.story}
            </h2>
            <p className="text-foreground font-body text-lg leading-relaxed">
              {t.about.storyText}
            </p>
          </div>
        </section>
      </RevealSection>

      {/* Values */}
      <RevealSection>
        <section className="luxury-section bg-card">
          <div className="luxury-container">
            <h2 className="font-display text-2xl md:text-3xl gold-gradient-text text-center mb-16">
              {t.about.values}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((val, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="text-center p-8 border border-border rounded-sm"
                >
                  <val.icon className="w-8 h-8 text-gold mx-auto mb-4" />
                  <h3 className="font-display text-lg text-foreground mb-3">{val.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{val.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>
    </Layout>
  );
};

export default About;
