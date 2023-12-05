import { TouchableOpacity, StyleSheet } from "react-native";
import StyledText from "../StyledText";
import theme from "../../theme";

export function AddButton({ action }: { action: () => void }) {
  return (
    <TouchableOpacity onPress={action} style={styles.touchable}>
      <StyledText bold big>
        +
      </StyledText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    alignSelf: "center",
    width: "90%",
    height: 100,
    backgroundColor: theme.color.grey,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.borderRadius,
  },
});
