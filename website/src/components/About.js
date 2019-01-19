import React from 'react';

const About = () => {
    return (
        <div style={ styles.containerStyle }>
            <h1 style={ styles.titleStyle }>About</h1>
            <p style={ styles.textStyle }>
                Ethereum Cat Herders is a group of independent contributors serving 
                the Ethereum community. We're here to support dev teams by
                coordinating Hard Forks, monitoring EIP, relaying information between 
                teams, and taking notes during All Core Devs calls.</p>
            <br></br>
            <p style={ styles.textStyle }>
                We don't have any agenda, nor we have any authority, we just try
                to bring the minumum amount of order that caos needs to move forward. 
            </p>
        </div>
    );
}

const styles = {
    containerStyle: {
        marginTop: 20,
        textAlign: 'center',
        padding: 200
    },
    titleStyle: {
        fontSize: 40, 
        fontFamily: 'Courier'
    },
    textStyle: {
        fontSize: 18, 
        fontFamily: 'Courier'
    }
}

export default About;