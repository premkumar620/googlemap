import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';



const CustomeBtn = ({
    OnPress = () => { },
    btnStyle = {},
    btnText = '',
}) => {
    return (
        <TouchableOpacity
            onPress={OnPress}
            style={{ ...styles.btnStyle, ...btnStyle }}
        >

            <Text style={styles.btnText}>{btnText}</Text>

        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    btnStyle: {
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 16,
        borderWidth: 1,


    },

});

export default CustomeBtn;
