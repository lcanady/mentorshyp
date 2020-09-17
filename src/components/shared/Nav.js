/** @jsx jsx */
import {jsx} from 'theme-ui'
import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
      // <div sx={{variant: 'layout.dashboard'}}>
      //   <div sx={{variant: 'layout.nav'}}>
          <nav sx={{variant: 'components.nav'}}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
            <button>Log In</button>
          </nav>
      //   </div>
      // </div>
  )
}




