import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { MDBBtn, MDBCol, MDBRow } from "mdbreact";
import { authenticationService } from "../../_services";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // redirect to home if already logged in
    if (authenticationService.currentUserValue) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <MDBRow>
        <MDBCol md="4" sm="6" className="offset-md-4">
          <div className="login-caontainer">
            <div className="logo">
              <img
                src="/assets/img/logo.png"
                height="65"
                alt="AIMST University"
              />
            </div>
            {/* <div className="alert alert-info">
          <strong>Normal User</strong> - U: user P: user
          <br />
          <strong>Administrator</strong> - U: admin P: admin
        </div> */}
            {/* <h2>Login</h2> */}
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              validationSchema={Yup.object().shape({
                username: Yup.string().required("Username is required"),
                password: Yup.string().required("Password is required"),
              })}
              onSubmit={(
                { username, password },
                { setStatus, setSubmitting }
              ) => {
                setStatus();
                authenticationService.login(username, password).then(
                  (user) => {
                    const { from } = this.props.location.state || {
                      from: { pathname: "/" },
                    };
                    this.props.history.push(from);
                  },
                  (error) => {
                    setSubmitting(false);
                    setStatus(error);
                  }
                );
              }}
              render={({ errors, status, touched, isSubmitting }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <Field
                      name="username"
                      type="text"
                      autoComplete="off"
                      className={
                        "form-control" +
                        (errors.username && touched.username
                          ? " is-invalid"
                          : "")
                      }
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field
                      name="password"
                      type="password"
                      className={
                        "form-control" +
                        (errors.password && touched.password
                          ? " is-invalid"
                          : "")
                      }
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group mt-4">
                    <MDBBtn rounded type="submit" block disabled={isSubmitting}>
                      Login{" "}
                      {isSubmitting && (
                        <img
                          alt="loading"
                          src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                        />
                      )}
                    </MDBBtn>
                  </div>
                  {status && (
                    <div className={"alert alert-danger"}>{status}</div>
                  )}
                </Form>
              )}
            />
          </div>
        </MDBCol>
      </MDBRow>
    );
  }
}

export { LoginPage };
