"use client";

import { useEffect, useRef } from "react";

/*
  Video de fondo del hero, desenfocado. Sin audio, en loop.
  Con prefers-reduced-motion se pausa y queda el cuadro del póster.
*/
export function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true; // React no siempre refleja el atributo muted en SSR
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (query.matches) video.pause();
      else video.play().catch(() => {});
    };
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      aria-hidden
      tabIndex={-1}
      className="absolute inset-0 size-full scale-110 object-cover blur-[4px]"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
