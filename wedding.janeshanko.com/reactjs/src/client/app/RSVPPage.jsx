import React from 'react';

let divstyle={
    position: "absolute",
    top: "100px"
    
}


class RSVPPage extends React.Component {
    
    constructor(props, context)
    {
        super(props);
        //console.log("rsvp page props " + props);
        //console.log("rsvp page props.match " + JSON.stringify(props.match));
        //console.log("context " + JSON.stringify(context));
        //console.log("rsvp page match.params " + props.match.params);
        //console.log("rsvp page match.params uuid " + props.match.params.uuid);
        this.state = {pplInGroup: ""};
        this.state.uuidlist = [];
        this.state.rsvplist = [];
        this.state.rsvpsuccess = false;
        this.state.rsvpcount = 0;
        this.myFunction = this.myFunction.bind(this);
        this.handleRSVPSubmit = this.handleRSVPSubmit.bind(this);
        this.handleRSVPLoad = this.handleRSVPLoad.bind(this);
    }
    
    componentDidMount()
    {
        console.log("rsvp page match.params uuid " + this.props.match.params.uuid);
        this.handleRSVPLoad();
    }

    handleRSVPSubmit () 
    {
        //should be storing the data for this in a state object so we can easily loop
        
        for(var i = 0; i < this.state.pplInGroup.length; i++)
        {
            (function(outercontext) {
            console.log("rsvp submit loop " + i);
            var person = outercontext.state.pplInGroup[i];
            // this is because there is one empty one on the end..json might fix this
            if(!(0 === person.length))
            {
                console.log("valid person");
                var fields = person.split(" ");
                var fn = fields[0];
                var ln = fields[1];
                //var rsvpstate = fields[2];
                var uuid = fields[3];
                var rsvpbool = document.getElementById("person" + uuid).checked;
                var rsvpstate = 0;
                if(rsvpbool)
                    {
                        rsvpstate = 1;
                    }
                var params = "uuid=" + uuid + "&" + "rsvp=" + rsvpstate;
                
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures 
                // the above is my problem.  xhttp request changes as the loop happens
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    console.log("which xhttp" + xhttp);
                    console.log("statechange in submit " + xhttp.readyState);
                    if (xhttp.readyState == 4 && xhttp.status == 200) {
                        console.log(xhttp);
                        //this only works becuase of the bind below
                        outercontext.myFunction(xhttp);
                    }
                }.bind(outercontext);
                
                xhttp.open("POST", "/app/dbhandling.php?q=RSVP", true);
                // must go after open
                xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhttp.send(params);
            }
            })(this);
        }
    }
    
myFunction(result) {
    console.log("myFunction " + this.state.rsvpcount + " pplingroup.length " + this.state.pplInGroup.length);
    this.setState({rsvpcount: this.state.rsvpcount+1});
    if(this.state.rsvpcount === this.state.pplInGroup.length-1)
    {
        console.log("setting rsvp success to true");
        this.setState({rsvpsuccess: true});
    }
}

handleRSVPLoad ()
{
    var params = "uuid=" + this.props.match.params.uuid;
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log("statechange " + xhttp.readyState);
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        console.log(xhttp);
        //this only works becuase of the bind below
      this.loadFunction(xhttp);
    }
  }.bind(this);
    //TODO: investigate not doing this absolute
  xhttp.open("POST", "/app/dbhandling.php?q=LOADGROUP", true);
    // must go after open
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(params);
}
    
loadFunction(result) {
    console.log(result.responseText);
    var people = result.responseText.split(":");
    this.setState({pplInGroup: people});

    for(var i = 0; i < people.length; i++)
    {
        var person = people[i];
        // this is because there is one empty one on the end..json might fix this
        if(!(0 === person.length))
        {
            var fields = person.split(" ");
            var fn = fields[0];
            var ln = fields[1];
            var rsvpstate = fields[2];
            var uuid = fields[3];
            this.state.uuidlist.push(uuid);
            this.state.rsvplist.push(rsvpstate);
        }
    }
}

render () {
    const childcomps = [];
        
        for(var i = 0; i < this.state.pplInGroup.length; i++)
        {
            var person = this.state.pplInGroup[i];
            // this is because there is one empty one on the end..json might fix this
            if(!(0 === person.length))
            {
                var fields = person.split(" ");
                var fn = fields[0];
                var ln = fields[1];
                var rsvpstate = fields[2];
                var uuid = fields[3];
                childcomps.push(fn + " " + ln + " attending?");
                if(parseInt(rsvpstate) > 0)
                {
                    childcomps.push(<input type="checkbox" name={"person" + uuid} value={"p" + uuid} id={"person" + uuid} defaultChecked="true"/>);
                    childcomps.push(<br/>);
                }
                else
                {
                    childcomps.push(<input type="checkbox" name={"person" + uuid} value={"p" + uuid} id={"person" + uuid}/>);
                    childcomps.push(<br/>);
                }
            }
        }
    if(this.state.rsvpsuccess)
    {
        // TODO: make this give a link to reception directions and honeyfund details?
        /*
        return (
            <div style={divstyle}>
                RSVP Success!  Please go to our <a href="https://www.honeyfund.com/wedding/jlovesshanko">honeyfund</a>, our <a href="https://www.amazon.com/wedding/stephen-shanko-jane-lo-somerset-august-2017/registry/8QKQIUAD12W3">amazon registry</a>, or see details about the <a href="http://wedding.janeshanko.com/reception" >reception</a>
            </div>
        )
        */
        return (
            <div style={divstyle}>
                RSVP Success!  For reception details check out the <a href="http://wedding.janeshanko.com/reception" >reception page</a>
            </div>
        )
    }
    else
    {
        return (
            <div style={divstyle}>
                Check the box to indicate attendance.  Press 'RSVP' when finished
                <form id="rsvpcomplete">
                    {childcomps}
                    <input type="button" onClick={this.handleRSVPSubmit} value="RSVP"/>
                </form>
            </div>
        )
    }
    
}

}

export default RSVPPage;