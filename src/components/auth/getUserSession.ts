import { supabase } from "./publicClient";


export function getSession() {
    const session = supabase.auth.session();
    console.log(session);

    return session
}