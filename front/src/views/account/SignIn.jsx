import React, { lazy, Component } from "react";
import axios from '../../api.js'
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
const SignInForm = lazy(() => import("../../components/account/SignInForm"));

class SignInView extends Component {
  state = {
    redirect: false
  }
  onSubmit = async (values) => {
    // alert(JSON.stringify(values));
    console.log('Enviando');
    axios.post('/login',{data: values}).then(res => {
      console.log(res.data);
      if(res.data.status) {
        alert('Login exitoso');
        this.setState({ redirect: true });
        localStorage.setItem('token', res.data.token)
      } else {
        alert(res.data.msg);
      }
    })
  };
  render() {
    const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/'/>;
     }
    return (
      <div className="container my-3">
        <div className="row border">
          <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
            <Link to="/">
              <img
                src="../../images/banner/Dell.webp"
                alt="..."
                className="img-fluid"
              />
            </Link>
            <Link to="/">
              <img
                src="../../images/banner/Laptops.webp"
                alt="..."
                className="img-fluid"
              />
            </Link>
          </div>
          <div className="col-md-6 p-3">
            <h4 className="text-center">Sign In</h4>
            <SignInForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default SignInView;
