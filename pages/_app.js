/** @jsx jsx */
import { jsx } from 'theme-ui'
// noinspection ES6CheckImport
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import {useEffect} from 'react'
import firebase from '../firebase.config'

export default function MyApp({Component, pageProps}) {

  useEffect(() => {

        const createMsg =
            async () => {
              await firebase.firestore().collection('test').add({
                channel: 'channel',
                msg: 'msg'
              })

            }
        createMsg()
      }, []
  )

  return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}


