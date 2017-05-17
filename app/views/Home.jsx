import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from "../layout/Header.jsx";
import HomeCentral from "../layout/HomeCentral.jsx";
import Footer from "../layout/Footer.jsx";

require('./Home.scss');

export class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <HomeCentral />
        <Footer />
      </div>
    );
  }
}

export default Home
