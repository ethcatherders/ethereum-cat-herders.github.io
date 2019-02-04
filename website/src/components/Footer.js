import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        // Here we will have the following links
        <div style={ styles.containerStyle }>
            <h1 style={ styles.titleStyle }>You can find and reach out to the herders here:</h1>
            <div style={ styles.socialIconContainer }>           
                <SocialIcon style={ styles.socialIconStyle } url="https://medium.com/ethereum-cat-herders"/>
                <SocialIcon style={ styles.socialIconStyle } url="https://twitter.com/EthCatHerders"/>
                <SocialIcon style={ styles.socialIconStyle } url="https://github.com/ethereum-cat-herders"/>
                <SocialIcon style={ styles.socialIconStyle } url="https://gitter.im/ethereum-cat-herders/community?source=orgpage"/>
            </div>
        </div>
    );
}

// Github, Medium, EIP, EEP, and Gitter Links

const styles = {
    containerStyle: {
        marginTop: 20,
        textAlign: 'center',
        padding: 50
    },
    titleStyle: {
        fontSize: 25, 
        fontFamily: 'Courier'
    },
    socialIconContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    socialIconStyle: {
        margin: 10
    }
}

export default Footer;