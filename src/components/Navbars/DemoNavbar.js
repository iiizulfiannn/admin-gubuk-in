
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
// reactstrap components
import {
  UncontrolledCollapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class DemoNavbar extends React.Component {
  
//style={{backgroundColor: '#393e46'}}
  render() {
    return (
      <>
        <Navbar className="navbar-dark" style={{backgroundColor: '#2469EF'}}  expand="lg">
            <Container>
             <Link to="/" style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                Gubuk-In
             </Link>
              <button className="navbar-toggler" id="navbar-primary">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar-primary">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand font-weight-bold" xs="6">
                      <Link to="/" style={{color: '#2469EF'}}>
                        Gubuk-In
                      </Link>
                    </Col>
                    <Col className="collapse-close" style={{marginTop: -10, paddingRight: 10}} xs="6">
                      <button className="navbar-toggler" id="navbar-primary">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Profile
                    </NavLink>
                  </NavItem>
                
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
      </>
    );
  }
}

export default DemoNavbar;
