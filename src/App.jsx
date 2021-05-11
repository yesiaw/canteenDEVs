import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dishes from './pages/dishes/Dishes';
import Cart from './pages/cart/Cart';
import './app.css';
import Main from './pages/main/Main';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; 
import AboutUs from './pages/aboutUs/AboutUs';

const App = () => {
    return (
        <BrowserRouter>
            <div style={{overflowX:'hidden'}}>
            <MuiThemeProvider theme={THEME}>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/basket' component={Cart} />
                    <Route exact path='/about' component={AboutUs} />
                    <Route path='/category/:id' component={Dishes} />
                </Switch>
            </MuiThemeProvider>
            </div>
        </BrowserRouter>
    )
}
export default App;

const THEME = createMuiTheme({
    typography: {
     "fontFamily": `'BebasNeuePro', "Helvetica", "Arial", sans-serif`,
     "fontSize": 14,
     "fontWeightLight": 300,
     "fontWeightRegular": 400,
     "fontWeightMedium": 500
    }
 });