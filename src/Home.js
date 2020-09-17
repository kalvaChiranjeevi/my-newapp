import React from 'react';


class Greet extends React.Component{
    constructor(props){
        super(props);
        this.state = {fname:'Chiranjeevi', lname:'Kalva', phone:'8184963963'};

    }

    render(){

        return(<div>

        <h1>Hello Iam New Developer {this.state.fname}</h1>
        </div>);
    }
}

export default Greet;
