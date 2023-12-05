import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import theme from '../../theme';

export default function StyledModal({ children }: any) {
    return (
        <Modal transparent={true} animationType="fade" visible={true} statusBarTranslucent>
            <View style={styles.modal_container}>
                <View style={styles.modal_content}>
                    {children}
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    modal_content: {
        backgroundColor: theme.color.white,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        width: "75%",
        height: "50%"
    },
});
