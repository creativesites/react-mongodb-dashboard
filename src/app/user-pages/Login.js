import React, { Component } from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loginUser } from './user';
import PropTypes from 'prop-types';

export class Login extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  static isAuthenticated(token) {
      if (token) return true;
  }

  constructor(props) {
      super(props);

      this.state = {
          email: 'admin@gethomesafe.com',
          password: 'password',
      };

      this.doLogin = this.doLogin.bind(this);
      this.changeEmail = this.changeEmail.bind(this);
      this.changePassword = this.changePassword.bind(this);
      this.signUp = this.signUp.bind(this);
  }

  changeEmail(event) {
      this.setState({ email: event.target.value });
  }

  changePassword(event) {
      this.setState({ password: event.target.value });
  }

  doLogin(e) {
      e.preventDefault();
      this.props.dispatch(loginUser({ email: this.state.email, password: this.state.password }));
  }

  signUp() {
      this.props.history.push('/register');
  }
  render() {
    /* const { from } = this.props.location.state || { from: { pathname: '/dashboard' } }; // eslint-disable-line

        // cant access login page while logged in
        if (Login.isAuthenticated(JSON.parse(localStorage.getItem('authenticated')))) {
            return (
                <Redirect to={from} />
            );
        } */
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="card text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require("../../assets/images/logo.svg")} alt="logo" />
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3"  onSubmit={this.doLogin}>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="email" placeholder="Username" size="lg" className="h-auto" />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="password" placeholder="Password" size="lg" className="h-auto" />
                  </Form.Group>
                  <div className="mt-3">
                  <button type="submit" className="btn btn-block btn-facebook auth-form-btn">
                      <i className="mdi mdi-facebook mr-2"></i>{this.props.isFetching ? 'Loading...' : 'Login'}
                    </button>
                    
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input"/>
                        <i className="input-helper"></i>
                        Keep me signed in
                      </label>
                    </div>
                    <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-muted">Forgot password?</a>
                  </div>
                  <div className="mb-2">
                    <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                      <i className="mdi mdi-facebook mr-2"></i>Connect using facebook
                    </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account? <Link to="/user-pages/register" className="text-primary">Create</Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
      isFetching: state.auth.isFetching,
      isAuthenticated: state.auth.isAuthenticated,
      errorMessage: state.auth.errorMessage,
  };
}
export default Login
//export default withRouter(connect(mapStateToProps)(Login));
