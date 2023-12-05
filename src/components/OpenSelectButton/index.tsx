import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import StyledText from '../StyledText'
import theme from '../../theme'

interface IOpenSelectButton {
    title: string,
    onTouch: () => void,
    selectedItem: string | undefined
}

export default function OpenSelectButton({ title, onTouch, selectedItem }: IOpenSelectButton) {
    return (
        <TouchableOpacity onPress={() => onTouch()} style={styles.container}>
            <StyledText aditionalStyles={selectedItem ? styles.text_selected : styles.text_default}>
                {selectedItem ? selectedItem : title}
            </StyledText>
            <Image source={require("../../../assets/bottom_arrow.png")} style={styles.image} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: "row",
        backgroundColor: theme.color.grey,
        borderRadius: theme.borderRadius,
        paddingVertical: 5,
        paddingHorizontal: 20,
        width: "90%",
        alignSelf: "center",
        justifyContent: "space-between",
        alignItems: "center"
    },
    text_default: {
        color: theme.color.dark_grey
    },
    text_selected: {
        color: theme.color.white
    },
    image: {
        width: 15,
        height: 15
    }
})