import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import rootReducer from './Redux/Reducer';
import PlusMinus from './Redux/Projects/PlusMinus';


const store = createStore(rootReducer)
function App() {
  return (
    <div className="App">
     <Provider store={store}>
       <PlusMinus/>
     </Provider>
    </div>
  );
}

export default App;
