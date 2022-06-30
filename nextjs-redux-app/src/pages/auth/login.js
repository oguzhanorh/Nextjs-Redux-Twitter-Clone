import {getCsrfToken} from 'next-auth/react'

import {LoginForm} from 'forms'

export default function Login({csrfToken}){
    return (<div className={'login-page'}>

        <div className={'login-sidebar'}>

        </div>
        
        <LoginForm csrfToken={csrfToken} />
    </div>)
}


export async function getServerSideProps(context){
    try {
        return {
            props: {
                csrfToken: await getCsrfToken(context)
            }
        }
    } catch(err){
        console.log('CSRF Token Yaratılamadı')
    }
}