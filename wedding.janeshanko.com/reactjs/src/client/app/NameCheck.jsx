import React from 'react';
import LinkableItem from './LinkableItem.jsx';
//import {Link} from 'react-router-dom';

let divstyle={
    position: "absolute",
    top: "100px"
    
}


class NameCheck extends React.Component {
    
    constructor(props)
    {
        super(props);
        console.log("name check " + props.match.params.number);
        this.state = {namehit: ""};
        this.myFunction = this.myFunction.bind(this);
        this.handleNameSubmit = this.handleNameSubmit.bind(this);
    }


handleNameSubmit ()
{
    //first name is what goes in the query
    var x = document.getElementById("nameCheck").elements[0].value;
    var y = document.getElementById("nameCheck").elements[1].value;
    console.log("handled name: " + x + " " + y);
    
    var tempthis = this;
    console.log("this = " + this.state.namehit);
    
    var params = "first=" + x + "&" + "last=" + y;
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log("statechange " + xhttp.readyState);
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        console.log(xhttp);
        //this only works becuase of the bind below
      this.myFunction(xhttp);
    }
  }.bind(this);
  xhttp.open("POST", "app/dbhandling.php?q=FINDNAMES", true);
    // must go after open
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(params);
}

myFunction(result) {
    var people = result.responseText.split(":");
    this.setState({namehit: people});
}

render () {
    const childcomps = [];
    var stuff;
    if(this.state.namehit == "no suggestion")
    {
        stuff = "Sorry, please give us a call at 732-858-2093 or 732-947-6277";
        childcomps.push(stuff);
    }
    else if(this.state.namehit == "")
    {
        stuff = "Please submit your name..";
        childcomps.push(stuff);
    }
    else
    {
        stuff = "Click your name below..";
        childcomps.push(stuff);
        
        for(var i = 0; i < this.state.namehit.length; i++)
        {
            var title = this.state.namehit[i];
            // this is because there is one empty one on the end..json might fix this
            if(!(0 === title.length))
            {
                if(this.state.namehit.length == 2)
                {
                    childcomps.push(<LinkableItem filltext={this.state.namehit[i].split(" ")[0]} url={"/RSVPPass/" + this.state.namehit[i].split(" ")[2]}/>);
                    //childcomps.push(<Link to={"/RSVPPass/" + this.state.namehit[i].split(" ")[2]}>a person</Link>)
                }
                else
                {
                    childcomps.push(<LinkableItem filltext={this.state.namehit[i]} url={"/RSVPPass/" + this.state.namehit[i].split(" ")[2]}/>);
                    //childcomps.push(<Link to={"/RSVPPass/" + this.state.namehit[i].split(" ")[2]}>a person</Link>)
                }
            console.log("pusing component " + i + " with name " + this.state.namehit[i]);
            
            }
        }
    }
    return (
    <div style={divstyle}>
        Let us find you in our records
        <form id="nameCheck">
  First name:<br/>
  <input type="text" name="firstname" defaultValue="First"/><br/>
  Last name:<br/>
  <input type="text" name="lastname" defaultValue="Last"/><br/><br/>
  <input type="button" onClick={this.handleNameSubmit} value="Submit"/>
        </form>
        
        <div id="nameCheckResult">
            {childcomps}
        </div>
    </div>
        )
}

}

export default NameCheck;