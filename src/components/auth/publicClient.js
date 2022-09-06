import { createClient } from '@supabase/supabase-js'

// schema viewer https://supabase-schema.vercel.app/
//potentially helpful https://dev.to/ankitjey/the-magic-of-react-query-and-supabase-1pom
const options = {
    schema: 'public',
    headers: { 'x-my-custom-header': 'my-app-name' },
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
}
export const supabase = createClient(
    import.meta.env.PUBLIC_SUPABASE_PROJECT_URL, //Project URL
    import.meta.env.PUBLIC_SUPABASE_CLIENT_API_KEY, //Public Anon Key
    options
)