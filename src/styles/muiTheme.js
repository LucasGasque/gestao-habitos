import { createTheme } from '@mui/material/styles'

export const muiTheme = createTheme({
  palette: {
    type: 'light',
      primary: {
        main: '#6C63FF',
        light: '#8982FF',
        dark: '#4B45B2',
        contrastText: '#FCFCFC'
      },
      secondary: {
        main: '#FCFCFC',
        light: '#FFF',
        dark: '#FAFAFA',
        contrastText:'#6C63FF'
      }
    }    
  }
)