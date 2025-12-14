'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { AnimatedSection, StaggerContainer, StaggerItem, ParallaxSection } from './AnimatedSection'
import { ParticleBackground } from './ParticleBackground'
import storyboardImage from '@/assets/storyboard-image.avif'

export function About() {
  const [activeFrame, setActiveFrame] = useState(-1)
  const [animationStarted, setAnimationStarted] = useState(false)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const filmStripX = useTransform(scrollYProgress, [0, 1], [0, -200])

  const processSteps = [
    { number: "01", title: "Concept & Script", description: "Scene‑by‑scene draft with dialogues and time‑codes", color: "accent-blue" },
    { number: "02", title: "Look & Storyboard", description: "AI engine selection and visual testing", color: "accent-emerald" },
    { number: "03", title: "AI Production", description: "Motion tests and multi-variant generation", color: "accent-purple" },
    { number: "04", title: "Post‑production", description: "VFX, color grading, and audio mixing", color: "accent-blue" },
    { number: "05", title: "Master Delivery", description: "Multi-format export and secure transfer", color: "accent-purple" }
  ]

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setAnimationStarted(true)
        processSteps.forEach((_, index) => {
          setTimeout(() => setActiveFrame(index), index * 2000 + 1000)
        })
      }, 500)
    }
  }, [isInView])

  return (
    <section ref={containerRef} id="about" className="relative py-20 bg-background overflow-hidden">
      <ParticleBackground count={20} />
      
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Film Grain Effect */}
      <motion.div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.8) 1px, transparent 0)`,
          backgroundSize: '3px 3px'
        }} 
      />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Animated Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <motion.div 
              className="w-3 h-3 bg-accent-emerald rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-semibold text-muted-foreground">Behind the Scenes</span>
            <motion.div 
              className="w-3 h-3 bg-accent-blue rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>
          
          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground"
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            How We Create Magic
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Watch our process unfold frame by frame
          </motion.p>
        </AnimatedSection>

        {/* Animated Film Strip */}
        <div className="relative max-w-7xl mx-auto">
          <motion.div 
            className="relative bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ boxShadow: '0 25px 50px rgba(0,0,0,0.5), inset 0 2px 0 rgba(255,255,255,0.05)' }}
          >
            
            {/* Film Perforations */}
            {['top', 'bottom'].map((pos) => (
              <div key={pos} className={`absolute ${pos}-0 left-0 right-0 h-6 bg-black z-20 overflow-hidden`}>
                <motion.div 
                  className="flex items-center justify-between px-12 h-full"
                  style={{ width: '200%', x: animationStarted ? filmStripX : 0 }}
                >
                  {[...Array(40)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      className="w-4 h-3 bg-gray-800 rounded-sm border border-gray-700 flex-shrink-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.02 }}
                      style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)' }} 
                    />
                  ))}
                </motion.div>
              </div>
            ))}

            {/* Film Frames Container */}
            <div className="relative py-6 px-8 overflow-hidden h-64 max-w-full">
              <motion.div 
                className="flex gap-8"
                style={{ width: 'max-content' }}
                animate={animationStarted ? { x: [-50, -2000] } : {}}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {/* Start Frame */}
                <motion.div 
                  className="flex-shrink-0 w-80 h-52 bg-gray-800 rounded-lg border-2 border-gray-700 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 0.6, scale: 1 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-gray-400 font-mono tracking-wider">● START</div>
                </motion.div>
                
                {/* Process Step Frames */}
                {[...processSteps, ...processSteps].map((step, index) => (
                  <motion.div
                    key={`${step.number}-${index}`}
                    className={`flex-shrink-0 w-80 h-52 bg-background rounded-lg border-4 ${
                      activeFrame >= (index % 5) ? `border-${step.color}` : 'border-gray-600'
                    }`}
                    initial={{ opacity: 0, y: 30, rotateY: -20 }}
                    animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                    transition={{ delay: 0.6 + (index % 5) * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    style={{ boxShadow: '0 8px 16px rgba(0,0,0,0.3)' }}
                  >
                    <div className="relative h-full p-6 flex flex-col justify-between">
                      {/* Frame Number */}
                      <motion.div 
                        className="absolute -top-4 -left-4 w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center font-black z-10 text-lg"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        style={{ boxShadow: '0 6px 12px rgba(0,0,0,0.4)' }}
                      >
                        {step.number}
                      </motion.div>
                      
                      <div>
                        <h3 className="font-black text-xl leading-tight mb-4 text-foreground">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          
          {/* Projector Light Effect */}
          {activeFrame >= 0 && (
            <motion.div 
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div 
                className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full"
                animate={{ 
                  opacity: [0.05, 0.15, 0.05],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, transparent 60%)'
                }}
              />
            </motion.div>
          )}
        </div>

        {/* Film Controls */}
        <AnimatedSection delay={0.5} className="mt-12 text-center">
          <motion.div 
            className="inline-flex items-center gap-6 bg-card/80 backdrop-blur-sm clean-border rounded-2xl px-8 py-4 subtle-shadow"
            whileHover={{ scale: 1.02 }}
          >
            {[
              { label: '24 FPS', color: 'accent-emerald', delay: 0 },
              { label: '5-7 Days', color: 'accent-blue', delay: 0.5 },
              { label: 'Cinema Quality', color: 'accent-purple', delay: 1 }
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <motion.div 
                  className={`w-2 h-2 bg-${item.color} rounded-full`}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: item.delay }}
                />
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
                {i < 2 && <div className="w-px h-6 bg-border ml-6" />}
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Storyboard Gallery */}
        <ParallaxSection speed={0.2} className="mt-20">
          <AnimatedSection delay={0.6}>
            <div className="text-center mb-8">
              <p className="text-muted-foreground">A glimpse into our storyboard development process</p>
            </div>
            
            <motion.div 
              className="relative max-w-6xl mx-auto"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-4 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <motion.img 
                  src={storyboardImage}
                  alt="Collection of AI-generated video content thumbnails"
                  className="w-full h-auto rounded-xl"
                  style={{ filter: 'contrast(1.05) saturate(1.1) brightness(0.95)' }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Overlay Gradient */}
                <motion.div 
                  className="absolute inset-4 rounded-xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(37,99,235,0.03) 0%, transparent 20%, transparent 80%, rgba(124,58,237,0.03) 100%)'
                  }}
                />
              </motion.div>
              
              <motion.p 
                className="mt-6 text-center text-sm text-muted-foreground italic"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.9 }}
              >
                "Diverse scenarios, characters, and styles — all generated through our AI pipeline"
              </motion.p>
            </motion.div>
          </AnimatedSection>
        </ParallaxSection>
      </div>
    </section>
  )
}
