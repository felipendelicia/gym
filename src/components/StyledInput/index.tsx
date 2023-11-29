import { StyleSheet, TextInput } from "react-native";
import React from "react";
import theme from "../../theme";

interface IStyledInput {
  placeholder?: string;
}

export default function StyledInput({ placeholder }: IStyledInput) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={theme.color.dark_grey}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.color.grey,
    color: theme.color.white,
    width: "90%",
    alignSelf: "center",
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: theme.borderRadius,
  },
});
