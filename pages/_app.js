/** @jsx jsx */
import {jsx} from 'theme-ui'
// noinspection ES6CheckImport
import {ThemeProvider} from 'theme-ui'
import theme from '../theme'
import {useEffect} from 'react'
import firebase from '../firebase.config'
import Nav from '../src/components/Nav'
import Sidebar from '../src/components/Sidebar'
import Main from '../src/components/Main'

export default function MyApp({Component, pageProps}) {

  useEffect(() => {

        const createMsg =
            async () => {
              await firebase.firestore().collection('test').add({
                channel: 'channel2',
                msg: 'msg2'
              })
            }
        createMsg().then(results => results)
      }, []
  )

  return (
      <ThemeProvider theme={theme}>
        <div sx={{variant: 'layout.root'}}>

          <header sx={{variant: 'layout.nav'}}>
            <Nav/>
          </header>

          <section sx={{variant: 'layout.sidebar'}}>
            <Sidebar/>
          </section>

          <section sx={{variant: 'layout.main'}}>
            <Main/>
          </section>

          <Component {...pageProps} />
          
        </div>
      </ThemeProvider>
  )
}


