import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from "../components/Header/Header.jsx";

require('./Home.scss');

export class Home extends Component {
  render() {
    return (
      <Header />
    );
  }
}

export default Home
