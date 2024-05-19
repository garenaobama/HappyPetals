import { Images } from "@/images";
import { useAppSelector } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

type HeaderProp = {
}

export const Header = ({ }: HeaderProp): React.JSX.Element => {
    const scrollIndex = useAppSelector(state => state.app.scrollIndex);

    useEffect(()=> {
      console.log(scrollIndex);
      
    },[scrollIndex])

    return (
        <div className="relative flex justify-center h-16 bg-white items-center">
            <div className="fixed w-full flex justify-center items-center border-b-2 border-black h-16 bg-appWhite z-10">
              <HeaderLink href={'#'} title="Showcase"/>
              <HeaderLink  href={'#'} title="Sản phẩm"/>
              <div style={{width: 150, height:150}}></div>
              <HeaderLink  href={'#'} title="Về chúng tôi"/>
              <HeaderLink href={'#'} title="Liên hệ"/>
            </div>
            <div className="fixed flex rounded-full  border-mainTheme bg-white z-10">
                <Image width={50} height={50} alt="app_icon" src={Images.CircleFlower1}></Image>
            </div>
            <div style={{height: 30, bottom: -30}} className="fixed top-0 translate-y-16 z-10 flex rounded-b-md px-5  border-mainTheme bg-mainTheme">
              <p className="text-appWhite">Happy Petals</p>
            </div>
        </div>
    )
}

const HeaderLink = ({
  href,
  title
} : {
  href: string,
  title: string
}) => {
  return (
    <Link className="m-5" href={href}><p>{title}</p></Link>
  )
}