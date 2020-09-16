/** @jsx jsx */
import {jsx} from 'theme-ui'
// noinspection ES6CheckImport
import {ThemeProvider} from 'theme-ui'
import theme from '../theme'
import React, {useEffect} from 'react'
// import firebase from '../firebase.config'
import Nav from '../src/components/Nav'
import Sidebar from '../src/components/Sidebar'
import Main from '../src/components/Main'
import {Layout} from '../src/components/blog/Layout'

export default function MyApp({Component, pageProps}) {

  // useEffect(() => {
  //
  //       const createMsg =
  //           async () => {
  //             await firebase.firestore().collection('test').add({
  //               channel: 'channel2',
  //               msg: 'msg2'
  //             })
  //           }
  //       createMsg().then(results => results)
  //     }, []
  // )

  return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}


