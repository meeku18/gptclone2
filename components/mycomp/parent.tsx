"use client"

import { BoolProvider } from "@/store/context";
import LeftSection from "./leftSection";
import Logout from "./logout";
import RightSection from "./rightSection";

interface QuesAns {
    question: string;
    response:string;
}
export default function({email,data}:{email:string | undefined,data:QuesAns[]|undefined}){
    return (
        <BoolProvider>
            <div className="h-full bg-[#212121] text-white grid grid-cols-[18%_82%]">
            <div className="h-full flex flex-col justify-between ">
                <LeftSection data={data}></LeftSection>
                {/* <Logout /> */}
            </div>
            <div>
                <RightSection email={email}></RightSection>
            </div>
            </div>
        </BoolProvider>
    )
}