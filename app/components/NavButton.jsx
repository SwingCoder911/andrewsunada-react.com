import React, { Component } from 'react';
require("./NavButton.scss");
export class NavButton extends Component {
  navigatePage(page){
    console.log(page);
  }
  render() {
    return <button className={'nav-button ' + this.props.class} onClick={() => {this.navigatePage(this.props.page)}}>{this.props.text}</button>;
  }
}

export default NavButton
