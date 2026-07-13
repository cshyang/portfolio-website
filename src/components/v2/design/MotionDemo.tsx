"use client";

import { useState } from "react";

export default function MotionDemo() {
  const [playKey, setPlayKey] = useState(0);

  return (
    <div className={`ds-reveal-box${playKey ? " is-playing" : ""}`}>
      <div className="ds-reveal-subject" key={playKey}>
        <h3>Section reveal</h3>
        <p>Clip-path opens upward with a slight rise — the site&rsquo;s entrance move.</p>
      </div>
      <button type="button" onClick={() => setPlayKey((k) => k + 1)}>
        Replay
      </button>
    </div>
  );
}
