import logo from './logo.svg';
import './App.css';
import Account from './Components/Account';
import DashBoard from './Components/DashBoard';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navibarcomp from './Components/Navibarcomp.js'
import View from './Components/View.js'
import Logout from './Components/Logout.js'
import Edit from './Components/Edit'
import EditUser from './Components/EditUser'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  
   
  return (
    <div className="App">
       {/* <Account/> */}
       <Router>
       <Navibarcomp />
       {/* <View/> */}
       
     <Switch>
       <Route path='/dashboard' exact component={DashBoard}/>
       <Route path='/account' exact component={Account}/>
       <Route path='logout' exact component={Logout}/>
       <Route path='/view' exact component={View} />
        <Route path='/edit' exact component={Edit} />
        <Route path='/edit/edituser/:id' component={EditUser} />
     
     </Switch>
   </Router>
    </div>
  );
}

export default App;
