"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./CanvasRevealEffect";
import { approachPhases } from "@/data";

export function MyApproach() {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4 ">
        {approachPhases.map(
          ({ title, description, order, containerClassName, colors }) => {
            return (
              <Card
                title={title}
                description={description}
                key={title}
                order={"PHASE " + order}
              >
                <CanvasRevealEffect
                  animationSpeed={3}
                  containerClassName={containerClassName}
                  colors={colors}
                  dotSize={2}
                />
              </Card>
            );
          }
        )}
      </div>
    </section>
  );
}

const Card = ({
  title,
  children,
  description,
  order,
}: {
  title: string;
  children?: React.ReactNode;
  description?: string;
  order: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      className="relative  inline-flex overflow-hidden 
    focus:outline-none md:w-60 md:mt-10 border rounded-3xl group/canvas-card items-center justify-center  max-w-sm w-full lg:h-[20rem] px-[0.10rem] mx-auto h-[30rem]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
      bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
      />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center gap-3
          rounded-3xl overflow-hidden bg-slate-950 px-7 backdrop-blur-3xl`}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="absolute z-10  px-8 w-full">
          <div className="text-center my-auto text-purple text-3xl lg:text-xl font-bold group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200">
            {order}
          </div>

          <h2 className="text-center text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10  mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-6 transition duration-200">
            {title}
          </h2>
          <h2
            style={{ color: "e4ecff" }}
            className="text-center text-sm text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10  mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-6 transition duration-200"
          >
            {description}
          </h2>
        </div>
      </span>
    </div>
  );
};

export default MyApproach;
