import { Images } from "@/images"
import Image from "next/image"
import React from "react"

type FunctionBarProp = {
}
export const FunctionBar = ({ }: FunctionBarProp): React.JSX.Element => {
    return(
        <div className="fixed flex bottom-0">
            <button className="flex border-t-2 border-r-2 border-l-2 p-2 items-center rounded-t-3xl">
                <Image width={50} height={50} src={Images.MesengerIcon} alt="messengericon"/>
                <p>Liên hệ đặt hàng</p>
            </button>
        </div>
    )
}