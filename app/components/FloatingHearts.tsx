import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  size: number;
  animationDuration: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const createHeart = () => {
      const newHeart: Heart = {
        id: Date.now(),
        left: Math.random() * 100, // Ekranın yatay konumu (%)
        size: Math.random() * (40 - 20) + 20, // 20px ile 40px arası
        animationDuration: Math.random() * (8 - 5) + 5, // 5-8 saniye arası
      };

      setHearts(prev => [...prev, newHeart]);

      // Kalbi belirli bir süre sonra kaldır
      setTimeout(() => {
        setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
      }, newHeart.animationDuration * 1000);
    };

    // Her 500ms'de bir yeni kalp oluştur
    const interval = setInterval(createHeart, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute animate-float-heart"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animation: `float-heart ${heart.animationDuration}s linear forwards`
          }}
        >
          <div className="text-pink-400 opacity-60">🩷</div>
        </div>
      ))}
    </div>
  );
} 