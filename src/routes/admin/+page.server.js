import {fail, redirect} from '@sveltejs/kit'

export const actions = {
    login: async ({ request, url, locals: { supabase } }) => {
        const formData = await request.formData()
        const email = formData.get('email')
        const password = formData.get('password')

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if (error) {
            return fail(500, { message: 'Server error. Try again later.', success: false, email })
        }

        throw redirect(303, '/admin/dashboard')
    },
}

/*import { redirect} from "@sveltejs/kit";

export const GET = async ({ url, locals: { supabase } }) => {
    const code = url.searchParams.get('code')

    if (code) {
        await supabase.auth.exchangeCodeForSession(code)
    }

    throw redirect(303, '/')
}*/

// src/routes/login/+page.server.js