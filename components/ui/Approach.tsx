"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./CanvasRevealEffect";
import { approachPhases } from "@/data";
import { FaCheckDouble } from "react-icons/fa6";

export function MyApproach() {
  return (
    <section className="w-full py-20 mb-5">
      <h1 className="heading text-white">
        My <span className="text-purple">Approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4 ">
        {approachPhases.map(
          ({ title, description, order, bgColor, colors }) => {
            const titleColor = bgColor.split("-")[1];
            return (
              <Card
                title={title}
                description={description}
                key={title}
                order={"Phase-" + order}
                titleColor={titleColor}
              >
                <CanvasRevealEffect
                  animationSpeed={3}
                  containerClassName={bgColor}
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
  titleColor,
  children,
  description,
  order,
}: {
  title: string;
  titleColor?: string;
  children?: React.ReactNode;
  description?: string;
  order: string;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="relative  inline-flex overflow-hidden 
    focus:outline-none border rounded-3xl group/canvas-card items-center justify-center  max-w-sm w-full lg:h-[20rem] px-[0.10rem] mx-auto h-[20rem]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
      bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
      />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center gap-3
          rounded-3xl overflow-hidden bg-slate-950 backdrop-blur-3xl`}
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
        <div className="relative z-20 w-full">
          <button
            style={{ color: titleColor, borderColor: titleColor }}
            className="absolute w-[80%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
            flex justify-between items-center  mx-auto border  px-6 py-4 rounded-3xl  my-auto lg:text-xl text-lg font-bold group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200"
          >
            {order}
            <FaCheckDouble />
          </button>

          <h2
            style={{ color: titleColor }}
            className="text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10  mt-4  font-bold group-hover/canvas-card:text-purple group-hover/canvas-card:-translate-y-6 transition duration-200"
          >
            {title}
          </h2>
          <h2 className="text-center text-sm text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10  mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-6 transition duration-200">
            {description}
          </h2>
        </div>
      </span>
    </div>
  );
};

export default MyApproach;
