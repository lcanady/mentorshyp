import {future} from '@theme-ui/presets'

const theme = {
    ...future,
    colors: {
        ...future.colors,
        fuckyou: 'yellow',
        text2: 'blue',
    },

    layout: {

        container: {
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

        video: {
            gridColumnStart: '2',
            gridColumnEnd: '3',
        },

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
            bg: 'modes.dark.secondary',
            a: {
                color: 'modes.dark.background',
                textDecoration: 'none',
                '&:hover': {
                    textDecoration: 'underline',
                }
            },
            m: 0,
            pl: 2,
            pr: 2,
        },
        search: {
            minHeight: '2.5vh',
            justifyContent: 'center',
            p: 1,
            // display: 'none',
        },
        sidebar: {
            channels: {
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                flexBasis: 'sidebar',
                bg: 'modes.dark.background',
                color: 'modes.dark.text',
                fontWeight: '500',
                // textShadow: '.5px .5px 1px black',
                listStyleType: 'none',
                minHeight: '40.5vh',
                minWidth: '10vw',
                m: 0,
                pl: 3,
                border: '.25rem solid #0cf',
            },
            controls: {
                bg: 'modes.dark.background',
                justifyContent: 'center',
                minHeight: '45vh',
                // p: 2,
                // pb: 3,
                pt: 140,
                border: '.25rem solid #0cf',
                plusSign: {
                    fontSize: '8rem',
                    ml: 2,
                    color: 'modes.dark.secondary',
                },
                preferences: {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    pr: '.5rem',
                    bg: 'modes.dark.secondary',

                }
            }
        },
        main: {
            video: {
                display: 'flex',
                // flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 99999,
                flexBasis: 0,
                // bg: 'modes.dark.background',
                // color: 'modes.dark.text',
                border: '.25rem solid black',
                // height: '100vh',
                minHeight: '50vh',
                minWidth: 320,
            }
        }
    },
    breakpoints: ['40em', '64em', '80em'],
    styles: {
        ...future.styles,
    }
}

export default theme

