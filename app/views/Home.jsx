import React, { Component } from 'react';
import SocialItem from '../components/SocialItem.jsx';
require('../sass/Home.scss');

export default class Home extends Component {
  constructor(){
    super();
    this.state = {
      links: [
        {Name: 'Facebook', Link: 'https://www.facebook.com/LordsJester', Image: 'facebook-icon.png', Primary: false},
        {Name: 'Twitter', Link: 'https://twitter.com/SwingCoder911', Image: 'twitter-icon.png', Primary: true},
        {Name: 'Pinterest', Link: 'https://www.pinterest.com/lordsjester/', Image: 'pinterest-icon.png', Primary: false},
        {Name: 'LinkedIn', Link: 'https://www.linkedin.com/in/andrewsunada/', Image: 'linkedin-icon.png', Primary: true},
        {Name: 'Google+', Link: 'https://plus.google.com/u/0/+AndrewSunada', Image: 'google-icon.png', Primary: false},
        {Name: 'GitHub', Link: 'https://github.com/SwingCoder911', Image: 'github-icon.png', Primary: true},
        {Name: 'Youtube', Link: 'https://www.youtube.com/channel/UCTImlsU5oEy0M2Tf9zMhG7g', Image: 'youtube-icon.png', Primary: false},
        {Name: 'Meetup', Link: 'https://www.meetup.com/members/189929907/', Image: 'meetup-icon.png', Primary: false}
      ]
    };
  }
  render() {
    return (
      <div className="home-container">
        <header className="header">
          <nav className="nav">
            <a className="nav-link" href="http://projects.andrewsunada.com/" target="_blank">Projects</a>
          </nav>          
          <div className="clear"></div>
        </header>
        <section className="main-section">
          <div className="home-text-container">
            <h1 className="primary-text">Welcome to the Batcave</h1>
            <h3 className="secondary-text">Welcome to the Elephant in the Room</h3>
            <a className="nav-link" href="/Resume.pdf" target="_blank">Resume</a>
          </div>
        </section>
        <footer className="footer">
          <ul>
            {this.state.links.map((item, idx) =>{
              return <SocialItem key={idx} idx={idx} item={item}></SocialItem>              
            })}
          </ul>
        </footer>
      </div>
    );
  }
}