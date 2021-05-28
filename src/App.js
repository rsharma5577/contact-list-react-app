import React from 'react'
import Routes from '../src/Routes/Routes'
import {withAuthenticationRequired} from '@auth0/auth0-react'
import LoaderSpinner from '../src/components/loader'

function App() {
  return (
    <div >
      <Routes />
      
    </div>
  );
}

export default withAuthenticationRequired(App,{
  onRedirecting:()=><LoaderSpinner text={'Loading'}/>
})
