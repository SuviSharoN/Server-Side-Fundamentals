import React from 'react';

const About = () => {
  return (
    <section className="content-section">
      <h2 className="section-title">🤔 What is Server-Side Engineering?</h2>
      <p>
        Server-side engineering is what happens behind the scenes when you use a website or an app. It's the "backstage" work that makes the "onstage" user experience possible.
      </p>
      <p className="metaphor">
        Think of it like a restaurant. You (the <strong>client</strong>) order from a waiter. The waiter (the <strong>API</strong>) takes your order to the kitchen (the <strong>server</strong>), which prepares your food (the <strong>data</strong>). You don't see the kitchen, but it's essential for your meal.
      </p>
    </section>
  );
};

export default About; 