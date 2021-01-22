import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contactform.css';
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_cDnFvAUR6X6InJx5miron");

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

    // const [result, setResult] = useState();

    const onInputChange = event => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, surname, email, phone, location, reg, enquiry } = state;
        document.querySelector('.loading_spinner').classList.remove('hidden');
        document.querySelector('.loading_spinner--img').classList.remove('hidden');
        emailjs.send("service_hl2swmq", "template_c08hmud", {
            from_name: name + ' ' + surname,
            to_name: 'Caracture',
            from_phone: phone,
            from_location: location,
            from_reg: reg,
            message: enquiry,
            reply_to: email
        }).then(r  => {
            document.querySelector('.loading_spinner').classList.add('hidden');
            document.querySelector('.loading_spinner--img').classList.add('hidden');
            if (r.text === 'OK') {
                Swal.fire({
                    title: 'Success!',
                    text: 'Thank you for your email. Someone will be in touch shortly to discuss your enquiry.',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                }).then(() => {
                    window.location.href = '/';
                })
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Something went wrong. Please call us, or try again later.',
                    icon: 'error',
                    confirmButtonText: 'Okay'
                }).then(() => {
                    window.location.href = '/';
                })
            }
        });
        setState({name: '', surname: '', email: '', phone: '', location: '', reg: '', enquiry: ''});
    };

  return (
      <>
          <Form className={'contact-form'} onSubmit={handleSubmit}>
              <Form.Row>
                  <Form.Group as={Col} controlId="formGridFirstname">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                          type="text"
                          name="name"
                          value={state.name}
                          onChange={onInputChange}
                      />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridSurname">
                      <Form.Label>Surname</Form.Label>
                      <Form.Control
                          type="text"
                          name="surname"
                          value={state.surname}
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
                          onChange={onInputChange}
                      />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPhone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                          type="tel"
                          name="phone"
                          value={state.phone}
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
                              onChange={onInputChange}
                          />
                      </Form.Group>

                      <Form.Group id={'form--registration'} controlId="formGridRegistration">
                          <Form.Label>Car Registration (if known)</Form.Label>
                          <Form.Control
                              type="text"
                              name="reg"
                              value={state.reg}
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
                              onChange={onInputChange}
                          />
                      </Form.Group>
                  </div>
            </div>

              <Button variant="primary" type='submit'>Submit</Button>
          </Form>
          <div className={'loading_spinner hidden'}>
              <img className={'loading_spinner--img hidden'} src="http://www.jettools.com/images/animated_spinner.gif" alt={'loading spinner'}/>
          </div>
      </>
  );
}