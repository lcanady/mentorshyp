/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Post} from '../../src/components/blog/Post'
import {posts} from '../../src/functions/getAllPosts'
import Nav from '../../src/components/shared/Nav'



export default function BlogIndex() {
  return (
      <div sx={{variant: 'layout.root'}}>
        <header sx={{variant: 'layout.nav'}}>
          <Nav/>
        </header>
        <section sx={{variant: 'layout.sidebar'}}>
          <aside>
            <ul sx={{variant: 'components.sidebar.channels'}}>
              <li>Fuck u font awesome</li>
            </ul>
          </aside>
        </section>
        <section sx={{variant: 'layout.main'}}>
          <main sx={{variant: 'components.main'}}>
            {posts.map((post) => (
                <Post key={post.link} post={post}/>
            ))}
          </main>
        </section>
      </div>
  )
}
// {/*<Flex as='nav' mt={2}>*/}
//           {/*<NavLink href='#!' p={2} bg={'red'}>*/}
//           {/*  Home*/}
//           {/*</NavLink>*/}
//           {/*<NavLink href='#!' p={2}>*/}
//           {/*  Blog*/}
//           {/*</NavLink>*/}
//           {/*<NavLink href='#!' p={2}>*/}
//           {/*  About*/}
//           {/*</NavLink>*/}
//         {/*</Flex>*/}
//       </div>
//
//   )
// }

