'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection'
import { Card3D, HoverLift } from './Card3D'
import { ParticleBackground } from './ParticleBackground'
import { ImageWithFallback } from './figma/ImageWithFallback'
import marcusPhoto from '../assets/team-member-1.png'
import sofiaPhoto from '../assets/team-member-2.png'
import jakePhoto from '../assets/team-member-3.png'
import mayaPhoto from '../assets/team-member-4.png'
import connorPhoto from '../assets/team-member-5.png'
import zaraPhoto from '../assets/team-member-6.png'
import leoPhoto from '../assets/team-member-7.png'

export function Team() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const wantedCriminals = [
    { name: "Marcus 'The Pixel Bandit'", crime: "ARMED CREATIVE ROBBERY", bounty: "$8,500", description: "Notorious for stealing ordinary footage and transforming it into extraordinary visual experiences.", image: marcusPhoto, rotation: 3 },
    { name: "Sofia 'The Frame Thief'", crime: "GRAND THEFT OF IMAGINATION", bounty: "$6,200", description: "Wanted for stealing impossible creative briefs and turning them into award-winning masterpieces.", image: sofiaPhoto, rotation: 2 },
    { name: "Jake 'The Render Rogue'", crime: "MASTERMINDING TECHNICAL HEISTS", bounty: "$11,800", description: "Ringleader of rendering crimes, orchestrating elaborate computational operations.", image: jakePhoto, rotation: 2 },
    { name: "Maya 'The Code Crusher'", crime: "DIGITAL WIZARDRY & ALGORITHM SORCERY", bounty: "$9,300", description: "Wanted for conjuring flawless code from chaotic requirements using forbidden programming magic.", image: mayaPhoto, rotation: -2 },
    { name: "Connor 'The Digital Desperado'", crime: "PRODUCTION WITH INTENT TO AMAZE", bounty: "$13,700", description: "Mastermind behind revolutionary content creation operations.", image: connorPhoto, rotation: 1 },
    { name: "Zara 'The Motion Maverick'", crime: "ANIMATION MANIPULATION", bounty: "$7,900", description: "Notorious for crafting motion graphics so smooth they defy the laws of physics.", image: zaraPhoto, rotation: -1 },
    { name: "Leo 'The Effect Enforcer'", crime: "WANDERING VFX SYNTHESIS", bounty: "$10,400", description: "A nomadic visual effects outlaw leaving behind jaw-dropping composites.", image: leoPhoto, rotation: 3 }
  ]

  return (
    <section ref={containerRef} id="team" className="relative py-32 bg-background overflow-visible">
      <ParticleBackground count={25} />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10" style={{ overflow: 'visible' }}>
        
        {/* Animated Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            <motion.div 
              className="w-3 h-3 bg-accent-emerald rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-semibold text-muted-foreground">Meet the Outlaws</span>
            <motion.div 
              className="w-3 h-3 bg-accent-blue rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>
          
          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8 text-foreground"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="block mb-2"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              These people are
            </motion.span>
            <motion.span 
              className="block text-foreground"
              initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            >
              WANTED
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            Highly skilled and creatively dangerous
          </motion.p>
        </AnimatedSection>

        {/* Wanted Board */}
        <div className="max-w-7xl mx-auto" style={{ overflow: 'visible' }}>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ overflow: 'visible' }}
          >
            {/* Black Frame */}
            <motion.div 
              className="bg-gradient-to-br from-black via-gray-900 to-black p-8 rounded-2xl shadow-2xl relative border border-gray-800/50"
              whileHover={{ boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}
              style={{ overflow: 'visible' }}
            >
              {/* Board Background */}
              <div className="bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200 rounded-xl p-8 relative" style={{ overflow: 'visible' }}>
                
                {/* First Row */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-8 overflow-visible">
                  {wantedCriminals.slice(0, 4).map((criminal, index) => (
                    <StaggerItem key={criminal.name}>
                      <motion.div
                        className="group"
                        initial={{ rotate: criminal.rotation, opacity: 0, y: 30 }}
                        animate={isInView ? { rotate: criminal.rotation, opacity: 1, y: 0 } : {}}
                        whileHover={{ rotate: 0, scale: 1.05, zIndex: 20 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        style={{ 
                          filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.3))',
                          overflow: 'visible'
                        }}
                      >
                        <HoverLift>
                          <motion.div 
                            className="bg-gradient-to-b from-white to-gray-50 border-4 border-black relative shadow-lg"
                            whileHover={{ borderColor: '#ef4444' }}
                            style={{ overflow: 'visible' }}
                          >
                            {/* Push Pins */}
                            <motion.div 
                              className="absolute -top-2 left-4 w-4 h-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-lg border border-red-700"
                              whileHover={{ scale: 1.3 }}
                            />
                            <motion.div 
                              className="absolute -top-2 right-4 w-4 h-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-lg border border-red-700"
                              whileHover={{ scale: 1.3 }}
                            />

                            <div className="p-6 text-center relative z-10">
                              {/* WANTED Header */}
                              <motion.div 
                                className="mb-4"
                                initial={{ opacity: 0, y: -20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5 + index * 0.1 }}
                              >
                                <h3 className="text-3xl font-black text-black mb-2" style={{ fontFamily: 'serif', letterSpacing: '0.1em' }}>
                                  WANTED
                                </h3>
                                <div className="w-full h-0.5 bg-black mb-2" />
                              </motion.div>

                              {/* Photo */}
                              <Card3D className="relative mb-4 mx-auto w-32 h-32 border-2 border-black bg-gray-100 rounded-sm" glareEnabled={false}>
                                <ImageWithFallback
                                  src={criminal.image}
                                  alt={criminal.name}
                                  className="w-full h-full object-cover rounded-sm"
                                  style={{ filter: 'sepia(20%) contrast(105%) brightness(100%)' }}
                                />
                                <motion.div 
                                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-sm"
                                  whileHover={{ opacity: 0 }}
                                />
                              </Card3D>

                              {/* Details */}
                              <div className="text-left space-y-2" style={{ fontFamily: 'serif' }}>
                                <motion.div 
                                  className="font-black text-lg text-black"
                                  whileHover={{ x: 3 }}
                                >
                                  {criminal.name}
                                </motion.div>
                                <motion.div 
                                  className="font-bold text-red-600 text-base"
                                  animate={{ 
                                    textShadow: ['0 0 0 rgba(239, 68, 68, 0)', '0 0 10px rgba(239, 68, 68, 0.5)', '0 0 0 rgba(239, 68, 68, 0)']
                                  }}
                                  transition={{ duration: 3, repeat: Infinity }}
                                >
                                  BOUNTY: {criminal.bounty}
                                </motion.div>
                                <div className="text-sm text-gray-800 leading-relaxed bg-gray-50/50 p-3 border-l-2 border-black">
                                  {criminal.description}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </HoverLift>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                
                {/* Second Row */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-5xl mx-auto overflow-visible">
                  {wantedCriminals.slice(4, 7).map((criminal, index) => (
                    <StaggerItem key={criminal.name}>
                      <motion.div
                        className="group"
                        initial={{ rotate: criminal.rotation, opacity: 0, y: 30 }}
                        animate={isInView ? { rotate: criminal.rotation, opacity: 1, y: 0 } : {}}
                        whileHover={{ rotate: 0, scale: 1.05, zIndex: 20 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        style={{ 
                          filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.3))',
                          overflow: 'visible'
                        }}
                      >
                        <HoverLift>
                          <motion.div 
                            className="bg-gradient-to-b from-white to-gray-50 border-4 border-black relative shadow-lg"
                            whileHover={{ borderColor: '#ef4444' }}
                            style={{ overflow: 'visible' }}
                          >
                            <motion.div className="absolute -top-2 left-4 w-4 h-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-lg border border-red-700" whileHover={{ scale: 1.3 }} />
                            <motion.div className="absolute -top-2 right-4 w-4 h-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-lg border border-red-700" whileHover={{ scale: 1.3 }} />

                            <div className="p-6 text-center relative z-10">
                              <motion.div className="mb-4">
                                <h3 className="text-3xl font-black text-black mb-2" style={{ fontFamily: 'serif', letterSpacing: '0.1em' }}>WANTED</h3>
                                <div className="w-full h-0.5 bg-black mb-2" />
                              </motion.div>

                              <Card3D className="relative mb-4 mx-auto w-32 h-32 border-2 border-black bg-gray-100 rounded-sm" glareEnabled={false}>
                                <ImageWithFallback
                                  src={criminal.image}
                                  alt={criminal.name}
                                  className="w-full h-full object-cover rounded-sm"
                                  style={{ filter: 'sepia(20%) contrast(105%) brightness(100%)' }}
                                />
                              </Card3D>

                              <div className="text-left space-y-2" style={{ fontFamily: 'serif' }}>
                                <motion.div className="font-black text-lg text-black" whileHover={{ x: 3 }}>{criminal.name}</motion.div>
                                <motion.div 
                                  className="font-bold text-red-600 text-base"
                                  animate={{ textShadow: ['0 0 0 rgba(239, 68, 68, 0)', '0 0 10px rgba(239, 68, 68, 0.5)', '0 0 0 rgba(239, 68, 68, 0)'] }}
                                  transition={{ duration: 3, repeat: Infinity }}
                                >
                                  BOUNTY: {criminal.bounty}
                                </motion.div>
                                <div className="text-sm text-gray-800 leading-relaxed bg-gray-50/50 p-3 border-l-2 border-black">{criminal.description}</div>
                              </div>
                            </div>
                          </motion.div>
                        </HoverLift>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
