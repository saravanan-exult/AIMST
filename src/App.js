import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { history, Role } from "./_helpers";
import { authenticationService } from "./_services";
import { PrivateRoute } from "./_components/PrivateRoute";
import { HomePage } from "./_components/HomePage";
import { SubmittedForms } from "./_components/SubmittedForms";
import { LoginPage } from "./_components/LoginPage";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";

import { MDBContainer } from "mdbreact";
import "./index.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      isAdmin: false,
    };
  }
  componentDidMount() {
    authenticationService.currentUser.subscribe((x) =>
      this.setState({
        currentUser: x,
        isAdmin: x && x.role === Role.Admin,
      })
    );
  }

  logout() {
    authenticationService.logout();
    history.push("/login");
  }

  render() {
    const { currentUser, isAdmin } = this.state;
    return (
      <Router history={history}>
        <div>
          {currentUser && <Navbar />}
          {!currentUser && <div className="loginBg"></div>}
          <MDBContainer fluid>
            <PrivateRoute exact path="/" component={HomePage} />
            <PrivateRoute
              exact
              path="/submittedForms"
              component={SubmittedForms}
            />
            <PrivateRoute
              exact
              path="/studentList"
              component={SubmittedForms}
            />
            <Route path="/login" component={LoginPage} />
          </MDBContainer>
          {currentUser && <Footer />}
        </div>
      </Router>
    );
  }
}

export default App;
