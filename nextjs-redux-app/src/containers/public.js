import Head from 'next/head'

import {Header} from 'components'


export default function PublicContainer({children, title}){

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