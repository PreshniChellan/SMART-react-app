import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Pages/0-Login/SignIn'
import Home from './Pages/Home/Home'

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
import Sales from './Pages/2-Dashboards/Sales/Sales';

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
        <Route exact path="/Home" component={() => <Home authorized={true} />} />
        
        {/* Routing for Sell on SideNav */}
        <Route exact path="/Cash" component={Cash} />
        <Route exact path="/Customers" component={Customers} />
        <Route exact path="/History" component={History} />
        <Route exact path="/MakeSale" component={MakeSale} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/SellSettings" component={SellSettings} />

        {/* Routing for Dashboards on SideNav */}
        <Route exact path="/Sales" component={Sales} />
        <Route exact path="/Inventory" component={Inventory} />
        <Route exact path="/Leads" component={Leads} />
        <Route exact path="/Replacements" component={Replacements} />
        <Route exact path="/Targets" component={Targets} />

        {/* Routing for Inventory on SideNav */}
        <Route exact path="/Catalog" component={Catalog} />
        <Route exact path="/InvSettings" component={InvSettings} />
        <Route exact path="/Product" component={Product} />
        <Route exact path="/Promotions" component={Promotions} />
        <Route exact path="/Stock" component={Stock} />

        {/* Routing for Payments on SideNav */}
        <Route exact path="/Finances" component={Finances} />
        <Route exact path="/Payroll" component={Payroll} />

        {/* Routing for Leads on SideNav */}
        <Route exact path="/Referrals" component={Referrals} />
        <Route exact path="/Management" component={Management} />
        <Route exact path="/LeadSettings" component={LeadSettings} />

        {/* Routing for Teams on SideNav */}
        {/* Routing to Target page done already in Dashboards */}
        <Route exact path="/Stores" component={Stores} />
        <Route exact path="/Teams" component={Teams} />

        {/* Routing for Reporting on SideNav */}
        <Route exact path="/Opportunities" component={Opportunities} />

        {/* Routing for Settings on SideNav */}
        <Route exact path="/MainSettings" component={MainSettings} />

      </Switch>
    </Router>
  );
}

export default App;
        
