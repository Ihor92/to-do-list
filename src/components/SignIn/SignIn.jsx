import React, { Component } from 'react';
import { signIn } from '../HelperMessages/HelperMessages';
import './SignIn.css';

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      date: false,
    };
  }

  render() {
    const {
      signInTitle,
      signInEmail,
      signInPassword,
      labelRemember,
      buttonSignIn,
    } = signIn;

    return (
      <div className="sign-in container-sm">
        <h1>{signInTitle}</h1>
        <form>
          <input
            type="email"
            placeholder={signInEmail}
          />
          <input
            type="password"
            placeholder={signInPassword}
          />
          <label htmlFor="remember">{labelRemember}</label>
          <input id="remember" type="checkbox" />
          <button type="submit">{buttonSignIn}</button>
        </form>
      </div>
    )
  }
}