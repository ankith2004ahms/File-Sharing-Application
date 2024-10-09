import * as React from 'react';


export const EmailTemplate=( { response: any }, {
    firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);
