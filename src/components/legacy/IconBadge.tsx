"use client";
import React from "react";

export default function IconBadge({
  children,
  size = 72,
  offsetY = -3,
}: {
  children: React.ReactNode;
  size?: number;
  offsetY?: number; // px fine-tuning
}) {
  // Normalize vector icon sizing and baseline to avoid visual vertical offset
  const innerSize = Math.max(0, size - 20);
  let content = children;
  if (React.isValidElement(children)) {
    const prevStyle = (children.props as any)?.style || {};
    content = React.cloneElement(children as React.ReactElement<any>, {
      // react-icons honor `size` prop for pixel sizing
      size: innerSize,
      style: {
        display: "block",
        width: innerSize,
        height: innerSize,
        lineHeight: 0,
        verticalAlign: "middle",
        transform: `translateY(${offsetY}px)`,
        ...prevStyle,
      },
    });
  }

  return (
    <div
      className="flex items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5 dark:bg-white/10 dark:ring-white/10"
      style={{ width: size, height: size, lineHeight: 0, textAlign: "center" }}
    >
      <div
        className="flex items-center justify-center"
        style={{ width: innerSize, height: innerSize, lineHeight: 0 }}
      >
        {content}
      </div>
    </div>
  );
}
