import './App.css';
import AppHeader from "./components/AppHeader/AppHeader";
import AddingExpenses from "./components/AddingExpenses/AddingExpenses";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {createLogger} from 'redux-logger';
import {reducer} from "./utils/reducer";
import ChartExpenses from "./components/ChartExpenses/ChartExpenses";
import ChartLimit from "./components/ChartLimit/ChartLimit";
import AddingLimits from "./components/AddingLimits/AddingLimits";


const loggerMiddleware = createLogger();
const store = createStore(reducer, applyMiddleware(loggerMiddleware));

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <AppHeader/>
                <div className='bodyWrapper'>
                    <div className='leftContainer'>
                        <AddingExpenses/>
                        <AddingLimits/>
                    </div>

                    <div className='charts'>
                        <ChartExpenses/>
                        <ChartLimit/>
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default App;
