/** @jsx jsx */
import {jsx} from 'theme-ui'


export default function Channels() {
  return (
      // <div sx={{variant: 'layout.root'}}>
      //   <div sx={{variant: 'layout.sidebar'}}>
      <aside>
        <ul sx={{variant: 'components.sidebar.channels'}}>
          <h3>chatrooms</h3>
          <li>#fullstack</li>
          <li>#frontend</li>
          <li>#backend</li>
          <li>#office-hours</li>
        </ul>
      </aside>
      //   </div>
      // </div>
  )
}




