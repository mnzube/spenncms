import React from 'react';



const Navigation = ({onRouteChange, isSignedIn}) => {
       if(isSignedIn) {
           return (
        <nav style={{display:'flex',justifyContent:'flex-end'}}>
        <p onClick={() => onRouteChange('signout')} className='f3 link dim grey pt5 pointer' style={{paddingTop:'63px' ,paddingRight:'20px'}}>Sign Out</p>
      </nav>
      )
       } else {
           return (
            <nav style={{display:'flex',justifyContent:'flex-end'}}>
            <p onClick={() => onRouteChange('signin')} className='f3 link dim black pa3 pointer'>Sign In</p>
          <p onClick={() => onRouteChange('signup')} className='f3 link dim black pa3 pointer'>Sign Up</p>
        </nav>
        );
       }   
}

 export default Navigation;
