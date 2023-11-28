import { View, Image, Text, StyleSheet } from "react-native";
import theme from "../../theme";
import { Animated } from "react-native";

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
      <Text
        style={{
          color: props.focused ? theme.color.white : theme.color.black,
        }}
      >
        {props.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    top: 10,
    gap: 5,
    borderRadius: theme.borderRadius,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 20,
  },
  image: { height: 35, width: 35 },
});
