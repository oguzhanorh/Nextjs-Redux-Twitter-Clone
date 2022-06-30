import {signIn} from 'next-auth/react'

export async function login(payload){
    return await signIn('credentials', {
        redirect: false,
        username: payload.username,
        password: payload.password,
        callbackUrl: `${window.location.origin}`
    })
}