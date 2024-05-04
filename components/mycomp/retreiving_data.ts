"use server";
import { createClient } from "@/utils/supabase/server";
interface QuesAns {
    question: string;
    response: string;
}
export default async function ({ email}: { email: string | undefined}) {
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

    if (!emailId) {
        console.error('No ID found for the provided email');
        return;
    }

    // Retrieve all rows from 'quesans' table associated with the emailId
    const { data: quesAnsData, error: quesAnsError } = await supabase
        .from('quesans')
        .select('question, answer') // Select only the 'question' and 'answer' fields
        .eq('email_id', emailId);

    if (quesAnsError) {
        console.error('Error retrieving data from Supabase:', quesAnsError.message);
        return;
    }

    // Extract only the array of questions and answers
    const questionsAndAnswers: QuesAns[] = quesAnsData.map(({ question, answer }) => ({
        question: question as string,
        response: answer as string
    }));
    
    console.log('Questions and Answers:', questionsAndAnswers);
    return questionsAndAnswers;
}
