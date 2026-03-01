'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Pause,
  PauseCircleIcon,
  PauseIcon,
  Play,
  PlayIcon,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type ProductType = {
  name: string;
  title: string;
  description: string;
  hasPromotion: boolean;
  promotionText: string;
  position: string;
  price: number;
  discountPrice: number;
  x: number;
  y: number;
};

const products: ProductType[] = [
  {
    name: 'JBL',
    title: 'หูฟัง JBL',
    description:
      'หูฟังไร้สาย Sony  WH-1000XM6 สัมผัสประสบการณ์เสียงระดับพรีเมียม ระบบตัดเสียงรบกวนแบบ Adaptive Noise Cancelling อัจฉริยะ เสียงคุณภาพสูง  ใช้งานได้นานต่อเนื่อง  เหมาะสำหรับทุกไลฟ์สไตล์การฟังเพลงหรือประชุมออนไลน์',
    hasPromotion: true,
    promotionText: 'ส่วนลด 10% สำหรับสมาชิก',
    position: 'top-left',
    price: 5000,
    discountPrice: 4500,
    x: 350,
    y: 50,
  },
  {
    name: 'JBL2',
    title: 'หูฟัง JBL 2',
    description:
      'หูฟังไร้สาย2 Sony  WH-1000XM6 สัมผัสประสบการณ์เสียงระดับพรีเมียม ระบบตัดเสียงรบกวนแบบ Adaptive Noise Cancelling อัจฉริยะ เสียงคุณภาพสูง  ใช้งานได้นานต่อเนื่อง  เหมาะสำหรับทุกไลฟ์สไตล์การฟังเพลงหรือประชุมออนไลน์',
    hasPromotion: true,
    promotionText: 'ส่วนลด 20% สำหรับสมาชิก',
    position: 'top-left',
    price: 5000,
    discountPrice: 4000,
    x: 100,
    y: 100,
  },
  {
    name: 'JBL3',
    title: 'หูฟัง JBL 3',
    description:
      'หูฟังไร้สาย3 Sony  WH-1000XM6 สัมผัสประสบการณ์เสียงระดับพรีเมียม ระบบตัดเสียงรบกวนแบบ Adaptive Noise Cancelling อัจฉริยะ เสียงคุณภาพสูง  ใช้งานได้นานต่อเนื่อง  เหมาะสำหรับทุกไลฟ์สไตล์การฟังเพลงหรือประชุมออนไลน์',
    hasPromotion: false,
    promotionText: '',
    position: 'top-left',
    price: 5000,
    discountPrice: 5000,
    x: 200,
    y: 200,
  },
];

export default function HeroPaginationCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const total = products.length;
  const paginationTime = 5000;

  useEffect(() => {
    if (!isPlaying || total === 0) return;
    const timeoutId = setTimeout(() => {
      setActiveIndex(prev => (prev + 1) % total);
    }, paginationTime);
    return () => clearTimeout(timeoutId);
  }, [activeIndex, isPlaying, paginationTime, total]);

  return (
    <div className="w-full h-full rounded-[45px] bg-blue-100 relative">
      <div className="absolute bottom-0 right-0 w-[700px] h-[450px] ">
        <div className="relative w-full h-full rounded-4xl overflow-hidden">
          <Image
            src="/images/image-test.png"
            alt="image-test"
            layout="fill"
            className="object-cover relative"
          />
          {products.map((item, index) => {
            return (
              <div key={index}>
                {/* mark */}
                <button
                  onClick={() => setActiveIndex(index)}
                  style={{ left: item.x, top: item.y }}
                  className="absolute cursor-pointer z-10 bg-white border-gray-400 border-2 rounded-full w-6 h-6"
                />

                {index === activeIndex && (
                  <div
                    style={{ left: item.x + 30, top: item.y - 8 }}
                    className="pointer-events-none absolute z-20 w-full max-w-[220px] rounded-xl bg-[#FEFEFEBF] backdrop-blur-xl p-4 text-primary-color border border-[#E4E4E7]"
                  >
                    <div className="text-xs text-[#0037C0] font-bold">
                      {item.title}
                    </div>
                    <div className="mt-1 text-base text-[#71717B] leading-snug line-clamp-2">
                      {item.description}
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-sm font-semibold">
                      {item.hasPromotion ? (
                        <>
                          <span>{item.discountPrice.toLocaleString()}</span>
                          <span className="text-xs text-[#E7000B] line-through">
                            {item.price.toLocaleString()}
                          </span>
                        </>
                      ) : (
                        <span>{item.price.toLocaleString()}</span>
                      )}
                    </div>
                    {item.hasPromotion && (
                      <div className="mt-1 text-[11px] text-[#71717B]">
                        {item.promotionText}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-4 justify-center left-0 right-0 flex items-center gap-x-4 max-w-[340px] mx-auto">
          <Button
            type="button"
            className="rounded-full w-12 h-12 bg-[#EEEEF280] backdrop-blur-xl backdrop-saturate-150 text-primary-color hover:bg-[rgba(238,238,242,0.95)]"
            onClick={() => setIsPlaying(prev => !prev)}
            aria-pressed={isPlaying}
            variant={isPlaying ? 'default' : 'outline'}
          >
            {isPlaying ? <Pause /> : <Play />}
          </Button>
          <div className="bg-[#EEEEF280] backdrop-blur-xl backdrop-saturate-150 px-6 py-5 rounded-full h-12">
            <div className=" flex items-center justify-center gap-4">
              {products.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={cn(
                    'relative h-2 rounded-full transition-all overflow-hidden',
                    index === activeIndex
                      ? 'w-10 bg-[#71717B]'
                      : 'w-2 bg-[#71717B]'
                  )}
                >
                  {index === activeIndex && (
                    <span
                      key={`progress-${activeIndex}-${isPlaying}`}
                      className="absolute inset-y-0 left-0 block h-full w-full origin-left rounded-full bg-primary-color"
                      style={{
                        animationName: isPlaying
                          ? 'pagination-progress'
                          : 'none',
                        animationDuration: `${paginationTime}ms`,
                        animationTimingFunction: 'linear',
                        animationFillMode: 'forwards',
                        animationPlayState: isPlaying ? 'running' : 'paused',
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="px-6 py-5 h-12 rounded-full bg-[#EEEEF280] backdrop-blur-xl backdrop-saturate-150 text-primary-color flex items-center text-lg font-semibold">
            <span>
              {activeIndex + 1}/{total}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
