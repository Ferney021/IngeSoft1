import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import axios from "../../api.js";
const SingUpForm = lazy(() => import("../../components/account/SignUpForm"));

class SignUpView extends Component {
  state = {
    redirect: false
  }
  onSubmit = async (values) => {
    axios.post('/register', values).then(res => {
      console.log(res.data);
      if (res.data.status) {
        this.setState({ redirect: true });
      }
    })
  };
  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/' />;
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
            <h4 className="text-center">Sign Up</h4>
            <SingUpForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpView;
