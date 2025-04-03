/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
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
  }
})
export default theme;