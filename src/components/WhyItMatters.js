import React from 'react';

const WhyItMatters = () => {
  return (
    <section className="content-section dark-bg">
      <h2 className="section-title">💡 Why It Matters</h2>
      <ul className="matters-list">
        <li><strong>Power & Scalability:</strong> Servers can handle complex logic and large amounts of data that a browser can't.</li>
        <li><strong>Security:</strong> Sensitive data and business logic are kept secure on the server, not exposed in the browser.</li>
        <li><strong>Centralization:</strong> It provides a single source of truth, ensuring data consistency for all users.</li>
      </ul>
    </section>
  );
};

export default WhyItMatters; 