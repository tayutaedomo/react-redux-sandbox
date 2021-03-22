import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';
import reducer from './reducers';
import EventsIndex from './components/EventsIndex';
import EventsNew from './components/EventsNew';
import EventsShow from './components/EventsShow';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';

const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);
const store = createStore(reducer, enhancer);

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/events/new" component={EventsNew} />
            <Route path="/events/:id" component={EventsShow} />
            <Route exact path="/events" component={EventsIndex} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
