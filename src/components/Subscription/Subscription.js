import React from 'react';

const Subscription = () => {

  const subscriptionStyles = {
    subscriptionEnding: {
      backgroundColor: 'yellow',
      padding: '10px',
      fontSize: '20px'
    },
    renew: {
      backgroundColor: 'green',
      color: '#ffffff',
      fontSize: '18px'
    }
  }

  return (
    <div>
      <h2 style={{ color: 'blue', fontSize: 20 }}>Subscription | Styling the Comp</h2>
      <div>
        <p style={subscriptionStyles.subscriptionEnding}>
          Subscription Ends: 20/Dec/2020
        </p>

        <p style={subscriptionStyles.renew}>Please renew at 50% Discount - Offer ends today</p>
      </div>
    </div>
  )
}

export default Subscription
