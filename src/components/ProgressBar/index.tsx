import React from "react";

type ProgressBarProp = {
  progress: number;
  maxProgress: number;
};

export const ProgressBar = ({
  progress,
  maxProgress,
}: ProgressBarProp): React.JSX.Element => {
  return (
    <div className="h-screen items-center flex justify-center">
      <div
        style={{ backgroundColor: "#000" }}
        className="flex justify-center h-80 w-1"
      ></div>
      <div className="fixed flex flex-col h-80 justify-between items-center">
        <Milestone current={progress === 1} />
        <Milestone current={progress === 2} />
        <Milestone current={progress === 3} />
      </div>
    </div>
  );
};

const Milestone = ({ current = false }: { current?: boolean }) => {
  return !current ? (
    <div className="flex justify-center items-center h-3 w-3 2xl:h-5 2xl:w-5 bg-mainTheme rotate-45 rounded-sm"></div>
  ) : (
    <div className="flex justify-center items-center h-4 w-4 2xl:h-8 2xl:w-8 bg-mainTheme rotate-45 rounded-sm">
      <div className="h-1 w-1 2xl:h-2 2xl:w-2  rounded-full bg-appWhite"></div>
    </div>
  );
};
