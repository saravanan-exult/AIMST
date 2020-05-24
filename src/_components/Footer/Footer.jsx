import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Footer extends Component {
  render() {
    return (
      <MDBFooter color="white" className="font-small mt-4">
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="#"> AIMST University </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export { Footer };
