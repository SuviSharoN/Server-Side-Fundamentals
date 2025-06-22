import React from 'react';

const Concepts = () => {
  return (
    <section className="content-section gray-bg">
      <h2 className="section-title">🔑 Key Concepts</h2>
      <div className="concepts-grid">
        <div className="card">
          <h3 className="card-title">Server vs. Client</h3>
          <p>The <strong>Client</strong> is your browser (Chrome, Firefox). The <strong>Server</strong> is a powerful computer that stores website data and handles requests from clients.</p>
        </div>
        <div className="card">
          <h3 className="card-title">APIs & Databases</h3>
          <p><strong>APIs</strong> (Application Programming Interfaces) are the messengers. <strong>Databases</strong> are organized collections of data, like a library for the server.</p>
        </div>
        <div className="card">
          <h3 className="card-title">Server-Side Rendering (SSR)</h3>
          <p>The server prepares the webpage content *before* sending it to your browser. This can make websites load faster and improve SEO.</p>
        </div>
        <div className="card">
          <h3 className="card-title">Load Balancing & Sessions</h3>
          <p><strong>Load Balancing</strong> distributes traffic across multiple servers to prevent overload. <strong>Sessions</strong> help servers remember who you are across different pages.</p>
        </div>
        <div className="card">
          <h3 className="card-title">Authentication</h3>
          <p>This is how a server verifies you are who you say you are, usually with a username and password. It's the key to secure online experiences.</p>
        </div>
      </div>
    </section>
  );
};

export default Concepts; 