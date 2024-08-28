import { technologies } from "@/data";
import { motion } from "framer-motion";
import type { FC } from "react";

const Technologies: FC = () => (
  <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
    {
      technologies.map((skill, index) => {
        return (
          <motion.li
            key={index}
            custom={index}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: {
                opacity: 0,
                y: 100,
              },
              animate: (index: number) => ({
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.02 * index,
                },
              }),
            }}
            className="bg-gray-100 hover:bg-gray-200 rounded-xl px-4 py-2 dark:bg-white/5 dark:text-white cursor-pointer dark:hover:bg-white/10"
          >
            {skill}
          </motion.li>
        );
      })
    }
  </ul>
)

export default Technologies;
