import React from "react";

type ProgressBarProp = {
    progress: number,
    maxProgress: number
}

export const ProgressBar = ({ progress, maxProgress }: ProgressBarProp): React.JSX.Element => {

    return (
        <div className="h-screen items-center flex justify-center">
            <div style={{ backgroundColor: '#000' }} className="flex justify-center h-80 w-1"></div>
            <div className="fixed flex flex-col h-80 justify-between items-center">
                <Milestone current={progress === 1} />
                <Milestone current={progress === 2} />
                <Milestone current={progress === 3} />
            </div>
        </div>
    )
}

const Milestone = ({ current = false }: { current?: boolean }) => {
    return (
        !current ?
            <div className="flex justify-center items-center h-5 w-5 bg-mainTheme rotate-45 rounded-sm">

            </div>
            :
            <div className="flex justify-center items-center h-8 w-8 bg-mainTheme rotate-45 rounded-sm">
                <div className="h-2 w-2  rounded-full bg-appWhite">
                </div>
            </div>
    )
}