import { createMuiTheme } from '@material-ui/core/styles'
import {
  cyan,
  red,
} from '@material-ui/core/colors'

export default createMuiTheme({
  palette: {
    primary: {
      main: cyan.A700,
    },
    secondary: {
      main: red.A400,
    },
  }
})
