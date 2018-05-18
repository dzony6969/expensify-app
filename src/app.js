
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import AppRouter from './routes/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();

// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 3000);

//link sprawia, ze sciezki laduja sie bez odswiezania

const jsx = (
    <Provider store={store}>
    {/* store staje sie taka stala globalna */}
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))

