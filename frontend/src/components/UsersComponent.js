import React, { Component } from 'react';

export default class UsersComponent extends Component {

  UrlAPI = "http://localhost:8081/api/fetbook/users";

  state = {
    loading: true,
    users: []
  }

  async componentDidMount(){

        await fetch (this.UrlAPI)
        .then(res => res.json())
        .then((data) => {
          this.setState({loading: false})
          this.setState({ users: data })
          console.log(data)
        })

        .catch(console.log)

  }
  
    render() {
       
      if(this.state.loading === true){
        return 'Cargando usuarios...';
      }
        return (
          <React.Fragment>
              Este es el componente de los usuarios de la API REST
               {this.state.users.map((users) => (
               <p  key={users._id}>{users.FullName} {users.Email}</p>
               ))}
          </React.Fragment>
        );
    }
}

