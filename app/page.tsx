import DeployButton from "@/components/mycomp/deploybutton";
import Done from "@/components/mycomp/done";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-around h-screen bg-black text-white">
      <div>
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center text-sm"></div>
        </nav>
      </div>
      <div className="bg-zinc-900 rounded-xl p-4 max-w-[80%]">
        <div className="text-4xl mb-8 font-medium ">
          Project Overview
        </div>
        <div className="mb-8 flex justify-around ">
          <div className=" w-[50%]">
            <div className="flex flex-col">
              <div className="m-1">
                Frontend Framework: <strong>Next.js</strong>
              </div>
              <div className="m-1">
                Authentication and Database: <strong>Supabase</strong>
              </div>
              <div className="m-1">
                Styling: <strong>Tailwind CSS</strong>
              </div>
              <div className="m-1">
                Real-time Data Fetching:<strong>Gemini API</strong>
              </div>
              <div className="m-1">
                Deployment Platform: <strong>Vercel</strong>
              </div>
            </div>
          </div>
          <div className=" w-[60%] font-light flex flex-col justify-center mb-3 text-slate-200">
            This project used Next.js for frontend efficiency, Supabase for
            simplified backend management, Tailwind CSS for rapid styling, and
            the Gemini API for real-time data integration. Hosted on Vercel,
            it's performant, secure, and scalable, delivering a seamless user
            experience.
          </div>
        </div>
      </div>
      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <div className="flex">
          <div className="rounded-lg p-4 m-4">
            <Done />
          </div>
          <div className="rounded-lg p-4 m-4">
            <Done />
          </div>
        </div>
      </footer>
      <Link href="/login" >
        <DeployButton/>
        {/* <div className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline">
          Start
        </div> */}
      </Link>
    </div>
  );
};

export default HomePage;
