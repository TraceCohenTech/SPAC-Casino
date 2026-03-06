import { useEffect, useState } from 'react';

export function useCountUp({ end, duration = 2000, enabled = true }: { end: number; duration?: number; enabled?: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [end, duration, enabled]);

  return value;
}
