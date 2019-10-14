import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from './components/Navbar';
import UsersComponent from "./components/UsersComponent";
import RegistroComponent from "./components/registroComponent";
import SideNav from "./components/SidebarComponent";

class App extends React.Component {
  render() {
    return (
    <BrowserRouter>
      <Navbar />
      <SideNav />
       <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/users" component={UsersComponent} />
        <Route exact path="/registre" component={RegistroComponent} />
        <Route
          render={function () {
            return <h3>Lo sentimos, esta página no está disponible</h3>;
          }}
        />
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
