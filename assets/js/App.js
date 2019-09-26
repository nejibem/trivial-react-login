import React from 'react';
import PageTemplate from './PageTemplate';
import LoginForm from './LoginForm';
import PageLoggedIn from './PageLoggedIn';

class App extends React.Component {
  state = {
    loggedInUser: null,
  };

  storeLoggedInUser = (userName) => {
    this.setState({
      loggedInUser: userName,
    })
  };

  logoutUser = () => {
    this.setState({
      loggedInUser: null,
    })
  };

  render() {
    const { loggedInUser } = this.state;

    return(
      <PageTemplate>
        <section>
          <div class="jumbotron">
            <h1>Some App</h1>
            {loggedInUser === null
              ? <div>
                  <p>Hi, this is the SomeApp application. Access is limited to users with valid accounts.</p>
                  <p>Please login below using your email and password. If you can't remember your login credentials just use the force!</p>
                </div>
              : null }
          </div>
        </section>
        <section>
          { loggedInUser
            ? <PageLoggedIn user={loggedInUser} logoutUser={this.logoutUser} />
            : <LoginForm storeLoggedInUser={this.storeLoggedInUser} /> }
        </section>
      </PageTemplate>
    );
  }
}

export default App;