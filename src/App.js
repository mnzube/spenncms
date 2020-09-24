import React, {Component} from 'react';
import HeaderNav from './components/HeaderNav/HeaderNav';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Title from './components/Title/Title';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Table from './components/Table/Table';
import SideBar from './components/SideBar/SideBar';
import Kyc from './components/KYC/Kyc';
import Clients from './components/Clients/Clients';
import Transactions from './components/Transactions/Transactions';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state ={
      input:'',
      route:'signin',
      isSignedIn: false
  }
}
 
onRouteChange = (route) => {
  if (route === 'signout'){
    this.setState({isSignedIn:false})
  } else if (route === 'home'){
    this.setState({isSignedIn:true})
  }
  this.setState({route: route})
}

render () {
  const { isSignedIn, route } = this.state ;
  const authArr = ['signin','signup','signout']
  return (
    <div className="App" style={{display:'flex', flexDirection:'row'}} >

    {  !authArr.includes(route) ? <div className='w-10'><SideBar changeRoute={(route)=>this.setState({route:route})}/></div>:''
}

<div className= {`${route === 'home' ? 'w-90':'w-100'}`}>
    <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/> 
    {!authArr.includes(route)
    ? <div>
    <HeaderNav/>
    <Logo />
    <Title />
    {route === 'home' ? <Table /> : route === 'kyc'? <Kyc/>: route === 'clients'? <Clients/>: route === 'transactions'?<Transactions/>:''}

    </div> 
    : ( 
       this.state.route === 'signin'
       ? <Signin onRouteChange={this.onRouteChange}/>
       : <Signup onRouteChange={this.onRouteChange}/>
    )
  }
  </div>
    </div>
  ); 
}
}

export default App;
