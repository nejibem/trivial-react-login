import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        subject: '',
      },
      errors: {},
      submitting: false,
      authResult: null,
    };
  }

  handleFormChange = (event) => {
    const { name, value}  = event.target;
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [name]: value,
      }
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { form } = this.state;

    const formData = new FormData();
    formData.append('email', form.email);
    formData.append('password', form.password);

    this.setState({submitting:true});
    fetch('/prod/auth', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          submitting: false,
          authResult: data.auth_successful,
        });
        if (data.auth_successful === true) {
          this.props.storeLoggedInUser(form.email);
        }
      });
  };

  render() {
    const { form, errors, submitting, authResult } = this.state;

    return (
      <React.Fragment>
        <h2>Login</h2>
        { submitting === true
          ? <div className="loader" />
          : <div>
              { authResult === false && <div className="alert alert-warning"><strong>Sorry:</strong> That Username and password could not be found in our system</div> }
              <form
                method="POST"
                action="/email"
                onSubmit={this.handleSubmit}
                noValidate >
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={this.handleFormChange}
                  className={errors.hasOwnProperty('email') ? 'input-error' : '' }
                  placeholder="Email" />
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={this.handleFormChange}
                  className={errors.hasOwnProperty('subject') ? 'input-error' : '' }
                  placeholder="Password" />
                <input
                  type="submit"
                  value="Login" />
              </form>
            </div> }
      </React.Fragment>
    );
  }
}

export default LoginForm;