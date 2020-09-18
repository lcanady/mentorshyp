/** @jsx jsx */
import {jsx} from 'theme-ui'
import Link from 'next/link'
import Search from './Search'
import {Button} from '@theme-ui/components'


export default function Nav() {
  return (
      // <div sx={{variant: 'layout.dashboard'}}>
      //   <div sx={{variant: 'layout.nav'}}>
      <nav sx={{variant: 'components.nav'}}>
        <Link href="/welcome">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>Dashboard</a>
        </Link>
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
        <Search/>
        <Button sx={{variant: 'components.search.button', bg: 'modes.dark.highlight', borderRadius:'.25rem', color: 'modes.dark.text', textShadow: '.5px .5px 1px black',}}>
          Log In
        </Button>
      </nav>
            //   </div>
      // </div>
  )
}




