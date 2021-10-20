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
        dark: '#B0B0B0',
        contrastText:'#6C63FF'
      }
    }    
  }
)