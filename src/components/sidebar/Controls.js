/** @jsx jsx */
import {Flex, jsx} from 'theme-ui'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// noinspection ES6CheckImport
import {faPlusCircle} from '@fortawesome/pro-duotone-svg-icons'

export default function Controls() {
  return (
      <>
        <Flex sx={{variant: 'components.sidebar.controls'}}>
          <div>
            <FontAwesomeIcon icon={faPlusCircle} sx={{variant: 'components.sidebar.controls.plusSign'}}/>
          </div>
        </Flex>
        <div sx={{variant: 'components.sidebar.controls.preferences'}}>
          <p> Audio / Video </p>
        </div>
      </>

  )
}




