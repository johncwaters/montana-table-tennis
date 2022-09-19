import { supabase } from "./publicClient";


export async function signInWithEmail(email: string, password: string) {
    const { user, session, error } = await supabase.auth.signIn({
        email: email,
        password: password,
    });

    //don't need session?
    console.log(user, session, error);

    return ({ user, error })
}