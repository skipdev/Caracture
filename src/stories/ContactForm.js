import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contactform.css';
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import Swal from 'sweetalert2';

export const ContactForm = () => {
    const [state, setState] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        location: '',
        reg: '',
        enquiry: ''
    });

    const [result, setResult] = useState(null);
    const sendEmail = event => {
        event.preventDefault();
        axios
            .post('/send', {...state})
            .then(response => {
                setResult(response.data);
                setState({name: '', surname: '', email: '', phone: '', location: '', reg: '', enquiry: ''});
            })
            .catch((error) => {
                console.log('error contactform.js', error);
                setResult({success: false, message: 'Something went wrong. Try again later'});
            });
    }

    const onInputChange = event => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value
        });
    };

  return (
      <>
          {result && (
              <p className={`${result.success ? 'success' : 'error'}`}>
                  {result.success
                      ?
                      Swal.fire({
                          title: 'Success!',
                          text: 'Thank you for your email. Someone will be in touch shortly to discuss your enquiry.',
                          icon: 'success',
                          confirmButtonText: 'Okay'
                      }).then(() => {
                          window.location.reload()
                      })
                      :
                      Swal.fire({
                          title: 'Error!',
                          text: 'Something went wrong. Please call us, or try again later.',
                          icon: 'error',
                          confirmButtonText: 'Okay'
                      }).then(() => {
                          window.location.href = "http://www.caracture.co.uk";
                      })}
              </p>
          )}
          <Form className={'contact-form'} onSubmit={sendEmail}>
              <Form.Row>
                  <Form.Group as={Col} controlId="formGridFirstname">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                          type="text"
                          name="name"
                          value={state.name}
                          placeholder="John"
                          onChange={onInputChange}
                      />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridSurname">
                      <Form.Label>Surname</Form.Label>
                      <Form.Control
                          type="text"
                          name="surname"
                          value={state.surname}
                          placeholder="Smith"
                          onChange={onInputChange}
                      />
                  </Form.Group>
              </Form.Row>

              <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                          type="text"
                          name="email"
                          value={state.email}
                          placeholder="johnsmith@gmail.com"
                          onChange={onInputChange}
                      />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPhone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                          type="tel"
                          name="phone"
                          value={state.phone}
                          placeholder="07123456789"
                          onChange={onInputChange}
                      />
                  </Form.Group>
              </Form.Row>

              <div className={"form-row"}>
                  <div className={"form-column"}>
                      <Form.Group controlId="formGridLocation">
                          <Form.Label>Location</Form.Label>
                          <Form.Control
                              type="text"
                              name="location"
                              value={state.location}
                              placeholder="Southampton"
                              onChange={onInputChange}
                          />
                      </Form.Group>

                      <Form.Group id={'form--registration'} controlId="formGridRegistration">
                          <Form.Label>Car Registration (if known)</Form.Label>
                          <Form.Control
                              type="text"
                              name="reg"
                              value={state.reg}
                              placeholder="NU20 REG"
                              onChange={onInputChange}
                          />
                      </Form.Group>
                  </div>

                  <div className={"form-column"}>
                      <Form.Group id={'form--enquiry'} controlId="formGridTextarea">
                          <Form.Label>Enquiry</Form.Label>
                          <Form.Control
                              as="textarea"
                              name="enquiry"
                              value={state.enquiry}
                              rows="5"
                              placeholder="What are you looking for?"
                              onChange={onInputChange}
                          />
                      </Form.Group>
                  </div>
            </div>

              <Button variant="primary" type='submit'>Submit</Button>
          </Form>
      </>
  );
}