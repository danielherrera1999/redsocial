import React from "react";
import LoginComponent from '../components/loginComponent';
import "../index.css";

class Login extends React.Component {
  UrlAPI = "http://localhost:8081/api/fetbook/users";

  state = {
    loading: true,
    users: []
  }

  render() {
    return (
    <React.Fragment>
       <LoginComponent />
    </React.Fragment>
    );
  }
}

export default Login;
