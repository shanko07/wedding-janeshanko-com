import React from 'react';
import styles from './LinkableItem.css';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { browserHistory } from 'react-router';

var frameStyle = {
    border: '0',
    height: '100%',
    width: '100%'
}

class LinkableItem extends React.Component {

  constructor(props) {
    super(props);
    
  }

  render() {
     
    return (
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.6359854360976!2d-74.51791118477102!3d40.52753625681707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c0c6a23339f7%3A0xacf903a800b8a153!2s71+Cedar+Grove+Ln%2C+Somerset%2C+NJ+08873!5e0!3m2!1sen!2sus!4v1490497896971" style={frameStyle} allowFullScreen></iframe>
        </div>
    );
  }

}

export default LinkableItem;