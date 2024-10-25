import * as motion from "framer-motion/client";

export default function Home() {
  return (
    <div className=" overflow-x-hidden flex justify-center md:items-center min-h-screen text-[16px]">
      <div className="main flex flex-col gap-[20px] max-w-[500px] mx-[30px] mt-[70px] md:mx-[0px] md:mt-0">
        <div className="flex flex-col">
          <div className="mb-1 translate-x-[6px]">
            <motion.svg
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.41, type: "spring", delay: 0 }}
              style={{ width: "37px", height: "47px" }}
              width="40"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_19_5)">
                <path
                  d="M17.5864 10.0404L17.5602 9.81813C25.2571 5.49675 12.7572 -4.23239 7.44654 2.05838C-0.642969 -0.288053 -2.75687 12.214 4.18111 15.5815C4.74035 16.0139 4.65033 15.9041 4.77198 16.187C3.03926 16.3656 2.7387 17.5507 2.24897 18.6548C2.12105 18.7554 1.82163 18.7938 1.44472 18.756C0.100315 18.5615 -0.337564 20.3586 0.516542 20.9365C1.11681 21.2397 2.32447 20.2747 2.98114 19.487C3.83582 18.4609 3.77884 17.7643 4.50959 17.4765C5.52495 17.175 6.49557 18.1127 6.46424 16.2287C5.84545 14.3929 2.49028 14.122 1.66637 10.6142C1.04245 7.28888 2.51677 4.55707 5.36227 3.68185C5.63036 3.63239 6.82918 3.41039 7.42404 4.0286C7.73742 4.35396 7.78813 4.8113 7.92203 4.79463C8.07673 4.77546 8.02544 4.19698 8.24139 3.64739C9.0314 1.76914 12.0148 1.44517 13.1814 1.73969C14.8215 1.93946 17.7272 3.15532 18.3704 6.00327C18.5699 6.97435 18.5454 8.60921 17.6953 9.05349C16.9619 9.43665 16.0745 8.69423 15.6893 9.12045C15.4899 9.34107 15.7321 9.53723 15.7654 10.8367C15.7717 11.9312 15.8466 11.6872 16.7531 11.8803C17.8374 12.3296 17.8072 13.7419 16.7215 14.4304C16.2565 14.6785 16.1107 14.4985 15.7529 14.7233C15.2064 15.0667 15.4457 15.6238 14.8281 16.3198C13.9409 17.3103 13.5546 16.8872 12.6125 17.1644C12.1795 17.3867 11.8251 17.9335 11.937 18.3431C11.9763 18.4856 12.0729 18.5962 13.1455 19.2097C13.9307 19.659 13.9549 19.6431 14.0697 19.7654C14.5657 20.29 14.674 21.36 14.674 21.36C14.7811 22.6228 16.2785 24.1571 16.8392 23.9881C17.2824 23.8539 17.4804 22.5461 16.9312 21.8001C16.7061 21.4944 16.3865 21.4817 16.162 21.2341C15.4862 20.4889 15.6093 19.5806 14.5617 18.8193C16.238 18.3595 17.2092 16.8363 17.4445 15.6079C20.6487 15.0192 20.2892 10.8598 17.5864 10.0404Z"
                  fill="white"
                />
                <path
                  d="M14.093 11.1334C14.0825 13.4615 11.5703 13.4612 11.5598 11.1334C11.5717 8.80529 14.0836 8.80557 14.093 11.1334Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_19_5">
                  <rect width="20" height="24" fill="white" />
                </clipPath>
              </defs>
            </motion.svg>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.41, type: "spring", delay: 0.05 }}
            className="font-[family-name:var(--font-sf-pro-medium)] text-white"
          >
            James Bermudo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.41, type: "spring", delay: 0.1 }}
            className="font-[family-name:var(--font-sf-pro-medium)] text-[#BDBDBD]"
          >
            Designer
          </motion.p>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.41, type: "spring", delay: 0.15 }}
          className="font-[family-name:var(--font-sf-pro)] text-white"
        >
          I design websites and interfaces for early-stage startups. Over the
          years, I&apos;ve worked with ambitious founders to scale products and
          increase conversion rates.{" "}
        </motion.p>
        <ul className="flex gap-[10px] underline">
          <motion.li
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.41, type: "spring", delay: 0.2 }}
            whileHover={{ y: -2 }}
          >
            <a href="mailto:bermudo.elumba@gmail.com" target="_blank">
              Email
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.41, type: "spring", delay: 0.2 }}
            whileHover={{ y: -2 }}
          >
            <a href="https://dribbble.com/jcebermudo" target="_blank">
              Dribbble
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.41, type: "spring", delay: 0.23 }}
            whileHover={{ y: -2 }}
          >
            <a href="https://twitter.com/jcebermudo" target="_blank">
              Twitter
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.41, type: "spring", delay: 0.23 }}
            whileHover={{ y: -2 }}
          >
            <a href="https://linkedin.com/in/jcebermudo" target="_blank">
              LinkedIn
            </a>
          </motion.li>
        </ul>
      </div>
    </div>
  );
}
