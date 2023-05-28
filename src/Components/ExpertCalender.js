import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';


class ExpertCalender extends Component{
    render(){
        return(
            <>
                <Container fluid>
                    <Row>
                        <div className="jumbotron">
                            <h1>{this.props.name}</h1>
                        </div>
                    </Row>
                </Container>
            </>
        )
    }
}

export default ExpertCalender;