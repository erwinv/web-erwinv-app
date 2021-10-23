import { createTheme } from '@mui/material/styles'
import {
  cyan,
  red,
} from '@mui/material/colors'

export default createTheme({
  palette: {
    mode: 'dark', // TODO toggle button
    primary: {
      main: cyan.A700,
    },
    secondary: {
      main: red.A400,
    },
  }
})
