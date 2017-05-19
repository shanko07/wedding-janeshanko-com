import React from 'react';
import styles from './PageSection.css';
var MediaQuery = require('react-responsive');

let textStyle = {
    overflow: 'auto',
    marginLeft: 'auto',
    justifyContent: 'center',
    padding: '0px 15px',
    fontFamily: "'Dancing Script', monospace",
    fontSize: 18,
    color: 'black'
}

let textStyle2 = {
    marginLeft: 'auto',
    justifyContent: 'center',
    padding: '0px 15px',
    fontFamily: "'Dancing Script', monospace",
    fontSize: 22,
    color: 'black'
}

//style={{display:'table-cell', verticalAlign:'middle', textAlign:'center'}}
//width='90%'

class ReceptionDetails extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        
        <div className={styles.outer}>
            <div style={{margin: '0 2.5%', width: '95%', height: '90%', textAlign:'center'}}><div style={{width: '100%', height: '100%', overflow: 'hidden'}}><a href='https://www.amazon.com/wedding/stephen-shanko-jane-lo-somerset-august-2017/registry/8QKQIUAD12W3' target='_blank'><img src='https://s3-us-west-2.amazonaws.com/lambda-guestview-screenshots/screenshots/screenshots_guestview_ATVPDKIKX0DER_8QKQIUAD12W3.png' width='90%' border='1'></img></a></div></div>
                
            <div style={{margin: '0 2.5%', width: '95%', height: 'auto', textAlign:'center'}}>
                <a href="https://www.honeyfund.com/wedding/jlovesshanko">Honeyfund</a>
            </div>
                
            <div style={{margin: '0 2.5%', width: '95%', height: '90%', textAlign:'center'}}>
                <iframe className={styles.frame} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC9vByhB60-mQY5em9pg4_NKBFDl9Qs18E&q=place_id:ChIJz04zpv0uwokRpL8E02OeTyM&center=40.2849219,-74.0800023" style={{border: '0'}} allowFullScreen></iframe>
            </div>
            <MediaQuery maxWidth={767}>
            </MediaQuery>
            <MediaQuery minWidth={768}>
            </MediaQuery>
        </div>
    );
  }

}


export default ReceptionDetails;