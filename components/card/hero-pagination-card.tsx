'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PositionDetail, ProductType } from '@/types/product';
import { Pause, Play, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import DiscountBadge from '../svg/discount-badge';
import MarkIcon from '../svg/mark-icon';
import ShoppingPlusIcon from '../svg/shoping-plus-icon';

const PAGINATION_TIME_MS = 5000;

const DEFAULT_DETAIL_POSITION_CLASS =
  'bottom-full left-1/2 -translate-x-1/2 mb-3';

const DETAIL_POSITION_CLASS: Record<PositionDetail, string> = {
  [PositionDetail.TOP_LEFT]: 'bottom-full right-full mb-3 mr-3',
  [PositionDetail.TOP]: 'bottom-full left-1/2 -translate-x-1/2 mb-3',
  [PositionDetail.TOP_RIGHT]: 'bottom-full left-full mb-3 ml-3',
  [PositionDetail.BOTTOM_LEFT]: 'top-full right-full mt-3 mr-3',
  [PositionDetail.BOTTOM]: 'top-full left-1/2 -translate-x-1/2 mt-3',
  [PositionDetail.BOTTOM_RIGHT]: 'top-full left-full mt-3 ml-3',
  [PositionDetail.LEFT]: 'top-1/2 -translate-y-1/2 right-full mr-3',
  [PositionDetail.RIGHT]: 'top-1/2 -translate-y-1/2 left-full ml-3',
};

const getDetailPositionClass = (
  position: PositionDetail = PositionDetail.RIGHT
) => DETAIL_POSITION_CLASS[position] ?? DEFAULT_DETAIL_POSITION_CLASS;

interface HeroPaginationCardProps {
  products: ProductType[];
}

export default function HeroPaginationCard({
  products,
}: HeroPaginationCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const total = products.length;

  useEffect(() => {
    if (!isPlaying || total === 0) return;
    const timeoutId = setTimeout(() => {
      setActiveIndex(prev => (prev + 1) % total);
    }, PAGINATION_TIME_MS);
    return () => clearTimeout(timeoutId);
  }, [activeIndex, isPlaying, total]);

  return (
    <div className="w-full h-full rounded-[45px] relative isolate">
      <Image
        src="/images/hero-primary-image.png"
        alt="hero-primary-image"
        fill
        className="object-contain object-left rounded-[45px] z-0"
      />
      <div className="absolute bottom-0 right-0 w-[716px] h-[483px] z-20">
        <div className="relative w-full h-full rounded-4xl">
          <Image
            src="/images/hero-products-image.png"
            alt="hero-products-image"
            fill
            className="object-cover relative z-0"
          />
          {products.map((item, index) => {
            const percentDiscount = item.percentDiscount;
            const detailPositionClass = getDetailPositionClass(item.position);
            return (
              <div
                key={index}
                style={{ left: item.x, top: item.y }}
                className="absolute w-6 h-6 z-20"
              >
                {/* mark */}
                <button
                  onClick={() => setActiveIndex(index)}
                  className="absolute left-0 top-0 cursor-pointer z-30 w-6 h-6"
                >
                  <MarkIcon />
                </button>
                {/* Detail on active */}
                {index === activeIndex && (
                  <div
                    className={cn(
                      'pointer-events-auto absolute z-40 w-[181px] rounded-xl bg-[#FEFEFEBF] backdrop-blur-xl p-4 text-primary-color border border-[#E4E4E7]',
                      detailPositionClass
                    )}
                  >
                    <div className="text-xs text-[#0037C0] font-bold">
                      {item.title}
                    </div>
                    <div className="mt-1.5 text-base text-[#212121] font-bold leading-snug line-clamp-2">
                      {item.description}
                    </div>
                    <div className="text-[10px] text-[#71717B] font-medium line-clamp-2">
                      {item.subDescription}
                    </div>
                    <div className="mt-2.5">
                      {percentDiscount !== undefined && (
                        <>
                          <span className="text-xs text-[#E7000B] font-semibold line-clamp-1">
                            โปรโมชั่นนี้เฉพาะสั่งซื้อออนไลน์เท่านั้น
                          </span>
                          <div className="flex items-center gap-x-1 text-xs text-[#71717B]">
                            <span className="line-through">
                              ฿{item.originalPrice}
                            </span>
                            {item.originalPrice && <span>ลดทันที</span>}
                            <span>฿{item.price}</span>
                          </div>
                        </>
                      )}
                      <div className="flex items-center gap-x-1">
                        <span className="text-xl text-[#E7000B] font-bold">
                          ฿{item.price}
                        </span>
                        {percentDiscount !== undefined && (
                          <DiscountBadge
                            percent={percentDiscount}
                            width={48}
                            height={22}
                            className="block"
                          />
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-x-2.5 mt-1">
                      <Button
                        variant="default"
                        className="cursor-pointer p-2 h-8"
                      >
                        <ShoppingPlusIcon />
                      </Button>
                      <Button
                        variant="danger"
                        className="cursor-pointer flex items-center h-8"
                      >
                        <ShoppingCart /> ซื้อเลย
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-4 z-10 justify-center left-0 right-0 flex items-center gap-x-4 max-w-[340px] mx-auto">
          <Button
            type="button"
            className="rounded-full w-12 h-12 bg-[#EEEEF280] border-none backdrop-blur-xl backdrop-saturate-150 text-primary-color hover:bg-white cursor-pointer"
            onClick={() => setIsPlaying(prev => !prev)}
            aria-pressed={isPlaying}
            variant={isPlaying ? 'default' : 'outline'}
          >
            {isPlaying ? <Pause /> : <Play />}
          </Button>
          <div className="bg-[#EEEEF280] backdrop-blur-xl backdrop-saturate-150 px-6 py-5 rounded-full h-12">
            <div className="flex items-center justify-center gap-4">
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
                        animationDuration: `${PAGINATION_TIME_MS}ms`,
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
