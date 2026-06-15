'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Temoignages() {
  const testimonials = [
    {
      content: 'Service impeccable ! Le véhicule était propre, récent et le processus de location a été incroyablement simple. Je recommande vivement TFR LOCATION.',
      rating: 5
    },
    {
      content: 'Une fiabilité sans faille. Je loue régulièrement pour mes déplacements professionnels et TFR LOCATION ne m\'a jamais déçu. Service client au top !',
      rating: 5
    },
    {
      content: 'Tarifs transparents et véhicules de qualité. J\'apprécie particulièrement la flexibilité des annulations et la rapidité du service.',
      rating: 5
    },
    {
      content: 'Partenaire de confiance depuis 3 ans. La qualité des véhicules et le professionnalisme de l\'équipe font toute la différence.',
      rating: 5
    },
    {
      content: 'Excellente expérience du début à la fin. Le SUV que j\'ai loué était parfait pour mon voyage en famille. Je reviendrai sans hésiter.',
      rating: 5
    },
    {
      content: 'L\'utilitaire que j\'ai loué était exactement ce dont j\'avais besoin. Service rapide et efficace. Parfait pour les professionnels.',
      rating: 5
    }
  ]

  // Dupliquer les témoignages pour créer un effet infini
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="w-full px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ce que nos clients <span className="text-gradient" style={{background: '#095DEA', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>disent</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Découvrez les témoignages de clients satisfaits qui nous font confiance pour leurs déplacements.
          </p>
        </motion.div>

        {/* Testimonials Continuous Scroll */}
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex space-x-6"
            animate={{ x: [0, -duplicatedTestimonials.length * 336] }}
            transition={{ 
              duration: 120, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`testimonial-${index}`}
                className="flex-shrink-0 w-80"
              >
                <div className="glass-effect rounded-2xl p-6 h-full border border-white/10 hover:border-gray-300/30 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-300/20">
                  {/* Quote Icon */}
                  <Quote className="w-6 h-6 text-gray-300 mb-3" />
                  
                  {/* Rating */}
                  <div className="flex space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gray-300 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-white/80 leading-relaxed italic text-sm">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 glass-effect rounded-3xl p-8 lg:p-12 border border-white/10"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-300 mb-2">4.9/5</div>
              <div className="text-white/60">Note moyenne</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-300 mb-2">2500+</div>
              <div className="text-white/60">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-300 mb-2">98%</div>
              <div className="text-white/60">Recommandation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-300 mb-2">15</div>
              <div className="text-white/60">Ans d'expérience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
