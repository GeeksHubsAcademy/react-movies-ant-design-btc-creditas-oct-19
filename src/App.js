import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import NotFound from './views/NotFound';
import MoviesCategory from './views/MoviesCategory';
import MovieDetail from './views/MovieDetail';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route
            path='/category/:categoryName'
            exact
            component={MoviesCategory}
          />
          <Route path='/movie/:id' exact component={MovieDetail} />
          <Redirect path='/' exact to='category/upcoming' />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
