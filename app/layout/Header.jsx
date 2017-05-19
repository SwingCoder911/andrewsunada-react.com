import React, { Component } from 'react';
require("./Header.scss");
export class Header extends Component {
  render() {
    return (
      <header className='header'>
        <a href='/dist/assets/Resume.pdf' target="_blank" className='sub-item'>Resume</a>
        <h1>Andrew Sunada</h1>
        <a href='' className='sub-item'>Because Reasons</a>
      </header>
    );
  }
}

export default Header
