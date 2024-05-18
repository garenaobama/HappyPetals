import { Images } from "@/images";
import Image from "next/image";
import React from "react";

type HeaderProp = {
}

export const Header = ({} : HeaderProp):React.JSX.Element => {
    return(
    <div className="border-b-2">
       <div className="rounded-full border-2 border-current">
            <Image width={50} height={50} alt="app_icon" src={Images.AppIcon}></Image>
       </div>
    </div>
    )
}