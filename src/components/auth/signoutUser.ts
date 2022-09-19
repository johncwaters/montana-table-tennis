import { supabase } from "./publicClient";

export async function signOut(jwt?: string) {
    const { error } = await supabase.auth.signOut()
    console.log(error);

    //TODO accept JWT token strings
    //TODO handle error OR return success response
    return error
}

