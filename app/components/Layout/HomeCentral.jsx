import React, { Component } from 'react';
require("./HomeCentral.scss");
export class HomeCentral extends Component {
  render() {
    return (
      <section className="main-section">
        <div className="home-text-container">
          <h1 className="primary-text">Welcome to the Batcave</h1>
          <h3 className="secondary-text">Welcome to the Elephant in the Room</h3>
        </div>
      </section>
    );
  }
}

export default HomeCentral
