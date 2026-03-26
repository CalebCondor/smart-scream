'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface VideoSlide {
  id: number
  videoUrl: string
  title: string
  description: string
  buttonText: string
  buttonHref?: string
}

// Mock data with 4 videos
const mockSlides: VideoSlide[] = [
  {
    id: 1,
    videoUrl: 'https://www.pexels.com/es-es/download/video/11860943/',
    title: 'Innovative Solutions',
    description: 'Experience the power of modern technology designed for your success',
    buttonText: 'Learn More',
    buttonHref: '#',
  },
  {
    id: 2,
    videoUrl: 'https://www.pexels.com/es-es/download/video/19773297/',
    title: 'Premium Performance',
    description: 'Built for scale with enterprise-grade reliability and speed',
    buttonText: 'Explore',
    buttonHref: '#',
  },
  {
    id: 3,
    videoUrl: 'https://www.pexels.com/es-es/download/video/7209307/',
    title: 'Seamless Integration',
    description: 'Connect everything you need in one powerful platform',
    buttonText: 'Get Started',
    buttonHref: '#',
  },
  {
    id: 4,
    videoUrl: 'https://www.pexels.com/es-es/download/video/8375757/',
    title: 'Global Scale',
    description: 'Reach your audience worldwide with confidence and ease',
    buttonText: 'Discover',
    buttonHref: '#',
  },
]

export default function VideoCarousel({ slides = mockSlides }: { slides?: VideoSlide[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dragStart, setDragStart] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  // Autoplay effect
  useEffect(() => {
    if (!isAutoplay) return

    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoplay, nextSlide])

  const handleMouseEnter = () => setIsAutoplay(false)
  const handleMouseLeave = () => setIsAutoplay(true)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / rect.width,
      y: (e.clientY - rect.top - rect.height / 2) / rect.height,
    })
  }

  // Drag handling
  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragStart(e.clientX)
  }

  const handleDragEnd = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragStart === null) return

    const dragEnd = e.clientX
    const diff = dragStart - dragEnd

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }

    setDragStart(null)
  }

  // Touch support
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setDragStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (dragStart === null) return

    const dragEnd = e.changedTouches[0].clientX
    const diff = dragStart - dragEnd

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }

    setDragStart(null)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-background cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={nextSlide}
    >
    
      {/* Carousel Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-full"
      >
        <AnimatePresence mode="sync">
          {slides.map((slide, index) => {
            const isActive = index === currentIndex
            const distance = Math.min(Math.abs(index - currentIndex), slides.length - Math.abs(index - currentIndex))
            const direction = index > currentIndex ? 1 : -1

            return (
              <motion.div
                key={slide.id}
                className="absolute inset-0"
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{
                  opacity: isActive ? 1 : 0.4,
                  x: 0,
                  scale: isActive ? 1 : 0.85,
                  zIndex: isActive ? 10 : 5 - distance,
                }}
                exit={{ opacity: 0, x: -direction * 100 }}
                transition={{
                  opacity: { duration: 0.5 },
                  x: { duration: 0.5, ease: 'easeInOut' },
                  scale: { duration: 0.5 },
                  zIndex: { duration: 0 },
                }}
              >
                {/* Video Background */}
                <motion.div
                  className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
                  style={{
                    transform: isActive ? `scale(1.02)` : 'scale(1)',
                  }}
                  animate={
                    isActive
                      ? {
                        scale: [1.02, 1.025, 1.02],
                      }
                      : {}
                  }
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  <motion.div
                    className="absolute inset-0 filter"
                    animate={
                      isActive
                        ? {
                          filter: [`blur(0px)`, `blur(1px)`, `blur(0px)`],
                        }
                        : { filter: 'blur(2px)' }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <video
                      src={slide.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      style={{
                        transform: isActive ? `scale(${1 + mousePosition.x * 0.02})` : 'scale(1)',
                      }}
                    />
                  </motion.div>

                  {/* Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 1 : 0.5 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>

                {/* Content */}
                {isActive && (
                  <div className="absolute inset-0 flex flex-col justify-end pointer-events-none">
                    <div className="max-w-7xl mx-auto w-full px-6 pb-20 md:pb-32">
                      <motion.div
                        className="max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance">
                          {slide.title}
                        </h2>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl text-balance">
                          {slide.description}
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="pointer-events-auto w-fit"
                      >
                        <Button
                          size="lg"
                          className="backdrop-blur-md bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-8"
                        >
                          {slide.buttonText}
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
