import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

type HeroSecondaryCarouselProps = {
  items: {
    title: string;
    preProductHeaderImage: string;
    preProductBgImage: string;
  }[];
};

export function HeroSecondaryCarousel({ items }: HeroSecondaryCarouselProps) {
  const HeroSecondaryAutoplay = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );
  return (
    <Carousel
      className="hidden xl:flex w-[160px] md:w-[200px] lg:w-[280px] xl:w-[369px] "
      opts={{ align: 'start', loop: true }}
      plugins={[HeroSecondaryAutoplay.current]}
    >
      <CarouselContent className="-ml-2 md:-ml-4 h-[280px] md:h-[350px] lg:h-[483px] items-end">
        {items.map(item => (
          <CarouselItem
            key={item.title}
            className="pl-2 md:pl-4 h-[220px] md:h-[290px] lg:h-[412px] flex relative items-end"
          >
            <div className="relative w-[160px] md:w-[200px] lg:w-[280px] xl:w-[369px] h-[220px] md:h-[290px] lg:h-[412px] rounded-[24px] md:rounded-[36px] lg:rounded-[48px]">
              <Image
                fill
                alt={item.title}
                src={item.preProductBgImage}
                className="h-full w-full rounded-[24px] md:rounded-[36px] lg:rounded-[48px] object-cover select-none"
                draggable={false}
              />
              <div className="absolute -top-8 md:-top-12 lg:-top-16 left-0 right-0 z-20 w-full h-[80px] md:h-[120px] lg:h-[200px]">
                <Image
                  src={item.preProductHeaderImage}
                  alt={item.title}
                  fill
                  className="object-contain"
                  draggable={false}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
