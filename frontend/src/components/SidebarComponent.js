import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import perfil from './perfil.jpg';


export default class SiderNav extends Component {
  render() {
    return (
      <SideNav className="bg-success text-white mt-8" onSelect={(selected) => { }}>
        <SideNav.Toggle />
        <SideNav.Nav className="mt-8" defaultSelected="home">
            <div>
              <a>
              <img src={perfil} style={{ width: '100px', height: '100px', borderRadius: '50px' }} className="p-3 ml-auto "></img>
              </a>
            </div>
          <br />
          <NavItem eventKey="home" >
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: '1.3em' }} />
            </NavIcon>
            <NavText>
              Home
            </NavText>
          </NavItem>
          <NavItem eventKey="chat">
            <NavIcon>
              <i className="fa fa-comment" style={{ fontSize: '1.3em' }} />
            </NavIcon>
            <NavText>
              Chat
            </NavText>
          </NavItem>
          <NavItem eventKey="juegos">
            <NavIcon>
              <i className="fa fa-gamepad" style={{ fontSize: '1.3em' }} />
            </NavIcon>
            <NavText>
              Juegos
            </NavText>
          </NavItem>
          <NavItem eventKey="cumpleaños">
            <NavIcon>
              <i className="fa fa-birthday-cake" style={{ fontSize: '1.3em' }} />
            </NavIcon>
            <NavText>
              Cumpleaños
            </NavText>
          </NavItem>
          <NavItem eventKey="configuracion">
            <NavIcon>
              <i className="fa fa-cog" style={{ fontSize: '1.3em' }} />
            </NavIcon>
            <NavText>
              Configuracion
            </NavText>
          </NavItem>
          <NavItem eventKey="salir">
            <NavIcon>
              <i class="fas fa-sign-out-alt" style={{ fontSize: '1.3em' }} />
            </NavIcon>
            <NavText>
              Cerrar Sesion
            </NavText>
          </NavItem>

        </SideNav.Nav>
      </SideNav>
    )
  }
}

