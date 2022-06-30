import {useEffect} from 'react'
import {useSession, signIn} from 'next-auth/react'
import {useRouter} from 'next/router'
import Head from 'next/head'

import {Header} from 'components'


export default function PrivateContainer({children, title}){
    const router = useRouter()
    const {data: session} = useSession()

    useEffect(()=>{
        if (session === null){
            signIn()
        }
    },[router, session])

    if (!session){
        return null
    }

    return <>
        <Head>
            <title>{`${title ? (title + ' | ') : ''} Twitter Clone`}</title>
        </Head>
        <div className={'container'}>
            <main>
                <Header />
                <div className={'content-container'}>
                    {children}
                </div>
            </main>
        </div>
    </>
}