import { AnimatedText } from './AnimatedText';
import { Handshake, Star } from 'lucide-react';

export function CharismaSection() {
  return (
    <>
      <div className="flex justify-center items-center gap-4 mb-8">
        <AnimatedText>
          <Star size={48} />
        </AnimatedText>
        <AnimatedText delay={0.2}>
          <Handshake size={48} />
        </AnimatedText>
      </div>
      <AnimatedText el="h2" className="font-headline font-bold text-5xl md:text-8xl lg:text-[clamp(3rem,12vw,10rem)] leading-none tracking-tighter uppercase">
        Charisma
      </AnimatedText>
      <AnimatedText el="p" className="mt-4 text-lg md:text-xl max-w-2xl mx-auto font-body" delay={0.3}>
        Build bridges, not walls. Charisma is authenticity amplified. Trust is the currency of connection, earned through integrity and consistent action.
      </AnimatedText>
    </>
  );
}
