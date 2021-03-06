import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header/header';
import ToolBar from './toolBar/toolBar';
import ContactList from './contactList/contactList';
import EditForm from './editForm/editForm';
import Page404 from './errorPage/404';

const App = () => (
  <div className="container">
    <Header />
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <ToolBar />
              <ContactList />
            </main>
          )}
        />
        <Route path="/add-new" render={() => (<EditForm title="Add contact" />)} />
        <Route path="/edit/:id" render={() => (<EditForm title="Edit contact" />)} />
        <Route component={Page404} />
      </Switch>
    </Router>
  </div>
);

export default App;
