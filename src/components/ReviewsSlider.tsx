import { useState, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import RevealSection from './RevealSection';

const ReviewsSlider = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const reviews = [t.reviews.r1, t.reviews.r2, t.reviews.r3, t.reviews.r4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <RevealSection>
      <section className="luxury-section bg-card">
        <div className="luxury-container text-center">
          <h2 className="font-display text-3xl md:text-4xl gold-gradient-text mb-3">
            {t.sections.reviews}
          </h2>
          <p className="text-muted-foreground font-body mb-16 text-sm">{t.sections.reviewsSubtitle}</p>

          <div className="relative max-w-2xl mx-auto">
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>

            <p className="text-lg md:text-xl font-body text-foreground leading-relaxed italic mb-8 min-h-[80px]">
              "{reviews[current].text}"
            </p>

            <p className="text-sm text-gold tracking-widest uppercase font-body">
              — {reviews[current].name}
            </p>

            <div className="flex justify-center gap-4 mt-10">
              <button
                onClick={() => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length)}
                className="p-2 border border-border rounded-full hover:border-gold transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === current ? 'bg-gold w-6' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % reviews.length)}
                className="p-2 border border-border rounded-full hover:border-gold transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </RevealSection>
  );
};

export default ReviewsSlider;
