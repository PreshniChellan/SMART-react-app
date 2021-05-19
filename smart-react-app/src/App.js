import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Pages/0-Login/SignIn'
import Sales from './Pages/2-Dashboards/Sales/Sales';

import Cash from './Pages/1-Sell/Cash/Cash'
import Customers from './Pages/1-Sell/Customers/Customers'
import History from './Pages/1-Sell/History/History'
import MakeSale from './Pages/1-Sell/Make a Sale/MakeSale'
import Register from './Pages/1-Sell/Register/Register'
import SellSettings from './Pages/1-Sell/SellSettings/SellSettings'

import Inventory from './Pages/2-Dashboards/Inventory/Inventory';
import Leads from './Pages/2-Dashboards/Leads/Leads';
import Replacements from './Pages/2-Dashboards/Replacements/Replacements';
import Targets from './Pages/2-Dashboards/Targets/Targets';

import Catalog from './Pages/3-Inventory/Catalog/Catalog'
import InvSettings from './Pages/3-Inventory/InvSettings/InvSettings'
import Product from './Pages/3-Inventory/Product/Product'
import Promotions from './Pages/3-Inventory/Promotions/Promotions'
import Stock from './Pages/3-Inventory/Stock/Stock'

import Finances from './Pages/4-Payments/Finances/Finances'
import Payroll from './Pages/4-Payments/Payroll/Payroll'

import Referrals from './Pages/5-Leads/Referrals/Referrals'
import Management from './Pages/5-Leads/Management/Management'
import LeadSettings from './Pages/5-Leads/LeadSettings/LeadSettings'

import Stores from './Pages/6-Teams/Stores/Stores'
import Teams from './Pages/6-Teams/Teams/Teams'

import Opportunities from './Pages/7-Reporting/Opportunities/Opportunities'

import MainSettings from './Pages/8-MainSettings/MainSettings'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Sales" component={() => <Sales authorized={true} />} />
        
        {/* Routing for Sell on SideNav */}
        <Route exact path="/Cash" component={Cash}/>
        <Route exact path="/Customers" />
        <Route exact path="/History" />
        <Route exact path="/MakeSale" />
        <Route exact path="/Register" />
        <Route exact path="/SellSettings" />

        {/* Routing for Dashboards on SideNav */}
        <Route exact path="/Inventory" />
        <Route exact path="/Leads" />
        <Route exact path="/Replacements" />
        <Route exact path="/Targets" />

        {/* Routing for Inventory on SideNav */}
        <Route exact path="/Catalog" />
        <Route exact path="/InvSettings" />
        <Route exact path="/Product" />
        <Route exact path="/Promotions" />
        <Route exact path="/Stock" />

        {/* Routing for Payments on SideNav */}
        <Route exact path="/Finances" />
        <Route exact path="/Payroll" />

        {/* Routing for Leads on SideNav */}
        <Route exact path="/Referrals" />
        <Route exact path="/Management" />
        <Route exact path="/LeadSettings" />

        {/* Routing for Teams on SideNav */}
        {/* Routing to Target page done already in Dashboards */}
        <Route exact path="/Stores" />
        <Route exact path="/Teams" />

        {/* Routing for Reporting on SideNav */}
        <Route exact path="/Opportunities" />

        {/* Routing for Settings on SideNav */}
        <Route exact path="/MainSettings" />

      </Switch>
    </Router>
  );
}

export default App;
