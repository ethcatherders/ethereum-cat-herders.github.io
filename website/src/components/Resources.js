import React from 'react';

const Resources = () => {
    // Te main prupose of this component will be to make available
    // more resources such as EEP and EIP discussions (EEP5).
    return (
        <div style={ styles.containerStyle }>
            <h1 style={ styles.stylesStyle }>Upcoming Resources Info</h1>
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

export default Resources;