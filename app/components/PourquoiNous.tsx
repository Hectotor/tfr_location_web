'use client'

import { motion } from 'framer-motion'
import { DollarSign, Wrench, Headphones, Calendar } from 'lucide-react'

export default function PourquoiNous() {
  const reasons = [
    {
      icon: DollarSign,
      title: 'Tarifs transparents',
      description: 'Pas de frais cachés, des tarifs clairs et compétitifs. Vous payez ce que vous voyez, sans mauvaises surprises.',
      delay: 0
    },
    {
      icon: Wrench,
      title: 'Véhicules entretenus',
      description: 'Notre flotte est maintenue dans nos propres ateliers par des mécaniciens certifiés pour garantir votre sécurité.',
      delay: 0.1
    },
    {
      icon: Headphones,
      title: 'Assistance réactive',
      description: 'Notre service client est disponible 7j/7 et 24h/24 pour vous assister en cas de besoin pendant votre location.',
      delay: 0.2
    },
    {
      icon: Calendar,
      title: 'Réservation simple',
      description: 'Notre plateforme intuitive vous permet de réserver votre véhicule en quelques minutes seulement.',
      delay: 0.3
    }
  ]

  return (
    <section id="services" className="py-20 relative">
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
            Pourquoi nous <span className="text-gradient" style={{background: '#095DEA', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>choisir</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Quatre raisons qui font de TFR LOCATION le choix idéal pour vos besoins en location de véhicules.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: reason.delay,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="text-center group"
            >
              <div className="glass-effect rounded-2xl p-8 h-full border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Icon */}
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{background: '#095DEA'}}
                >
                  <reason.icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 glass-effect rounded-3xl p-8 lg:p-12 border border-white/10"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Un service <span className="text-gradient">complet</span>
              </h3>
              <ul className="space-y-4">
                {[
                  'Livraison à domicile ou sur votre lieu de travail',
                  'Conducteur additionnel sans frais',
                  'Kilométrage illimité sur les locations de 7 jours et plus',
                  'Assistance routière 24h/24 et 7j/7',
                  'Véhicules de remplacement en cas de panne'
                ].map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-black rounded-full" />
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80"
                alt="Service complet"
                className="rounded-2xl w-full h-64 lg:h-80 object-cover"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-gray-300 to-gray-400 text-black p-6 rounded-2xl"
              >
                <div className="text-3xl font-bold mb-1">98%</div>
                <div className="text-sm font-medium">Taux de satisfaction</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
