import {future} from '@theme-ui/presets'

const theme = {
    ...future,
    breakpoints: ['40em', '52em', '64em', '80em'],
    // colors: {
    //     ...future.colors,
    //     fuckyou: 'yellow',
    //     text2: 'blue',
    // },
    // fontSize: [16, 20, 24, 32],
    layout: {
        container: {
            // bg: 'transparent',
            display: 'grid',
            gridTemplateColumns: [
                'auto',
                '1fr 4fr'
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
            fontSize: [null, 2, 3, 4],
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: '5vh',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontFamily: 'body',
            bg: 'modes.dark.background',
            a: {
                color: 'modes.dark.text',
                textDecoration: 'none',
                '&:hover': {
                    textDecoration: 'underline',
                }
            },
            p: 2,
        },
        search: {
            justifyContent: 'center',
            alignItems: 'center',
            // mt: 3,
            outline: 'none',
            // pt: 2,
            // pb: 25,
            input: {
                // outline: 'none',
                borderRadius: '.25rem',
                // pl: '1rem',
                // pr: '1rem',

                // borderStyle: 'none',
                borderColor: 'transparent',
                bg: 'hsla(0,0%,100%,0.5)',
                // boxShadow: '0.025rem 0.05rem 0.25rem black',
                '&:focus': {
                    outline: 'none',
                    color: 'modes.dark.highlight',
                    borderStyle: 'none',
                    borderBottom: 'solid',
                    borderColor: 'modes.dark.highlight',
                    bg: 'modes.dark.background'
                },
            },
            button: {
                borderRadius: '0 .25rem .25rem 0',
                bg: 'modes.dark.secondary',
                color: 'text',
                boxShadow: '0.025rem 0.05rem 0.25rem black',
                '&:focus': {
                    outline: 'none',
                    borderStyle: 'none',
                    borderColor: 'modes.dark.highlight',
                },

            }

        },
        sidebar: {
            channels: {
                opacity: '90%',
                fontSize: [1, 2, 3, 4],
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                flexBasis: 'sidebar',
                bg: 'modes.dark.background',
                color: 'modes.dark.text',
                fontWeight: '500',
                // textShadow: '.5px .5px 1px black',
                listStyleType: 'none',
                minHeight: '42.5vh',
                minWidth: '10vw',
                m: 0,
                pl: 3,
                border: '.1rem solid black',
            },
            controls: {
                bg: 'modes.dark.background',
                opacity: '90%',
                m: 'auto',
                minHeight: '42.5vh',
                border: '.1rem solid black',
                plusSign: {
                    display: 'flex',
                    justifyContent: 'center',
                    mt: '8rem',
                    logo: {
                        fontSize: 'calc(48px + 46 * ((100vw - 368px) / 800))',
                        color: 'modes.dark.secondary',
                        opacity: '100%',
                    }
                },
                preferences: {
                    fontSize: [null, 2, 3],
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
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 99999,
                flexBasis: 0,
                // bg: 'modes.dark.background',
                // color: 'modes.dark.text',
                borderBottom: '.1rem solid black',
                // height: '100vh',
                minHeight: '50vh',
                minWidth: 320,
            }
        }
    },
    styles: {
        ...future.styles,
    }
}

export default theme

