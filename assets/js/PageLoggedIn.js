import React from 'react';

const PageLoggedIn = ({ user, logoutUser }) => (
  <section>
    <p>
      Hi, Welcome back {user} we are so glad to see you again!
    </p>
    <p>
      Really its great to see you again.
    </p>
    <p>
      Once you are done enjoying our app feel free to end your session by clicking the button below.
    </p>
    <p><button onClick={() => logoutUser()}>Logout</button></p>
  </section>
);

export default PageLoggedIn;