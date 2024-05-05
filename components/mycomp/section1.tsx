"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import NewChatbutton from "./newChatbutton";

interface QuesAns {
  question: string;
  response: string;
}

const Section1 = ({ data }: { data: QuesAns[] | undefined }) => {
  const [allQuesAns, setAllQuesAns] = useState<QuesAns[]>(
    data || [{ question: "", response: "" }]
  );
  return (
    <div className="w-full bg-[#171717] h-full flex flex-col justify-between">
      <NewChatbutton/>
      {allQuesAns.length > 0 && (
        <div className="overflow-y-auto h-[87vh]">
          {allQuesAns.length > 0 &&
            allQuesAns.toReversed().map((qa, index) => (
              <button
                key={index}
                className="flex justify-between items-center hover:bg-zinc-800 rounded-md ml-2 pr-2 h-[36px] w-[230px] hover:bg-zinc-700ff"
              >
                <div className="text-sm pl-2 font-extralight">
                  {`${qa.question[0].toUpperCase()}${qa.question.substring(
                    1,
                    23
                  )}`}
                  ...
                </div>
                <div>
                  <div className="flex items-center justify-center h-[36px] w-[50px]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon-md w-[18px] h-[18px] mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon-md w-[18px] h-[18px]"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
            ))}
        </div>
      )}
    </div>
  );
};
export default Section1;
