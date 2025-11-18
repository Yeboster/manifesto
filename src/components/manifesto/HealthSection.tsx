import { AnimatedText } from './AnimatedText';
import { BrainCircuit, HeartPulse } from 'lucide-react';

export function HealthSection() {
  return (
    <>
      <div className="flex justify-center items-center gap-4 mb-8">
        <AnimatedText>
          <BrainCircuit size={48} />
        </AnimatedText>
        <AnimatedText delay={0.2}>
          <HeartPulse size={48} />
        </AnimatedText>
      </div>
      <AnimatedText el="h2" className="font-headline text-5xl md:text-7xl lg:text-[clamp(2.5rem,10vw,8rem)] leading-none tracking-tighter">
        Wellness
      </AnimatedText>
      <AnimatedText el="p" className="mt-4 text-lg md:text-xl max-w-2xl mx-auto font-body" delay={0.3}>
        Cultivate a sound mind and a strong body. True strength is holistic, balancing mental clarity with physical vitality. Prioritize self-care as the foundation of all achievement.
      </AnimatedText>
    </>
  );
}
