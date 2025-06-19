'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const targetTime = new Date()
      targetTime.setHours(20, 0, 0, 0) // 20:00'a ayarla
      
      // Eğer bugün 20:00 geçtiyse, yarına ayarla
      if (now > targetTime) {
        targetTime.setDate(targetTime.getDate() + 1)
      }
      
      const difference = targetTime.getTime() - now.getTime()
      
      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        
        setTimeLeft({ hours, minutes, seconds })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-red-100 to-purple-100 flex flex-col items-center justify-center p-2 sm:p-4">
      <div className="text-center w-full max-w-4xl mx-auto">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-bold text-pink-600 mb-2 sm:mb-3 md:mb-4 lg:mb-6 xl:mb-8 animate-pulse px-2 leading-tight">
          💕 Sevgilime Kavuşma Sayacı 💕
        </h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8 2xl:p-12 shadow-2xl border border-pink-200 mx-2">
          <div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6 2xl:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold text-pink-500 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent leading-none">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-gray-600 mt-0.5 sm:mt-1 md:mt-1.5 lg:mt-2">
                Saat
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold text-pink-500 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent leading-none">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-gray-600 mt-0.5 sm:mt-1 md:mt-1.5 lg:mt-2">
                Dakika
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold text-pink-500 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent leading-none">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-gray-600 mt-0.5 sm:mt-1 md:mt-1.5 lg:mt-2">
                Saniye
              </div>
            </div>
          </div>
          
          <div className="mt-2 sm:mt-3 md:mt-4 lg:mt-6 xl:mt-8 text-center">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium text-gray-700">
              Sevgilime kavuşmaya kalan süre
            </p>
            <p className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg text-gray-500 mt-0.5 sm:mt-1 md:mt-1.5 lg:mt-2">
              Her saniye daha yakın! 💖
            </p>
          </div>
        </div>
        
        <div className="mt-2 sm:mt-3 md:mt-4 lg:mt-6 xl:mt-8 text-center">
          <div className="inline-flex items-center space-x-1 sm:space-x-2 bg-pink-500 text-white px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-3 rounded-full shadow-lg text-xs sm:text-sm md:text-base">
            <span className="text-sm sm:text-lg md:text-xl lg:text-2xl">⏰</span>
            <span className="font-semibold">Hedef: 20:00</span>
          </div>
        </div>
      </div>
    </main>
  )
} 