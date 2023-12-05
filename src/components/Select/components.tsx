import { StyleSheet, TouchableOpacity } from "react-native"
import StyledText from "../StyledText"
import theme from "../../theme"

interface IRenderItem {
    item: string,
    onTouch: (item: string) => void,
    isSelected: boolean | undefined
}

export const RenderItem = ({ item, onTouch, isSelected }: IRenderItem) => {
    return (
        <TouchableOpacity style={isSelected?styles.selected:styles.touchables} onPress={() => onTouch(item)}>
            <StyledText black centered>{item}</StyledText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchables: {
        marginBottom: 10
    },
    selected: {
        marginBottom: 10,
        borderColor: theme.color.black,
        borderWidth: 1,
        borderRadius: theme.borderRadius
    }
})