/** @jsx jsx */
import {jsx} from 'theme-ui'
import {faSearch} from '@fortawesome/pro-duotone-svg-icons'
import {Button, Flex, Input} from '@theme-ui/components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Search() {
  return (
      <>
        <Flex sx={{variant: 'components.search'}}>
          <div>
            <Input type={'search'} sx={{variant: 'components.search.input'}}
                   placeholder={'🔎'}
            />
          </div>
          {/*<Button sx={{variant: 'components.search.button', pt:'.5rem', pb:'.5rem'}}>*/}
          {/*  Search*/}
          {/*</Button>*/}
        </Flex>
      </>
  )
}
