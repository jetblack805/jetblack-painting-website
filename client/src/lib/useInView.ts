import { useEffect, useRef, useState } from "react";

export function useInView(margin = "-100px") {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: margin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [visible, margin]);

  return { ref, visible };
}
