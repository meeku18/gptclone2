import AuthButton from "../AuthButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const Logout = async() => {
    const supabase = createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/login");
    }
    return(
        <div>
            <AuthButton/>
        </div>
    )
}
export default Logout;