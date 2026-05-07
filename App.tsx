import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default () => {
    return (
        <View style={styles.root}>
            <Text style={styles.text}>This is text with blue background</Text>

            <Image
                source={require('./assets/testImages/image.png')}
                resizeMode='contain'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'rgb(89, 136, 230)',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: 'white',
        fontSize: 48,
        marginVertical: 50,
    },
});
