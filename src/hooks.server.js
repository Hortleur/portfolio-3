// src/hooks.server.js
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'
import {redirect} from "@sveltejs/kit";

export const handle = async ({ event, resolve }) => {

    /**
     * a little helper that is written for convenience so that instead
     * of calling `const { data: { session } } = await supabase.auth.getSession()`
     * you just call this `await getSession()`
     */
    if (event.url.pathname.startsWith('/admin')){
        event.locals.supabase = createSupabaseServerClient({
            supabaseUrl: PUBLIC_SUPABASE_URL,
            supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
            event,
        })
    }

    if(event.url.pathname.startsWith('/admin/dashboard')){

        event.locals.getSession = async () => {
            const {
                data: { session, error },
            } = await event.locals.supabase.auth.getSession()
            return {session}
        }

        const { data: { user}} = await event.locals.supabase.auth.getUser()

        if(!user){
            throw redirect(303, '/admin')
        }
    }

    return resolve(event, {
        filterSerializedResponseHeaders(name) {
            return name === 'content-range'
        },
    })
}