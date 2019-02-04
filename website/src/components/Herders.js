import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const Herders = () => {
    // The main prupose of this component will be to make available
    // more resources such as EEP and EIP discussions (EEP5).
    return (
        <div style={ styles.containerStyle }>
            <Row>
                <Col xs={6} md={4}>
                    <Image src={require ('../resources/Brett.jpg')} roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                    <Image src={require ('../resources/Brett.jpg')} roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                    <Image src={require ('../resources/Brett.jpg')} roundedCircle />
                </Col>
            </Row>
        </div>
    );
}

const styles = {
    containerStyle: {
        marginTop: 20,
        textAlign: 'center',
        paddingBottom: 600
    },
    titleStyle: {
        fontSize: 40, 
        fontFamily: 'Courier'
    }
} 

export default Herders;