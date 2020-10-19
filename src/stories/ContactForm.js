import React from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contactform.css';
import {Button} from "./Button";
import Col from "react-bootstrap/Col";

export const ContactForm = () => {
  return (
      <Form className={'contact-form'}>
          <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSurname">
                  <Form.Label>Surname</Form.Label>
                  <Form.Control type="text" placeholder="Enter Surname" />
              </Form.Group>
          </Form.Row>

          <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number" placeholder="Phone Number" />
              </Form.Group>
          </Form.Row>

          <div className={"form-row"}>
              <div className={"form-column"}>
                  <Form.Group controlId="formGridLocation">
                      <Form.Label>Location</Form.Label>
                      <Form.Control placeholder="Your city, town, or postcode." />
                  </Form.Group>

                  <Form.Group id={'form--registration'} controlId="formGridRegistration">
                      <Form.Label>Registration (if known)</Form.Label>
                      <Form.Control placeholder="Car Registration" />
                  </Form.Group>
              </div>

              <div className={"form-column"}>
                  <Form.Group id={'form--enquiry'} controlId="formGridTextarea">
                      <Form.Label>Enquiry</Form.Label>
                      <Form.Control as="textarea" rows="5" name="enquiry"/>
                  </Form.Group>
              </div>
        </div>

        <Button type="primary" label={'Submit'}/>
      </Form>
  );
}