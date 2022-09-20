import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
// import LoginForm from './Redux/Projects/LoginForm';
import rootReducer from './Redux/Reducer';
import PlusMinus from './Redux/Projects/PlusMinus';


const store = createStore(rootReducer)
function App() {
  return (
    <div className="App">
     <Provider store={store}>
       <PlusMinus/>
       {/* <LoginForm/> */}
     </Provider>
    </div>
  );
}

export default App;
