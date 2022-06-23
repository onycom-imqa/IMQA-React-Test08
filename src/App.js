import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './comps/about/about.js';
import Contact from './comps/contact/contact.js';
import MainHomepage from './comps/homepage3/homepage';
import LoginPage from './comps/loginPage/LoginPage.js';
import Register from './comps/loginPage/Register.js';
import './comps/main.css';
import NewFundraiser from './comps/NewFundraiser/NewFundraise.js';
import NotFound from './comps/Misc/NotFound';
import Setting from './comps/settings/settings';
import SingleRequest from './comps/singleRequest/singleRequest.js';

const App = () => {
  return ( 
    <Router>
      <div className="App">            
        <div className="content">          
          <Switch>
            <Route exact path="/"><MainHomepage /></Route>
            <Route exact path="/home"><MainHomepage /></Route>
            <Route exact path="/login"><LoginPage /></Route>
            <Route exact path="/register"><Register /></Route>
            <Route exact path="/about"><About /></Route>
            <Route exact path="/contact-us"><Contact /></Route>                  
            <Route path="/settings"><Setting /></Route>                     
            <Route exact path="/fundraiser/new"><NewFundraiser/></Route>     
            <Route exact path="/fundraiser/:reqId"><SingleRequest/></Route>            
            <Route path="*"><NotFound /></Route>
          </Switch>
        </div>        
      </div>
    </Router>
    
   );
}
 
export default App;