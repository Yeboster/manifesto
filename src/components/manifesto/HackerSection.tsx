import { AnimatedText } from './AnimatedText';
import { Code, Search } from 'lucide-react';

export function HackerSection() {
  return (
    <>
       <div className="flex justify-center items-center gap-4 mb-8">
        <AnimatedText>
          <Code size={48} />
        </AnimatedText>
        <AnimatedText delay={0.2}>
          <Search size={48} />
        </AnimatedText>
      </div>
      <AnimatedText el="h2" className="font-headline text-5xl md:text-7xl lg:text-[clamp(2.5rem,10vw,8rem)] leading-none tracking-tighter uppercase">
        The Hacker
      </AnimatedText>
      <AnimatedText el="p" className="mt-4 text-lg md:text-xl max-w-2xl mx-auto font-body" delay={0.3}>
        Think like an outlier, investigate like a detective. Challenge assumptions, deconstruct problems, and find the elegant solution hidden in plain sight.
      </AnimatedText>
    </>
  );
}
