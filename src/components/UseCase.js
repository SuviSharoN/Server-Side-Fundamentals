import React from 'react';

const UseCase = () => {
  return (
    <section className="content-section">
      <h2 className="section-title">🍔 Real-World Use Case: Ordering Food Online</h2>
      <ol className="use-case-steps">
        <li>You browse a restaurant on a food app (<strong>Client</strong>).</li>
        <li>You place an order. The app sends your request to the platform's <strong>Server</strong> via an <strong>API</strong>.</li>
        <li>The server checks the <strong>Database</strong> for the menu, prices, and your user info.</li>
        <li>The server processes the order, and might use another API to handle payment.</li>
        <li>The server confirms the order and sends a confirmation back to your app. All this happens in seconds!</li>
      </ol>
    </section>
  );
};

export default UseCase; 