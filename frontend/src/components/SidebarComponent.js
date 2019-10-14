import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import image from './perfil.jpg';
import { MDBCardImage } from 'mdbreact';


export default class SiderNav extends Component {
  render() {
    return (
      <SideNav onSelect={(selected) => { }}>
        <SideNav.Toggle />
        <SideNav.Nav className="mt-8" defaultSelected="home">
          <NavItem eventKey="perfil">
            <NavItem>
              <MDBCardImage>
                <img src={image} />
              </MDBCardImage>
            </NavItem>
            <NavText>
              perfil
            </NavText>
          </NavItem>
          <NavItem eventKey="home">
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

