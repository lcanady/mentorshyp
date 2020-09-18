/** @jsx jsx */
import {jsx} from 'theme-ui'
import HomeLayout from '../../src/components/welcome/home'
import Nav from '../../src/components/shared/Nav'


export default function WelcomePage() {
  return (
      <div>
        <Nav/>
        <HomeLayout/>
      </div>
)
}
