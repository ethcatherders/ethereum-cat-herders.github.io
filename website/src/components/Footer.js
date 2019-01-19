import React from 'react';

const Footer = () => {
    return (
        // Here we will have the following links
        <div style={ styles.containerStyle }>
            <h1 style={ styles.titleStyle }>Github, Medium, EIP, EEP, and Gitter Links</h1>
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

export default Footer;