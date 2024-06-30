'use client';
import { Banner } from "@/config/banner";
import Image from "next/image";
import { useEffect, useState } from 'react';

const SocialProof = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === Banner.length - 1 ? 0 : prevSlide + 1));
    }, 10000); // 调整切换时间为5秒以更好地适应Landing Page体验

    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    // 确保最后一张图片过渡回第一张时无缝衔接
    if (currentSlide === Banner.length) {
      setCurrentSlide(0);
    }
  };

  return (
    <section className="relative max-w-[88%] h-[800px] overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out slide-container"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {Banner.map((banner, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
          >
            <Image
              src={banner.image}
              alt={`Slide ${index + 1}`}
              layout="responsive" // 使用Next.js的响应式布局
              width={1208} // 假设图片的宽度
              height={800} // 假设图片的高度
              className="rounded-lg shadow-md object-cover" // 使图片覆盖并圆角
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialProof;