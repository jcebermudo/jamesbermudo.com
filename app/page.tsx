"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center selection:bg-[#26252A] selection:text-white">
      <div className="flex flex-col items-center justify-center gap-[10px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            className="select-none rounded-[10px]"
            src="/images/pfp.png"
            alt="Logo"
            width={80}
            height={80}
          />
        </motion.div>
        <h1 className="text-[16px] font-bold">James Bermudo</h1>
        <p className="text-[16px] font-medium max-w-[200px] text-center">
          I'm a CS student building and designing apps.
        </p>
        <div className="flex flex-row gap-[5px]">
          <Link
            href="https://github.com/jcebermudo"
            target="_blank"
            className=" cursor-pointer w-[40px] h-[40px] bg-white rounded-[10px] outline-[1px] outline-[#D9D9D9] drop-shadow-[0px_2px_1px_rgba(0,0,0,0.09)] flex flex-col items-center justify-center hover:translate-y-[-2px] transition-all duration-300"
          >
            <Image
              className="select-none"
              src="/icons/github.svg"
              alt="Github"
              width={20}
              height={16}
            />
          </Link>
          <Link
            href="https://x.com/jcebermudo"
            target="_blank"
            className=" cursor-pointer w-[40px] h-[40px] bg-white rounded-[10px] outline-[1px] outline-[#D9D9D9] drop-shadow-[0px_2px_1px_rgba(0,0,0,0.09)] flex flex-col items-center justify-center hover:translate-y-[-2px] transition-all duration-300"
          >
            <Image
              className="cursor-pointer select-none"
              src="/icons/x.svg"
              alt="X"
              width={20}
              height={14}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jcebermudo/"
            target="_blank"
            className=" cursor-pointer w-[40px] h-[40px] bg-white rounded-[10px] outline-[1px] outline-[#D9D9D9] drop-shadow-[0px_2px_1px_rgba(0,0,0,0.09)] flex flex-col items-center justify-center hover:translate-y-[-2px] transition-all duration-300"
          >
            <Image
              className="cursor-pointer select-none"
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={20}
              height={16}
            />
          </Link>
          <Link
            href="mailto:jcebermudo@gmail.com"
            target="_blank"
            className=" cursor-pointer w-[40px] h-[40px] bg-white rounded-[10px] outline-[1px] outline-[#D9D9D9] drop-shadow-[0px_2px_1px_rgba(0,0,0,0.09)] flex flex-col items-center justify-center hover:translate-y-[-2px] transition-all duration-300"
          >
            <Image
              className="cursor-pointer select-none"
              src="/icons/email.svg"
              alt="Email"
              width={20}
              height={14}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
