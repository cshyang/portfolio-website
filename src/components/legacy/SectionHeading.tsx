import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl text-center font-medium mb-10 capitalize">
      {children}
    </h2>
  );
}

export default SectionHeading;
