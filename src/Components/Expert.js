import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ExpertCalender from './ExpertCalender';
import ExpertInfo from './ExpertInfo';


class Expert extends Component{

    constructor(props){
        super(props);
        this.state = {
            isCalender : false
        }

        this.showCalender = this.showCalender.bind(this);
    }

    showCalender(){
        this.setState({
            isCalender:true
        });
    }


    render(){
        return(
            <>
                <section>
                    {/* mapping of the array of Elements*/}
                    { this.state.isCalender ? <ExpertCalender /> : <ExpertInfo showCalender={this.showCalender}/>}
                </section>
            </>
        );
    }
}

export default Expert;