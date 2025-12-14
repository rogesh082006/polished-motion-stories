'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Play, ExternalLink } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem, TextReveal, ScaleOnScroll } from './AnimatedSection'
import { Card3D, HoverLift } from './Card3D'
import { GlowOrbs } from './ParticleBackground'

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projectDetails = [
    { label: 'Industry', value: 'Community Platform' },
    { label: 'Style', value: 'Narrative Drama' },
    { label: 'Tone', value: 'Emotional Journey' },
    { label: 'Format', value: 'Digital Commercial' }
  ]

  return (
    <section id="portfolio" className="relative py-32 bg-background overflow-hidden">
      <GlowOrbs />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Animated Section Header */}
        <AnimatedSection className="text-center mb-20">
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="w-3 h-3 bg-accent-emerald rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-semibold text-muted-foreground">
              Featured Work
            </span>
            <motion.div 
              className="w-3 h-3 bg-accent-blue rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <TextReveal text="Creative Productions" className="block mb-2" />
          </h2>
          
          <motion.p 
            className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Our latest commercial for Hampton - exploring the lonely journey of startup founders and the power of community.
          </motion.p>
        </AnimatedSection>

        {/* Featured Video with 3D Effect */}
        <ScaleOnScroll className="max-w-6xl mx-auto">
          <Card3D className="relative bg-card clean-border rounded-3xl overflow-hidden elevated-shadow">
            {/* Video Embed */}
            <div className="relative">
              <motion.div 
                className="aspect-video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <iframe
                  src="https://www.youtube.com/embed/fIbDWDh6aYw?rel=0&showinfo=0&modestbranding=1"
                  title="Hampton Commercial - The Lonely Journey"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-t-3xl"
                />
              </motion.div>
              
              {/* Floating Status Badge */}
              <motion.div 
                className="absolute top-6 right-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.span 
                  className="glass-effect rounded-xl px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
                  animate={{ 
                    boxShadow: ['0 0 20px rgba(255,255,255,0.1)', '0 0 30px rgba(255,255,255,0.2)', '0 0 20px rgba(255,255,255,0.1)']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Latest Project
                </motion.span>
              </motion.div>
            </div>

            {/* Animated Project Details */}
            <StaggerContainer className="p-8 lg:p-12">
              <StaggerItem>
                <div className="flex items-center gap-4 mb-4">
                  <motion.span 
                    className="bg-accent-purple/10 text-accent-purple px-3 py-1 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(124, 58, 237, 0.2)' }}
                  >
                    Commercial
                  </motion.span>
                  <span className="text-sm text-muted-foreground">
                    Client: Hampton
                  </span>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <motion.h3 
                  className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  The Lonely Journey
                </motion.h3>
              </StaggerItem>
              
              <StaggerItem>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  A powerful commercial exploring the isolation that startup founders face and how joining Hampton's community can transform that journey. This piece captures the emotional weight of entrepreneurship and the relief that comes with finding your tribe.
                </p>
              </StaggerItem>
              
              <StaggerItem>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  {projectDetails.map((detail, i) => (
                    <HoverLift key={detail.label} className="p-3 rounded-xl bg-muted/30">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                      >
                        <span className="text-muted-foreground block">{detail.label}</span>
                        <span className="font-medium">{detail.value}</span>
                      </motion.div>
                    </HoverLift>
                  ))}
                </div>
              </StaggerItem>
            </StaggerContainer>
          </Card3D>
        </ScaleOnScroll>
      </div>
    </section>
  )
}
