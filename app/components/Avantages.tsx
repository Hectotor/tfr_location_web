'use client'

import { motion } from 'framer-motion'
import { Car, Calendar, Shield, MapPin } from 'lucide-react'

export default function Avantages() {
  const avantages = [
    {
      icon: Car,
      title: 'Véhicules récents',
      description: 'Notre flotte est composée de véhicules modernes, parfaitement entretenus et équipés des dernières technologies pour votre confort et votre sécurité.',
      delay: 0
    },
    {
      icon: Calendar,
      title: 'Réservation rapide',
      description: 'Réservez votre véhicule en quelques clics seulement. Notre processus simplifié vous permet de partir en moins de 5 minutes.',
      delay: 0.1
    },
        {
      icon: MapPin,
      title: 'Service de proximité',
      description: 'Retrouvez nos agences dans toute la France. Un service client disponible 7j/7 pour vous accompagner dans vos démarches.',
      delay: 0.3
    }
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Pourquoi nous <span className="text-gradient">choisir</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Découvrez tous les avantages qui font de TFR LOCATION votre partenaire de confiance pour la location de véhicules.
          </p>
        </motion.div>

        {/* Avantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {avantages.map((avantage, index) => (
            <motion.div
              key={avantage.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: avantage.delay,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="glass-effect rounded-2xl p-8 h-full border border-white/10 hover:border-[#F5A623]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#F5A623]/20">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: avantage.delay + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="w-16 h-16 bg-gradient-to-r from-gray-300 to-gray-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  <avantage.icon className="w-8 h-8 text-black" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {avantage.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {avantage.description}
                </p>

                {/* Hover Effect Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="h-1 bg-gradient-to-r from-gray-300 to-gray-400 mt-6 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-gray-300 to-gray-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300"
          >
            Découvrir notre flotte
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
