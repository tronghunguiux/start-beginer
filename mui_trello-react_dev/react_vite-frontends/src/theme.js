/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Height } from '@mui/icons-material'
import { cyan, deepOrange, orange, red, teal } from '@mui/material/colors'
import {experimental_extendTheme as extendTheme} from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'

const theme = extendTheme({
  trello: {
    topBarHeight: '58px',
    secondBarHeight: '60px'
  },
  cssVariables: true,
  colorSchemeSelector: 'class',
  colorSchemes:  { 
    light: { 
      palette: { 
        primary: red,
        secondary: deepOrange
      }
    },
    dark: { 
      palette: { 
        primary: orange,
        secondary: teal
      }
    }
  },
  components: { //custom override
    MuiCssBaseline:{
      styleOverrides:{
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(143, 160, 177, .35)',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'rgba(143, 160, 177, .45)',
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none !important'
        }
      }
    },
    MuiOutlinedInput:{
      styleOverrides: {
        root: ({theme})=>{
          // console.log(theme) // Get value theme
          return {
            color: theme.palette.primary.main,
            fontSize: '.875rem',
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.light
            },
            '&:hover':{
                '.MuiOutlinedInput-notchedOutline': { 
                borderColor: theme.palette.primary.main
              },
            },
            '& fieldset': {
              borderWidth: '1px!important'
            },
          }
        }
      }
    },
    MuiInputLabel:{
      styleOverrides: {
        root: ({theme}) => ({
          color: theme.palette.primary.main,
          fontSize: '.875rem'
        })
      }
    }
  }
})
export default theme;