import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Images } from "@/images";
import { Icons } from "@/icons";
import { useAppSelector } from "@/store/store";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { cardVariants } from "@/ultis";
import { ProgressBar } from "../ProgressBar";
import { FunctionBar } from "../FunctionBar";

type ShowCase2Prop = {
}

export const ShowCase2 = (): React.JSX.Element => {

    const exploreProgress = useAppSelector((state) => state.app.exploreProgress)

    return (exploreProgress >= 1 ?
        <AnimatePresence>
            <div className="fixed container flex flex-col">
                <div className="flex">
                {
                    exploreProgress === 1 ? <div className="grid grid-cols-2 gap-20 relative items-center h-screen">
                        <div className="relative flex flex-col">
                            <motion.div
                                initial={{ opacity: 0, y: "-100%" }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: "100%" }} className="flex flex-col gap-10 pl-24">
                                <p className="text-6xl text-black">Câu truyện đi cùng ta theo năm tháng...</p>
                                <p className="text-3xl">&quot;Hoa khô, với vẻ đẹp vĩnh cửu, luôn mang trong mình một câu chuyện vĩnh hằng trong trái tim của những người yêu hoa. Chúng không phải chỉ là những bông hoa tàn úa, mà còn là biểu tượng của sự kiên nhẫn và sự sống mãi mãi&quot;</p>
                            </motion.div>
                            <motion.div initial="offscreen"
                                viewport={{ once: true, amount: 0.8 }}
                                whileInView="onscreen" variants={cardVariants}>
                                <Image className="absolute bottom-0 rotate-[-27deg]" src={Images.CornerFlower1} width={200} height={200} alt="corner_image" />
                            </motion.div>
                        </div>
                        <motion.div initial={{ opacity: 0, x: "-100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}>
                            <Image alt="thumbnail" width={500} height={500} src={Images.HoaKho2} />
                        </motion.div>
                    </div> : null
                }

                {
                    exploreProgress === 2 ? <div className="grid grid-cols-2 gap-20 relative items-center h-screen">
                        <div className="relative flex flex-col">
                            <motion.div
                                initial={{ opacity: 0, y: "-100%" }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: "100%" }} className="flex flex-col gap-10 pl-24">
                                <p className="text-6xl text-black">Câu truyện đi cùng ta theo năm tháng...</p>
                                <p className="text-3xl">&quot;Hoa khô, với vẻ đẹp vĩnh cửu, luôn mang trong mình một câu chuyện vĩnh hằng trong trái tim của những người yêu hoa. Chúng không phải chỉ là những bông hoa tàn úa, mà còn là biểu tượng của sự kiên nhẫn và sự sống mãi mãi&quot;</p>
                            </motion.div>
                            <motion.div initial="offscreen"
                                viewport={{ once: true, amount: 0.8 }}
                                whileInView="onscreen" variants={cardVariants}>
                                <Image className="absolute bottom-0 rotate-[-27deg]" src={Images.CornerFlower1} width={200} height={200} alt="corner_image" />
                            </motion.div>                        </div>
                        <motion.div initial={{ opacity: 0, x: "-100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}>
                            <Image alt="thumbnail" width={500} height={500} src={Images.HoaKho3} />
                        </motion.div>
                    </div> : null
                }

                {
                    exploreProgress === 3 ? <div className="grid grid-cols-2 gap-20 relative items-center h-screen">
                        <div className="relative flex flex-col">
                            <motion.div
                                initial={{ opacity: 0, y: "-100%" }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: "100%" }} className="flex flex-col gap-10 pl-24">
                                <p className="text-6xl text-black">Câu truyện đi cùng ta theo năm tháng...</p>
                                <p className="text-3xl">&quot;Hoa khô, với vẻ đẹp vĩnh cửu, luôn mang trong mình một câu chuyện vĩnh hằng trong trái tim của những người yêu hoa. Chúng không phải chỉ là những bông hoa tàn úa, mà còn là biểu tượng của sự kiên nhẫn và sự sống mãi mãi&quot;</p>
                            </motion.div>
                            <motion.div initial="offscreen"
                                viewport={{ once: true, amount: 0.8 }}
                                whileInView="onscreen" variants={cardVariants}>
                                <Image className="absolute bottom-0 rotate-[-27deg]" src={Images.CornerFlower1} width={200} height={200} alt="corner_image" />
                            </motion.div>                        </div>
                        <motion.div initial={{ opacity: 0, x: "-100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}>
                            <Image alt="thumbnail" width={500} height={500} src={Images.HoaKho4} />
                        </motion.div>
                    </div> : null
                }
                <ProgressBar maxProgress={3} progress={exploreProgress}/>
                <FunctionBar/>
                </div>
            </div>

        </AnimatePresence>
        : <></>)
}

export const ExploreButton = () => {
    return (
        <button>
            <div className="rounded-full p-3 justify-center flex gap-2 border-2">
                <p>Khám phá câu truyện</p>
                <Image alt="arrow icon" src={Icons.ArrowDown} />
            </div>
        </button>
    )
}