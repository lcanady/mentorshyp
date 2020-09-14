/** @jsx jsx */
import {jsx} from 'theme-ui'
import Link from 'next/link'

export default function Nav() {
  return (
      // <div sx={{variant: 'layout.dashboard'}}>
      //   <div sx={{variant: 'layout.nav'}}>
          <nav sx={{variant: 'components.nav'}}>
            <Link href="/api/hello">
              <a>Nav Item A</a>
            </Link>
            <a>Nav Item B</a>
            <a>Nav Item C</a>
            <button>Log In</button>
          </nav>
      //   </div>
      // </div>
  )
}




