import './App.css';
import AppHeader from "./components/AppHeader/AppHeader";
import AddingExpenses from "./components/AddingExpenses/AddingExpenses";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {thunkMiddleware} from "redux-thunk";
import { createLogger } from 'redux-logger';
import {reducer} from "./utils/reducer";
import Chart from "./components/Chart/Chart";


const loggerMiddleware = createLogger();
const store = createStore(reducer, applyMiddleware( loggerMiddleware));

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <AppHeader/>
                <div className='addingExpenseve'>
                    <AddingExpenses/>
                    <Chart/>
                </div>
            </Provider>
        </div>
    );
}

export default App;
