import {React,Component} from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignInSide from './components/Signin/Signin';
// import of general pages
import Home from './components/Home/Home';
import AddressForm from './components/Order/Order';
import SignUpSide from './components/Signup/Signup';
import StatsHome from './components/Stats/StatsHome';
import ContactUs from './components/ContactUs/ContactUs';
import Signup from './components/Signup/Signup';
// import of 4 navbars
import Noauthnavbar from './components/Noauthnavbar/Noauthnavbar';
import Customerauthnavbar from './customer/Customerauthnavbar';
import Adminauthnavbar from './components/Admin/Adminauthnavbar';
import Deliveryauthnavbar from './components/Delivery/Deliveryauthnavbar/index';
//import of three users
import Customerapp from './customer/Dashboard';
import Adminapp from './components/Admin/Adminapp';
import Delivery from './components/Delivery';
//import of customers pages
import Dashboard from './customer/Dashboard';
import Raisequery from './customer/Raisequery';
import Neworder from './customer/Neworder';
import Yourorder from './customer/Yourorder';
//import admin pages
import AdminDashboard from './components/Admin/AdminDashboard';
import Admincomptodo from './components/Admin/Admincomptodo';
import Adminquery from './components/Admin/Adminquery';
import Admintodo from './components/Admin/Admintodo';
//import of delivery pages
import DeliveryDashboard from './components/Delivery/DeliveryDashboard';
import Deliverycomptodo from './components/Delivery/Deliverycomptodo';
import Deliveryquery from './components/Delivery/Deliveryquery';
import Deliverytodo from './components/Delivery/Deliverytodo';
class App extends Component {
  state={
    isloggedin:false,
    who:null
  }
  constructor(props){
    super(props);
   this.setState({
    isloggedin:false,
    who:null
   })
  }
  
  setlogin=(b)=>{
    this.setState({
      isloggedin:b
    })
  }
  givewho=(b)=>{
    this.setState({
      who:b
    })

  }

  render() {
    return (
      <div>
    <BrowserRouter>
    {/* condition to load navbar */}
    {!this.state.isloggedin&&this.state.who==null?<Noauthnavbar/>:this.state.isloggedin&&this.state.who==='consumer'?<Customerauthnavbar />:this.state.isloggedin&&this.state.who==='admin'?<Adminauthnavbar></Adminauthnavbar>:this.state.isloggedin&&this.state.who==='delivery'?<Deliveryauthnavbar/>:<Noauthnavbar/>}
      <Routes>
{/* ---------------routes of general----------------------- */}
<Route path='/' element={<Home/>}/>
<Route path='/SignInSide' element={<SignInSide/>}/>
<Route path='/Order' element={<AddressForm/>}/>
<Route path='/SignUpSide'  element={<SignUpSide setlogin={this.setlogin} givewho={this.givewho}/>}/>
<Route path='/StatsHome' element={<StatsHome/>}/>
<Route path='/ContactUs' element={<ContactUs/>}/>
<Route path='/SignUpSide' element={<Signup></Signup>}/>
<Route path='/consumer' element={<Customerapp></Customerapp>}/>
<Route path='/admin' element={<Adminapp/>}/>
<Route path='/delivery' element={<Delivery/>}/>
{/* ---------------routes of customers----------------------- */}
<Route path='/consumer/dashboard' element={<Dashboard/>}/>
<Route path='/consumer/myorder' element={<Yourorder/>}/>
<Route path='/consumer/myneworder' element={<Neworder/>}/>
<Route path='/consumer/query' element={<Raisequery/>}/>
{/* ---------------routes of admin----------------------- */}
<Route path='/admin/dashboard' element={<AdminDashboard/>}/>
<Route path='/admin/myorder' element={<Admintodo/>}/>
<Route path='/admin/myneworder' element={<Admincomptodo/>}/>
<Route path='/admin/query' element={<Adminquery/>}/>
{/* -----------------routes of delivery----------------- */}
<Route path='/delivery/dashboard' element={<DeliveryDashboard/>}/>
<Route path='/delivery/myorder' element={<Deliverytodo/>}/>
<Route path='/delivery/mycomporder' element={<Deliverycomptodo/>}/>
<Route path='/delivery/query' element={<Deliveryquery/>}/>
</Routes>
</BrowserRouter>
      </div>
    );
  }
}

export default App;
