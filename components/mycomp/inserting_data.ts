"use server";
import { createClient } from "@/utils/supabase/server";

export default async function ({ email, message, text }: { email: string | undefined, message: string, text: string }) {
    const supabase = createClient();

    // Retrieve ID based on email
    const { data: emailData, error: emailError } = await supabase
        .from('mail')
        .select('id')
        .eq('email', email);

    if (emailError) {
        console.error('Error retrieving data from Supabase:', emailError.message);
        return;
    }

    // Check if the email exists and get the associated ID
    const emailId = emailData ? emailData[0]?.id : null;
    console.log(emailId);
    // Insert data into 'quesans' table
    const { data: insertData, error: insertError } = await supabase
        .from('quesans')
        .insert([
            { email_id: emailId, question: message, answer: text }
        ]);
    console.log(insertData);
    console.log(insertError);
    if (insertError) {
        console.error('Error inserting data into Supabase:', insertError.message);
        return;
    }

    console.log('Data inserted successfully:', insertData);
    
    return insertData;
}
