'use client';

import { useEffect, useState } from 'react';
import { HeroMainCarousel } from './carousel/hero-main-carousel';
import { HeroCarousel } from './carousel/hero-carousel';
import { HeroPagination } from './pagination/hero-pagination';
import type { HeroCard, HeroSecondaryCard } from '@/types/hero';
import { PositionDetail, HeroMainCarouselType } from '@/types/product';
import { HeroSecondaryCarousel } from './carousel/hero-secondary-carousel';
import { type CarouselApi } from './ui/carousel';

export const HERO_PAGINATION_TIME_MS = 10000;

const heroCards: HeroCard[] = [
  {
    title: '1',
    image: '/images/card1.png',
    href: '/',
  },
  {
    title: '2',
    image: '/images/card2.png',
    href: '/',
  },
  {
    title: '3',
    image: '/images/card3.png',
    href: '/',
  },
  {
    title: '4',
    image: '/images/card1.png',
    href: '/',
  },
  {
    title: '5',
    image: '/images/card3.png',
    href: '/',
  },
];

const heroSecondaryCards: HeroSecondaryCard[] = [
  {
    title: '1',
    preProductHeaderImage: '/images/back-friday-top.png',
    preProductBgImage: '/images/back-friday.png',
  },
  {
    title: '2',
    preProductHeaderImage: '/images/back-friday-top.png',
    preProductBgImage: '/images/back-friday.png',
  },
  {
    title: '3',
    preProductHeaderImage: '/images/back-friday-top.png',
    preProductBgImage: '/images/back-friday.png',
  },
];

