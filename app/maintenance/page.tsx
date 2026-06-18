'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Clock, Wrench } from 'lucide-react'

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center space-y-8"
      >
        {/* Icône d'engrenage animée */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 mx-auto"
        >
          <Wrench className="w-full h-full text-blue-500" />
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold"
        >
          <span className="text-gradient">Maintenance</span>
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-white/80 leading-relaxed"
        >
          Notre site est actuellement en maintenance pour améliorer nos services.
          <br />
          Nous serons de retour très rapidement !
        </motion.p>

        {/* Informations de contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-400">Besoin d'aide ?</h2>
          
          <div className="space-y-4 text-left">
            <div className="flex items-center space-x-4">
              <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <div>
                <div className="font-semibold">06 02 79 77 98</div>
                <div className="text-white/60 text-sm">Disponible 7j/7</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <div>
                <div className="font-semibold">rennes@tfrlocation.fr</div>
                <div className="text-white/60 text-sm">Réponse sous 2h</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <div>
                <div className="font-semibold">Heures d'ouverture</div>
                <div className="text-white/60 text-sm">Lun-Dim: 8h-20h</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bouton WhatsApp */}
        <motion.a
          href="https://wa.me/33602797798?text=Bonjour%2C%20je%20souhaite%20louer%20un%20véhicule."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          style={{ background: '#095DEA' }}
        >
          <span>Contacter via WhatsApp</span>
        </motion.a>

        {/* Message de fin */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-white/60 text-sm"
        >
          Merci de votre patience et à très bientôt !
        </motion.p>
      </motion.div>
    </div>
  )
}
