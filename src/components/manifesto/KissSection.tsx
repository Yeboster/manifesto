import { AnimatedText } from './AnimatedText';

export function KissSection() {
  return (
    <>
      <AnimatedText el="h2" className="font-headline text-5xl md:text-7xl lg:text-[clamp(2.5rem,10vw,8rem)] leading-none tracking-tighter uppercase">
        K.I.S.S.
      </AnimatedText>
      <AnimatedText el="p" className="mt-4 text-lg md:text-xl max-w-2xl mx-auto font-body" delay={0.3}>
        Keep It Simple, Stupid. Simplicity is the ultimate sophistication. Complexity is easy, simplicity is hard. Strive for clarity and focus in all things.
      </AnimatedText>
    </>
  );
}
