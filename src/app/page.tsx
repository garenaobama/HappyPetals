"use client"
import { Provider } from "react-redux";
import { store } from "@/store/store";
import App from "./app";
import Image from "next/image";
import { Images } from "@/images";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-appWhite">
      <Image className="fixed left-0 top-0 z-20" src={Images.CornerDecor} alt="corder" style={{width: '20%'}}/>
      <Provider store={store}>
        <App />
      </Provider>
    </main>
  );
}
