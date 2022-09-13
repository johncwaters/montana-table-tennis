import { supabase } from "../../../components/auth/publicClient";

import fetch from 'node-fetch';

async function registerUser(email: string, password: string) {
    const { user, session, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });
    if (error) return (error);

    return true
}




export async function post({ request }) {
    const data = await request.json();
    //const userData = JSON.parse(data)

    const newUserResponse = await registerUser(data.email, data.password)

    console.log(newUserResponse)

    if (newUserResponse === true) {
        const url = new URL('/flow/confirm-email', request.url);
        return Response.redirect(url, 302);
    }

    return new Response(JSON.stringify(newUserResponse.message), { status: newUserResponse?.status });

}