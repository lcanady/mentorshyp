import {future} from '@theme-ui/presets'

const theme = {
    ...future,
    colors: {
        ...future.colors,
        fuckyou: 'yellow',
        text2: 'blue',
    },
    layout: {
        root: {
            display: 'grid',
            gridTemplateColumns: [
                2, '1fr 6fr'
            ],
            m: 0,
            p: 0,
        },
        nav: {
            gridColumnStart: '1',
            gridColumnEnd: '3',
        },
        sidebar: {
            gridColumnStart: '1',
            gridColumnEnd: '2',
        },
        main: {
            gridColumnStart: '2',
            gridColumnEnd: '3',
        }
    },
    components: {
        nav: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: '5vh',
            fontWeight: 'bold',
            fontSize: '2rem',
            cursor: 'pointer',
            fontFamily: 'body',
            bg: 'modes.dark.background',
            // color: 'modes.dark.text',
            a: {
                color: 'modes.dark.text',
            },
            m: 0,
            p: 0,
        },
        sidebar: {
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            flexBasis: 'sidebar',
            bg: 'modes.dark.highlight',
            color: 'modes.dark.text',
            fontWeight: 'bold',
            textShadow: '1px 1px 2px black',
            listStyleType: 'none',
            minHeight: '95vh',
            minWidth: '10vw',
            m: 0,
            p: 0,
        },
        main: {
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 99999,
            flexBasis: 0,
            bg: 'modes.dark.background',
            color: 'modes.dark.text',
            // height: '100vh',
            minHeight: '95vh',
            minWidth: 320,
        }
    },
    styles: {
        ...future.styles,
    }
}

export default theme

