/** @jsx jsx */
import {jsx} from 'theme-ui'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

// import your icons
import {faSearch} from '@fortawesome/pro-duotone-svg-icons'
import {Flex} from '@theme-ui/components'

export default function Search() {
  return (
      <>
        <Flex sx={{variant: 'components.search'}}>
          <FontAwesomeIcon icon={faSearch} />
        </Flex>
      </>
  )
}
