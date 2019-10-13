import React, { Component } from 'react';

export default class LoginComponent extends Component {
    render() {

        return (
          <React.Fragment>
                <div>
                  <form>
                    <input type="text" /> <br />
                    <input type="password" /> <br />
                    <button type="submit">Iniciar Sesion</button>
                  </form>
                </div>
          </React.Fragment>
        );
    }
}

