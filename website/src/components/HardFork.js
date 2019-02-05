import React from 'react';
import { IoMdInformationCircleOutline } from 'react-icons/io'

const HardFork = () => {
    // Te main prupose of this component will be to render information
    // about the next upcomming hard fork
    return (
        <div style={ styles.containerStyle }>
            <h1 style={ styles.titleStyle }>Upcoming Network Upgrade</h1>
            <p style={ styles.textStyle }>
            On 16 January 2019, a decision was taken to postpone the upgrade of the Ethereum Network, 
            the upgrade named “Constantinople”, scheduled to complete on 17 December 2019.
            </p>
            <br></br>
            <p style={ styles.textStyle }>
            The next network upgrade "Constantinople 2" is targeted at <span style={ styles.boldTextStyle }> 27 February 2019</span>, block number <span style={ styles.boldTextStyle }>7.280.000</span>.
            </p>
            <br></br>
            <p style={ styles.textStyle }>
            These are the EIP's that will be implemented:
            </p>
            <div> 
                <p style={ styles.textStyle }><a href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-145.md">Bitwise shifting instructions in EVM</a></p>
                <p style={ styles.textStyle }><a href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1014.md">Skinny CREATE2</a></p>
                <p style={ styles.textStyle }><a href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1052.md">EXTCODEHASH Opcode</a></p>
                <p style={ styles.textStyle }><a href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1234.md">Delay difficulty bomb, adjust block reward</a></p>
                <p style={ styles.textStyle }><a href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1283.md">Net gas metering for SSTORE without dirty maps</a></p>
            </div>
            <br></br>
            <p style={ styles.textStyle }>
            All major clients have already implemented these changes. Progres can be tracked <a href="https://github.com/ethereum/pm/wiki/Constantinople-Progress-Tracker">here</a>.
            </p>
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