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
      <div className="w-full px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 1,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Pourquoi nous <span className="text-gradient" style={{background: '#095DEA', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>choisir</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Découvrez tous les avantages qui font de TFR LOCATION votre partenaire de confiance pour la location de véhicules.
          </motion.p>
        </motion.div>

        {/* Avantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {avantages.map((avantage, index) => (
            <motion.div
              key={avantage.title}
              initial={{ opacity: 0, y: 80, scale: 0.9, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 1.2, 
                delay: avantage.delay * 0.5,
                type: "spring",
                stiffness: 80,
                damping: 20
              }}
              whileHover={{ 
                scale: 1.08,
                y: -15,
                rotateX: -5,
                transition: { 
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300
                }
              }}
              className="group"
            >
              <motion.div 
                className="glass-effect rounded-2xl p-8 h-full border border-white/10 hover:border-blue-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 relative overflow-hidden"
                whileHover={{
                  boxShadow: "0 25px 50px rgba(9, 93, 234, 0.25)"
                }}
              >
                {/* Background glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: avantage.delay + 0.3,
                    duration: 1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10,
                    transition: { duration: 0.3 }
                  }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10"
                  style={{background: '#095DEA'}}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <avantage.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div className="relative z-10">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {avantage.title}
                  </motion.h3>
                  <motion.p 
                    className="text-white/70 leading-relaxed"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {avantage.description}
                  </motion.p>
                </motion.div>

                {/* Hover Effect Line */}
                <motion.div
                  initial={{ width: 0, left: "50%" }}
                  whileHover={{ width: "100%", left: "0%" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="h-1 mt-6 rounded-full relative z-10"
                  style={{background: '#095DEA'}}
                />
              </motion.div>
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
