/* App Imports */
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//Redux
import { Provider } from 'react-redux';
import store from './store';

//Alerts
import Alert from './Components/Alert/Alert';

/* Home and Login Pages */
import Login from './Pages/0-Login/SignIn'
import Home from './Pages/Home/Home'

/* Main SideNav Pages start Here Pages *****************************************************/

/* Sell SideNav Pages */
import Cash from './Pages/1-Sell/Cash/Cash'
import Customers from './Pages/1-Sell/Customers/Customers'
import History from './Pages/1-Sell/History/History'
import MakeSale from './Pages/1-Sell/Make a Sale/MakeSale'
import RegisterDevice from './Pages/1-Sell/Make a Sale/RegisterDevice'
import Register from './Pages/1-Sell/Register/Register'
import SellSettings from './Pages/1-Sell/SellSettings/SellSettings'
import Sales from './Pages/1-Sell/Sales/Sales';

/* Dashboard SideNav Pages */
import Inventory from './Pages/2-Dashboards/Inventory/Inventory';
import Leads from './Pages/2-Dashboards/Leads/Leads';
import Replacements from './Pages/2-Dashboards/Replacements/Replacements';
import Targets from './Pages/2-Dashboards/Targets/Targets';
import SalesDash from './Pages/2-Dashboards/Sales/SalesDash';


/* Inventory SideNav Pages */
import Catalog from './Pages/3-Inventory/Catalog/Catalog'
import InvSettings from './Pages/3-Inventory/InvSettings/InvSettings'
import Product from './Pages/3-Inventory/Product/Product'
import Promotions from './Pages/3-Inventory/Promotions/Promotions'
import Stock from './Pages/3-Inventory/Stock/Stock'

/* Payments SideNav Pages */
import Finances from './Pages/4-Payments/Finances/Finances'
import Payroll from './Pages/4-Payments/Payroll/Payroll'

/* Leads SideNav Pages */
import Referrals from './Pages/5-Leads/Referrals/Referrals'
import LeadsPage from './Pages/5-Leads/Leads/LeadsPage'
import LeadSettings from './Pages/5-Leads/LeadSettings/LeadSettings'

/* Teams SideNav Pages */
import Users from './Pages/6-Teams/1. Users/Users'
import Teams from './Pages/6-Teams/2. Teams/Teams'
import Stores from './Pages/6-Teams/3. Stores/Stores'
import TeamTargets from './Pages/6-Teams/4. Targets/TeamTarget'


/* Opportunities SideNav Pages */
import Opportunities from './Pages/7-Reporting/Opportunities/Opportunities'

/* Main Settings */
import MainSettings from './Pages/8-MainSettings/MainSettings'

/* Main SideNav Pages End Here Pages *****************************************************/

/* Inner Site Pages start Here Pages *****************************************************/

  /* Sell Inner Pages */


  /* Dashboards Inner Pages */
  import InventoryRetail from './Pages/2-Dashboards/Inventory/InventoryRetail'
  import InventorySalesReps from './Pages/2-Dashboards/Inventory/InventorySalesReps'
  import InventoryWarehouse from './Pages/2-Dashboards/Inventory/InventoryWarehouse'

  /* Inventory Inner Pages */


  /* Payments Inner Pages */

  /* Leads Inner Pages */
  import ProcessLead from './Pages/5-Leads/Leads/ProcessLead'
  import NewCampaign from './Pages/5-Leads/Leads Components/Leads Settings/Lead Setting Inner Pages/NewCampaign'
  import EditCampaign from './Pages/5-Leads/Leads Components/Leads Settings/Lead Setting Inner Pages/EditCampaign'
  import NewAwareness from './Pages/5-Leads/Leads Components/Leads Settings/Lead Setting Inner Pages/NewAwareness'
  import EditAwareness from './Pages/5-Leads/Leads Components/Leads Settings/Lead Setting Inner Pages/EditAwareness'
  import NewLeadStatus from './Pages/5-Leads/Leads Components/Leads Settings/Lead Setting Inner Pages/NewLeadStatus'
  import EditLeadStatus from './Pages/5-Leads/Leads Components/Leads Settings/Lead Setting Inner Pages/EditLeadStatus'
  import CreateAppOutcome from './Pages/5-Leads/Leads Components/Leads Settings/Lead Setting Inner Pages/CreateAppOutcome'
  import EditAppOutcome from './Pages/5-Leads/Leads Components/Leads Settings/Lead Setting Inner Pages/EditAppOutcome'
  import CreateCallOutcome from './Pages/5-Leads/Leads Components/Leads Settings/Lead Setting Inner Pages/CreateCallOutcome'
  import EditCallOutcome from './Pages/5-Leads/Leads Components/Leads Settings/Lead Setting Inner Pages/EditCallOutcome'


  /* Teams Inner Pages*/
  import UserDocs from './Pages/6-Teams/1. Users/UserDocs'
  import NewUser from './Pages/6-Teams/1. Users/NewUser'
  import EditUser from './Pages/6-Teams/1. Users/EditUser'

  import NewTeam from './Pages/6-Teams/2. Teams/NewTeam'
  import EditTeam from './Pages/6-Teams/2. Teams/EditTeam'

  import NewStore from './Pages/6-Teams/3. Stores/NewStore'
  import EditStore from './Pages/6-Teams/3. Stores/EditStore'

  import NewTarget from './Pages/6-Teams/4. Targets/NewTarget'

