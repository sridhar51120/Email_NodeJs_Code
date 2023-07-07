import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from '../actions';
// 5 Dollers => 500  cents
class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 Emails"
        amount={1000}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn"> Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null,actions)(Payments);
