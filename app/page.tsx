"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="overflow-x-hidden overflow-y-auto w-full h-screen flex flex-col items-center justify-center selection:bg-[#26252A] selection:text-white p-[30px]">
      <div className="flex flex-col items-center justify-center gap-[10px] max-w-[450px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
          className="relative"
        >
          
          <Image
            className="select-none rounded-full"
            src="/images/pfp.png"
            alt="Logo"
            width={80}
            height={80}
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)", scale: 0.9 }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          transition={{
            duration: 0.4,
            type: "spring",
            stiffness: 100,
            delay: 0.2,
          }}
          className="text-[16px] font-bold"
        >
          James Bermudo
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40, filter: "blur(10px)", scale: 0.9 }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          transition={{
            duration: 0.4,
            type: "spring",
            stiffness: 100,
            delay: 0.4,
          }}
          className="text-[16px] font-medium max-w-[200px] text-center"
        >
          I&apos;m a CS student building and designing apps.
        </motion.p>
        <div className="flex flex-row gap-[5px]">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)", scale: 0.9 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 100,
              delay: 0.6,
            }}
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)", scale: 0.9 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 100,
              delay: 0.7,
            }}
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)", scale: 0.9 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 100,
              delay: 0.8,
            }}
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)", scale: 0.9 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 100,
              delay: 0.9,
            }}
          >
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
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)", scale: 0.9 }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          transition={{
            duration: 0.4,
            type: "spring",
            stiffness: 100,
            delay: 1,
          }}
          className="w-full flex flex-row gap-[5px] items-center justify-center"
        >
          <hr className="w-full border-t-[1px] border-dashed border-[#C3C3C3] my-[20px]" />
          <p className="select-none text-[15px] w-full min-w-[170px] text-center font-medium text-[#9F9F9F]">
            Things I&apos;ve worked on
          </p>
          <hr className="w-full border-t-[1px] border-dashed border-[#C3C3C3] my-[20px]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)", scale: 0.9 }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          transition={{
            duration: 0.4,
            type: "spring",
            stiffness: 100,
            delay: 1.1,
          }}
        >
          <Link
            href="https://extensionideas.com"
            target="_blank"
            className="w-full flex flex-col gap-[5px] items-start justify-start p-[20px] bg-white rounded-[10px] outline-[1px] outline-[#D9D9D9] drop-shadow-[0px_1px_0.8px_rgba(0,0,0,0.1)] hover:translate-y-[-2px] transition-all duration-300"
          >
            <h2 className="font-bold text-[16px]">Extension Ideas</h2>
            <span className="italic text-[14px] text-[#60606C]">
              extensionideas.com
            </span>
            <p className="text-[16px] font-normal">
              Find winning Chrome extension ideas from user reviews.
            </p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
