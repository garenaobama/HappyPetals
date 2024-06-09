import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Images } from "@/images";
import { Icons } from "@/icons";
import { useAppSelector } from "@/store/store";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { cardVariants } from "@/ultis";
import { ProgressBar } from "../ProgressBar";
import { FunctionBar } from "../FunctionBar";
import { LayoutBody } from "../LayoutBody";

type ShowCase2Prop = {};

const Data = [
  {
    title: "Câu truyện đi cùng ta theo năm tháng...",
    content:
      '"Những câu truyện lãng mạn nhất thường đến từ những tâm hồn bay bổng. Dòng chảy suy nghĩ điểm thêm bởi những đóa hoa nở rộ, để rồi kết tinh lại thành một kiệt tác nghệ thuật nhân gian. Blooming soul mang đến những sản phẩm đến từ những câu truyện thi vị như thế..."',
    thumb: Images.HoaKho2,
  },
  {
    title: "Câu truyện đi cùng ta theo năm tháng...",
    content:
      '"Những câu truyện lãng mạn nhất thường đến từ những tâm hồn bay bổng. Dòng chảy suy nghĩ điểm thêm bởi những đóa hoa nở rộ, để rồi kết tinh lại thành một kiệt tác nghệ thuật nhân gian. Blooming soul mang đến những sản phẩm đến từ những câu truyện thi vị như thế..."',
    thumb: Images.HoaKho3,
  },
  {
    title: "Câu truyện đi cùng ta theo năm tháng...",
    content:
      '"Những câu truyện lãng mạn nhất thường đến từ những tâm hồn bay bổng. Dòng chảy suy nghĩ điểm thêm bởi những đóa hoa nở rộ, để rồi kết tinh lại thành một kiệt tác nghệ thuật nhân gian. Blooming soul mang đến những sản phẩm đến từ những câu truyện thi vị như thế..."',
    thumb: Images.HoaKho4,
  },
];

export const ShowCase2 = (): React.JSX.Element => {
  const exploreProgress = useAppSelector((state) => state.app.exploreProgress);

  return exploreProgress >= 1 ? (
    <AnimatePresence>
      <div className="fixed container flex flex-col">
        <div className="flex">
          <div
            style={{ height: "85vh" }}
            className="fixed container my-5 flex flex-col justify-center mb-5"
          >
            {exploreProgress && (
              <LayoutBody
                key={exploreProgress}
                title={Data[exploreProgress - 1].title}
                content={Data[exploreProgress - 1].content}
                thumb={Data[exploreProgress - 1].thumb}
              />
            )}
          </div>
          <ProgressBar maxProgress={3} progress={exploreProgress} />
          <FunctionBar />
        </div>
      </div>
    </AnimatePresence>
  ) : (
    <></>
  );
};
