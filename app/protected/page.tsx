import LeftSection from "@/components/mycomp/leftSection";
import RightSection from "@/components/mycomp/rightSection";
import Logout from "@/components/mycomp/logout";
import { createClient } from "@/utils/supabase/server";
import retreiving_data from "@/components/mycomp/retreiving_data";
import Parent from "@/components/mycomp/parent";

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
    <div className="w-full h-full bg-[#212121]">
      <div>
        <Parent email={user?.email} data={data}/>
      </div>
      <div className="w-[18%]">
        <Logout></Logout>
      </div>
    </div>
  )
}
