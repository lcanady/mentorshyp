/** @jsx jsx */
import {jsx} from 'theme-ui'

export const HeadPost = ({meta, isBlogPost}) => {
  return (
      <div sx={{p:2}}>
        <h1 className={isBlogPost ? 'title' : null}>{meta.title}</h1>
        <div className='details'>
          {
            isBlogPost ? null : <p>{meta.description}</p>
          }
          <span>{meta.date}</span>
          <span>
        ☕ {meta.readTime + ' min read'}
      </span>
        </div>
      </div>
  )
}
