import { AnimatedText } from './AnimatedText';

export function HeroSection() {
  return (
    <>
      <AnimatedText el="h1" className="font-headline text-6xl md:text-8xl lg:text-9xl xl:text-[clamp(3rem,14vw,12rem)] leading-none tracking-tighter uppercase">
        Manifesto
      </AnimatedText>
      <AnimatedText el="p" className="mt-4 text-lg md:text-xl max-w-2xl mx-auto font-body" delay={0.2}>
        This is a declaration of our core principles, a compass for our journey, and a testament to our convictions. Explore the ideas that drive us.
      </AnimatedText>
    </>
  );
}
