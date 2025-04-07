/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Height } from '@mui/icons-material'
import { cyan, deepOrange, orange, red, teal } from '@mui/material/colors'
import {experimental_extendTheme as extendTheme} from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'

const APP_BAR_HEIGHT = '58px';
const BOARD_BAR_HEIGHT = '60px';
const BOARD_CONTENT_HEIGHT = `calc(100vh - (${APP_BAR_HEIGHT} + ${BOARD_BAR_HEIGHT}))`;
const theme = extendTheme({
  trello: {
    topBarHeight: APP_BAR_HEIGHT,
    secondBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
  },
  cssVariables: true,
  colorSchemeSelector: 'class',
  colorSchemes:  { 
    // light: { 
    //   palette: { 
    //     primary: red,
    //     secondary: deepOrange
    //   }
    // },
    // dark: { 
    //   palette: { 
    //     primary: orange,
    //     secondary: teal
    //   }
    // }
  },
  components: { //custom override
    MuiCssBaseline: {
      styleOverrides:{
        body: {
          '*::-webkit-scrollbar': {
            width: '6px',
            height: '6px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(143, 160, 177, .35)',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'rgba(143, 160, 177, .75)',
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none !important',
          borderWidth: '0.5px !important',
          '&:hover': { borderWidth: '0.5px !important', }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({theme})=>{
          // console.log(theme) // Get value theme
          return {
            // color: theme.palette.primary.main,
            fontSize: '.875rem',
            // '.MuiOutlinedInput-notchedOutline': {
            //   borderColor: theme.palette.primary.light
            // },
            // '&:hover':{
            //     '.MuiOutlinedInput-notchedOutline': { 
            //     borderColor: theme.palette.primary.main
            //   },
            // },
            '& fieldset': { borderWidth: '0.5px!important' },
            '&:hover fieldset:hover': { borderWidth: '1px!important' },
            '&.Mui-focused fieldset': { borderWidth: '1px!important' },

          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({theme}) => ({
          // color: theme.palette.primary.main,
          fontSize: '.875rem'
        })
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': {
            fontSize: '.875rem'
          },
        }
      }
    }
  }
})
export default theme;