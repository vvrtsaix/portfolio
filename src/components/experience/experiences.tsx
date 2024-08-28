import { type FC, useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { experiences, type Experience } from "@/data";

const Experiences: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  return (
    <div ref={ref} className="relative flex flex-col gap-8 xl:gap-10">
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-[18px] top-5 -z-10 h-full w-1 origin-top bg-gray-800 dark:bg-gray-100 xl:top-12 xl:left-[26px] rounded-full"
      />
      {experiences?.map((cur, idx) => (
        <HistoryItem key={idx} index={idx} data={cur} />
      ))}
    </div>
  );
};

export default Experiences;

const HistoryItem: FC<{ index: number; data: Experience }> = ({ index, data }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.5 1", "0 0"]
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.4], [0.2, 1]);

  return (
    <motion.div
      ref={ref}
      key={index}
      className="flex flex-col gap-4"
    >
      <motion.div
        className="flex w-full flex-row items-center gap-2 xl:gap-4"
        style={{ opacity: opacityProgress }}
      >
        <div className="grid h-10 w-10 place-content-center rounded-full border-2 border-gray-800 dark:border-gray-100 bg-gray-50 dark:bg-gray-900 text-center text-sm font-medium text-gray-800 aspect-square xl:h-14 xl:w-14 xl:text-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-gray-700 dark:text-white/70 w-4 h-4 xl:w-6 xl:h-6 lucide lucide-code-2" viewBox="0 0 24 24" >
            <path d="m18 16 4-4-4-4M6 8l-4 4 4 4m8.5-12-5 16" />
          </svg >
        </div>
        <div>
          <div className="text-base xl:text-lg">
            {data.company}
          </div>
          <div className="text-xs xl:text-sm text-gray-700 dark:text-white/90">
            {data.date}
          </div>
        </div>
      </motion.div>
      <motion.article
        className="ml-10 flex flex-col bg-gray-100 border border-black/5 rounded-lg hover:bg-gray-200 transition dark:text-white dark:bg-white/5 dark:hover:bg-white/10 p-4 xl:ml-14 xl:flex-row xl:p-6"
        style={{ scale: scaleProgress, opacity: opacityProgress }}
      >
        <div className="flex flex-1 flex-col justify-center">
          <h3 className="text-lg font-bold xl:text-xl">
            {data.position}
          </h3>
          <ul className="mt-2 text-gray-700 dark:text-white/90 leading-relaxed list-disc list-inside">
            {data.details.map((detail, index) => (<li key={index}>{detail}</li>))}
          </ul>
        </div>
      </motion.article>
    </motion.div>
  );
};
