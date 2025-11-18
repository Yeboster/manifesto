import { AnimatedText } from './AnimatedText';
import { Smile } from 'lucide-react';

export function FunnySection() {
  return (
    <div className="text-center">
      <AnimatedText className="flex justify-center mb-8">
        <Smile size={48} />
      </AnimatedText>
      <AnimatedText el="h2" className="font-headline font-bold text-5xl md:text-8xl lg:text-[clamp(3rem,12vw,10rem)] leading-none tracking-tighter uppercase">
        HUMOR
      </AnimatedText>
      <AnimatedText el="p" className="mt-4 text-lg md:text-xl max-w-2xl mx-auto font-body" delay={0.3}>
        Why don't scientists trust atoms? Because they make up everything! Laughter is a serious business. It connects us, disarms tension, and makes the journey enjoyable.
      </AnimatedText>
    </div>
  );
}
