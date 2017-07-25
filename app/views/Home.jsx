import React, { Component } from 'react';

require('../sass/Home.scss');

export class Home extends Component {
  constructor(){
    super();
    this.state = {
      links: [
        {Name: 'Facebook', Link: 'https://www.facebook.com/LordsJester', Image: 'facebook-icon.png'},
        {Name: 'Twitter', Link: 'https://twitter.com/SwingCoder911', Image: 'twitter-icon.png'},
        {Name: 'Pinterest', Link: 'https://www.pinterest.com/lordsjester/', Image: 'pinterest-icon.png'},
        {Name: 'LinkedIn', Link: 'https://www.linkedin.com/in/andrewsunada/', Image: 'linkedin-icon.png'},
        {Name: 'Google+', Link: 'https://plus.google.com/u/0/+AndrewSunada', Image: 'google-icon.png'},
        {Name: 'GitHub', Link: 'https://github.com/SwingCoder911', Image: 'github-icon.png'},
        {Name: 'Youtube', Link: 'https://www.youtube.com/channel/UCTImlsU5oEy0M2Tf9zMhG7g', Image: 'youtube-icon.png'},
        {Name: 'Meetup', Link: 'https://www.meetup.com/members/189929907/', Image: 'meetup-icon.png'}
      ]
    };
  }
  render() {
    return (
      <div className="home-container">
        <section className="main-section">
          <div className="home-text-container">
            <h1 className="primary-text">Welcome to the Batcave</h1>
            <h3 className="secondary-text">Welcome to the Elephant in the Room</h3>
            <a className="focus" href="/dist/Resume.pdf">Resume</a>
          </div>
        </section>
        <footer className="footer">
          <ul>
            {this.state.links.map((item, idx) =>{
              return <li key={idx}><a href={item.Link} target="_blank" title={item.Name}><img className='icon' src={'/dist/images/icons/' + item.Image} /></a></li>
            })}
          </ul>
        </footer>
      </div>
    );
  }
}

export default Home
