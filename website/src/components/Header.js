import React from 'react';

const Header = () => {
    return (
        <div style={ styles.containerStyle } className="Header">
            <div>
                <img src={require('../resources/avatar-icon.png')} style={styles.imageStyle}/>
                <h1 style={ styles.titleStyle }>Ethereum Cat Herders</h1>
            </div>
            <div style={ styles.subtitleContainer }>
                <p style={ styles.subtitleStyle }>
                Welcome to the Ethereum cat Herders' website, the go-to place to get the latest news on upcoming Network Upgrades (Hard Forks),
                EIP's, announcements and overall core developer and community coordination efforts. 
                </p>
            </div>
        </div>
    );
}

const styles = {
    containerStyle: {
        marginTop: 50,
        textAlign: 'center',
        padding: 10
    },
    titleStyle: {
        fontSize: 90, 
        fontFamily: 'Courier'
    },
    subtitleContainer: {
        marginLeft: 188,
        marginRight: 188
    },
    subtitleStyle: {
        fontSize: 18, 
        fontFamily: 'Courier'
    },
    imageStyle: {
        alignSelf: 'center',
        height: 250,
        width: 250
    }
}

export default Header;