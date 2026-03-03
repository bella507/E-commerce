import { PositionDetail, ProductType } from '@/types/product';
import HeroImageCard from './card/hero-image-card';
import HeroPaginationCard from './card/hero-pagination-card';
import Image from 'next/image';

const heroCards = [
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
];

const products: ProductType[] = [
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
];

export default function HeroSection() {
  return (
    <section className="flex flex-col gap-x-4 gap-y-6">
      <div className="flex gap-x-4 mt-[70px]">
        <div className="w-full min-w-[800px] h-[412px] rounded-[45px] relative">
          <HeroPaginationCard products={products} />
        </div>
        <div className="w-full lg:block hidden max-w-[369px] h-[412px] rounded-[45px] relative">
          <div className="absolute left-0 -top-[70px] w-full h-[200px] z-10">
            <Image
              src="/images/back-friday-top.png"
              alt="back-friday-top"
              fill
            />
          </div>
          <Image src="/images/back-friday.png" alt="back-friday" fill />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        {heroCards.map(heroCard => (
          <HeroImageCard key={heroCard.title} {...heroCard} />
        ))}
      </div>
    </section>
  );
}
