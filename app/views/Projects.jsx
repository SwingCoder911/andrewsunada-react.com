import React, { Component, Image } from 'react';
require('../sass/Projects.scss');

export default class Projects extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <section className="projects-container">
            <h1>My Workspace</h1>
            <ul className="project-list">
                <li>
                    <a className="project-cell project-item-image" target="_blank" href="/projects/checkout/">
                        <img src={require("../assets/images/projecticons/checkout.png")} />
                    </a>
                    <div className="project-cell project-item-description">
                        <h3 className="description-header">Checkout App</h3>
                        <p className="description-content">Fun workflow checkout app I built for an interview code review</p>
                        <a className="project-github-icon" target="_blank" href="https://github.com/SwingCoder911/projects/tree/master/checkout">
                            <img src={"https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"} alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" />
                        </a>
                    </div>
                </li>
                <li>
                    <a className="project-cell project-item-image" target="_blank" href="/projects/dancebingo/">
                        <img src={require("../assets/images/projecticons/bingo.png")} />
                    </a>
                    <div className="project-cell project-item-description">
                        <h3 className="description-header">Dance Bingo</h3>
                        <p className="description-content">Fun app to play bingo with swing dance routines with people all around the world. (not fully running right now because I need to setup my database appropriately.)</p>
                        <a className="project-github-icon" target="_blank" href="https://github.com/SwingCoder911/projects/tree/master/dancebingo">
                            <img src={"https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"} alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" />
                        </a>
                    </div>                    
                </li>
                <li>
                    <a className="project-cell project-item-image" target="_blank" href="/projects/datamine/">
                        <img src={require("../assets/images/projecticons/data_mining.jpg")} />
                    </a>
                    <div className="project-cell project-item-description">
                        <h3 className="description-header">Google Data Mining App</h3>
                        <p className="description-content">A data mining app for google info that I built for a friend.</p>
                        <a className="project-github-icon" target="_blank" href="https://github.com/SwingCoder911/projects/tree/master/datamine">
                            <img src={"https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"} alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" />
                        </a>
                    </div>
                </li>

                <li>
                    <a className="project-cell project-item-image" target="_blank" href="/projects/rcs-voter/">
                        <img src={require("../assets/images/projecticons/competition.png")} />
                    </a>
                    <div className="project-cell project-item-description">
                        <h3 className="description-header">Judge Voting App</h3>
                        <p className="description-content">An app that let's people judge a competition by voting for their top 3 couples. The admin can then look at the scoreboard and see who the top 3 ranked couples are.</p>
                        <a className="project-github-icon" target="_blank" href="https://github.com/SwingCoder911/projects/tree/master/voter">
                            <img src={"https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"} alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" />
                        </a>
                    </div>
                </li>
            </ul>
        </section>
    );
  }
}
