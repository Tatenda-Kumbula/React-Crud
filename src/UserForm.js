import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'Formik';

class UserForm extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
          <div>
              <h1>Any place in your app!</h1>
              <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                  let errors = {};
                  if (!values.email) {
                    errors.email = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'Invalid email address';
                  }
                  else if (values.email.length < 10) {
                    errors.email = 'Email address too short';
                  } 
}

