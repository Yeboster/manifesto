import { AnimatedText } from './AnimatedText';
import { Gem } from 'lucide-react';

export function KissSection() {
  return (
    <>
      <AnimatedText className="flex justify-center mb-8">
        <Gem size={48} />
      </AnimatedText>
      <AnimatedText el="h2" className="font-headline font-bold text-6xl md:text-8xl lg:text-[clamp(3rem,12vw,10rem)] leading-none tracking-tighter uppercase">
        K.I.S.S.
      </AnimatedText>
      <AnimatedText el="p" className="mt-4 text-lg md:text-xl max-w-2xl mx-auto font-body" delay={0.3}>
        Keep It Simple, Stupid. Simplicity is the ultimate sophistication. Complexity is easy, simplicity is hard. Strive for clarity and focus in all things.
      </AnimatedText>
    </>
  );
}
