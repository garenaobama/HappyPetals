import React from "react";
import { Header } from "../Header";

type MainLayoutProp = {
    children: React.ReactNode
}

export const MainLayout = ({children} : MainLayoutProp):React.JSX.Element => {
    return(<div>
        <Header></Header>
        {children}
    </div>)
}