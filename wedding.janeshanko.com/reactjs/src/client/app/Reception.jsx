import React from 'react';

let divstyle={
    position: "absolute",
    top: "100px"
    
}


class Reception extends React.Component {
    
    constructor(props, context)
    {
        super(props);
    }
    
    componentDidMount()
    {
    }

render () {
 
        return (
            <div style={divstyle}>
                Show me the money
            </div>
        )
    
    
}

}

export default Reception;