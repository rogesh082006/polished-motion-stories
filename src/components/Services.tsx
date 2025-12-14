'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection'
import { Card3D } from './Card3D'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function Services() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [hoveredPhoto, setHoveredPhoto] = useState<string | null>(null)

  const services = [
    {
      id: 'campaigns',
      title: "Campaign & Ad Content",
      description: "Multi-platform video campaigns ready for every channel—YouTube, TikTok, Instagram, and beyond.",
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&auto=format'
    },
    {
      id: 'brand-films',
      title: "Brand Films & Stories", 
      description: "Cinematic brand videos that capture your essence and connect with audiences on an emotional level.",
      image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=300&fit=crop&auto=format'
    },
    {
      id: 'trailers',
      title: "Trailers & Promos",
      description: "High-impact teasers that hook viewers instantly—perfect for launches, events, and announcements.",
      image: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=300&fit=crop&auto=format'
    },
    {
      id: 'short-films',
      title: "Short-Form Films",
      description: "Festival-ready mini-movies up to 5 minutes—ideal for investors, events, and premium content.",
      image: 'https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=300&fit=crop&auto=format'
    },
    {
      id: 'animation',
      title: "Animation & Motion",
      description: "Stylized animated content that explains complex ideas without needing live actors.",
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop&auto=format'
    },
    {
      id: 'social',
      title: "Social Content",
      description: "Thumb-stopping vertical videos delivered in batches to keep your feed consistently engaging.",
      image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=300&fit=crop&auto=format'
    }
  ]

  const swayAnimations = [
    { y: [-3, 3, -3], rotate: [2, -1, 2] },
    { y: [-2, 4, -2], rotate: [-1, 3, -1] },
    { y: [-4, 2, -4], rotate: [1, -2, 1] }
  ]

  return (
    <section 
      ref={containerRef}
      id="services" 
      className="relative py-20 overflow-visible"
      style={{
        background: 'linear-gradient(135deg, #2d1810 0%, #1a0f08 30%, #0f0704 60%, #1a0f08 100%)'
      }}
    >
      {/* Animated Darkroom Effects */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"
        animate={{ 
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-900/15 rounded-full blur-2xl"
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Animated Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
          >
            <motion.div 
              className="w-3 h-3 bg-red-500 rounded-full"
              animate={{ 
                boxShadow: ['0 0 0 rgba(239, 68, 68, 0.4)', '0 0 20px rgba(239, 68, 68, 0.8)', '0 0 0 rgba(239, 68, 68, 0.4)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-semibold text-amber-200/80">Fresh from the Darkroom</span>
            <motion.div 
              className="w-3 h-3 bg-amber-500 rounded-full"
              animate={{ 
                boxShadow: ['0 0 0 rgba(245, 158, 11, 0.4)', '0 0 20px rgba(245, 158, 11, 0.8)', '0 0 0 rgba(245, 158, 11, 0.4)']
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>
          
          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-amber-100"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What We Develop
          </motion.h2>
          
          <motion.p 
            className="text-xl text-amber-200/90 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Developed with precision, delivered with passion
          </motion.p>
        </AnimatedSection>

        {/* Clothesline Section */}
        <div className="relative overflow-visible">
          {/* First Row */}
          <div className="relative mb-24" style={{ overflow: 'visible' }}>
            {/* Animated Rope */}
            <motion.div 
              className="absolute top-8 left-0 right-0 h-4"
              animate={{ 
                scaleY: [1, 1.02, 1],
                y: [0, 1, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="w-full h-full bg-gradient-to-b from-yellow-800 via-amber-900 to-yellow-900 rounded-full shadow-lg" />
              <div className="absolute -bottom-3 left-0 right-0 h-4 bg-black/30 rounded-full blur-xl" />
            </motion.div>
            
            {/* Anchor Points */}
            {['left', 'right'].map((side) => (
              <motion.div 
                key={side}
                className={`absolute ${side === 'left' ? 'left-0 sm:-left-10' : 'right-0 sm:-right-10'} top-4 w-10 h-10 bg-gradient-to-br from-gray-500 to-gray-800 rounded-full shadow-xl border border-gray-400`}
                whileHover={{ scale: 1.1 }}
              >
                <div className="absolute top-1.5 left-1.5 w-3 h-3 bg-gray-300 rounded-full opacity-80" />
              </motion.div>
            ))}
            
            {/* Photos - First Row */}
            <StaggerContainer className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-16 pt-20 max-w-7xl mx-auto px-4">
              {services.slice(0, 3).map((service, index) => (
                <StaggerItem key={service.id}>
                  <motion.div
                    className="relative"
                    animate={swayAnimations[index % 3]}
                    transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
                    onMouseEnter={() => setHoveredPhoto(service.id)}
                    onMouseLeave={() => setHoveredPhoto(null)}
                  >
                    {/* Clothespin */}
                    <motion.div 
                      className="absolute -top-8 left-1/2 -translate-x-1/2 z-20"
                      whileHover={{ rotate: 5 }}
                    >
                      <div className="relative w-5 h-10">
                        <div className="absolute left-0 top-0 w-2.5 h-10 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-l-md shadow-md" />
                        <div className="absolute right-0 top-0 w-2.5 h-10 bg-gradient-to-l from-yellow-200 to-orange-200 rounded-r-md shadow-md" />
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-gradient-to-b from-gray-300 to-gray-500 rounded-sm" />
                      </div>
                    </motion.div>
                    
                    {/* Photo Card */}
                    <Card3D>
                      <motion.div 
                        className="relative bg-white p-4 pb-8 shadow-2xl cursor-pointer w-[260px] sm:w-[280px] max-w-[90vw]"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: '0 30px 60px rgba(0,0,0,0.7)'
                        }}
                        style={{
                          filter: hoveredPhoto === service.id ? 'brightness(1.1)' : 'brightness(1)',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
                        }}
                      >
                        {/* Photo */}
                        <div className="h-48 mb-6 rounded-sm relative overflow-hidden">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <ImageWithFallback
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover rounded-sm"
                              style={{ filter: 'sepia(15%) saturate(85%) brightness(90%)' }}
                            />
                          </motion.div>
                          <div className="absolute inset-0 bg-red-900/5" />
                        </div>
                        
                        {/* Text */}
                        <motion.h3 
                          className="font-black text-lg text-gray-800 mb-3 leading-tight"
                          whileHover={{ x: 3 }}
                        >
                          {service.title}
                        </motion.h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                        
                        {/* Lab Stamp */}
                        <div className="absolute bottom-2 right-2 text-xs text-gray-400 font-mono opacity-60">
                          MOJJU LAB
                        </div>
                      </motion.div>
                    </Card3D>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Second Row */}
          <div className="relative" style={{ overflow: 'visible' }}>
            {/* Animated Rope */}
            <motion.div 
              className="absolute top-8 left-0 right-0 h-4"
              animate={{ 
                scaleY: [1, 1.02, 1],
                y: [0, 1, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            >
              <div className="w-full h-full bg-gradient-to-b from-yellow-800 via-amber-900 to-yellow-900 rounded-full shadow-lg" />
            </motion.div>
            
            {/* Anchor Points */}
            {['left', 'right'].map((side) => (
              <motion.div 
                key={side}
                className={`absolute ${side === 'left' ? 'left-0 sm:-left-10' : 'right-0 sm:-right-10'} top-4 w-10 h-10 bg-gradient-to-br from-gray-500 to-gray-800 rounded-full shadow-xl border border-gray-400`}
                whileHover={{ scale: 1.1 }}
              >
                <div className="absolute top-1.5 left-1.5 w-3 h-3 bg-gray-300 rounded-full opacity-80" />
              </motion.div>
            ))}
            
            {/* Photos - Second Row */}
            <StaggerContainer className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-16 pt-20 max-w-7xl mx-auto px-4">
              {services.slice(3, 6).map((service, index) => (
                <StaggerItem key={service.id}>
                  <motion.div
                    className="relative"
                    animate={swayAnimations[(index + 1) % 3]}
                    transition={{ duration: 7 + index, repeat: Infinity, ease: "easeInOut" }}
                    onMouseEnter={() => setHoveredPhoto(service.id)}
                    onMouseLeave={() => setHoveredPhoto(null)}
                  >
                    {/* Clothespin */}
                    <motion.div 
                      className="absolute -top-8 left-1/2 -translate-x-1/2 z-20"
                      whileHover={{ rotate: -5 }}
                    >
                      <div className="relative w-5 h-10">
                        <div className="absolute left-0 top-0 w-2.5 h-10 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-l-md shadow-md" />
                        <div className="absolute right-0 top-0 w-2.5 h-10 bg-gradient-to-l from-yellow-200 to-orange-200 rounded-r-md shadow-md" />
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-gradient-to-b from-gray-300 to-gray-500 rounded-sm" />
                      </div>
                    </motion.div>
                    
                    {/* Photo Card */}
                    <Card3D>
                      <motion.div 
                        className="relative bg-white p-4 pb-8 shadow-2xl cursor-pointer w-[260px] sm:w-[280px] max-w-[90vw]"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: '0 30px 60px rgba(0,0,0,0.7)'
                        }}
                        style={{
                          filter: hoveredPhoto === service.id ? 'brightness(1.1)' : 'brightness(1)',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
                        }}
                      >
                        <div className="h-48 mb-6 rounded-sm relative overflow-hidden">
                          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
                            <ImageWithFallback
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover rounded-sm"
                              style={{ filter: 'sepia(15%) saturate(85%) brightness(90%)' }}
                            />
                          </motion.div>
                          <div className="absolute inset-0 bg-red-900/5" />
                        </div>
                        
                        <motion.h3 className="font-black text-lg text-gray-800 mb-3 leading-tight" whileHover={{ x: 3 }}>
                          {service.title}
                        </motion.h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                        
                        <div className="absolute bottom-2 right-2 text-xs text-gray-400 font-mono opacity-60">
                          MOJJU LAB
                        </div>
                      </motion.div>
                    </Card3D>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
