import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {

  state = {
    isSaved: false
  }

  contactFormSubmitHandler = (e) => {
    e.preventDefault();
    console.log('submitted');
    console.log(this.emailInput.value);
    console.log(this.phoneInput.value);

    const contactFormData = {
      email: this.emailInput.value,
      phone: this.phoneInput.value
    };

    console.log(contactFormData);

    // What's the REST API backend? https://jsonplaceholder.typicode.com/users/
    // What's the HTTP Method? POST
    // What's the REST API Client tool? Promise based client tool - axios 

    axios.post('https://jsonplaceholder.typicode.com/users/', contactFormData)
      .then( (response) => {
        // handle success
        console.log(response.data);
        if(response.data.id == 11){
          this.setState({
            isSaved: true
          });
        }else{
          this.setState({
            isSaved: false
          });
        }
        
      })
      .catch( (error) => {
        // handle error
        console.log(error);
      })
      .finally( ()=> {
        console.log('It is over');
      });

  }

  render() {
    return (
      <div>
        <h2>Contact Form | Form Submission and AJAX calls</h2>

        <form onSubmit={ this.contactFormSubmitHandler }>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="text" className="form-control"
                placeholder='Enter E-Mail'
                id="inputEmail3" ref={(inputEl) => { this.emailInput = inputEl }} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPhone3" className="col-sm-2 col-form-label">Phone</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputPhone3"
                placeholder='Enter Phone' 
                ref={(inputEl) => { this.phoneInput = inputEl }} />
            </div>
          </div>
          <button type="submit" className='btn btn-primary'>Submit</button>

          { 
            this.state.isSaved? 
            <div className='alert alert-success'>Saved Successfully!</div>
            :
            <div className='alert alert-danger'>Some error occured! Try again later</div>
          }
          
          
        </form>

      </div>
    )
  }
}

export default ContactForm;
