import React, { Component, useReducer, useState } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';
import axios from 'axios';
import { Formik } from 'formik';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value
  }
 }
 
export class BasicElements extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      
        m1: '',
        //m1Img: '',
        m1T: '',
        m2: '',
        m3: '',
        m3T: '',
        m4: '',
        m5: '',
        m5T: '',
        m6: '',
        m7: '',
        m8: '',
        m8T: '',
        m9: '',
        m10: ''
      
    };
    this.handleChange = this.handleChange.bind(this);
    //this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
    componentDidMount() {
      axios.get('http://localhost:7777/api/getMsgs')
        .then(res => {
          console.log(res.data)
          let a = res.data[0]
          this.setState({
            
            
              m1: a.m1,
              //m1Img: a.m1Img,
              m1T: a.m1T,
              m2: a.m2,
              m3: a.m3,
              m3T: a.m3T,
              m4: a.m4,
              m5: a.m5,
              m5T: a.m5T,
              m6: a.m6,
              m7: a.m7,
              m8: a.m8,
              m8T: a.m8T,
              m9: a.m9,
              m10: a.m10
            
          });
        })
        .catch((error) => {
          console.log(error);
        })
        bsCustomFileInput.init()
    };
    /* handleChange = data => {
      this.setState({
        msg1: data
      });
    }; */
    /* handleChange(event) {
      this.setState({msg1: event.target.value});
    } */
  
    handleSubmit(event) {
      let apiURL = `http://localhost:7777/api/editMsgs`;

            axios.post(apiURL, this.state).then((res) => {
                console.log(res)
                
            }).catch(error => {
                console.log(error)
            });
      //event.preventDefault();
    }
    handleChange(evt) {
      const value = evt.target.value;
      this.setState({
        ...this.state,
        [evt.target.name]: value
      });
    }
  

  
  render() {
    
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Chatbot Responses </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Edit</a></li>
              <li className="breadcrumb-item active" aria-current="page">Responses</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Edit Responses</h4>
                <p className="card-description"> Chatbot </p>
                <form className="forms-sample" onSubmit={this.handleSubmit}>
                  
                <h4>TRIGGERS</h4>
                <p className="text-primary">Please enter as many trigger words as possible, seperating each one with a comma. Please do not put spaces between the words.</p>
                <h5>For Example:</h5>
                <p className="text-warning">yes,yep,sure,yup,cool,fine,alright</p>
                <Form.Group>
                    <label htmlFor="exampleInputCity1">Triggers</label>
                    <Form.Control type="text" name="m1T" className="form-control" id="exampleInputCity1" placeholder="" defaultValue={this.state.m1T} onChange={this.handleChange} />         
                  </Form.Group>
                  <h4>RESPONSE</h4>
                  
                <Form.Group>
                <blockquote className="blockquote blockquote-primary">
                  <p>Original Response</p>
                  <footer className="blockquote-footer bg-transparent p-0">Hello thank you for contacting the Chatbot! The usage of this Chatbot is completely free. Our goal is to get you home safely! First of all what’s your name?</footer>
                </blockquote>
                    <label htmlFor="exampleTextarea1">First contact</label>
                    <textarea className="form-control" name="m1" id="exampleTextarea1" rows="4" defaultValue={this.state.m1} onChange={this.handleChange}></textarea>
                  </Form.Group>
                  <div className="card">
              <div className="card-body">
                <h6 className="card-title">Current Image</h6>
                <img src={require('../../assets/images/dashboard/1.jpeg')} alt="carousel-item"  height="150px"/>
                </div>
                </div>
                  
                  <p>Change Image</p>
                  <Form.Group>
                    <label>Upload Image for First Contact</label>
                    <div className="custom-file">
                      <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                      <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                    </div>
                  </Form.Group>
                 
                  
                  <h4>RESPONSE</h4>
                  <Form.Group>
                  <blockquote className="blockquote blockquote-primary">
                  <p>Original Response</p>
                  <footer className="blockquote-footer bg-transparent p-0">Thank you name! If you have already received an invitation code from one of your friends please put in the code. If you are new to the app just reply with new and we will create a new code That you can share with your friends.</footer>
                </blockquote>
                    <label htmlFor="exampleTextarea1">Register Name Message</label>
                    <textarea className="form-control" name="m2" id="exampleTextarea1" rows="4" defaultValue={this.state.m2} onChange={this.handleChange}></textarea>
                  </Form.Group>
                  <h4>TRIGGERS</h4>
                <p className="text-primary">Please enter as many trigger words as possible, seperating each one with a comma. Please do not put spaces between the words.</p>
                <h5>For Example:</h5>
                <p className="text-warning">yes,yep,sure,yup,cool,fine,alright</p>
                <Form.Group>
                    <label htmlFor="exampleInputCity1">Triggers</label>
                    <Form.Control type="text" name="m3T" className="form-control" id="exampleInputCity1" placeholder="" defaultValue={this.state.m3T} onChange={this.handleChange}/>
                  </Form.Group>
                  <h4>RESPONSE</h4>
                  <Form.Group>
                  <blockquote className="blockquote blockquote-primary">
                  <p>Original Response</p>
                  <footer className="blockquote-footer bg-transparent p-0">Great this is your new code XX9XY please send this code to your friends via WhatsApp. You can also send them this link: Link to Chatbot</footer>
                </blockquote>
                    <label htmlFor="exampleTextarea1">Create New Code Message</label>
                    <textarea className="form-control" name="m3" id="exampleTextarea1" rows="4" defaultValue={this.state.m3} onChange={this.handleChange}></textarea>
                  </Form.Group>
                  
                  <h4>RESPONSE</h4>
                  <Form.Group>
                  <blockquote className="blockquote blockquote-primary">
                  <p>Original Response</p>
                  <footer className="blockquote-footer bg-transparent p-0">Great you have now been registered and can start using the Chatbot! Just text us Home when you’re on your way home. We will then check in after 20 minutes if you got home safely. If you don’t reply we will send a reminder to your friends to call you.</footer>
                </blockquote>
                    <label htmlFor="exampleTextarea1">Register User into Group with the Same Code Message</label>
                    <textarea className="form-control" name="m4" id="exampleTextarea1" rows="4" defaultValue={this.state.m4} onChange={this.handleChange}></textarea>
                  </Form.Group>
                  <h4>TRIGGERS</h4>
                <p className="text-primary">Please enter as many trigger words as possible, seperating each one with a comma. Please do not put spaces between the words.</p>
                <h5>For Example:</h5>
                <p className="text-warning">yes,yep,sure,yup,cool,fine,alright</p>
                <Form.Group>
                    <label htmlFor="exampleInputCity1">Triggers</label>
                    <Form.Control type="text" name="m5T" className="form-control" id="exampleInputCity1" placeholder="" defaultValue={this.state.m5T} onChange={this.handleChange}/>
                  </Form.Group>
                  <h4>RESPONSE</h4>
                  <Form.Group>
                  <blockquote className="blockquote blockquote-primary">
                  <p>Original Response</p>
                  <footer className="blockquote-footer bg-transparent p-0">Hi thanks for contacting us! We will check back in with you in 20 minutes. Get home safe!</footer>
                </blockquote>
                    <label htmlFor="exampleTextarea1">Contact Get Home Message</label>
                    <textarea className="form-control" name="m5" id="exampleTextarea1" rows="4" defaultValue={this.state.m5} onChange={this.handleChange}></textarea>
                  </Form.Group>
                 
                  <h4>RESPONSE</h4>
                  <Form.Group>
                  <blockquote className="blockquote blockquote-primary">
                  <p>Original Response</p>
                  <footer className="blockquote-footer bg-transparent p-0">Hello did you get home safe and are you OK? Please reply with yes if you are.</footer>
                </blockquote>
                    <label htmlFor="exampleTextarea1">Check Back After 20 Minutes Message</label>
                    <textarea className="form-control" name="m6" id="exampleTextarea1" rows="4" defaultValue={this.state.m6} onChange={this.handleChange}></textarea>
                  </Form.Group>
                  
                  <h4>RESPONSE</h4>
                  <Form.Group>
                  <blockquote className="blockquote blockquote-primary">
                  <p>Original Response</p>
                  <footer className="blockquote-footer bg-transparent p-0">Hi we didn’t receive a reply yet, are you OK? If you don’t reply within the next 10 minutes we will send a message to your friends.</footer>
                </blockquote>
                    <label htmlFor="exampleTextarea1">If No Reply Check Again After 10 Minutes Message</label>
                    <textarea className="form-control" name="m7" id="exampleTextarea1" rows="4" defaultValue={this.state.m7} onChange={this.handleChange}></textarea>
                  </Form.Group>
                  <h4>TRIGGERS</h4>
                <p className="text-primary">Please enter as many trigger words as possible, seperating each one with a comma. Please do not put spaces between the words.</p>
                <h5>For Example:</h5>
                <p className="text-warning">yes,yep,sure,yup,cool,fine,alright</p>
                <Form.Group>
                    <label htmlFor="exampleInputCity1">Triggers</label>
                    <Form.Control type="text" name="m8T" className="form-control" id="exampleInputCity1" placeholder="" defaultValue={this.state.m8T} onChange={this.handleChange}/>
                  </Form.Group>
                  <h4>RESPONSE</h4>
                  <Form.Group>
                  <blockquote className="blockquote blockquote-primary">
                  <p>Original Response</p>
                  <footer className="blockquote-footer bg-transparent p-0">We are so glad you’re home safe! Until next time! By the way this project is totally non-commercial and we rely on donations. We would greatly appreciate it if you would donate to us via PayPal! Here’s the link.</footer>
                </blockquote>
                    <label htmlFor="exampleTextarea1">If Reply Success Message</label>
                    <textarea className="form-control" name="m8" id="exampleTextarea1" rows="4" defaultValue={this.state.m8} onChange={this.handleChange}></textarea>
                  </Form.Group>
                  
                  <h4>RESPONSE</h4>
                  <Form.Group>
                  <blockquote className="blockquote blockquote-primary">
                  <p>Original Response</p>
                  <footer className="blockquote-footer bg-transparent p-0">Hello we are contacting you because your friend name did not reply to our messages. Please call name in order to make sure she/him/They are OK! </footer>
                </blockquote>
                    <label htmlFor="exampleTextarea1">If No Reply Contact Friends With Same Code Message</label>
                    <textarea className="form-control" name="m9" id="exampleTextarea1" rows="4" defaultValue={this.state.m9} onChange={this.handleChange}></textarea>
                  </Form.Group>
                  
                  
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                  {/* <button className="btn btn-dark">Cancel</button> */}
                </form>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}

export default BasicElements
