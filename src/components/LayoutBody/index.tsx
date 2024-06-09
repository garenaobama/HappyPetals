import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";
import { Images } from "@/images";
import { cardVariants } from "@/ultis";

type LayoutBodyProps = {
  title: string;
  content: string;
  thumb: StaticImageData;
  variants?: Variants;
};

export const LayoutBody = ({
  title,
  content,
  thumb,
  variants,
}: LayoutBodyProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-2 gap-2 md:gap-5 2xl:gap-20 relative py-5">
      <div className="relative flex flex-col col-span-1 md:col-span-2 xl:col-span-1 justify-center">
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
        >
          <div className="flex flex-col gap-10 pl-24">
            <p className="text-xl md:text-4xl lg:text-5xl 2xl:text-6xl text-black p-3">
              {title}
            </p>
            <p className="text-base md:text-xl lg:text-2xl 2xl:text-4xl p-3">
              {content}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="offscreen"
          viewport={{ once: true, amount: 0.8 }}
          whileInView="onscreen"
          variants={cardVariants}
        >
          <Image
            className="absolute bottom-0 rotate-[-27deg]"
            src={Images.CornerFlower1}
            width={200}
            height={200}
            alt="corner_image"
          />
        </motion.div>
      </div>
      <motion.div
        className="flex items-center p-7 overflow-hidden"
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
      >
        <Image alt="thumbnail" sizes="" src={thumb} />
      </motion.div>
    </div>
  );
};
