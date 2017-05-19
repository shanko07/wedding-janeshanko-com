import React from 'react';
import styles from './Heading.css';
import LinkableItem from './LinkableItem.jsx';
import CountdownTimer from './CountdownTimer.jsx';

let a = {
    //this should be relative to index.html wherever it lives
    //backgroundImage: 'url(' + './app/test.jpg' + ')',
    //backgroundColor: 'aqua'
    //backgroundColor: 'hsl(120, 100%, ' + '95%' + ')'
    
    //backgroundColor: 'rgb(255, 0, 0)'
    //backgroundColor: 'lightslategray',
    display: '-webkit-flex',
    display: 'flex',
    justifyContent: 'space-between',
};

let mainStyle = {
    display: '-webkit-flex',
    display: 'flex',
    justifyContent: 'space-between'
};

var wedDate = new Date("Sun Aug 06 2017 13:30:00 GMT-0400 (EDT)");
//var wedDate = new Date("Fri Mar 24 2017 00:37:00 GMT-0400 (EDT)");
var title = "Time Until Takeoff: ";

class Heading extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      
      const childcomps = [];
      var lbls = this.props.menuLinks.labels;
      var urls = this.props.menuLinks.urls;
      for(var i = 0; i < lbls.length; i++)
          {
              childcomps.push(<LinkableItem sstyle={a} filltext={lbls[i]} key={i} url={urls[i]} router={false}/>)
          }
      
    return (
      <div style={mainStyle} className={styles.meh}>
            {childcomps}
            <CountdownTimer date={wedDate} preface={title}/>
      </div>  
    );
  }

}

export default Heading;