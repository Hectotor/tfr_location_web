'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { ArrowLeft, Users, Fuel, Settings, Clock, Check } from 'lucide-react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

interface Vehicle {
  category: string
  name: string
  price: string
  image: string
  specs: {
    seats: number
    fuel: string
    transmission: string
  }
  features: string[]
}

export default function ReservationPage() {
  const [dateRange, setDateRange] = useState<any>(null)
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null)

  // Véhicule par défaut (sera passé via URL params dans une vraie app)
  const vehicle: Vehicle = {
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
  }

  const calculateDays = () => {
    if (!dateRange || !Array.isArray(dateRange)) return 0
    const [start, end] = dateRange
    if (!start || !end) return 0
    const diffTime = Math.abs(end.getTime() - start.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const calculateTotal = () => {
    const days = calculateDays()
    return days * parseInt(vehicle.price)
  }

  const generateWhatsAppMessage = () => {
    if (!dateRange || !Array.isArray(dateRange)) return ''
    
    const startDate = dateRange[0]?.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })
    const endDate = dateRange[1]?.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })
    
    const message = `Bonjour, je souhaite louer le véhicule ${vehicle.name} du ${startDate} au ${endDate}. Est-ce que ce véhicule est disponible ?`
    return encodeURIComponent(message)
  }

  const getWhatsAppUrl = () => {
    const phoneNumber = '+33602797798'
    const message = generateWhatsAppMessage()
    return `https://wa.me/${phoneNumber.replace(/\+/g, '').replace(/\s/g, '')}?text=${message}`
  }

  const isTileDisabled = ({ date }: { date: Date }) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="w-full px-4 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link href="/" className="inline-flex items-center space-x-2 text-white/60 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Retour à l'accueil</span>
            </Link>
          </motion.div>

          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Réservez votre <span className="text-gradient" style={{background: '#095DEA', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>véhicule</span>
            </h1>
            <p className="text-white/80 text-lg">
              Sélectionnez vos dates et finalisez votre réservation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Vehicle Summary */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-effect rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-white px-3 py-1 rounded-full text-sm font-bold"
                    style={{background: '#095DEA'}}>
                    {vehicle.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-3xl font-bold text-white mb-4">{vehicle.name}</h2>
                
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

                {/* Price */}
                <div className="flex items-baseline border-t border-white/10 pt-4">
                  <span className="text-4xl font-bold text-blue-400">{vehicle.price}</span>
                  <span className="text-white/60 ml-2">€/jour</span>
                </div>
              </div>
            </motion.div>

            {/* Calendar and Summary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* Calendar */}
              <div className="glass-effect rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2" style={{color: '#095DEA'}} />
                  Sélectionnez vos dates
                </h3>
                <div className="bg-white/5 rounded-xl p-4">
                  <Calendar
                    onChange={setDateRange}
                    value={dateRange}
                    selectRange
                    minDate={new Date()}
                    tileDisabled={isTileDisabled}
                    className="w-full"
                    tileClassName={({ date, view }) => {
                      if (view === 'month') {
                        if (Array.isArray(dateRange) && dateRange[0] && date.toDateString() === dateRange[0].toDateString()) {
                          return 'bg-blue-500 text-white rounded-lg'
                        }
                        if (Array.isArray(dateRange) && dateRange[1] && date.toDateString() === dateRange[1].toDateString()) {
                          return 'bg-blue-500 text-white rounded-lg'
                        }
                        if (Array.isArray(dateRange) && dateRange[0] && dateRange[1] && date > dateRange[0] && date < dateRange[1]) {
                          return 'bg-blue-500/30 rounded-lg'
                        }
                      }
                      return ''
                    }}
                  />
                </div>
              </div>

              {/* Reservation Summary */}
              {dateRange && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-effect rounded-2xl p-6 border border-white/10"
                >
                  <h3 className="text-xl font-bold text-white mb-4">Récapitulatif</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-white/80">
                      <span>Date de début</span>
                      <span className="text-white font-semibold">
                        {Array.isArray(dateRange) && dateRange[0] ? dateRange[0].toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }) : ''}
                      </span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Date de fin</span>
                      <span className="text-white font-semibold">
                        {Array.isArray(dateRange) && dateRange[1] ? dateRange[1].toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }) : ''}
                      </span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Durée</span>
                      <span className="text-white font-semibold">{calculateDays()} jour(s)</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Prix par jour</span>
                      <span className="text-white font-semibold">{vehicle.price} €</span>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-white">Total</span>
                      <span className="text-3xl font-bold text-blue-400">{calculateTotal()} €</span>
                    </div>
                  </div>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full text-white px-6 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center space-x-2"
                      style={{background: '#095DEA'}}
                    >
                      <Check className="w-5 h-5" />
                      <span>Confirmer la réservation</span>
                    </motion.button>
                  </a>
                </motion.div>
              )}

              {!dateRange && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="glass-effect rounded-2xl p-6 border border-white/10 text-center"
                >
                  <p className="text-white/60">
                    Sélectionnez vos dates dans le calendrier pour voir le récapitulatif de votre réservation
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
      
      <WhatsAppButton />
    </div>
  )
}
