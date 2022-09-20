import ReactDOM  from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from "./App";
import './index.css';
import {createStore} from 'redux';
import rootReducer from "./Redux/AllReducer";
import {Provider} from 'react-redux';
import './App.css';
const store = createStore(rootReducer)

ReactDOM.render(
   <>
    <Provider store = {store}>
    <App/>
    </Provider>
   </>,document.getElementById('root')
)