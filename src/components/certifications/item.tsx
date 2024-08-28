import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Certificate } from "@/data";

const CertificateItem = ({
  name,
  org,
  href,
  imageUrl
}: Certificate) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      referrerPolicy="no-referrer"
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[64rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/5 dark:hover:bg-white/10">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[80%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className="mt-2 mb-4 leading-relaxed text-gray-700 dark:text-white/90">
            {org}
          </p>
        </div>
        <img
          alt={name}
          src={imageUrl}
          loading="lazy"
          className="absolute top-8 -right-8 w-32 sm:w-40 rounded-t-lg
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.a>
  );
}

export default CertificateItem;
