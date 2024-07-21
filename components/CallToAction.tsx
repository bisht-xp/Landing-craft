"use client";

import ArrowIcon from "@/public/assets/arrow-right.svg";
import StarImage from "@/public/assets/star.png";
import SpringImage from "@/public/assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="common-container">
        <div className="section-heading md:relative">
          <h2 className="section-title "> Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app design to track your
            progress and motivate your efforts.
          </p>
          <motion.img
            src={StarImage.src}
            alt="Star Image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={SpringImage.src}
            alt="Spring Image"
            width={360}
            className="absolute -top-[19px] -right-[331px]"
            style={{
              translateY: translateY,
            }}
          />
        </div>
        <div className="flex gap-2 justify-center items-center mt-10">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
