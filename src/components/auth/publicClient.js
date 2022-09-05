import { createClient } from '@supabase/supabase-js'

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