function App() {
  return (
    <Provider store={store}>
    <Alert/>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Home" component={() => <Home authorized={true} />} />

        {/* Routing for Main SideNav Pages Starts Here Pages ************************************/}
        {/* Routing for Sell on SideNav */}
        <Route exact path="/Cash" component={Cash} />
        <Route exact path="/Sales" component={Sales} />
        <Route exact path="/Customers" component={Customers} />
        <Route exact path="/History" component={History} />
        <Route exact path="/MakeSale" component={MakeSale} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/SellSettings" component={SellSettings} />

        {/* Routing for Dashboards on SideNav */}
        <Route exact path="/Inventory" component={Inventory} />
        <Route exact path="/SalesDash" component={SalesDash} />
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
        <Route exact path="/LeadsPage" component={LeadsPage} />
        <Route exact path="/LeadSettings" component={LeadSettings} />

        {/* Routing for Teams on SideNav */}
        {/* Routing to Target page done already in Dashboards */}
        <Route exact path="/Users" component={Users} />
        <Route exact path="/Teams" component={Teams} />
        <Route exact path="/TeamTargets" component={TeamTargets} />
        <Route exact path="/Stores" component={Stores} />


        {/* Routing for Reporting on SideNav */}
        <Route exact path="/Opportunities" component={Opportunities} />

        {/* Routing for Settings on SideNav */}
        <Route exact path="/MainSettings" component={MainSettings} />

        {/* Routing for Main SideNav Pages Ends Here Pages ************************************/}

        {/* Inner Site Pages start Here Pages *************************************************/}

        {/* Routing for pages within the site */}
        <Route exact path="/RegisterDevice" component={RegisterDevice} />

      {/* Dashboards Inner Page Routing */}
        <Route exact path="/InventoryRetail" component={InventoryRetail} />
        <Route exact path="/InventorySalesReps" component={InventorySalesReps} />
        <Route exact path="/InventoryWarehouse" component={InventoryWarehouse} />
        <Route exact path="/ProcessLead" component={ProcessLead} />

        {/* Leads Inner Page Routing */}
        <Route exact path="/NewCampaign" component={NewCampaign} />
        <Route exact path="/EditCampaign" component={EditCampaign} />
        <Route exact path="/NewAwareness" component={NewAwareness} />
        <Route exact path="/EditAwareness" component={EditAwareness} />
        <Route exact path="/NewLeadStatus" component={NewLeadStatus} />
        <Route exact path="/EditLeadStatus" component={EditLeadStatus} />
        <Route exact path="/CreateAppOutcome" component={CreateAppOutcome} />
        <Route exact path="/EditAppOutcome" component={EditAppOutcome} />
        <Route exact path="/CreateCallOutcome" component={CreateCallOutcome} />
        <Route exact path="/EditCallOutcome" component={EditCallOutcome} />



      {/* Teams Inner Page Routing */}
      <Route exact path="/UserDocs" component={UserDocs} />
      <Route exact path="/NewUser" component={NewUser} />
      <Route exact path="/EditUser" component={EditUser} />
      <Route exact path="/NewTeam" component={NewTeam} />
      <Route exact path="/EditTeam" component={EditTeam} />
      <Route exact path="/NewStore" component={NewStore} />
      <Route exact path="/EditStore" component={EditStore} />
      <Route exact path="/NewTarget" component={NewTarget} />

      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
