'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Car, Users, Fuel, Settings, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function Flotte() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const vehicles = [
    {
      category: 'Citadine',
      name: 'Peugeot 208',
      price: '39',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80',
      specs: {
        seats: 5,
        fuel: 'Essence',
        transmission: 'Manuelle'
      },
      features: ['Climatisation', 'GPS', 'Bluetooth']
    },
    {
      category: 'Berline',
      name: 'BMW Série 3',
      price: '89',
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80',
      specs: {
        seats: 5,
        fuel: 'Diesel',
        transmission: 'Automatique'
      },
      features: ['Cuir', 'Climatisation', 'GPS', 'Bluetooth']
    },
    {
      category: 'SUV',
      name: 'Volvo XC60',
      price: '119',
      image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80',
      specs: {
        seats: 7,
        fuel: 'Hybride',
        transmission: 'Automatique'
      },
      features: ['4 roues motrices', 'Climatisation', 'GPS', 'Bluetooth']
    },
    {
      category: 'Utilitaire',
      name: 'Ford Transit',
      price: '69',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80',
      specs: {
        seats: 3,
        fuel: 'Diesel',
        transmission: 'Manuelle'
      },
      features: ['Grand volume', 'GPS', 'Bluetooth']
    }
  ]

  const nextVehicle = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicles.length)
  }

  const prevVehicle = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + vehicles.length) % vehicles.length)
  }

  const goToVehicle = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="fleet" className="py-20 relative">
      <div className="w-full px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 1.2,
            type: "spring",
            stiffness: 80,
            damping: 20
          }}
          className="flex flex-col items-center justify-center gap-6 mb-16 text-center"
        >
          <motion.h2 
            className="text-white text-6xl lg:text-7xl font-bold"
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Notre flotte de <motion.span 
              className="text-gradient"
              style={{background: '#095DEA', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 200 }}
            >véhicules</motion.span>
          </motion.h2>
          <motion.p 
            className="text-white/80 text-3xl max-w-5xl"
            initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 1.2 }}
          >
            Des véhicules adaptés à tous vos besoins, du citadin au utilitaire en passant par les berlines premium.
          </motion.p>
        </motion.div>

        {/* Vehicles Carousel Centré - Vrai carrousel */}
        <div className="relative w-full">
          {/* Navigation Buttons */}
          <button
            onClick={prevVehicle}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-blue-500/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-blue-500/30 transition-all duration-300 border border-white/10 hover:scale-110"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={nextVehicle}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-blue-500/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-blue-500/30 transition-all duration-300 border border-white/10 hover:scale-110"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Three Vehicle Display - Précédent gauche, actuel centre, suivant droite */}
          <div className="flex items-center justify-center gap-4 lg:gap-8 py-4 overflow-hidden">
              {/* Véhicule précédent - Gauche, flouté */}
              {currentIndex > 0 && (
                <motion.div
                  key={vehicles[currentIndex - 1].name}
                  initial={{ opacity: 0, x: -50, scale: 0.9 }}
                  animate={{ 
                    opacity: 0.5,
                    x: 0,
                    scale: 0.9,
                    filter: "blur(4px)"
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  className="glass-effect rounded-2xl overflow-hidden border border-white/20 relative cursor-pointer flex-shrink-0 w-full lg:w-[600px]"
                  onClick={() => goToVehicle(currentIndex - 1)}
                >
                    {/* Vehicle Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={vehicles[currentIndex - 1].image}
                        alt={vehicles[currentIndex - 1].name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      <div className="absolute top-4 left-4">
                        <span className="text-white px-3 py-1 rounded-full text-sm font-bold"
                          style={{background: '#095DEA'}}>
                          {vehicles[currentIndex - 1].category}
                        </span>
                      </div>
                    </div>

                    {/* Vehicle Info */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-4">{vehicles[currentIndex - 1].name}</h3>
                      
                      {/* Specs */}
                      <div className="flex items-center space-x-6 text-white/60 mb-6">
                        <div className="flex items-center space-x-2">
                          <Users className="w-5 h-5" />
                          <span>{vehicles[currentIndex - 1].specs.seats} places</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Fuel className="w-5 h-5" />
                          <span>{vehicles[currentIndex - 1].specs.fuel}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Settings className="w-5 h-5" />
                          <span>{vehicles[currentIndex - 1].specs.transmission}</span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-blue-400">{vehicles[currentIndex - 1].price}</span>
                        <span className="text-white/60 ml-2">€/jour</span>
                      </div>
                    </div>
                </motion.div>
              )}

              {/* Véhicule actuel - Centre, net */}
              <motion.div
                key={vehicles[currentIndex].name}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ 
                  opacity: 1,
                  x: 0,
                  scale: 1
                }}
                exit={{ 
                  opacity: 0,
                  x: -100,
                  scale: 0.9
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className="glass-effect rounded-2xl overflow-hidden border border-blue-500 shadow-2xl shadow-blue-500/40 relative cursor-pointer flex-shrink-0 w-full lg:w-[600px]"
              >
                    {/* Vehicle Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={vehicles[currentIndex].image}
                        alt={vehicles[currentIndex].name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      />
                      
                      <div className="absolute top-4 left-4">
                        <span className="text-white px-3 py-1 rounded-full text-sm font-bold"
                          style={{background: '#095DEA'}}>
                          {vehicles[currentIndex].category}
                        </span>
                      </div>
                    </div>

                    {/* Vehicle Info */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-4">{vehicles[currentIndex].name}</h3>
                      
                      {/* Specs */}
                      <div className="flex items-center space-x-6 text-white/60 mb-6">
                        <div className="flex items-center space-x-2">
                          <Users className="w-5 h-5" />
                          <span>{vehicles[currentIndex].specs.seats} places</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Fuel className="w-5 h-5" />
                          <span>{vehicles[currentIndex].specs.fuel}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Settings className="w-5 h-5" />
                          <span>{vehicles[currentIndex].specs.transmission}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        {vehicles[currentIndex].features.map((feature) => (
                          <span
                            key={feature}
                            className="bg-white/10 text-white/80 text-sm px-3 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Price and CTA */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-baseline">
                          <span className="text-4xl font-bold text-blue-400">{vehicles[currentIndex].price}</span>
                          <span className="text-white/60 ml-2">€/jour</span>
                        </div>
                        <Link href="/reservation">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 w-full sm:w-auto"
                            style={{background: '#095DEA'}}
                          >
                            Réserver maintenant
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>

              {/* Véhicule suivant - Droite, flouté */}
              {currentIndex < vehicles.length - 1 && (
                <motion.div
                  key={vehicles[currentIndex + 1].name}
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ 
                    opacity: 0.5,
                    x: 0,
                    scale: 0.9,
                    filter: "blur(4px)"
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  className="glass-effect rounded-2xl overflow-hidden border border-white/20 relative cursor-pointer flex-shrink-0 w-full lg:w-[600px]"
                  onClick={() => goToVehicle(currentIndex + 1)}
                >
                    {/* Vehicle Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={vehicles[currentIndex + 1].image}
                        alt={vehicles[currentIndex + 1].name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      <div className="absolute top-4 left-4">
                        <span className="text-white px-3 py-1 rounded-full text-sm font-bold"
                          style={{background: '#095DEA'}}>
                          {vehicles[currentIndex + 1].category}
                        </span>
                      </div>
                    </div>

                    {/* Vehicle Info */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-4">{vehicles[currentIndex + 1].name}</h3>
                      
                      {/* Specs */}
                      <div className="flex items-center space-x-6 text-white/60 mb-6">
                        <div className="flex items-center space-x-2">
                          <Users className="w-5 h-5" />
                          <span>{vehicles[currentIndex + 1].specs.seats} places</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Fuel className="w-5 h-5" />
                          <span>{vehicles[currentIndex + 1].specs.fuel}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Settings className="w-5 h-5" />
                          <span>{vehicles[currentIndex + 1].specs.transmission}</span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-blue-400">{vehicles[currentIndex + 1].price}</span>
                        <span className="text-white/60 ml-2">€/jour</span>
                      </div>
                    </div>
                </motion.div>
              )}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {vehicles.map((_, index) => (
              <button
                key={index}
                onClick={() => goToVehicle(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-white/80 mb-6 text-lg">
            Vous ne trouvez pas ce que vous cherchez ? Contactez-nous pour une offre personnalisée.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-effect text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300 border border-white/20"
          >
            Demander un devis
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
