import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StickySectionProps {
  children: ReactNode;
  className?: string;
  zIndex: number;
}

export function StickySection({ children, className, zIndex }: StickySectionProps) {
  return (
    <section
      className={cn(
        'h-screen w-full sticky top-0 flex flex-col items-center justify-center p-8 text-white overflow-hidden shadow-[0_-8px_32px_rgba(0,0,0,0.2)]',
        className
      )}
      style={{ zIndex }}
    >
      <div className="container mx-auto max-w-4xl flex items-center justify-center">
        {children}
      </div>
    </section>
  );
}
