import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';


const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by signed in users.</p>
  

    <AuthUserContext.Consumer>
      {authUser => (
        <li key={authUser.uid}>
          
          <li>
            <strong>Username:</strong> {authUser.username}
          </li>
          <li>
            <strong>Fridge:</strong> {authUser.fridge}
          </li>

          <p>The Fridge of {authUser.username} contains {authUser.fridge} </p>
        </li>
        
      )}
    </AuthUserContext.Consumer>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
