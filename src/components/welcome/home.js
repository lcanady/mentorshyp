/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Box, Flex, Grid} from '@theme-ui/components'

export default function HomeLayout() {
  return (
      <Grid
          gap={0}
          // columns={[2, '1fr 2fr']}>
          columns={'1fr'}>
        {/*<div>*/}

        <Box
            sx={{
              m: 0,
              bg: 'background',
              height: '80vh'
            }}
        >
          Above the Fold
          <Flex>
            Flexbox Content
            H1
            H2
            CTA
          </Flex>
        </Box>
        <Box
            sx={{
              bg: 'highlight',
              height: '20vh',
              color: 'background'
            }}
        >
          Value Prop
        Next Box
          vp 1
          vp 2
          vp 3
        </Box>
        {/*</div>*/}
      </Grid>

  )
}