const heroMainCards: HeroMainCarouselType[] = [
  {
    title: '1',
    image: '/images/hero-primary-image.png',
    productGroupImage: '/images/hero-products-image.png',
    product: [
      {
        name: 'JBL',
        title: 'หูฟัง JBL',
        description: 'หูฟังไร้สาย JBL Soundgear Clips Black',
        subDescription:
          'หูฟังไร้สาย Sony WH-1000XM6 สัมผัสประสบการณ์เสียงระดับพรีเมียม ระบบตัดเสียงรบกวนแบบ Adaptive Noise Cancelling อัจฉริยะ เสียงคุณภาพสูง  ใช้งานได้นานต่อเนื่อง  เหมาะสำหรับทุกไลฟ์สไตล์การฟังเพลงหรือประชุมออนไลน์',
        promotionText: 'ส่วนลด 10% สำหรับสมาชิก',
        position: PositionDetail.LEFT,
        originalPrice: 5000,
        price: 4500,
        discountPrice: 4500,
        percentDiscount: 10,
        x: 370,
        xMobile: 210,
        y: 150,
        yMobile: 55,
      },
      {
        name: 'JBL2',
        title: 'หูฟัง JBL 2',
        description: 'หูฟังไร้สาย2 Sony WH-1000XM6',
        subDescription:
          'หูฟังไร้สาย2 Sony  WH-1000XM6 สัมผัสประสบการณ์เสียงระดับพรีเมียม ระบบตัดเสียงรบกวนแบบ Adaptive Noise Cancelling อัจฉริยะ เสียงคุณภาพสูง  ใช้งานได้นานต่อเนื่อง  เหมาะสำหรับทุกไลฟ์สไตล์การฟังเพลงหรือประชุมออนไลน์',
        promotionText: 'ส่วนลด 20% สำหรับสมาชิก',
        position: PositionDetail.LEFT,
        originalPrice: 5000,
        price: 4000,
        discountPrice: 4000,
        percentDiscount: 20,
        x: 540,
        xMobile: 130,
        y: 180,
        yMobile: 80,
      },
      {
        name: 'JBL3',
        title: 'หูฟัง JBL 3',
        description: 'หูฟังไร้สาย3 Sony  WH-1000XM6',
        subDescription:
          'หูฟังไร้สาย3 Sony  WH-1000XM6 สัมผัสประสบการณ์เสียงระดับพรีเมียม ระบบตัดเสียงรบกวนแบบ Adaptive Noise Cancelling อัจฉริยะ เสียงคุณภาพสูง  ใช้งานได้นานต่อเนื่อง  เหมาะสำหรับทุกไลฟ์สไตล์การฟังเพลงหรือประชุมออนไลน์',
        promotionText: '',
        position: PositionDetail.TOP_RIGHT,
        originalPrice: 5000,
        price: 5000,
        discountPrice: 5000,
        percentDiscount: 5,
        x: 200,
        xMobile: 280,
        y: 270,
        yMobile: 70,
      },
    ],
  },
  {
    title: '2',
    image: '/images/hero-primary-image.png',
    productGroupImage: '/images/hero-products-image.png',
    product: [
      {
        name: 'JBL',
        title: 'หูฟัง JBL',
        description: 'หูฟังไร้สาย JBL Soundgear Clips Black',
        subDescription:
          'หูฟังไร้สาย Sony WH-1000XM6 สัมผัสประสบการณ์เสียงระดับพรีเมียม ระบบตัดเสียงรบกวนแบบ Adaptive Noise Cancelling อัจฉริยะ เสียงคุณภาพสูง  ใช้งานได้นานต่อเนื่อง  เหมาะสำหรับทุกไลฟ์สไตล์การฟังเพลงหรือประชุมออนไลน์',
        promotionText: 'ส่วนลด 10% สำหรับสมาชิก',
        position: PositionDetail.LEFT,
        originalPrice: 5000,
        price: 4500,
        discountPrice: 4500,
        percentDiscount: 10,
        x: 370,
        xMobile: 210,
        y: 150,
        yMobile: 55,
      },
      {
        name: 'JBL2',
        title: 'หูฟัง JBL 2',
        description: 'หูฟังไร้สาย2 Sony WH-1000XM6',
        subDescription:
          'หูฟังไร้สาย2 Sony  WH-1000XM6 สัมผัสประสบการณ์เสียงระดับพรีเมียม ระบบตัดเสียงรบกวนแบบ Adaptive Noise Cancelling อัจฉริยะ เสียงคุณภาพสูง  ใช้งานได้นานต่อเนื่อง  เหมาะสำหรับทุกไลฟ์สไตล์การฟังเพลงหรือประชุมออนไลน์',
        promotionText: 'ส่วนลด 20% สำหรับสมาชิก',
        position: PositionDetail.LEFT,
        originalPrice: 5000,
        price: 4000,
        discountPrice: 4000,
        percentDiscount: 20,
        x: 540,
        xMobile: 130,
        y: 180,
        yMobile: 80,
      },
      {
        name: 'JBL3',
        title: 'หูฟัง JBL 3',
        description: 'หูฟังไร้สาย3 Sony  WH-1000XM6',
        subDescription:
          'หูฟังไร้สาย3 Sony  WH-1000XM6 สัมผัสประสบการณ์เสียงระดับพรีเมียม ระบบตัดเสียงรบกวนแบบ Adaptive Noise Cancelling อัจฉริยะ เสียงคุณภาพสูง  ใช้งานได้นานต่อเนื่อง  เหมาะสำหรับทุกไลฟ์สไตล์การฟังเพลงหรือประชุมออนไลน์',
        promotionText: '',
        position: PositionDetail.TOP_RIGHT,
        originalPrice: 5000,
        price: 5000,
        discountPrice: 5000,
        percentDiscount: 5,
        x: 200,
        xMobile: 280,
        y: 270,
        yMobile: 70,
      },
    ],
  },
  {
    title: '3',
    image: '/images/hero-primary-image.png',
    productGroupImage: '/images/hero-products-image.png',
    product: [
      {
        name: 'JBL',
        title: 'หูฟัง JBL',
        description: 'หูฟังไร้สาย JBL Soundgear Clips Black',
        subDescription:
          'หูฟังไร้สาย Sony WH-1000XM6 สัมผัสประสบการณ์เสียงระดับพรีเมียม ระบบตัดเสียงรบกวนแบบ Adaptive Noise Cancelling อัจฉริยะ เสียงคุณภาพสูง  ใช้งานได้นานต่อเนื่อง  เหมาะสำหรับทุกไลฟ์สไตล์การฟังเพลงหรือประชุมออนไลน์',
        promotionText: 'ส่วนลด 10% สำหรับสมาชิก',
        position: PositionDetail.LEFT,
        originalPrice: 5000,
        price: 4500,
        discountPrice: 4500,
        percentDiscount: 10,
        x: 370,
        xMobile: 210,
        y: 150,
        yMobile: 55,
      },
      {
        name: 'JBL2',
        title: 'หูฟัง JBL 2',
        description: 'หูฟังไร้สาย2 Sony WH-1000XM6',
        subDescription:
          'หูฟังไร้สาย2 Sony  WH-1000XM6 สัมผัสประสบการณ์เสียงระดับพรีเมียม ระบบตัดเสียงรบกวนแบบ Adaptive Noise Cancelling อัจฉริยะ เสียงคุณภาพสูง  ใช้งานได้นานต่อเนื่อง  เหมาะสำหรับทุกไลฟ์สไตล์การฟังเพลงหรือประชุมออนไลน์',
        promotionText: 'ส่วนลด 20% สำหรับสมาชิก',
        position: PositionDetail.LEFT,
        originalPrice: 5000,
        price: 4000,
        discountPrice: 4000,
        percentDiscount: 20,
        x: 540,
        xMobile: 130,
        y: 180,
        yMobile: 80,
      },
      {
        name: 'JBL3',
        title: 'หูฟัง JBL 3',
        description: 'หูฟังไร้สาย3 Sony  WH-1000XM6',
        subDescription:
          'หูฟังไร้สาย3 Sony  WH-1000XM6 สัมผัสประสบการณ์เสียงระดับพรีเมียม ระบบตัดเสียงรบกวนแบบ Adaptive Noise Cancelling อัจฉริยะ เสียงคุณภาพสูง  ใช้งานได้นานต่อเนื่อง  เหมาะสำหรับทุกไลฟ์สไตล์การฟังเพลงหรือประชุมออนไลน์',
        promotionText: '',
        position: PositionDetail.TOP_RIGHT,
        originalPrice: 5000,
        price: 5000,
        discountPrice: 5000,
        percentDiscount: 5,
        x: 200,
        xMobile: 280,
        y: 270,
        yMobile: 70,
      },
    ],
  },
];

export default function HeroSection() {
  const heroCardCount = heroMainCards.length;
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
    if (!heroBannerApi || !isHeroBannerPlaying || heroCardCount <= 1) return;
    const timeoutId = setTimeout(() => {
      heroBannerApi.scrollTo((heroBannerIndex + 1) % heroCardCount);
    }, HERO_PAGINATION_TIME_MS);
    return () => clearTimeout(timeoutId);
  }, [heroBannerApi, heroBannerIndex, isHeroBannerPlaying, heroCardCount]);

  return (
    <section className="flex flex-col gap-x-4 gap-y-2 md:gap-y-6 w-full">
      <div className="h-[280px] md:h-[483px] w-full relative">
        <div className="flex flex-wrap xl:flex-nowrap items-end h-full relative gap-x-2 md:gap-x-4">
          <HeroMainCarousel
            items={heroMainCards}
            heroBannerApi={heroBannerApi}
            heroBannerIndex={heroBannerIndex}
            onApiChange={setHeroBannerApi}
          />
          <HeroSecondaryCarousel items={heroSecondaryCards} />
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
      <HeroCarousel items={heroCards} />
    </section>
  );
}
