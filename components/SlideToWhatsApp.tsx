"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export function SlideToWhatsApp() {
  const width = 300;
  const x = useMotionValue(0);
  const progress = useTransform(x, [0, width], [0, width]);
  const [completed, setCompleted] = useState(false);

  function handleDragEnd() {
    if (x.get() >= width - 10) {
      setCompleted(true);

      setTimeout(() => {
        window.open("https://wa.me/5511999999999", "_blank");
        x.set(0);
        setCompleted(false);
      }, 300);
    } else {
      x.set(0);
    }
  }

  return (
    <div className="relative w-[300px] h-[70px] rounded-full bg-[#d7c2bd]/90 overflow-hidden">
      <motion.div
        style={{ width: progress }}
        className="absolute  left-0 top-0 h-full bg-white/70"
      />

      <div className="absolute  inset-0 flex items-center justify-center text-[#a06b3f] font-semibold pointer-events-none">
        {completed ? "Abrindo WhatsApp..." : "Arraste para agendar"}
      </div>

      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: width }}
        style={{ x }}
        onDragEnd={handleDragEnd}
        className="absolute left-0 top-0 h-full w-[70px] rounded-full bg-white flex items-center justify-center cursor-grab active:cursor-grabbing shadow-md"
      >
        <Image src="/zap.png" alt="WhatsApp" width={30} height={30} />
      </motion.div>
    </div>
  );
}
