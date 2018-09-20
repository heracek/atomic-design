import React, { Component } from 'react';

import { LoginTemplate } from '../templates/LoginTemplate';

export class LoginPage extends Component {
  state = {
    email: '',
    passowrd: '',
  };

  render() {
    const { email, passowrd } = this.state;
    const values = { email, passowrd };

    return (
      <LoginTemplate
        values={values}
        onInputChange={(id, value) => this.setState({ [id]: value })}
        onSubmit={e => {
          e.preventDefault();
          alert(`Send data: ${JSON.stringify(values)}`);
        }}
      />
    );
  }
}
