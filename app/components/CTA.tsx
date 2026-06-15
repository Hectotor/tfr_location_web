'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 relative">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-blue-500/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent" />
      
      <div className="relative z-10 w-full px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-3xl p-12 lg:p-16 text-center border border-white/10 max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            Besoin d'un véhicule
            <span className="block text-gradient" style={{background: '#095DEA', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>dès aujourd'hui ?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Réservez votre véhicule en quelques minutes et profitez de notre service premium pour tous vos déplacements.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center space-x-2 group"
              style={{background: '#095DEA'}}
            >
              <span>Réserver maintenant</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-effect text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300 border border-white/20"
            >
              Demander un devis
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/80"
          >
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-300" />
              <span className="text-lg">01 23 45 67 89</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-300" />
              <span className="text-lg">contact@tfrlocation.fr</span>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-white/60 text-sm">
                <div className="font-semibold text-white mb-1">Disponibilité 7j/7</div>
                <div>Réservation en ligne 24h/24</div>
              </div>
              <div className="text-white/60 text-sm">
                <div className="font-semibold text-white mb-1">Livraison offerte</div>
                <div>Pour les locations de 3 jours et plus</div>
              </div>
                          </div>
          </motion.div>
        </motion.div>

        {/* Additional Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass-effect rounded-2xl p-6 text-center border border-white/10"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold text-lg">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Rapide</h3>
            <p className="text-white/70 text-sm">Réservez en moins de 5 minutes</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass-effect rounded-2xl p-6 text-center border border-white/10"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold text-lg">🔒</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Sécurisé</h3>
            <p className="text-white/70 text-sm">Paiement 100% sécurisé</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass-effect rounded-2xl p-6 text-center border border-white/10"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold text-lg">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Garanti</h3>
            <p className="text-white/70 text-sm">Satisfaction client assurée</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
