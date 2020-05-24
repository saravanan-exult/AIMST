import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";

import {
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBSelect,
  MDBDatePickerV5,
  MDBInput,
} from "mdbreact";
import { userService, authenticationService } from "../../_services";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue,
      userFromApi: null,
      programOptions: [
        {
          text: "Foundation in Science -SGFS",
          value: "1",
        },
        {
          text: "Foundation in Business -SGFS",
          value: "2",
        },
        {
          text: "Post Basic in Critical Care Nursing-FAHP",
          value: "3",
        },
        {
          text: "Diploma in Electrical and Electronic Engineering-FECT",
          value: "4",
        },
        {
          text: "Diploma in Physiotherapy-FAHP",
          value: "5",
        },
      ],
      raceOptions: [
        {
          text: "Indian",
          value: "1",
        },
        {
          text: "Chinese",
          value: "2",
        },
        {
          text: "Malay",
          value: "3",
        },
        {
          text: "Others",
          value: "4",
        },
      ],
      maritalOptions: [
        {
          text: "Single",
          value: "1",
        },
        {
          text: "Married",
          value: "2",
        },
      ],
      religionOptions: [
        {
          text: "ISLAM",
          value: "1",
        },
        {
          text: "BUDDHISM",
          value: "2",
        },
        {
          text: "HINDUISM",
          value: "3",
        },
        {
          text: "CHRISTIANITY",
          value: "4",
        },
        {
          text: "CATHOLICIM",
          value: "5",
        },
      ],
      bankOptions: [
        {
          text: "Maybank",
          value: "1",
        },
        {
          text: "CIMB Bank",
          value: "2",
        },
        {
          text: "Public Bank Berhad",
          value: "3",
        },
        {
          text: "RHB Bank",
          value: "4",
        },
        {
          text: "Hong Leong Bank",
          value: "5",
        },
        {
          text: "AmBank",
          value: "6",
        },
        {
          text: "UOB Malaysia Bank",
          value: "7",
        },
      ],
    };
  }

  componentDidMount() {
    const { currentUser } = this.state;
    userService
      .getById(currentUser.id)
      .then((userFromApi) => this.setState({ userFromApi }));
  }

  render() {
    const { currentUser, userFromApi } = this.state;
    return (
      <MDBContainer>
        {/* <h1>Home</h1>
        <p>You're logged in with React & JWT!!</p>
        <p>
          Your role is: <strong>{currentUser.role}</strong>.
        </p>
        <p>This page can be accessed by all authenticated users.</p>
        <div>
          Current user from secure api end point:
          {userFromApi && (
            <ul>
              <li>
                {userFromApi.firstName} {userFromApi.lastName}
              </li>
            </ul>
          )}
        </div> */}

        <MDBRow>
          <MDBCol md="12">
            <h4 className="page-title">Student Registration</h4>
            <MDBCard className="mb-4">
              <MDBCardBody>
                <Formik
                  onSubmit={() => {}}
                  render={({ errors, status, touched, isSubmitting }) => (
                    <Form>
                      <MDBRow>
                        <MDBCol md="4">
                          <div className="form-group">
                            <label htmlFor="Name">Name</label>
                            <Field
                              name="Name"
                              type="text"
                              autoComplete="off"
                              className={
                                "form-control" +
                                (errors.Name && touched.Name
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="Name"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </MDBCol>
                        <MDBCol md="5">
                          <div className="form-group">
                            <label htmlFor="Program">Program</label>
                            <MDBSelect
                              search
                              options={this.state.programOptions}
                              selected="Choose your option"
                              label="Program"
                            />
                          </div>
                        </MDBCol>
                        <MDBCol md="3">
                          <div className="form-group">
                            <label htmlFor="Intake">Intake(mm/yy)</label>
                            <MDBDatePickerV5
                              inline
                              getValue={(e) => console.log(e)}
                            />
                          </div>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="9">
                          <div className="form-group">
                            <label htmlFor="Address">Home Address</label>
                            <Field
                              name="Address"
                              type="text"
                              autoComplete="off"
                              className="form-control"
                            />
                          </div>
                        </MDBCol>
                        <MDBCol md="3">
                          <div className="form-group">
                            <label htmlFor="Hpno">H/p no</label>
                            <Field
                              name="Hpno"
                              type="text"
                              autoComplete="off"
                              className="form-control"
                            />
                          </div>
                        </MDBCol>

                        <MDBCol md="4">
                          <div className="form-group">
                            <label htmlFor="Email">Email ID</label>
                            <Field
                              name="Email"
                              type="text"
                              autoComplete="off"
                              className="form-control"
                            />
                          </div>
                        </MDBCol>
                        <MDBCol md="4">
                          <div className="form-group">
                            <label htmlFor="Passport">IC/Passport No</label>
                            <Field
                              name="Passport"
                              type="text"
                              autoComplete="off"
                              className="form-control"
                            />
                          </div>
                        </MDBCol>
                        <MDBCol md="4">
                          <div className="form-group">
                            <label htmlFor="Race">Race</label>
                            <MDBSelect
                              options={this.state.raceOptions}
                              selected="Choose your option"
                              label="Race"
                            />
                          </div>
                        </MDBCol>

                        <MDBCol md="4">
                          <div className="form-group">
                            <label htmlFor="Marital">Marital Status</label>
                            <MDBSelect
                              options={this.state.maritalOptions}
                              selected="Choose your option"
                              label="Marital"
                            />
                          </div>
                        </MDBCol>
                        <MDBCol md="4">
                          <div className="form-group">
                            <label htmlFor="Religion">Religion</label>
                            <MDBSelect
                              options={this.state.religionOptions}
                              selected="Choose your option"
                              label="Religion"
                            />
                          </div>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="4">
                          <div className="form-group">
                            <label htmlFor="Parents">
                              Parents/Guardians Name
                            </label>
                            <Field
                              name="Parents"
                              type="text"
                              autoComplete="off"
                              className="form-control"
                            />
                          </div>
                        </MDBCol>
                        <MDBCol md="4">
                          <div className="form-group">
                            <label htmlFor="ParentPassport">
                              Parents IC/Passport no
                            </label>
                            <Field
                              name="ParentPassport"
                              type="text"
                              autoComplete="off"
                              className="form-control"
                            />
                          </div>
                        </MDBCol>
                      </MDBRow>

                      <MDBRow>
                        <MDBCol md="4">
                          <div className="form-group">
                            <label htmlFor="bankName">Bank Name</label>
                            <MDBSelect
                              options={this.state.bankOptions}
                              selected="Choose your option"
                              label="Religion"
                            />
                          </div>
                        </MDBCol>
                        <MDBCol md="4">
                          <div className="form-group">
                            <label htmlFor="accountNo">Account Number</label>
                            <Field
                              name="accountNo"
                              type="text"
                              autoComplete="off"
                              className="form-control"
                            />
                          </div>
                        </MDBCol>
                        <MDBCol md="4">
                          <div className="form-group">
                            <label htmlFor="attachment">
                              Attachment (upload payment receipt):
                            </label>
                            <div className="input-group">
                              <div className="custom-file">
                                <input
                                  type="file"
                                  className="custom-file-input"
                                  id="attachment"
                                  aria-describedby="inputGroupFileAddon01"
                                />
                                <label
                                  className="custom-file-label"
                                  htmlFor="attachment"
                                >
                                  Choose file
                                </label>
                              </div>
                            </div>
                          </div>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="12">
                          <div className="form-group">
                            <label>PDPA</label>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="defaultUnchecked"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="defaultUnchecked"
                              >
                                I declare that i have read and fully understand
                                the contents of this form and that all the
                                statements contained in this form and in my
                                application form is true. I Understand that my
                                candidature in this university may be cancelled
                                or suspended if any are found to be false. By
                                submitting this REGISTRATION FORM, I accept that
                                I will be bound by the terms, condition and
                                policies stated in the documents stated above. I
                                will also undertake to pay all the fees for the
                                program I am enrolled as stipulated by the
                                university
                              </label>
                            </div>
                          </div>
                        </MDBCol>
                      </MDBRow>

                      <div className="form-group text-center mb-0">
                        <MDBBtn color="blue-grey" rounded type="button">
                          Reset
                        </MDBBtn>
                        <MDBBtn rounded type="submit">
                          Submit
                        </MDBBtn>
                      </div>
                      {status && (
                        <div className={"alert alert-danger"}>{status}</div>
                      )}
                    </Form>
                  )}
                />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export { HomePage };
