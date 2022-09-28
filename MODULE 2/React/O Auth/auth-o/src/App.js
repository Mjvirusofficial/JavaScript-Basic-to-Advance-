import './App.css';
import LoginPage from './Component/LoginPage';
import {Auth0Provider} from '@auth0/auth0-react'

function App() {
  return (
    <div className="App">
    <Auth0Provider
      domain='mjvirus.us.auth0.com'
      clientId='RMP5sFdzRtw7km0axgRKuh07cnXykmk7'
      redirectUri={window.location.origin}>
     <LoginPage/>
     </Auth0Provider>

    </div>
  );
}

export default App;
