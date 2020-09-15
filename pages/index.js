/** @jsx jsx */
import {jsx, ThemeProvider} from 'theme-ui'
import Nav from '../src/components/Nav'
import Sidebar from '../src/components/Sidebar'
import Main from '../src/components/Main'
import {Layout} from '../src/components/blog/Layout'

export default function IndexPage() {
  return (
      <>
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
        </div>
        <Layout pageTitle="Blog" description="My Personal Blog"/>
      </>
  )
}


