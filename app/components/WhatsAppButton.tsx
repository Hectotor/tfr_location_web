'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phoneNumber = '+33602797798'
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '').replace(/\s/g, '')}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300"
      style={{ background: '#25D366' }}
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  )
}
