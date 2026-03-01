import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface HeroImageCardProps {
  title: string;
  image: string;
  href: string;
  className?: string;
}

export default function HeroImageCard({
  title,
  image,
  href,
  className,
}: HeroImageCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl overflow-hidden bg-blue-100 w-full h-[200px] relative',
        className
      )}
    >
      <Link href={href}>
        <Image src={image} alt={title} layout="fill" />
      </Link>
    </div>
  );
}
