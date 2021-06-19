import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, ImageBackground, TextInput } from 'react-native';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ModalSearch({ refKey, onClosed, isOpen, children, backLabel, onDismiss }) {

    return (
        <Modal
            isOpen={isOpen}
            entry="bottom"
            useNativeDriver={false}
            coverScreen
            position="bottom"
            onClosed={onClosed}
            style={styles.modal}
            swipeToClose={true}
        >
            <View style={{ padding: 10, backgroundColor: 'white', width: '100%', position: 'absolute', bottom: 0, borderTopLeftRadius: 20, borderTopRightRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                {children}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        // flex: 1,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    titleText: {
        fontSize: 24,
        color: 'white',
    },
    normalText: {
        fontSize: 10,
        color: 'white'
    }
});

