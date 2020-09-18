/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Post} from '../../src/components/blog/Post'
import {posts} from '../../src/functions/getAllPosts'
import Nav from '../../src/components/shared/Nav'
import Channels from '../../src/components/user/dashboard/sidebar/Channels'
import Controls from '../../src/components/user/dashboard/sidebar/Controls'
import Video from '../../src/components/user/dashboard/main/Video'



export default function BlogIndex() {
  return (
      <div sx={{variant: 'layout.container'}}>
        <header sx={{variant: 'layout.nav'}}>
          <Nav/>
        </header>
        <aside sx={{variant: 'layout.sidebar'}}>
          <div sx={{variant: 'components.sidebar', bg: 'modes.dark.highlight'}}>
            {/*<Channels/>*/}
            {/*<Controls/>*/}
          </div>
        </aside>
        <section sx={{variant: 'layout.main'}}>
          <main sx={{variant: 'components.main', p:3}}>
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

