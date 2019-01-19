import React from 'react';

const HardFork = () => {
    // Te main prupose of this component will be to render information
    // about the next upcomming hard fork
    return (
        <div style={ styles.containerStyle }>
            <h1 style={ styles.titleStyle }>Upcoming hardfork Info</h1>
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
    }
}

export default HardFork;