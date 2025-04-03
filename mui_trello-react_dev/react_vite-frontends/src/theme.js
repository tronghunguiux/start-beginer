/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { cyan, deepOrange, orange, red, teal } from '@mui/material/colors'
import {experimental_extendTheme as extendTheme} from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'

// Create a theme instance.
// const theme = createTheme({
//   cssVariables: true,
//   palette: {
//     primary: {
//       main: '#556cd6',
//     },
//     secondary: {
//       main: '#19857b',
//     },
//     error: {
//       main: red.A400,
//     },
//   },
// });

const theme = extendTheme({
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