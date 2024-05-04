import LeftSection from "@/components/mycomp/leftSection";
import RightSection from "@/components/mycomp/rightSection";
import Logout from "@/components/mycomp/logout";
import { createClient } from "@/utils/supabase/server";
import retreiving_data from "@/components/mycomp/retreiving_data";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user?.email);

  const { data: existingMail, error: existingMailError } = await supabase
  .from('mail')
  .select('email')
  .eq('email', user?.email);
  console.log(existingMail);
  console.log(existingMailError);
// If the email doesn't exist, insert it
  if (!existingMailError && !existingMail.length) {
    const { data, error: insertError } = await supabase
      .from('mail')
      .insert([{ email: user?.email }]);
      console.log(data);
      console.log(insertError);
  }
  const data = await retreiving_data({email:user?.email});
  return(
    <div className="h-full bg-[#212121] text-white grid grid-cols-[18%_82%]">
      <div className="h-full flex flex-col justify-between ">
        <LeftSection data={data}></LeftSection>
        <Logout/>
      </div>
      <div>
          <RightSection email={user?.email}></RightSection>
      </div>
    </div> 
  );
}