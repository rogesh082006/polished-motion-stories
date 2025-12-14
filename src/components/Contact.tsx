'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection'
import { HoverLift } from './Card3D'
import { GlowOrbs } from './ParticleBackground'

export function Contact() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "mojju-discovery-call", {origin:"https://app.cal.com"});
      Cal.ns["mojju-discovery-call"]("inline", {
        elementOrSelector:"#my-cal-inline-mojju-discovery-call",
        config: {"layout":"month_view"},
        calLink: "mojli/30min",
      });
      Cal.ns["mojju-discovery-call"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `
    document.body.appendChild(script)
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script)
    }
  }, [])

  const infoCards = [
    { title: 'Project Discussion', description: 'Share your vision and requirements with our team', color: 'accent-blue' },
    { title: 'Custom Strategy', description: 'Get a tailored approach for your unique project', color: 'accent-emerald' },
    { title: 'Next Steps', description: 'Clear timeline and roadmap to bring your idea to life', color: 'accent-purple' }
  ]

  return (
    <section ref={containerRef} id="contact" className="relative py-32 bg-card/30 overflow-hidden">
      <GlowOrbs />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Animated Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
          >
            <motion.div 
              className="w-3 h-3 bg-accent-emerald rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                boxShadow: ['0 0 0 rgba(5, 150, 105, 0.4)', '0 0 20px rgba(5, 150, 105, 0.8)', '0 0 0 rgba(5, 150, 105, 0.4)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-semibold text-muted-foreground">Let's Create Together</span>
            <motion.div 
              className="w-3 h-3 bg-accent-blue rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                boxShadow: ['0 0 0 rgba(37, 99, 235, 0.4)', '0 0 20px rgba(37, 99, 235, 0.8)', '0 0 0 rgba(37, 99, 235, 0.4)']
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>
          
          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="block mb-2"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Ready to Light Up the Screen?
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            Book a discovery call to discuss your project and see how we can bring your vision to cinematic reality
          </motion.p>
        </AnimatedSection>

        {/* Animated Cal Widget */}
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.div 
            className="bg-background clean-border rounded-3xl overflow-hidden elevated-shadow"
            whileHover={{ boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}
          >
            {/* Widget Header */}
            <motion.div 
              className="bg-card/50 px-8 py-6 border-b border-border"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <motion.h3 
                    className="text-xl font-black text-foreground mb-1"
                    whileHover={{ x: 3 }}
                  >
                    MOJJU Discovery Call
                  </motion.h3>
                  <p className="text-muted-foreground">30 minutes • Video call • Free consultation</p>
                </div>
                <motion.div 
                  className="hidden sm:flex items-center space-x-2"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div 
                    className="w-3 h-3 bg-accent-emerald rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-sm text-muted-foreground font-medium">Available now</span>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Cal.com Embed */}
            <motion.div 
              className="p-0 bg-white"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <div style={{ width: '100%', height: '600px', overflow: 'scroll' }} id="my-cal-inline-mojju-discovery-call" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animated Info Cards */}
        <StaggerContainer className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {infoCards.map((card, i) => (
              <StaggerItem key={card.title}>
                <HoverLift>
                  <motion.div 
                    className="bg-background clean-border rounded-2xl p-6 subtle-shadow text-center"
                    whileHover={{ borderColor: `var(--${card.color})` }}
                  >
                    <motion.div 
                      className={`w-12 h-12 bg-${card.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <motion.div 
                        className={`w-6 h-6 bg-${card.color} rounded-full`}
                        animate={{ 
                          boxShadow: [`0 0 0 rgba(var(--${card.color}), 0.4)`, `0 0 15px rgba(var(--${card.color}), 0.6)`, `0 0 0 rgba(var(--${card.color}), 0.4)`]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      />
                    </motion.div>
                    <motion.h4 
                      className="font-black text-foreground mb-2"
                      whileHover={{ x: 3 }}
                    >
                      {card.title}
                    </motion.h4>
                    <p className="text-muted-foreground text-sm">{card.description}</p>
                  </motion.div>
                </HoverLift>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
