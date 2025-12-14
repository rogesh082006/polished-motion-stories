'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Volume2, VolumeX, Menu, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { MagneticButton } from './MagneticButton'

export function Hero() {
  const [isMuted, setIsMuted] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const videoScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.7])
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Video setup
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0
      videoRef.current.muted = true
      videoRef.current.defaultMuted = true
      
      videoRef.current.addEventListener('play', () => {
        if (videoRef.current) {
          videoRef.current.muted = isMuted
          videoRef.current.volume = isMuted ? 0 : 0.7
        }
      })
      
      videoRef.current.play().catch(console.error)
    }
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
      videoRef.current.volume = isMuted ? 0 : 0.7
    }
  }, [isMuted])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

  const navItems = [
    { label: 'Work', href: '#portfolio' },
    { label: 'Process', href: '#about' },
    { label: 'Capabilities', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Animated Video Background */}
      <motion.video
        ref={videoRef}
        style={{ scale: videoScale }}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://mojli.s3.us-east-2.amazonaws.com/Mojli+Website+upscaled+(12mb).webm" type="video/webm" />
      </motion.video>

      {/* Dynamic Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
        style={{ opacity: overlayOpacity }}
      />

      {/* Animated Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 w-full z-[110]"
      >
        <motion.div 
          className={`w-full px-6 sm:px-8 lg:px-12 py-4 transition-all duration-500 ${
            isScrolled 
              ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
              : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Animated Logo */}
            <MagneticButton strength={0.2}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <motion.span 
                  className="font-bagel text-white text-xl tracking-wider"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  MOJJU
                </motion.span>
              </motion.div>
            </MagneticButton>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, i) => (
                <MagneticButton key={item.label} strength={0.15}>
                  <motion.a
                    href={item.href}
                    className="relative text-white hover:text-white/80 font-medium group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  >
                    {item.label}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-white origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </MagneticButton>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center space-x-3">
              {/* Sound Toggle */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <motion.button
                  onClick={() => setIsMuted(!isMuted)}
                  className="glass-effect p-3 rounded-full text-white hover:bg-white/20 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </motion.button>
                
                {isMuted && (
                  <motion.div 
                    className="absolute -bottom-10 right-0 flex items-center text-white/80"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    <span className="whitespace-nowrap font-medium text-sm mr-2">Sound On</span>
                    <motion.span 
                      className="text-lg"
                      animate={{ y: [-2, 2, -2] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      ↗
                    </motion.span>
                  </motion.div>
                )}
              </motion.div>
              
              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(220, 38, 38, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="hidden sm:block bg-red-600 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-md hover:bg-red-700 ml-4 cursor-pointer relative overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%', skewX: -20 }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Book a Call</span>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden glass-effect p-3 rounded-full text-white hover:bg-white/20 cursor-pointer z-[120]"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-[80] ${isMobileMenuOpen ? '' : 'pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-black/90 backdrop-blur-xl border-l border-white/10 z-[90]"
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {navItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="px-4 py-3 text-white hover:bg-white/10 rounded-lg font-medium text-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : 50 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </motion.a>
          ))}
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
            transition={{ delay: 0.5 }}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              setIsMobileMenuOpen(false)
            }}
            className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg mt-8"
          >
            Book a Call
          </motion.button>
        </div>
      </motion.div>

      {/* Animated Hero Title */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="absolute bottom-12 left-6 sm:left-8 lg:left-12 z-40"
      >
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-white">
            {['AI FILM', 'PRODUCTION', 'WITHOUT LIMITS'].map((line, i) => (
              <motion.span
                key={line}
                className="block"
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.8 + i * 0.2,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
              >
                {line}
              </motion.span>
            ))}
          </h1>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-white/80 rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
