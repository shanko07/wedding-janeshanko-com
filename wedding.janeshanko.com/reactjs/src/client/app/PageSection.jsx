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

class PageSection extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        
        <div className={styles.outer}>
            <MediaQuery maxWidth={767}>
            {/*<div className={styles.textDiv}>
                <p>
                    Phone
                </p>
            </div>*/}
            <div className={styles.textDiv} style={textStyle}>
                <p>
                    You are cordially invited to celebrate the wedding of Stephen Shanko and Jane Lo on the sixth of August 2017, 1:30pm at Rutgers Community Christian Church building A Chapel located at 71 Cedar Grove Lane Somerset, NJ
                </p>
            </div>
            <div className={styles.frameDiv}>
                <iframe className={styles.frame} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC9vByhB60-mQY5em9pg4_NKBFDl9Qs18E&q=place_id:ChIJ9zkzosbAw4kROgEfmhijWNY&center=40.5274082,-74.5164416" style={{border: '0'}} allowFullScreen></iframe>
            </div>
            <div className={styles.imageDiv}>
                <div className={styles.imageWrapper}>
                <img className={styles.image} src="./app/JME-5118_wide.jpg" alt="pictureeee"></img>
                </div>
            </div>
            </MediaQuery>
            <MediaQuery minWidth={768} /*maxWidth={979}*/>
            {/*<div className={styles.textDiv}>
                <p>
                    Tablet
                </p>
            </div>*/}
            <div className={styles.textDiv2} style={textStyle2}>
                <p>
                    You are cordially invited to celebrate the wedding of Stephen Shanko and Jane Lo on the sixth of August 2017, 1:30pm at Rutgers Community Christian Church building A Chapel located at 71 Cedar Grove Lane Somerset, NJ
                </p>
            </div>
                <div className={styles.rowDiv}>
            <div className={styles.frameDiv2}>
                <iframe className={styles.frame2} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC9vByhB60-mQY5em9pg4_NKBFDl9Qs18E&q=place_id:ChIJ9zkzosbAw4kROgEfmhijWNY&center=40.5274082,-74.5164416" style={{border: '0'}} allowFullScreen></iframe>
            </div>
            <div className={styles.imageDiv2}>
                <div className={styles.imageWrapper}>
                <img className={styles.image2} src="./app/JME-5118_wide.jpg" alt="pictureeee"></img>
                </div>
            </div>
                </div>
            </MediaQuery>
            {/*
        <MediaQuery minWidth={768} maxWidth={979}>
            <div className={styles.textDiv}>
                <p>
                    Tablet
                </p>
            </div>
        </MediaQuery>
        <MediaQuery minWidth={980} maxWidth={1199}>
            <div className={styles.textDiv}>
                <p>
                    iPad
                </p>
            </div>
        </MediaQuery>
        <MediaQuery minWidth={1200}>
            <div className={styles.textDiv}>
                <p>
                    Laptop
                </p>
            </div>
        </MediaQuery>
        */}
        </div>
    );
  }

}


export default PageSection;