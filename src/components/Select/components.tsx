import { StyleSheet, TouchableOpacity } from "react-native"
import StyledText from "../StyledText"

interface IRenderItem {
    item: string,
    onTouch: (item: string) => void
}

export const RenderItem = ({ item, onTouch }: IRenderItem) => {
    return (
        <TouchableOpacity style={styles.touchables} onPress={() => onTouch(item)}>
            <StyledText black centered>{item}</StyledText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchables: {
        marginBottom: 10
    }
})