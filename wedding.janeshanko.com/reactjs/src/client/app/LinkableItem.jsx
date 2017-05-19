import React from 'react';
import styles from './LinkableItem.css';
import { Link } from 'react-router-dom';
const PropTypes = require('prop-types');

class LinkableItem extends React.Component {

  constructor(props) {
    super(props);
      this.state = {hover: false};
      console.log("this.props.url " + this.props.url);
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
        //window.location = this.props.url;
        const { history } = this.context.router
      const { replace, url } = this.props

      if (replace) {
        history.replace(url)
      } else {
        history.push(url)
      }
        //history.push(this.props.url)
        
        this.setState({hover: false})
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

// this is basically dependency injection..neat
// https://facebook.github.io/react/docs/context.html
LinkableItem.contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired,
        createHref: PropTypes.func.isRequired
      }).isRequired
    }).isRequired
  };

export default LinkableItem


{/*
import React from 'react'
import PropTypes from 'prop-types'

const isModifiedEvent = (event) =>
  !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)

class LinkableItem extends React.Component {
  static propTypes: {
    onClick: PropTypes.func,
    target: PropTypes.string,
    replace: PropTypes.bool,
    to: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]).isRequired
  }

  static defaultProps = {
    replace: false
  }

  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired,
        createHref: PropTypes.func.isRequired
      }).isRequired
    }).isRequired
  }

  handleClick = (event) => {
    if (this.props.onClick)
      this.props.onClick(event)

    if (
      !event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore right clicks
      !this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
    ) {
      event.preventDefault()

      const { history } = this.context.router
      const { replace, to } = this.props

      if (replace) {
        history.replace(to)
      } else {
        history.push(to)
      }
    }
  }

  render() {
    const { replace, to, ...props } = this.props // eslint-disable-line no-unused-vars

    const href = this.context.router.history.createHref(
      typeof to === 'string' ? { pathname: to } : to
    )

    return <a {...props} onClick={this.handleClick} href={href}/>
  }
}

export default LinkableItem

*/}