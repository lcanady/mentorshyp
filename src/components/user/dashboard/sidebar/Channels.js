/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Flex} from '@theme-ui/components'



export default function Channels() {
  let aside = <aside>
    <Flex sx={{variant: 'components.sidebar.channels'}}>
      <h3>Channels</h3>
      <li>#fullstack</li>
      <li>#frontend</li>
      <li>#backend</li>
      <li>#office-hours</li>
    </Flex>
  </aside>
  return aside
}




