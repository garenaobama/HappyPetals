import React from "react";
import Image from "next/image";
import { Images } from "@/images";
import { Icons } from "@/icons";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { motion } from "framer-motion";

type ShowCase1Prop = {

}

export const ShowCase1 = ({ }: ShowCase1Prop): React.JSX.Element => {
    const exploreProgress = useAppSelector((state) => state.app.exploreProgress)
    const dispatch = useAppDispatch();

    const handleOnNextProgress = () => {
        window.scrollBy(0, 50);
    }

    return (exploreProgress == 0 ? <div style={{ height: '85vh' }} className="fixed container mt-20 flex flex-col justify-center mb-5">
        <div className="grid grid-cols-2 gap-20 relative">
            <div className="relative flex flex-col">
                <motion.div initial={{ opacity: 0, x: "-100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "100%" }}>
                    <div className="flex flex-col gap-10 pl-24">
                        <p className="text-6xl text-gray-500">Câu truyện đi cùng ta theo năm tháng...</p>
                        <p className="text-3xl">&quot;Hoa khô, với vẻ đẹp vĩnh cửu, luôn mang trong mình một câu chuyện vĩnh hằng trong trái tim của những người yêu hoa. Chúng không phải chỉ là những bông hoa tàn úa, mà còn là biểu tượng của sự kiên nhẫn và sự sống mãi mãi&quot;</p>
                    </div>
                </motion.div>

                <Image className="absolute bottom-0 rotate-[-27deg]" src={Images.CornerFlower1} width={200} height={200} alt="corner_image" />
            </div>
            <motion.div initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}>
                <Image alt="thumbnail" width={500} height={500} src={Images.HoaKho1} />
            </motion.div>

        </div>
        <div className="flex justify-center mt-20">
            <ExploreButton onClick={handleOnNextProgress} />
        </div>
    </div> : <></>)
}

export const ExploreButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: "100%" }}>
            <button onClick={onClick}>
                <div className="rounded-full p-3 justify-center flex gap-2 border-2">
                    <p>Khám phá câu truyện</p>
                    <Image alt="arrow icon" src={Icons.ArrowDown} />
                </div>
            </button>
        </motion.div>
    )
}