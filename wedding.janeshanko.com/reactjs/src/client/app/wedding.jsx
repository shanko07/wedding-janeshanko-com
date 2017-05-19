import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Home from './Home.jsx';
import { AppContainer } from 'react-hot-loader';
import Heading from './Heading.jsx';
import LinkableItem from './LinkableItem.jsx';
import NameCheck from './NameCheck.jsx';
import RSVPPage from './RSVPPage.jsx';
import Reception from './Reception.jsx';

let menuBarLinks = {
    labels: ["Our Wedding", "RSVP"],
    urls: ["/", "/RSVPCheck"]
}

let divstyle={
    position: "absolute",
    top: "100px"
    
}

// entire application consists of heading and main sections
const App = () => (
  <div>
    <Heading menuLinks={menuBarLinks}/>
    <Main />
  </div>
)

// switch the contents of the main based on routes
const Main = () => (
<main>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/RSVPCheck" component={NameCheck}/>
        <Route path="/RSVPPass/:uuid" component={RSVPPage}/>
        {/*<Route path="/reception" component={Reception}/>*/}
    </Switch>
  </main>
    )

// create the router and put the entire app inside it's scope
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept(BrowserRouter, () => {
    const NextApp = require(BrowserRouter).default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}