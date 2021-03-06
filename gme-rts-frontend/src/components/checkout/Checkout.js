import React, { Component } from 'react';
import { useGlobal } from 'reactn';
// import './App.css';
import 'braintree-web';
import axios from 'axios';
import DropIn from 'braintree-web-drop-in-react';
import api from '../../api';

import './Checkout.scss';

class Checkout extends Component {
  instance;
  token = api.isAuthenticated().token;
  id = api.isAuthenticated().id;
  API = process.env.REACT_APP_GREMS_API || 'http://localhost:8000/api';
  productAmount = this.props.match.params.productAmount;

  state = {
    clientToken: null,
  };

  async componentDidMount() {
    console.log({ id: this.id });
    console.log(api.getOrder());
    try {
      // Get a client token for authorization from your server
      // this.setAuthToken(this.token);
      const response = await axios.get(
        `${this.API}/braintree/get-token/${this.id}`,
      );
      console.log({ response });
      const clientToken = response.data.clientToken;

      this.setState({ clientToken });
    } catch (err) {
      console.error(err);
    }
  }

  setAuthToken = (token) => {
    if (token) axios.defaults.headers.common['x-auth-token'] = this.token;
    else delete axios.defaults.headers.common['x-auth-token'];
  };

  async buy() {
    try {
      // Send the nonce to your server
      const { nonce } = await this.instance.requestPaymentMethod();
      console.log({ NONCE: nonce });
      // this.setAuthToken(this.token);
      const response = await axios.post(`${this.API}/braintree/v1/sandbox`, {
        nonce,
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    console.log({ CLIENT_TOKEN: this.state.clientToken });

    if (!this.state.clientToken) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className='checkout'>
          <DropIn
            options={{
              authorization: this.state.clientToken,
            }}
            onInstance={(instance) => (this.instance = instance)}
          />
          <button type='submit' onClick={this.buy.bind(this)}>
            Buy
          </button>
        </div>
      );
    }
  }
}

export default Checkout;
