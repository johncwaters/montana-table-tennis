import { supabase } from "./publicClient";


export async function resetPassword(email: string) {
    const { data, error } = await supabase.auth.api.resetPasswordForEmail(
        email
    )

    console.log(data, error);

    //TODO add reset password page
    //Sends a reset request to an email address. When the user clicks the reset link in the email they are redirected back to your application. Prompt the user for a new password and call auth.update():
    return ({ data, error })
}