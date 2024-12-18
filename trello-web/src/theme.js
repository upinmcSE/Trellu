import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const theme = extendTheme({
    // custom size cho appbar va boardbar
    trelloCustom: {
        appBarHeight: '58px',
        boardBarHeight: '60px'
    },

    // overrides lai cho theme cua material-ui
    colorSchemes: {
        // light: {
        //     palette: {
        //         primary: teal,
        //         secondary: deepOrange,
        //     }
        // },
        // dark: {
        //     palette: {
        //         primary: cyan,
        //         secondary: orange,
        //     }
        // }
    },
    // overrides lai cho cac component cua material-ui
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                }
            }
        },
        MuiInputLabel:{
            styleOverrides: {
                root: {
                    fontSize: '0.875rem',
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    fontSize: '0.875rem',
                    '& fieldset': {
                        borderWidth: '0.5px !important',
                    },
                    '&:hover fieldset': {
                        borderWidth: '1px !important',
                    },
                    '&.Mui-focused fieldset': {
                        borderWidth: '1px !important',
                    },
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    '*::-webkit-scrollbar': {
                        width: '8px',
                        height: '8px',
                    },
                    '*::-webkit-scrollbar-thumb': {
                        backgroundColor: '#dcdde1',
                        borderRadius: '8px',
                    },
                    '*::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: 'white',
                        borderRadius: '8px',
                    },
                }
            }
        }
    }
})



export default theme;