import React from 'react';
import styles from './LinkableItem.css';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { browserHistory } from 'react-router';

class LinkableItem extends React.Component {

  constructor(props) {
    super(props);
      this.state = {hover: false};
      this.toggleHover = this.toggleHover.bind(this);
      this.followLink = this.followLink.bind(this);
  }
    
    toggleHover(event) {
        if(event.type === "mouseenter")
            {
                this.setState({hover: true})
            }
        else if(event.type === "mouseleave")
            {
                this.setState({hover: false})
            }
    }
    
    followLink() {
        window.location = this.props.url;
        this.setState({hover: false});
    }

  render() {
      var linkStyle;
      var textStyle;
      if(this.state.hover) {
          linkStyle = {backgroundColor: '#202020'};
          textStyle = {color: 'white'};
      }
      else {
          linkStyle = {};
          textStyle = {};
      }
    return (
      <div className={styles.meh} style={linkStyle} onMouseEnter={(evt) => this.toggleHover(evt)} onMouseLeave={(evt) => this.toggleHover(evt)} onClick={this.followLink}>
            <p className={styles.linkText} style={textStyle}>
                {this.props.filltext}
            </p>
      </div> 
    );
  }

}

export default LinkableItem;