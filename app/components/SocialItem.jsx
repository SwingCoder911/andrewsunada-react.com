import React, { Component } from 'react';

require('../sass/components/SocialItem.scss');

export default class SocialItem extends Component {
  constructor(props){
    super(props);
    this.state = {
        idx: props.idx,
        item: props.item
    };
  }
  render() {
    let compClass = (this.state.item.Primary) ? "primary" : "";
    return (
      <li key={this.state.idx} className={compClass}>
        <a href={this.state.item.Link} target="_blank" title={this.state.item.Name}>
            <img className='icon' src={'/dist/images/icons/' + this.state.item.Image} />
        </a>
      </li>
    );
  }
}
