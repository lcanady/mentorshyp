/** @jsx jsx */
import {jsx} from 'theme-ui'
import { HeadPost } from './HeadPost'
// import React from 'react'

export default function BlogPost({ children, meta}) {
  return (
      <>
        <HeadPost meta={meta} isBlogPost />
        <article sx={{p: 2}}>{children}</article>
      </>
  )
}
