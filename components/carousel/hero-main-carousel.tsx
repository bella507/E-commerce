'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import HeroProductCard from '../card/hero-product-card';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '../ui/carousel';
import { HeroMainCarouselType } from '@/types/product';

type HeroMainCarouselProps = {
  items: HeroMainCarouselType[];
  heroBannerApi: CarouselApi | null;
  heroBannerIndex: number;
  onApiChange: (api: CarouselApi) => void;
};

export function HeroMainCarousel({
  items,
  heroBannerApi,
  heroBannerIndex,
  onApiChange,
}: HeroMainCarouselProps) {
  const heroCardCount = items.length;

  useEffect(() => {
    if (!heroBannerApi) return;
    heroBannerApi.reInit();
  }, [heroBannerApi, heroCardCount]);

  if (heroCardCount === 0) {
    return null;
  }

  if (heroCardCount === 1) {
    return (
      <div className="relative w-full rounded-[24px] md:rounded-[36px] lg:rounded-[48px] h-[280px] md:h-[483px]">
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
    );
  }

  return (
    <Carousel
      className="flex-1 relative max-w-full md:max-w-full xl:max-w-[974px] overflow-hidden"
      opts={{ align: 'start', loop: true, watchDrag: false }}
      setApi={onApiChange}
    >
      <CarouselContent className="items-end h-[280px] md:h-[483px] relative ml-0 select-none">
        {items.map((heroCard, index) => {
          const isActive = index === heroBannerIndex;
          return (
            <CarouselItem
              key={heroCard.title + index}
              className="h-[220px] md:h-[412px] pl-0.5 basis-full max-w-full"
            >
              <div className="relative h-full w-full rounded-[24px] md:rounded-[36px] lg:rounded-[48px]">
                <Image
                  src={heroCard.image}
                  alt={heroCard.title}
                  fill
                  className="h-full w-full object-bottom-left rounded-[24px] md:rounded-[36px] lg:rounded-[48px] object-contain select-none"
                  priority={index === 0}
                  draggable={false}
                />
                {heroCard.productGroupImage && (
                  <div className="absolute bottom-0 right-0 z-40 w-full md:w-[716px] h-[290px] md:h-[483px]">
                    <div className="relative h-full w-full">
                      <Image
                        src={heroCard.productGroupImage}
                        fill
                        alt={heroCard.title}
                        className="pointer-events-none"
                      />
                      {isActive && heroCard.product?.length ? (
                        <div className="absolute z-20">
                          <HeroProductCard products={heroCard.product} />
                        </div>
                      ) : null}
                    </div>
                  </div>
                )}
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
