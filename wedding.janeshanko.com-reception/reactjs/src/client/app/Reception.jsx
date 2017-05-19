import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import Heading from './Heading.jsx';
import LinkableItem from './LinkableItem.jsx';
import ReceptionDetails from './ReceptionDetails.jsx';

let menuBarLinks = {
    labels: ["Our Wedding"],
    urls: ["http://wedding.janeshanko.com"]
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
// interesting note, even though this is the head of the react app, the matcher
// for url is still relative to the domain wedding.janeshanko.com in this case.
// so since this bundle's index.html is located at wedding.janeshanko.com/reception/index.html
// it still resolves urls against wedding.janeshanko.com
const Main = () => (
<main>
    <Switch>
        <Route exact path="/reception" component={ReceptionDetails}/>
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