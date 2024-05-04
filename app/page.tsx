import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-around h-screen bg-black text-white">
        <div>
            <div className="text-3xl mb-8 font-bold">HOW I CREATED THIS PROJECT?</div>
            <div className=" mb-8 max-w-[70%]">
                I created this project using <strong>Next.js</strong> for the frontend, <strong>Supabase</strong> for authentication and database, <strong>Tailwind CSS</strong> for styling, and the <strong>Gemini</strong> API for fetching real-time data.
            </div>
        </div>
        <div className='flex'>
            <div>
                card1
            </div>
            <div>
                card2
            </div>
        </div>
      <Link href="/login">
        <div className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline">
          Start
        </div>
      </Link>
    </div>
  );
};

export default HomePage;
