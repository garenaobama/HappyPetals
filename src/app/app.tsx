import { MainLayout } from "@/components/MainLayout";
import { ShowCase1 } from "@/components/ShowCase1";
import { ShowCase2 } from "@/components/ShowCase2";
import { setExploreProgress } from "@/store/appState";
import { useAppDispatch, useAppSelector } from "@/store/store";
import useDetectScroll, { Direction } from "@smakss/react-scroll-direction";
import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";

export default function App() {
  const exploreProgress = useAppSelector((state) => state.app.exploreProgress);
  const dispatch = useAppDispatch();

  const { scrollDir, scrollPosition } = useDetectScroll();

  const viewPage = useRef<HTMLDivElement>(null);

  const timeRef = useRef(dayjs().format("HH:mm:ss"));

  useEffect(() => {
    window.scrollTo({ top: 5000, behavior: "smooth" });
  }, [exploreProgress]);

  useEffect(() => {
    const start = dayjs(`2000-01-01 ${timeRef.current}`);
    const end = dayjs(`2000-01-01 ${dayjs().format("HH:mm:ss")}`);
    const timeDiffMinutes = end.diff(start, "seconds");

    if (timeDiffMinutes >= 1) {
      if (scrollDir === Direction.Down) {
        if (exploreProgress < 3) {
          dispatch(setExploreProgress(exploreProgress + 1));
          timeRef.current = dayjs().format("HH:mm:ss");
        }
      }
      if (scrollDir === Direction.Up) {
        if (exploreProgress > 0) {
          dispatch(setExploreProgress(exploreProgress - 1));
          timeRef.current = dayjs().format("HH:mm:ss");
        }
      }
    }
  }, [scrollPosition]);

  return (
    <MainLayout>
      <div
        ref={viewPage}
        className="absolute bg-appWhite"
        style={{ height: 10000, width: 1 }}
      ></div>
      <ShowCase1 key={1} />
      <ShowCase2 key={2} />
    </MainLayout>
  );
}
