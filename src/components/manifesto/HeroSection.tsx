import Image from 'next/image';
import { AnimatedText } from './AnimatedText';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-visual');

  return (
    <>
      <AnimatedText el="h1" className="font-headline text-6xl md:text-8xl lg:text-9xl xl:text-[clamp(3rem,14vw,12rem)] leading-none tracking-tighter">
        Manifesto
      </AnimatedText>
      <AnimatedText el="p" className="mt-4 text-lg md:text-xl max-w-2xl mx-auto font-body" delay={0.2}>
        This is a declaration of our core principles, a compass for our journey, and a testament to our convictions. Explore the ideas that drive us.
      </AnimatedText>
      {heroImage && (
        <AnimatedText className="mt-8" delay={0.4}>
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            width={800}
            height={600}
            className="rounded-lg mx-auto shadow-2xl"
            data-ai-hint={heroImage.imageHint}
          />
        </AnimatedText>
      )}
    </>
  );
}
