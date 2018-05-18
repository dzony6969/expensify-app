import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Expense from '../components/Expense';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const AppRouter = () => (

    <BrowserRouter>
    <div> 
        {/* dzięki temu ukladowi header jest widoczny na kazdej stronie */}
    <Header />
    <Switch>
        <Route path='/help' component={HelpPage} />
        <Route path='/edit/:id' component={EditExpensePage} />
        <Route path='/create' component={AddExpensePage} />
        <Route path='/' component={Expense} exact={true} />
        <Route component={NotFoundPage} /> 
        </Switch>
    </div>
        {/* //Switch sprawdza czy dany route istnieje */}
    </BrowserRouter>
);

export default AppRouter;