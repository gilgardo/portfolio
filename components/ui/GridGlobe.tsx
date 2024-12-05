"use client";
import React from "react";
import dynamic from "next/dynamic";
import { globeConfig, sampleArcs } from "@/data/globeCofig";

const World = dynamic(() => import("./Globe").then((m) => m.World), {
  ssr: false,
});

export function GridGlobe() {
  return (
    <div className="flex items-center justify-center absolute -left-5 top-36 md:top-40 w-full h-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96  px-4">
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
