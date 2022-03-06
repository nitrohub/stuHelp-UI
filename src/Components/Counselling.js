import React, { Component } from 'react';
import ThemeBack from './ThemeBack';
import Expert from './Expert';

class Counselling extends Component{
    render(){
        const heading= "Welcome! Book your free session";
        const subHeading = "Get hand-holding guidance from Experts for free!! Limited seats.";
        const message = "Laboris velit officia adipisicing ipsum dolor sunt exercitation in. Minim ullamco sunt velit laboris nisi amet nulla est tempor tempor cillum eu eu aliqua. Exercitation ut fugiat mollit aliqua. Qui occaecat labore aliqua consectetur velit sit esse dolore.";
        return(

            <>
                <ThemeBack heading={heading} subHeading={subHeading} message={message} />
                <Expert />
            </>

        )
    }
}

export default Counselling;