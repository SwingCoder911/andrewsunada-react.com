import React, { Component } from 'react';
import NavButton from "../components/NavButton.jsx";

require("./HomeCentral.scss");
export class HomeCentral extends Component {
  render() {
    return (
      <section className="main-section">
        <NavButton text="Who am I?" page="Profile" class="profile"/>
        <div className="home-text-container">
          <h1 className="primary-text">Welcome to the Batcave</h1>
          <h3 className="secondary-text">Welcome to the Elephant in the Room</h3>
        </div>
        <NavButton text="What have I done?" page="Projects" class="projects" />
      </section>
    );
  }
}

export default HomeCentral
