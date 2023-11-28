import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import theme from "../../theme";

export default function TabContainer({ children }: { children: any }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.black,
    height: "100%",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
