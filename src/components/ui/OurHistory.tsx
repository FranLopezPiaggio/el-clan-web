'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
// Removing the Lucide React icons import
// import { ChevronLeft, ChevronRight } from 'lucide-react'

const historyData = [
  {
    id: 1,
    title: "Hermanos",
    text: "El Clan nació de la unión de cuatro hermanos unidos por su pasión por crear momentos inolvidables, siempre acompañados de una buena cerveza artesanal.",
    image: "/img/heroBG.jpg"
  },
  {
    id: 2,
    title: "La pasion por lo encuentros",
    text: "A lo largo de los años, hemos crecido junto a nuestra comunidad, compartiendo momentos especiales y manteniendo nuestra promesa de brindar siempre lo mejor a nuestros clientes.",
    image: "/img/heroBG.jpg"
  },
  {
    id: 3,
    title: "La cerveza",
    text: "Nuestra cerveza artesanal, fresca y auténtica, es la compañera perfecta para esos momentos especiales de reunión con amigos y familia.",
    image: "/img/heroBG.jpg"
  }
]

export default function OurHistory() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % historyData.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + historyData.length) % historyData.length)
  }

  return (
    <section id="historia" className="w-full py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestra Historia</h2>
        
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">
                  {historyData[currentIndex].title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {historyData[currentIndex].text}
                </p>
              </div>
              
              <div className="md:w-1/2 relative h-[300px] md:h-[400px]">
                <Image
                  src={historyData[currentIndex].image}
                  alt={historyData[currentIndex].title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            &#10094;
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            &#10095;
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {historyData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
