import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';


import Home from './Components/Home'
import './App.css';


const LightTheme = {
  titleColor: 'black',
  headerColor: 'white',
  blackColor: 'black',
  button: '#ff9233',
  logoColor: '#FF9233',
  footerBg: '#222736',
  footerText: 'white',
  belowFooter: '#1E2331',
  footerLink: 'yellow'
}

const DarkTheme = {
  titleColor: 'orange',
  headerColor: 'rgb(0, 0, 24)',
  whiteColor: 'white',
  button: '#ff9233',
  logoColor: 'white',
  imgOne: 'black bg.jpg',
  aboutSection: '#000018',
  aboutSectionText: '#FFF',
  aboutImage: '0 0 20px 0px rgba(117, 117, 117, 0.555)',
  aboutBtn: 'white',
  footerLink: 'black'
}

const themes = {
  light: LightTheme,
  dark: DarkTheme
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF9233',
    },
    secondary: {
      main: '#FF9233',
    },
  },
});



function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div className="App">
      <ThemeProvider theme={themes[theme]}>
      <Router>
        <Switch>
          <Route exact path='/' ><Home theme={theme} setTheme={setTheme} /></Route>
        </Switch>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
