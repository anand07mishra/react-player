import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { withAuthenticator } from '@aws-amplify/ui-react';
import 'antd/dist/antd.css';
import Amplify, { API } from 'aws-amplify';
import './App.css';
import awsconfig from './aws-exports';
import SiteLayout from './SiteLayout';
import gatracking from './GATracking';


const apiName = 'MediaUserInterfaceAPI';
Amplify.configure(awsconfig);


onAuthUIStateChange((nextAuthState, authData) => {
  if (nextAuthState === AuthState.SignedIn) {
    console.log("User Email : ", authData.attributes.email);
     
  }
  

  if (nextAuthState === AuthState.SignUp) {
    API.post(apiName, '/postUserInfo', {
      body: {
        "userEmail": authData.attributes.email,
        "emailVerified": authData.attributes.email_verified,
        "phoneNumber": authData.attributes.phone_number,
        "phoneNumberVerified": authData.attributes.phone_number_verified,
        "sub": authData.attributes.sub
      },
    }).then((result) => {
      console.log(result);
      // GA Function calling with UserID pass
        gatracking(authData.attributes.email);
    }).catch(err => {
      console.log(err);
    })
  }
  if (!authData) {
    console.log("User is not signed in...");
  }
});

function App() {
  return (
    <SiteLayout />
  );
}

export default withAuthenticator(App, false);
