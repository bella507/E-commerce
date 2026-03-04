'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Pause, Play } from 'lucide-react';

export const HERO_PAGINATION_TIME_MS = 10000;

export interface HeroPaginationProps {
  total: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  showPlay?: boolean;
  isPlaying?: boolean;
  onTogglePlay?: () => void;
  showProgress?: boolean;
  progressDurationMs?: number;
  className?: string;
}

export function HeroPagination({
  total,
  activeIndex,
  onSelect,
  showPlay = false,
  isPlaying = false,
  onTogglePlay,
  showProgress = false,
  progressDurationMs = HERO_PAGINATION_TIME_MS,
  className,
}: HeroPaginationProps) {
  if (total <= 1) {
    return null;
  }

  return (
    <div
      className={cn(
        'absolute bottom-4 z-10 justify-center left-0 right-0 flex items-center gap-x-4 max-w-[340px] mx-auto',
        className
      )}
    >
      {showPlay && (
        <Button
          type="button"
          className="rounded-full w-12 h-12 bg-[#EEEEF280] border-none backdrop-blur-xl backdrop-saturate-150 text-primary-color hover:bg-white cursor-pointer"
          onClick={onTogglePlay}
          aria-pressed={isPlaying}
          variant={isPlaying ? 'default' : 'outline'}
        >
          {isPlaying ? <Pause /> : <Play />}
        </Button>
      )}
      <div className="bg-[#EEEEF280] backdrop-blur-xl backdrop-saturate-150 px-6 py-5 rounded-full h-12">
        <div className="flex items-center justify-center gap-4">
          {Array.from({ length: total }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => onSelect(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                'relative h-2 rounded-full transition-all overflow-hidden cursor-pointer',
                index === activeIndex ? 'w-10 bg-[#71717B]' : 'w-2 bg-[#71717B]'
              )}
            >
              {showProgress && index === activeIndex && (
                <span
                  key={`progress-${activeIndex}-${isPlaying}`}
                  className="absolute inset-y-0 left-0 block h-full w-full origin-left rounded-full bg-primary-color"
                  style={{
                    animationName: isPlaying ? 'pagination-progress' : 'none',
                    animationDuration: `${progressDurationMs}ms`,
                    animationTimingFunction: 'linear',
                    animationFillMode: 'forwards',
                    animationPlayState: isPlaying ? 'running' : 'paused',
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 py-5 h-12 rounded-full bg-[#EEEEF280] backdrop-blur-xl backdrop-saturate-150 text-primary-color flex items-center text-lg font-semibold">
        <span>
          {activeIndex + 1}/{total}
        </span>
      </div>
    </div>
  );
}
