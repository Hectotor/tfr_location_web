'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-black/30 z-[9999]">
      <motion.div
        className="h-full origin-left"
        style={{ 
          scaleX,
          background: '#095DEA'
        }}
      />
    </div>
  )
}
