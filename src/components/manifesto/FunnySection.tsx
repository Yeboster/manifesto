import { AnimatedText } from './AnimatedText';
import { Laugh } from 'lucide-react';

export function FunnySection() {
  return (
    <>
      <AnimatedText className="flex justify-center mb-8">
        <Laugh size={48} />
      </AnimatedText>
      <AnimatedText el="h2" className="font-headline text-5xl md:text-7xl lg:text-[clamp(2.5rem,10vw,8rem)] leading-none tracking-tighter uppercase">
        HUMOR
      </AnimatedText>
      <AnimatedText el="p" className="mt-4 text-lg md:text-xl max-w-2xl mx-auto font-body" delay={0.3}>
        Why don't scientists trust atoms? Because they make up everything! Laughter is a serious business. It connects us, disarms tension, and makes the journey enjoyable.
      </AnimatedText>
    </>
  );
}
