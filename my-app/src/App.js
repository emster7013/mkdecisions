import './App.css';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
import ContactPage from './Contact/ContactPage';
 Amplify.configure(config);
function App() {
  return (
    <div className="App">
     <h1>Mk Decision<AmplifySignOut/></h1>
     <ContactPage/>
    </div>
  );
}
 
export default withAuthenticator(App);
