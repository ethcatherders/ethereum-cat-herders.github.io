import React from 'react';
import { IoMdInformationCircleOutline } from 'react-icons/io'

const HardFork = () => {
    // Te main prupose of this component will be to render information
    // about the next upcomming hard fork
    return (
        <div style={ styles.containerStyle }>
            <h1 style={ styles.titleStyle }>Upcoming Network Upgrade</h1>
            <p style={ styles.textStyle }>
            You can follow everything related to the upcoming Istanbul network upgrade in Ethereum's Wiki:
            </p>
            <br></br>
            <br></br>
            <p style={ styles.textStyle }><a href="https://en.ethereum.wiki/roadmap/istanbul">Istanbul Network Upgrade</a></p>
        </div>
    );
}

const styles = {
    containerStyle: {
        marginTop: 20,
        textAlign: 'center',
        padding: 150
    },
    titleStyle: {
        fontSize: 40, 
        fontFamily: 'Courier'
    },
    textStyle: {
        fontSize: 18, 
        fontFamily: 'Courier'
    },
    boldTextStyle: {
        fontSize: 18, 
        fontFamily: 'Courier',
        fontWeight: 'bold'  
    }
}

export default HardFork;