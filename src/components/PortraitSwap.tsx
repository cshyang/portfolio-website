"use client";

import Image from "next/image";
import { useState } from "react";

export default function PortraitSwap() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <button
      className="v2-portrait-swap"
      type="button"
      data-revealed={isRevealed}
      aria-pressed={isRevealed}
      aria-label={isRevealed ? "Show confident portrait" : "Show laughing portrait"}
      onClick={() => setIsRevealed((current) => !current)}
    >
      <span className="v2-portrait-label">Hello, I’m Shyang.</span>
      <Image
        className="v2-portrait-base"
        src="/images/avatars/shyang-confident.png"
        alt="Shyang smiling with arms crossed"
        fill
        priority
        sizes="(min-width: 900px) 30vw, 100vw"
      />
      <Image
        className="v2-portrait-laugh"
        src="/images/avatars/shyang-laughing.png"
        alt="Illustrated portrait of Shyang laughing"
        fill
        priority
        sizes="(min-width: 900px) 30vw, 100vw"
      />
      <span className="v2-portrait-hint" aria-hidden="true">
        Tap for the other me
      </span>
    </button>
  );
}
