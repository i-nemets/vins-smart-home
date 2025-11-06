"use client";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

type Props = {
  end: number;
  suffix?: string;
  decimals?: number;
  className?: string;
};

export function CountUpStat({ end, suffix = "", decimals = 0, className }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <CountUp end={end} suffix={suffix} decimals={decimals} duration={2} />
      ) : (
        <span>0</span>
      )}
    </div>
  );
}

