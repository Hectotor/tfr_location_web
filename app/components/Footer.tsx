'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    'Services': [
      { name: 'Location citadine', href: '#fleet' },
      { name: 'Location berline', href: '#fleet' },
      { name: 'Location SUV', href: '#fleet' },
      { name: 'Location utilitaire', href: '#fleet' }
    ],
    'Entreprise': [
      { name: 'À propos', href: '#about' },
      { name: 'Notre flotte', href: '#fleet' },
      { name: 'Témoignages', href: '#testimonials' },
      { name: 'Carrières', href: '#careers' }
    ],
    'Support': [
      { name: 'Contact', href: '#contact' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Conditions générales', href: '#terms' },
      { name: 'Politique de confidentialité', href: '#privacy' }
    ]
  }

  const socialLinks = [
    { icon: 'f', href: '#', label: 'Facebook' },
    { icon: '📷', href: '#', label: 'Instagram' },
    { icon: '𝕏', href: '#', label: 'Twitter' },
    { icon: 'in', href: '#', label: 'LinkedIn' }
  ]

  return (
    <footer className="bg-black/50 backdrop-blur-lg border-t border-white/10">
      <div className="w-full py-20 px-4 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo and Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{background: '#095DEA'}}>
                <span className="text-white font-bold text-xl">TFR</span>
              </div>
              <span className="text-white font-bold text-xl">LOCATION</span>
            </div>
            
            <p className="text-white/70 leading-relaxed">
              Votre partenaire de confiance pour la location de véhicules depuis 15 ans. 
              Service premium, flotte moderne et satisfaction client garantie.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="w-5 h-5 text-gray-300" />
                <span>01 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="w-5 h-5 text-gray-300" />
                <span>contact@tfrlocation.fr</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin className="w-5 h-5 text-gray-300" />
                <span>123 Avenue des Champs-Élysées, 75008 Paris</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-gray-300 hover:text-black transition-all duration-300 font-bold"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-white font-bold text-lg mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-white/70 hover:text-gray-300 transition-colors duration-300"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2026 TFR LOCATION. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-white/60 text-sm">
              <motion.a
                href="#terms"
                whileHover={{ color: '#C0C0C0' }}
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Mentions légales
              </motion.a>
              <motion.a
                href="#privacy"
                whileHover={{ color: '#C0C0C0' }}
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Politique de confidentialité
              </motion.a>
              <motion.a
                href="#cookies"
                whileHover={{ color: '#C0C0C0' }}
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Gestion des cookies
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
