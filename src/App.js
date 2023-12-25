import React from "react";
import { Random } from "./components/Random";
import { Tag } from "./components/Tag";
export default function App() {
  return(
    <div className="w-full h-full flex flex-col background items-center">

        <h1 className="bg-white rounded-md mt-8 w-11/12 text-center text-2xl font-bold px-8 py-2">RANDOM GIFS</h1>

        <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
            <Random />
            <Tag/>
        </div>
    </div>
  );
}