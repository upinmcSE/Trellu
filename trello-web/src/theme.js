import { teal, deepOrange, cyan, orange } from "@mui/material/colors";
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
        dark: {
            palette: {
                primary: cyan,
                secondary: orange,
            }
        }
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
                root: ({theme}) => ({
                    color: theme.palette.primary.main,
                    fontSize: '0.875rem',
                })
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({theme}) => {
                    return {
                        color: theme.palette.primary.main,
                        fontSize: '0.875rem',
                        '.MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.primary.light,
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.primary.main,
                        },
                        '& fieldset': {
                            borderWidth: '1px !important',
                        },
                    }
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
                        backgroundColor: 'rgba(0,0,0,0.2)',
                        borderRadius: '8px',
                    },
                    '*::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        borderRadius: '8px',
                    },
                }
            }
        }
    }
})



export default theme;