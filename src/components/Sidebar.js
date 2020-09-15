/** @jsx jsx */
import {jsx} from 'theme-ui'

export default function Sidebar() {
  return (
      // <div sx={{variant: 'layout.root'}}>
      //   <div sx={{variant: 'layout.sidebar'}}>
          <aside>
            <ul sx={{variant: 'components.sidebar'}}>
              <li>Sidebar Item 1</li>
              <li>Sidebar Item 2</li>
              <li>Sidebar Item 3</li>
              <li>Sidebar Item 4</li>
              <li>Sidebar Item 5</li>
            </ul>
          </aside>
      //   </div>
      // </div>
  )
}


