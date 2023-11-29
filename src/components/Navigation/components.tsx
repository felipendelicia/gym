import { View, Image, Text, StyleSheet } from "react-native";
import theme from "../../theme";
import StyledText from "../StyledText";

interface TabItemI {
  focused: boolean;
  name: string;
  icon: any;
}

export function TabItem(props: TabItemI) {
  return (
    <View
      style={{
        backgroundColor: props.focused ? theme.color.grey : "",
        ...styles.container,
      }}
    >
      <Image source={props.icon} resizeMode="contain" style={styles.image} />
      <StyledText
        small
        aditionalStyles={{
          color: props.focused ? theme.color.white : theme.color.black,
          fontFamily: "ubuntu-light",
        }}
      >
        {props.name}
      </StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    top: 10,
    gap: 10,
    borderRadius: theme.borderRadius,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 20,
  },
  image: { height: 35, width: 35 },
});
