import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
// import { Route, Link } from "react-router-dom";
import { authenticationService } from "../../_services";
import { history } from "../../_helpers";

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  logout() {
    authenticationService.logout();
    history.push("/login");
  }

  render() {
    return (
      // <nav className="navbar navbar-expand navbar-dark bg-dark">
      //       <div className="navbar-nav">
      //         <Link to="/" className="nav-item nav-link">
      //           Home
      //         </Link>
      //         {isAdmin && (
      //           <Link to="/admin" className="nav-item nav-link">
      //             Admin
      //           </Link>
      //         )}
      //         <a onClick={this.logout} className="nav-item nav-link">
      //           Logout
      //         </a>
      //       </div>
      //     </nav>

      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavbarBrand>
              <img
                src="/assets/img/logo_header.png"
                height="40"
                alt="AIMST University"
              />
            </MDBNavbarBrand>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem activeclassname="active">
              <MDBNavLink exact to="/">
                Home
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem activeclassname="active">
              <MDBNavLink exact to="/submittedForms">
                Submitted Forms
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem activeclassname="active">
              <MDBNavLink exact to="/studentList">
                Students List
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    Something else here
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    Something else here
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                className="waves-effect waves-light"
                onClick={this.logout}
                to="/login"
              >
                <MDBIcon fas icon="power-off" />
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export { Navbar };
