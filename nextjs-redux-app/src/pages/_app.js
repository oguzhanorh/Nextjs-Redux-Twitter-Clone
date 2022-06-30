import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'

import {Provider} from 'react-redux'
import {useStore} from 'redux/store'

function MyApp({ Component, pageProps: {session, ...pageProps} }) {

  const store = useStore(pageProps.initialReduxState)

  const getLayout = Component.getLayout || ((page)=>page)

  return <Provider store={store}>
      <SessionProvider session={session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </Provider>
}

export default MyApp
