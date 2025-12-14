'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { AnimatedSection, StaggerContainer, StaggerItem, FloatingElement } from './AnimatedSection'
import { HoverLift } from './Card3D'
import { ParticleBackground } from './ParticleBackground'
import minimalBestFilm from '../assets/minimal-best-film.png'
import minimalAudienceChoice from '../assets/minimal-audience-choice.png'
import minimalInnovation from '../assets/minimal-innovation.png'
import minimalDirectorsChoice from '../assets/minimal-directors-choice.png'
import minimalExcellence from '../assets/minimal-excellence.png'
import minimalRisingTalent from '../assets/minimal-rising-talent.png'

export function Awards() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])

  const awards = [
    { image: minimalBestFilm, delay: 0 },
    { image: minimalAudienceChoice, delay: 0.1 },
    { image: minimalInnovation, delay: 0.2 },
    { image: minimalDirectorsChoice, delay: 0.3 },
    { image: minimalExcellence, delay: 0.4 },
    { image: minimalRisingTalent, delay: 0.5 }
  ]

  return (
    <section ref={containerRef} id="awards" className="relative py-20 bg-background overflow-hidden">
      <ParticleBackground count={30} />
      
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"
        style={{ y: backgroundY }}
      />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Animated Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="w-3 h-3 bg-accent-purple rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                boxShadow: ['0 0 0 rgba(124, 58, 237, 0.4)', '0 0 20px rgba(124, 58, 237, 0.6)', '0 0 0 rgba(124, 58, 237, 0.4)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-semibold text-muted-foreground">
              Recognition & Achievement
            </span>
            <motion.div 
              className="w-3 h-3 bg-accent-blue rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                boxShadow: ['0 0 0 rgba(37, 99, 235, 0.4)', '0 0 20px rgba(37, 99, 235, 0.6)', '0 0 0 rgba(37, 99, 235, 0.4)']
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>
          
          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Awards & Recognition
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Celebrated excellence in AI-powered film production
          </motion.p>
        </AnimatedSection>

        {/* Animated Awards Grid */}
        <StaggerContainer className="relative max-w-7xl mx-auto">
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {awards.map((award, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="group relative flex flex-col items-center text-center"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Award Pedestal */}
                  <div className="relative mb-6">
                    <HoverLift>
                      <motion.div 
                        className={`relative p-6 rounded-2xl border shadow-md transition-all duration-500 ${
                          index === 2 || index === 3 ? 'bg-gray-800 border-gray-700' : 'bg-background border-border'
                        }`}
                        initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                        animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                        transition={{ 
                          duration: 0.8, 
                          delay: award.delay + 0.3,
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{ 
                          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                          borderColor: 'rgba(124, 58, 237, 0.3)'
                        }}
                        style={{
                          transformStyle: 'preserve-3d',
                          perspective: 1000
                        }}
                      >
                        {/* Glowing Background on Hover */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 70%)'
                          }}
                        />
                        
                        {/* Award Image */}
                        <FloatingElement duration={4 + index}>
                          <motion.img 
                            src={award.image}
                            alt="Film Festival Award Laurel"
                            className="w-full h-auto max-w-48 mx-auto relative z-10"
                            style={{
                              filter: 'contrast(1.02) saturate(1.1)',
                            }}
                            whileHover={{ scale: 1.05 }}
                          />
                        </FloatingElement>
                        
                        {/* Shine Effect */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <motion.div
                            className="absolute inset-0"
                            style={{
                              background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)'
                            }}
                            animate={{
                              x: ['-200%', '200%']
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3
                            }}
                          />
                        </motion.div>
                      </motion.div>
                    </HoverLift>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
