import Logout from "@/components/mycomp/logout";
import { createClient } from "@/utils/supabase/server";
import retreiving_data from "@/components/mycomp/retreiving_data";
import Section1 from "@/components/mycomp/section1";
import Section2 from "@/components/mycomp/section2";

export default async function ProtectedPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: existingMail, error: existingMailError } = await supabase
    .from("mail")
    .select("email")
    .eq("email", user?.email);

  if (!existingMailError && !existingMail.length) {
    const { data, error: insertError } = await supabase
      .from("mail")
      .insert([{ email: user?.email }]);
    console.log(data);
    console.log(insertError);
  }
  const data = await retreiving_data({ email: user?.email });


  return(
    <div className="h-full bg-[#212121] text-white grid grid-cols-[0%_100%] xl:grid-cols-[18%_82%]">
      <div className="h-full flex flex-col justify-between ">
          <Section1 data={data}></Section1>
          <Logout/>
      </div>
      <div>
          <Section2 email={user?.email}></Section2>
      </div>
    </div>
  )
}
