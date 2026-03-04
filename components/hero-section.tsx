'use client';

import { HeroMainCarousel } from './carousel/hero-main-carousel';
import { HeroCarousel } from './carousel/hero-carousel';
import type { HeroCard } from '@/types/hero';
import { PositionDetail, ProductDetailType } from '@/types/product';

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

const productDetails: ProductDetailType[] = [
  {
    title: '1',
    image: '/images/hero-primary-image.png',
    productGroupImage: '/images/hero-products-image.png',
    preProductHeaderImage: '/images/back-friday-top.png',
    preProductBgImage: '/images/back-friday.png',
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
        y: 150,
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
        y: 180,
      },
      {
        name: 'JBL3',
        title: 'หูฟัง JBL 3',
        description: 'หูฟังไร้สาย3 Sony  WH-1000XM6',
        subDescription:
          'หูฟังไร้สาย3 Sony  WH-1000XM6 สัมผัสประสบการณ์เสียงระดับพรีเมียม ระบบตัดเสียงรบกวนแบบ Adaptive Noise Cancelling อัจฉริยะ เสียงคุณภาพสูง  ใช้งานได้นานต่อเนื่อง  เหมาะสำหรับทุกไลฟ์สไตล์การฟังเพลงหรือประชุมออนไลน์',
        promotionText: '',
        position: PositionDetail.TOP,
        originalPrice: 5000,
        price: 5000,
        discountPrice: 5000,
        percentDiscount: 5,
        x: 200,
        y: 270,
      },
    ],
  },
  {
    title: '2',
    image: '/images/card1.png',
    productGroupImage: '/images/hero-products-image1.png',
    preProductHeaderImage: '/images/back-friday-top.png',
    preProductBgImage: '/images/back-friday.png',
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
        y: 150,
      },
      {
        name: 'JBL2',
        title: 'หูฟัง JBL 2',
        description: 'หูฟังไร้สาย2 Sony WH-1000XM6',
        subDescription:
          'หูฟังไร้สาย2 Sony  WH-1000XM6 สัมผัสประสบการณ์เสียงระดับพรีเมียม ระบบตัดเสียงรบกวนแบบ Adaptive Noise Cancelling อัจฉริยะ เสียงคุณภาพสูง  ใช้งานได้นานต่อเนื่อง  เหมาะสำหรับทุกไลฟ์สไตล์การฟังเพลงหรือประชุมออนไลน์',
        promotionText: 'ส่วนลด 20% สำหรับสมาชิก',
        position: PositionDetail.BOTTOM,
        originalPrice: 5000,
        price: 4000,
        discountPrice: 4000,
        percentDiscount: 20,
        x: 540,
        y: 180,
      },
      {
        name: 'JBL3',
        title: 'หูฟัง JBL 3',
        description: 'หูฟังไร้สาย3 Sony  WH-1000XM6',
        subDescription:
          'หูฟังไร้สาย3 Sony  WH-1000XM6 สัมผัสประสบการณ์เสียงระดับพรีเมียม ระบบตัดเสียงรบกวนแบบ Adaptive Noise Cancelling อัจฉริยะ เสียงคุณภาพสูง  ใช้งานได้นานต่อเนื่อง  เหมาะสำหรับทุกไลฟ์สไตล์การฟังเพลงหรือประชุมออนไลน์',
        promotionText: '',
        position: PositionDetail.TOP,
        originalPrice: 5000,
        price: 5000,
        discountPrice: 5000,
        percentDiscount: 5,
        x: 200,
        y: 270,
      },
    ],
  },
  {
    title: '3',
    image: '/images/card2.png',
    productGroupImage: '/images/hero-products-image1.png',
    preProductHeaderImage: '/images/back-friday-top.png',
    preProductBgImage: '/images/back-friday.png',
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
        y: 150,
      },
      {
        name: 'JBL2',
        title: 'หูฟัง JBL 2',
        description: 'หูฟังไร้สาย2 Sony WH-1000XM6',
        subDescription:
          'หูฟังไร้สาย2 Sony  WH-1000XM6 สัมผัสประสบการณ์เสียงระดับพรีเมียม ระบบตัดเสียงรบกวนแบบ Adaptive Noise Cancelling อัจฉริยะ เสียงคุณภาพสูง  ใช้งานได้นานต่อเนื่อง  เหมาะสำหรับทุกไลฟ์สไตล์การฟังเพลงหรือประชุมออนไลน์',
        promotionText: 'ส่วนลด 20% สำหรับสมาชิก',
        position: PositionDetail.BOTTOM,
        originalPrice: 5000,
        price: 4000,
        discountPrice: 4000,
        percentDiscount: 20,
        x: 540,
        y: 180,
      },
      {
        name: 'JBL3',
        title: 'หูฟัง JBL 3',
        description: 'หูฟังไร้สาย3 Sony  WH-1000XM6',
        subDescription:
          'หูฟังไร้สาย3 Sony  WH-1000XM6 สัมผัสประสบการณ์เสียงระดับพรีเมียม ระบบตัดเสียงรบกวนแบบ Adaptive Noise Cancelling อัจฉริยะ เสียงคุณภาพสูง  ใช้งานได้นานต่อเนื่อง  เหมาะสำหรับทุกไลฟ์สไตล์การฟังเพลงหรือประชุมออนไลน์',
        promotionText: '',
        position: PositionDetail.TOP,
        originalPrice: 5000,
        price: 5000,
        discountPrice: 5000,
        percentDiscount: 5,
        x: 200,
        y: 270,
      },
    ],
  },
];

export default function HeroSection() {
  return (
    <section className="flex flex-col gap-x-4 gap-y-6">
      <HeroMainCarousel items={productDetails} />
      <HeroCarousel items={heroCards} />
    </section>
  );
}
