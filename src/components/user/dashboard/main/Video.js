/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Grid} from '@theme-ui/components'

export default function Video() {
  return (
      <>
        <Grid
          columns={[2, '3fr 1fr']}
        sx={{
          bg:'red',
        }}
        >
          <main sx={{variant: 'components.main.video'}}>
            <h1>Video Placeholder</h1>
          </main>
        </Grid>
      </>
  )
}


