/** @jsx jsx */
import {jsx} from 'theme-ui'
import Nav from '../src/components/shared/Nav'
import {Layout} from '../src/components/blog/Layout'
import Video from '../src/components/user/dashboard/main/Video'
import Channels from '../src/components/user/dashboard/sidebar/Channels'
import Controls from '../src/components/user/dashboard/sidebar/Controls'
import Search from '../src/components/shared/Search'

// import Head from 'next/head'

// import the library
// import { library } from '@fortawesome/fontawesome-svg-core';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

// import your icons
// import {faSearch} from '@fortawesome/pro-duotone-svg-icons'

export default function Dashboard() {
  return (
      <>
        <div sx={{variant: 'layout.container'}}>
          <header sx={{variant: 'layout.nav'}}>
            <Nav/>
          </header>
          <section sx={{variant: 'layout.sidebar'}}>
            <Channels/>
            <Controls/>
          </section>
          <main sx={{variant: 'layout.video'}}>
            <Video/>
          </main>
        </div>
        <Layout pageTitle="Blog" description="Mentorshyp Blog"/>
      </>
  )
}
