'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Localisation() {
  return (
    <section id="localisation" className="py-20 relative">
      <div className="w-full px-4 lg:px-8">
        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-64 mb-16 rounded-2xl overflow-hidden"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-70"
          >
            <source src="/video_car.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Nous trouver à <span className="text-gradient" style={{background: '#095DEA', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Rennes</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            TFR LOCATION est fièrement implantée au cœur de Rennes, prête à vous servir pour tous vos besoins de location.
          </p>
        </motion.div>

        {/* Horizontal Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="glass-effect rounded-2xl overflow-hidden border border-white/10">
            {/* Google Maps Horizontal */}
            <div className="relative h-64 lg:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.123456789!2d-1.702!3d48.115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480fee9c7e2e2e2e2%3A0x123456789abcdef!2sRennes!5e0!3m2!1sen!2sfr!4v1234567890"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - TFR LOCATION Rennes"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />
            </div>
            
            {/* Map Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute top-4 left-4 text-white px-4 py-2 rounded-lg font-bold"
              style={{background: '#095DEA'}}
            >
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Rennes Centre</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Location Info Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* Main Address */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Notre agence</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-gray-300 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">TFR LOCATION Rennes</div>
                  <div className="text-white/80">2 Avenue Charles Tillon</div>
                  <div className="text-white/80">35000 Rennes</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-gray-300 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">06 02 79 77 98</div>
                  <div className="text-white/60 text-sm">Disponible 7j/7</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-gray-300 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">rennes@tfrlocation.fr</div>
                  <div className="text-white/60 text-sm">Réponse sous 2h</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Horaires d'ouverture</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/80">Lundi - Vendredi</span>
                <span className="text-gray-300 font-semibold">8h - 19h</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">Samedi</span>
                <span className="text-gray-300 font-semibold">9h - 18h</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">Dimanche</span>
                <span className="text-gray-300 font-semibold">10h - 17h</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-300/10 rounded-lg border border-gray-300/20">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-gray-300" />
                <span className="text-white text-sm font-medium">
                  Service d'urgence disponible 24h/24
                </span>
              </div>
            </div>
          </motion.div>

          {/* Proximity Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Proximité</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold">5</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Centre-ville</div>
                  <div className="text-white/60 text-sm">à pied</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold">2</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Métro Charles de Gaulle</div>
                  <div className="text-white/60 text-sm">à pied</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold">10</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Gare SNCF Rennes</div>
                  <div className="text-white/60 text-sm">en transport</div>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-gray-300 to-gray-400 text-black px-6 py-3 rounded-lg font-bold hover:shadow-xl transition-all duration-300 mt-6"
            >
              Obtenir l'itinéraire
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
