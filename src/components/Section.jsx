"use client";

import React from "react";
import { cn } from "../lib/utils";
import { BackgroundLines } from "./ui/background-lines";

const Section = ({
  children,
  className,
  svgOptions,
}) => {
  return (
    <section
      className={cn(
        "relative flex flex-col items-center justify-center w-full p-4 md:p-8 lg:p-12",
        className
      )}
    >
      <BackgroundLines svgOptions={svgOptions}>
        <div className="z-10 w-full max-w-5xl">{children}</div>
      </BackgroundLines>
    </section>
  );
};

export default Section;
