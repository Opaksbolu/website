"use client";

// import { Separator } from "@/components/ui/separator";
import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

export const AboutSection = () => {
  const reduceMotion = useReducedMotion();

  const FORCE_MOTION = false;

  const [isDesktop, setIsDesktop] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const enableMotion = FORCE_MOTION ? true : (isDesktop ? true : !reduceMotion);

  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 bg-background relative overflow-hidden"
    >
      <div className="flex justify-center">
        <div className="w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <header className="text-center space-y-1">
              <h2 className="relative inline-block text-xs font-black uppercase tracking-[0.5em] text-accent">
                <span
                  aria-hidden
                  className="
                    absolute inset-0
                    text-transparent
                    [-webkit-text-stroke:0.85px_var(--color-border)]
                    dark:[-webkit-text-stroke:0.85px_theme(colors.border.muted)]
                    pointer-events-none
                  "
                >
                  {/* 1 - HEADER TITLE TEXT */}
                  About
                </span>
                <span className="relative">About</span>
              </h2>

              <h3 className="text-5xl md:text-6xl font-black tracking-tighter italic leading-[1.05]">
                <span className="inline-grid overflow-visible">
                  <span
                    aria-hidden
                    className="
                      col-start-1 row-start-1
                      text-transparent
                      [-webkit-text-stroke:1.6px_var(--color-border)]
                      dark:[-webkit-text-stroke:1.6px_theme(colors.border.muted)]
                      pointer-events-none
                      pr-[0.55em]
                    "
                  >
                    {/* 2a - HEADER TITLE TEXT - Outline/Bottom Layer */}
                    My Background
                  </span>

                  <span
                    className="
                      col-start-1 row-start-1
                      pr-[0.55em]
                      bg-linear-to-b from-primary via-primary to-primary/70
                      bg-clip-text text-transparent
                    "
                  >
                    {/* 2b - HEADER TITLE TEXT - Fill/Top Layer */}
                    My Background
                  </span>
                </span>
              </h3>
            </header>

            {/* BODY */}
            <div className="mx-auto w-full max-w-4xl space-y-6 text-left">
              <p className="text-center text-3xl md:text-4xl font-semibold leading-[1.2] tracking-tight text-foreground">
                {/* 3a - BODY TEXT #1 */}
                Insert text here
                {" "}
                <motion.span
                  className="
                    inline-grid italic overflow-visible
                    pr-[0.25em] relative left-1
                    will-change-transform
                  "
                  animate={
                    enableMotion
                      ? {
                          x: [0, -1, 1, -1, 0],
                          y: [0, -1, 0, -1, 0],
                          scale: [1, 1.01, 0.99, 1.01, 1],
                        }
                      : undefined
                  }
                  transition={
                    enableMotion
                      ? {
                          duration: 2,
                          ease: "easeInOut",
                          repeat: Infinity,
                        }
                      : undefined
                  }
                >
                  <span
                    aria-hidden
                    className="
                      col-start-1 row-start-1
                      text-transparent
                      [-webkit-text-stroke:1.1px_rgba(255,120,60,0.45)]
                      dark:[-webkit-text-stroke:1.1px_rgba(255,150,105,0.30)]
                      pointer-events-none
                      pr-[0.25em]
                    "
                  >
                    {/* 4a - BODY ANIMATED TEXT - Outline/Bottom Layer */}
                    motionText
                  </span>

                  <span
                    className="
                      col-start-1 row-start-1
                      pr-[0.25em]
                      bg-linear-to-b from-accent/85 via-accent/60 to-accent/35
                      bg-clip-text text-transparent
                    "
                  >
                    {/* 4b - BODY ANIMATED TEXT - Fill/Top Layer */}
                    motionText
                  </span>
                </motion.span>{" "}
                {/* 3b - BODY TEXT #2 */}
                Insert More Text Here
              </p>

              <p className="text-center text-muted-foreground leading-relaxed font-medium">
                {/* 5 - BODY PARAGRAPH TEXT */}
                Insert paragraph here.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
