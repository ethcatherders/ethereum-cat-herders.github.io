import React from 'react';

const About = () => {
    return (
        <div style={ styles.containerStyle }>
            <h1 style={ styles.titleStyle }>About</h1>
            <p style={ styles.textStyle }>
                The Ethereum Cat Herders are a group of independent contributors serving 
                the Ethereum community. We are here to support Ethereum developer teams by
                coordinating Hard Forks, monitoring EIPs, creating PM processes and retroactive reports,
                relaying information between teams, taking notes during All Core Devs calls and much more.</p>
            <br></br>
            <p style={ styles.textStyle }>
                Our aim is to bring the minumum amount of order that chaos needs to move Ethereum forward. 
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