
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(createMuiTheme({
  overrides: {
    // Applied to the <ul> element
    MuiSelect: {
      list: {
        backgroundColor: "#cccccc",
      },
      icon :{
        color:'white',
      },
      selectMenu :{
         outerWidth:'150px',
         width:'150px',
      },
      select : {
        paddingLeft:"10px",
      },
      
    },

    MuiFormLabel: {
      root:{
        color:'#fff',
        paddingLeft:'10px',
        fontSize:'16px',
      }
    },

    MuiMenu: {
      list:{
        background:'#232637',
      }
    },
    // Applied to the <li> elements
    MuiMenuItem: {
      root: {
        fontSize: "16px",
        background:'#232637',
      },
    },

  },
  palette: {
    primary: {
      light: '#292C41',
      main: '#141720',
      dark: '#161A29',
      contrastText: '#fff',
      darkLight: '#292C41',
    },
    secondary: {
      light: '#555e6c',
      main: '#A20F3C',
      dark: '#1e2532',
      contrastText: '#6B76A1'
    },
    error: {
      light: '#E32C30',
      main: '#A20F3C',
      dark: '#860029',
      contrastText: '#fff'
    },
    background: {
      default: '#151C29',
      main: '#232637',
      sideDrawer: '#0f1118',
      selectedMenu: '#292C4130',
      // main: '#232637',
      overlay: '#00000099'
    },
    text: {
      primary: '#fff',
      // secondary: '#555E7F',
      secondary: '#6B76A1',
      notification: '#8D9BD4',
      inactiveSubMenu: '#92959e',
      hoverText: 'rgb(65, 243, 211)'
    },
  },
  custom: {
    palette: {
      green: '#4caf50',
      blueGrey: '#5c739c',
      lightGrey: '#D8D8D8',
      darkRed: '#ba1a48',
      grey: '#99A5D3',
      lightBlue: '#1f2334',
      gold: '#D8A42D',
      darkYellow: '#FFA000'
    },
    layout: {
      topAppBarHeight: 47,
      footerHeight: 77
    },
  }
}));

export default theme;
