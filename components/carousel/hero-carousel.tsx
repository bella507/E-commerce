'use client';

import { useRef } from 'react';
import HeroImageCard from '../card/hero-image-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import type { HeroCard } from '@/types/hero';

type HeroCarouselProps = {
  items: HeroCard[];
};

export function HeroCarousel({ items }: HeroCarouselProps) {
  const heroCardCount = items.length;
  const heroCardsAutoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  if (heroCardCount === 0) {
    return null;
  }

  if (heroCardCount === 1) {
    return (
      <div className="grid grid-cols-1">
        <HeroImageCard {...items[0]} />
      </div>
    );
  }

  if (heroCardCount <= 2) {
    return (
      <div
        className={`flex gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-4 ${heroCardCount === 2 && 'grid-cols-2'}`}
      >
        {items.map(heroCard => (
          <HeroImageCard key={heroCard.title} {...heroCard} />
        ))}
      </div>
    );
  }

  return (
    <Carousel
      className="w-full"
      opts={{ align: 'start', loop: true }}
      plugins={[heroCardsAutoplay.current]}
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {items.map(heroCard => (
          <CarouselItem
            key={heroCard.title}
            className="basis-1/2 pl-2 sm:basis-1/3 md:pl-4"
          >
            <HeroImageCard {...heroCard} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 hidden xl:flex" />
      <CarouselNext className="right-2 hidden xl:flex" />
    </Carousel>
  );
}
