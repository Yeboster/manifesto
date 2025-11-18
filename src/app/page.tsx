import { HeroSection } from '@/components/manifesto/HeroSection';
import { HealthSection } from '@/components/manifesto/HealthSection';
import { FunnySection } from '@/components/manifesto/FunnySection';
import { CharismaSection } from '@/components/manifesto/CharismaSection';
import { HackerSection } from '@/components/manifesto/HackerSection';
import { KissSection } from '@/components/manifesto/KissSection';
import { StickySection } from '@/components/manifesto/StickySection';

const sections = [
  { Component: HeroSection, className: 'bg-background text-foreground' },
  { Component: HealthSection, className: 'bg-[#128d55]' },
  { Component: FunnySection, className: 'bg-[#9400D3]' },
  { Component: CharismaSection, className: 'bg-[#4169E1]' },
  { Component: HackerSection, className: 'bg-[#303030]' },
  { Component: KissSection, className: 'bg-[#FF69B4]' },
];

export default function Home() {
  return (
    <main>
      {sections.map(({ Component, className }, index) => (
        <StickySection key={index} zIndex={index} className={className}>
          <Component />
        </StickySection>
      ))}
    </main>
  );
}
