"use client";
import Image from "next/image";
import React from "react";

type CompanyIconProps = {
  src: string;
  alt: string;
  brandColor?: string;
  size?: number; // px
};

export default function CompanyIcon({ src, alt, brandColor, size = 44 }: CompanyIconProps) {
  // Fixed square container for consistent alignment
  return (
    <div
      className="flex items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5 dark:bg-white/10 dark:ring-white/10"
      style={{ width: size, height: size }}
    >
      <div className="relative" style={{ width: size - 8, height: size - 8 }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="44px"
          className="object-contain"
          priority={false}
        />
      </div>
    </div>
  );
}
