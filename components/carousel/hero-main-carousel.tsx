'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  HERO_PAGINATION_TIME_MS,
  HeroPagination,
} from '../pagination/hero-pagination';
import HeroProductCard from '../card/hero-product-card';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '../ui/carousel';
import { ProductDetailType } from '@/types/product';

type HeroMainCarouselProps = {
  items: ProductDetailType[];
};

export function HeroMainCarousel({ items }: HeroMainCarouselProps) {
  const heroCardCount = items.length;
  const showInlinePreview = heroCardCount > 1;
  const [heroBannerApi, setHeroBannerApi] = useState<CarouselApi | null>(null);
  const [heroBannerIndex, setHeroBannerIndex] = useState(0);
  const [isHeroBannerPlaying, setIsHeroBannerPlaying] = useState(true);

  useEffect(() => {
    if (!heroBannerApi) return;
    const updateIndex = () => {
      setHeroBannerIndex(heroBannerApi.selectedScrollSnap());
    };
    updateIndex();
    heroBannerApi.on('select', updateIndex);
    heroBannerApi.on('reInit', updateIndex);
    return () => {
      heroBannerApi.off('select', updateIndex);
      heroBannerApi.off('reInit', updateIndex);
    };
  }, [heroBannerApi]);

  useEffect(() => {
    if (!heroBannerApi) return;
    heroBannerApi.reInit();
  }, [heroBannerApi, heroCardCount]);

  useEffect(() => {
    if (!heroBannerApi || !isHeroBannerPlaying || heroCardCount <= 1) return;
    const timeoutId = setTimeout(() => {
      heroBannerApi.scrollTo((heroBannerIndex + 1) % heroCardCount);
    }, HERO_PAGINATION_TIME_MS);
    return () => clearTimeout(timeoutId);
  }, [heroBannerApi, heroBannerIndex, isHeroBannerPlaying, heroCardCount]);

  if (heroCardCount === 0) {
    return null;
  }

  if (heroCardCount === 1) {
    return (
      <div className="mt-[70px] h-[412px] w-full relative">
        <div className="relative h-full w-full overflow-hidden rounded-[48px]">
          <Image
            src={items[0].image}
            alt={items[0].title}
            fill
            className="h-full w-full object-cover select-none"
            draggable={false}
          />
          {items[0].productGroupImage && (
            <div className="absolute bottom-0 right-0 z-40 h-[483px] w-[716px]">
              <div className="relative h-full w-full">
                <Image
                  src={items[0].productGroupImage}
                  fill
                  alt={items[0].title}
                  className="pointer-events-none"
                />
                {items[0].product?.length ? (
                  <div className="absolute inset-0 z-20">
                    <HeroProductCard products={items[0].product} />
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-[70px] h-[412px] w-full relative">
      <div className="relative h-[412px] w-full max-w-[1360px] [--hero-next-width:clamp(0px,calc((100vw-1024px)*1.1),369px)] [--hero-gap:clamp(0px,calc((100vw-1024px)*0.05),16px)]">
        <Carousel
          className="h-[412px] w-full"
          opts={{ align: 'start', loop: true, watchDrag: false }}
          setApi={setHeroBannerApi}
        >
          <CarouselContent
            className="h-[412px] ml-0 select-none"
            viewportClassName="overflow-visible"
          >
            {items.map((heroCard, index) => {
              const isActive = index === heroBannerIndex;

              return (
                <CarouselItem
                  key={heroCard.title + index}
                  className={cn(
                    'h-[412px] pl-0 transition-opacity duration-500 ease-out basis-full max-w-full opacity-0',
                    isActive && 'opacity-100 animate-[hero-fade_500ms_ease-out]'
                  )}
                >
                  <div
                    className={cn(
                      'relative h-full w-full rounded-[48px]',
                      showInlinePreview &&
                        isActive &&
                        'flex min-[1192px]:gap-[var(--hero-gap)]'
                    )}
                  >
                    <div
                      className={cn(
                        'relative h-full w-full rounded-[48px]',
                        showInlinePreview &&
                          isActive &&
                          'min-[1192px]:w-[calc(100%-var(--hero-next-width)-var(--hero-gap))] min-[1192px]:flex-none'
                      )}
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-[48px]">
                        <Image
                          src={heroCard.image}
                          alt={heroCard.title}
                          fill
                          className="h-full w-full object-bottom-left rounded-[48px] object-contain select-none"
                          priority={index === 0}
                          draggable={false}
                        />
                      </div>
                      {heroCard.productGroupImage && (
                        <div className="absolute bottom-0 right-0 z-40 h-[483px] w-[716px]">
                          <div className="relative h-full w-full">
                            <Image
                              src={heroCard.productGroupImage}
                              fill
                              alt={heroCard.title}
                              className="pointer-events-none"
                            />
                            {isActive && heroCard.product?.length ? (
                              <div className="absolute inset-0 z-20">
                                <HeroProductCard products={heroCard.product} />
                              </div>
                            ) : null}
                          </div>
                        </div>
                      )}
                    </div>
                    {showInlinePreview && isActive && (
                      <div className="relative hidden h-full overflow-hidden rounded-[48px] min-[1192px]:block min-[1192px]:w-[var(--hero-next-width)] min-[1192px]:flex-none">
                        <Image
                          src={items[(index + 1) % heroCardCount].image}
                          alt={items[(index + 1) % heroCardCount].title}
                          fill
                          className="h-full w-full object-cover select-none"
                          draggable={false}
                        />
                      </div>
                    )}
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
      <HeroPagination
        total={heroCardCount}
        activeIndex={heroBannerIndex}
        onSelect={index => heroBannerApi?.scrollTo(index)}
        showPlay
        isPlaying={isHeroBannerPlaying}
        onTogglePlay={() => setIsHeroBannerPlaying(prev => !prev)}
        showProgress
        progressDurationMs={HERO_PAGINATION_TIME_MS}
      />
    </div>
  );
}
