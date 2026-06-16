'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'
import { useRef, useEffect } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])
  
  // Animation premium pour le début du scroll
  const videoScale = useTransform(scrollY, [0, 100], [1.1, 1])
  const videoOpacity = useTransform(scrollY, [0, 100], [0.6, 0.8])

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.muted = true
      video.play().catch(() => {})
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video avec animation premium */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          scale: videoScale,
          opacity: videoOpacity
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/video_car_2.mp4" type="video/mp4" />
        </video>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
      </motion.div>

      {/* Content avec animations premium */}
      <motion.div 
        className="relative z-20 w-full px-4 lg:px-8 pt-32 pb-20 text-center"
        style={{ y, opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="space-y-6">
            {/* Titre principal avec animation stagger */}
            <motion.h1
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1.2,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="text-5xl lg:text-7xl font-bold text-white leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Louez votre
              </motion.span>
              <motion.span 
                className="block text-gradient"
                style={{background: '#095DEA', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 0.6,
                  duration: 1,
                  type: "spring",
                  stiffness: 200
                }}
              >
                véhicule
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                en quelques minutes
              </motion.span>
            </motion.h1>

            {/* Description avec animation premium */}
            <motion.p
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ 
                delay: 1,
                duration: 1.5,
                type: "spring",
                stiffness: 100
              }}
              className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto"
            >
              TFR LOCATION vous propose des véhicules récents, entretenus et disponibles rapidement pour tous vos besoins personnels ou professionnels.
            </motion.p>
          </div>

          {/* Boutons avec animations premium */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1.2,
              duration: 1,
              type: "spring",
              stiffness: 120
            }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(9, 93, 234, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center space-x-2 group max-w-xs sm:max-w-none"
              style={{background: '#095DEA'}}
            >
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Réserver un véhicule
              </motion.span>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.15)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="glass-effect text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 max-w-xs sm:max-w-none border border-white/20"
            >
              Nous contacter
            </motion.button>
          </motion.div>

        </motion.div>
      </motion.div>

      {/* Scroll Indicator avec animation premium */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 2,
          duration: 1,
          type: "spring",
          stiffness: 100
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-3 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
