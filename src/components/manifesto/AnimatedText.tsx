"use client";

import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  el?: ElementType;
  delay?: number;
}

export function AnimatedText({
  children,
  className,
  el: Wrapper = "div",
  delay = 0,
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(ref.current!);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, []);

  return (
    <Wrapper
      ref={ref}
      className={cn(className, isInView ? "animate-fade-in-up" : "opacity-0")}
      style={{ animationDelay: `${delay}s`}}
    >
      {children}
    </Wrapper>
  );
}
