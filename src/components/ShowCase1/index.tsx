import React from "react";
import Image from "next/image";
import { Images } from "@/images";
import { Icons } from "@/icons";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { motion } from "framer-motion";
import { LayoutBody } from "../LayoutBody";

type ShowCase1Prop = {};

export const ShowCase1 = ({}: ShowCase1Prop): React.JSX.Element => {
  const exploreProgress = useAppSelector((state) => state.app.exploreProgress);
  const dispatch = useAppDispatch();

  const handleOnNextProgress = () => {
    window.scrollBy(0, 50);
  };

  return exploreProgress == 0 ? (
    <div
      style={{ height: "85vh" }}
      className="fixed container my-5 flex flex-col justify-center mb-5"
    >
      <LayoutBody
        title="Câu truyện đi cùng ta theo năm tháng..."
        content='"Những câu truyện lãng mạn nhất thường đến từ những tâm hồn
                bay bổng. Dòng chảy suy nghĩ điểm thêm bởi những đóa hoa nở rộ,
                để rồi kết tinh lại thành một kiệt tác nghệ thuật nhân gian.
                Blooming soul mang đến những sản phẩm đến từ những câu truyện
                thi vị như thế..."'
        thumb={Images.HoaKho1}
      />

      <div className="flex justify-center">
        <ExploreButton onClick={handleOnNextProgress} />
      </div>
    </div>
  ) : (
    <></>
  );
};

export const ExploreButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: "100%" }}
    >
      <button onClick={onClick}>
        <div className="rounded-full p-3 justify-center flex gap-2 border-2">
          <p>Khám phá câu truyện</p>
          <Image alt="arrow icon" src={Icons.ArrowDown} />
        </div>
      </button>
    </motion.div>
  );
};
