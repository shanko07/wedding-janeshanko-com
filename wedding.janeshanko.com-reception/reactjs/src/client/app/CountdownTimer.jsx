import React from 'react';
import styles from './CountdownTimer.css';
var MediaQuery = require('react-responsive');

let timeStyle = {
    marginLeft: 'auto',
    display: '-webkit-flex',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: '0px 15px',
    fontFamily: "'Nova Mono', monospace",
    fontSize: 15,
    color: 'white'
}

class CountdownTimer extends React.Component {

  constructor(props) {
    super(props);
      var currentDate = new Date();
      this.state = {currentDate: currentDate};
  }
    
    componentDidMount()
    {
        this.timer = this.timer.bind(this);
        var intervalId = setInterval(this.timer, 1000);
        this.setState({intervalId: intervalId});
    }
    
    componentWillUnmount()
    {
        clearInterval(this.state.intervalId);
    }
    
    timer()
    {
        this.setState({currentDate: new Date()});
    }
    
    generateTime(isMobile)
    {
        var diffmillis = new Date(this.props.date.getTime()-this.state.currentDate.getTime());
      
        if(diffmillis < 0)
        {
            clearInterval(this.state.intervalId);
            diffmillis = 0;
        }
      
        var weeks = Math.floor(diffmillis / (1000 * 60 * 60 * 24 * 7));
        var rem = diffmillis - weeks*1000*60*60*24*7;
        var days = Math.floor(rem / (1000 * 60 * 60 * 24));
        rem = rem - days*1000*60*60*24;
        var hours = Math.floor(rem / (1000 * 60 * 60));
        rem = rem - hours*1000*60*60;
        var mins = Math.floor(rem / (1000 * 60));
        rem = rem - mins*1000*60;
        var secs = Math.floor(rem / (1000));
        rem = rem - secs*1000;
        var ms = Math.floor(rem);
        
        if(isMobile)
            {
                return this.props.preface + this.properString(weeks, "Week") + ", " + this.properString(days, "Day");
            }
        
        return this.props.preface + this.properString(weeks, "Week") + ", " + this.properString(days, "Day") + ", " + this.properString(hours, "Hr") + ", " + this.properString(mins, "Min") + ", " + this.properString(secs, "Sec");
    }
    
    properString(value, label)
    {
        if(value === 1)
            {
                return value + " " + label;
            }
        else
            {
                return value + " " + label + "s";
            }
    }

  render() {
    return (
        <div style={timeStyle}>
           
                <MediaQuery maxWidth={767}>
                    {this.generateTime(true)}
                </MediaQuery>
                <MediaQuery minWidth={768}>
                    {this.generateTime(false)}
                </MediaQuery>
            

        </div>
    );
  }

}

export default CountdownTimer;