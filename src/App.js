import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { withAuthenticator } from '@aws-amplify/ui-react';
import 'antd/dist/antd.css';
import Amplify from 'aws-amplify';
import './App.css';
import awsconfig from './aws-exports';
import SiteLayout from './SiteLayout';
Amplify.configure(awsconfig);


onAuthUIStateChange((nextAuthState, authData) => {
  if (nextAuthState === AuthState.SignedIn) {
    console.log("user successfully signed in!");
    console.log("user data: ", authData);
  }
  if (!authData) {
    console.log("user is not signed in...");
  }
});

function App() {
  return (
    <SiteLayout />
  );
}

export default withAuthenticator(App, false);
