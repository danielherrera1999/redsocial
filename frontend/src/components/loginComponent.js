import React from 'react';
import { MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn } from 'mdbreact';
import "../index.css";
import { Link } from 'react-router-dom';

const LoginComponent = () => {


    return (
      <MDBContainer>
      <MDBRow >
        <MDBCol md="6" className="mx-auto">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header text-center">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Login:
                </h3>
              </MDBCardHeader>
              <label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light"
              >
                Your email
              </label>
              <input
                type="email"
                id="defaultFormEmailEx"
                className="form-control"
              />

              <label
                htmlFor="defaultFormPasswordEx"
                className="grey-text font-weight-light"
              >
                Your password
              </label>
              <input
                type="password"
                id="defaultFormPasswordEx"
                className="form-control"
              />

              <div className="text-center mt-4">
                <MDBBtn color="deep-orange" className="mb-3" type="submit">
                  Iniciar Sesion
                </MDBBtn>
              </div>

              <MDBModalFooter>
                <div className="col-6">
                  Iniciar Sesion con facebook
                </div>
                <div className="col-6">
                  <p>Crear una cuenta? <Link to="/registre">Registrarme</Link> </p>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  
}

export default LoginComponent;

