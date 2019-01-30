import React from 'react';

const Header = () => {
    return (
        <div style={ styles.containerStyle } className="Header">
            <h1 style={ styles.titleStyle }>ETHEREUM CAT HERDERS</h1>
            <p style={ styles.Subtitle }>
            The go-to place to get the latest news on upcoming Network Upgrades (Hard Forks),
            EIP's, announcements and overall core developer and community coordination efforts. 
            </p>
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
    subtitleStyle: {
        fontSize: 20, 
        fontFamily: 'Courier'
    }
}

export default Header;