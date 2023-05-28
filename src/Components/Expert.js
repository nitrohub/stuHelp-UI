import React, { Component } from 'react';
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
        const name = this.props.name;
        const image = this.props.image;
        const experience = this.props.experience;
        const bio = this.props.bio;
        const availability = this.props.availability;

        return(
            <>
                <section>
                    {/* mapping of the array of Elements*/}
                    {/* { this.state.isCalender ? <ExpertCalender name={name}/> : <ExpertInfo name={name} image={image} showCalender={this.showCalender}/>} */}
                    <ExpertInfo name={name} image={image} bio={bio} experience={experience} availability={availability}/>
                </section>
            </>
        );
    }
}

export default Expert;