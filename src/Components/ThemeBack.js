import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class ThemeBack extends Component{

    constructor(props){
        super(props);
    }

    render(){

        const heading = this.props.heading?this.props.heading:'';
        const subHeading = this.props.subHeading?this.props.subHeading:'';
        const message = this.props.message?this.props.message:'';

        return(
            <>
                <section>
                    <div className = "Theme">
                        <Container>
                            <Row>
                                <Col lg={12} sm={12} xs={12} md={12}>{heading?<h1 className="Content">{heading}</h1>:''}</Col>
                                <Col lg={12} sm={12} xs={12} md={12}>{subHeading?<h3>{subHeading}</h3>:''}</Col>
                                <Col lg={12} sm={12} xs={12} md={12}>{message?<p>{message}<br /><br /><br /><br /> <h4>Scroll below</h4></p>:''}</Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </>
        )
    }
}

export default ThemeBack;