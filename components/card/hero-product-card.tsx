'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PositionDetail, ProductType } from '@/types/product';
import { ShoppingCart } from 'lucide-react';
import { useState, useEffect, type CSSProperties } from 'react';
import DiscountBadge from '../svg/discount-badge';
import MarkIcon from '../svg/mark-icon';
import ShoppingPlusIcon from '../svg/shoping-plus-icon';

interface ExtendedCSSProperties extends CSSProperties {
  '--mark-x'?: string;
  '--mark-y'?: string;
  '--mark-x-mobile'?: string;
  '--mark-y-mobile'?: string;
}

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

interface HeroProductCardProps {
  products: ProductType[];
}

export default function HeroProductCard({ products }: HeroProductCardProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    media.addEventListener('change', listener);
    // Defer initial check to avoid linter warning
    setTimeout(() => setIsMobile(media.matches), 0);
    return () => media.removeEventListener('change', listener);
  }, []);

  return (
    <div className="relative w-full h-full">
      {products.map((item, index) => {
        const percentDiscount = item.percentDiscount;
        const detailPositionClass = getDetailPositionClass(item.position);
        const markStyle: ExtendedCSSProperties = {
          '--mark-x': `${item.x}px`,
          '--mark-y': `${item.y}px`,
          '--mark-x-mobile': `${item.xMobile ?? item.x}px`,
          '--mark-y-mobile': `${item.yMobile ?? item.y}px`,
        };
        return (
          <div
            key={index}
            style={markStyle}
            className="absolute w-6 h-6 left-(--mark-x-mobile) top-(--mark-y-mobile) md:left-(--mark-x) md:top-(--mark-y)"
          >
            <button
              onClick={() =>
                setActiveIndex(prev => (prev === index ? null : index))
              }
              className="absolute left-0 top-0 cursor-pointer w-6 h-6"
              aria-label={`Open product ${index + 1}`}
            >
              <MarkIcon />
            </button>
            {activeIndex !== null && index === activeIndex && (
              <div
                className={cn(
                  'pointer-events-auto absolute z-50 w-[181px] rounded-xl bg-[#FEFEFEBF] backdrop-blur-xl p-2 md:p-4 text-primary-color border border-[#E4E4E7]',
                  isMobile
                    ? 'top-6 left-1/2 -translate-x-1/2'
                    : detailPositionClass
                )}
              >
                <div className="text-xs text-[#0037C0] font-bold">
                  {item.title}
                </div>
                <div className="mt-1.5 text-xs md:text-base text-[#212121] font-bold leading-snug line-clamp-1 md:line-clamp-2 ">
                  {item.description}
                </div>
                <div className="text-[10px] text-[#71717B] font-medium line-clamp-1 md:line-clamp-2">
                  {item.subDescription}
                </div>
                <div className="mt-0 md:mt-2.5">
                  {percentDiscount !== undefined && !isMobile && (
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
                    <span className="text-sm md:text-xl text-[#E7000B] font-bold">
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
                  <Button variant="default" className="cursor-pointer p-2 h-8">
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
  );
}
