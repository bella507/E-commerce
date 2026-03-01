import HeroImageCard from './card/hero-image-card';
import HeroPaginationCard from './card/hero-pagination-card';

export default function HeroSection() {
  const heroCards = [
    {
      title: '1',
      image: '/images/card.webp',
      href: '/',
    },
    {
      title: '2',
      image: '/images/card.webp',
      href: '/',
    },
    {
      title: '3',
      image: '/images/card.webp',
      href: '/',
    },
  ];

  return (
    <section className="flex flex-col gap-x-4 gap-y-6">
      <div className="flex gap-x-4 mt-[70px]">
        <div className="w-full h-[400px] rounded-[45px] bg-blue-100 relative">
          <HeroPaginationCard />
        </div>
        <div className="w-full max-w-[370px] h-[400px] rounded-[45px] bg-blue-100 relative"></div>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        {heroCards.map(heroCard => (
          <HeroImageCard key={heroCard.title} {...heroCard} />
        ))}
      </div>
    </section>
  );
}
