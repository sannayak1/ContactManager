import React from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "./context";
//change browserRouter to HashRouter for GitHubPage deployment
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts}></Route>
              <Route exact path="/contact/add" component={AddContact}></Route>
              <Route
                exact
                path="/contact/edit/:id"
                component={EditContact}
              ></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
