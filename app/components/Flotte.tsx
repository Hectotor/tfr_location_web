'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Car, Users, Fuel, Settings, ChevronLeft, ChevronRight } from 'lucide-react'

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
            Notre <span className="text-gradient">flotte</span> de véhicules
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Des véhicules adaptés à tous vos besoins, du citadin au utilitaire en passant par les berlines premium.
          </p>
        </motion.div>

        {/* Vehicle Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevVehicle}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-gray-300/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gray-300/30 transition-all duration-300 border border-white/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextVehicle}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-gray-300/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gray-300/30 transition-all duration-300 border border-white/10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {vehicles.map((vehicle, index) => (
                <div key={vehicle.name} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ 
                      opacity: index === currentIndex ? 1 : 0.3,
                      scale: index === currentIndex ? 1 : 0.9
                    }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                    className="glass-effect rounded-2xl overflow-hidden border border-white/10 hover:border-[#F5A623]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#F5A623]/20"
                  >
                    {/* Vehicle Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm font-bold">
                          {vehicle.category}
                        </span>
                      </div>
                    </div>

                    {/* Vehicle Info */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-4">{vehicle.name}</h3>
                      
                      {/* Specs */}
                      <div className="flex items-center space-x-6 text-white/60 mb-6">
                        <div className="flex items-center space-x-2">
                          <Users className="w-5 h-5" />
                          <span>{vehicle.specs.seats} places</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Fuel className="w-5 h-5" />
                          <span>{vehicle.specs.fuel}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Settings className="w-5 h-5" />
                          <span>{vehicle.specs.transmission}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        {vehicle.features.map((feature) => (
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
                          <span className="text-4xl font-bold text-gray-300">{vehicle.price}</span>
                          <span className="text-white/60 ml-2">€/jour</span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-gray-300 to-gray-400 text-black px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
                        >
                          Réserver maintenant
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {vehicles.map((_, index) => (
              <button
                key={index}
                onClick={() => goToVehicle(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gray-300 w-8' 
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
