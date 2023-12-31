import type { FC } from "react";
import { motion } from "framer-motion";

const links = [
  {
    name: "#home",
    hash: "#home",
  },
  {
    name: "#about",
    hash: "#about",
  },
  {
    name: "#skills",
    hash: "#skills",
  },
  // {
  //   name: "#technologies",
  //   hash: "#technologies",
  // },
  {
    name: "#certifications",
    hash: "#certifications",
  },
  {
    name: "#experience",
    hash: "#experience",
  },
  {
    name: "#projects",
    hash: "#projects",
  },
  {
    name: "#contact",
    hash: "#contact",
  },
] as const;

const Header: FC = () => (
  <header className="z-[999] relative">
  <motion.div
    className="fixed bottom-0 left-1/2 h-[4.5rem] w-full rounded-none border-t sm:border bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:bottom-6 sm:h-[3.25rem] sm:w-[46rem] sm:rounded-full dark:bg-gray-950 dark:border-gray-600 dark:bg-opacity-75"
    initial={{ y: -100, x: "-50%", opacity: 0 }}
    animate={{ y: 0, x: "-50%", opacity: 1 }}
  />
  <nav
    className="flex fixed bottom-[1.5rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:bottom-[1.7rem] sm:h-[initial] sm:py-0"
  >
    <ul
      className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-4"
    >
      {
        links.map((link) => (
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            key={link.hash}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <a
              href={link.hash}
              className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-200"
            >
              {link.name}
            </a>
          </motion.li>
        ))
      }
    </ul>
  </nav>
</header>
)

export default Header;
