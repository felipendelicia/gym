import { Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import theme from "../../theme";
import * as Font from "expo-font";

interface IStyledText {
  children?: string;
  black?: boolean;
  bold?: boolean;
  big?: boolean;
  small?: boolean;
  light?: boolean;
  centered?: boolean;
  aditionalStyles?: any;
}

export default function StyledText({
  children,
  black,
  bold,
  big,
  small,
  light,
  centered,
  aditionalStyles,
}: IStyledText) {
  const textStyles = [
    styles.default,
    black && styles.black,
    bold && styles.bold,
    big && styles.big,
    small && styles.small,
    light && styles.light,
    centered && styles.centered,
    aditionalStyles,
  ];

  const [isFontsLoaded, setIsFontsLoaded] = useState(false);
  useEffect(() => {
    if (!isFontsLoaded) {
      loadFonts();
    }
  });

  const loadFonts = async () => {
    await Font.loadAsync({
      "ubuntu-regular": require("../../../assets/fonts/Ubuntu-Regular.ttf"),
      "ubuntu-bold": require("../../../assets/fonts/Ubuntu-Bold.ttf"),
      "ubuntu-light": require("../../../assets/fonts/Ubuntu-Regular.ttf"),
    });
    setIsFontsLoaded(true);
  };

  if (isFontsLoaded) return <Text style={textStyles}>{children}</Text>;
  else return <Text>{children}</Text>;
}

const styles = StyleSheet.create({
  default: {
    color: theme.color.white,
    fontSize: 20,
    fontFamily: "ubuntu-regular",
  },
  black: {
    color: theme.color.black,
  },
  bold: {
    fontFamily: "ubuntu-bold",
  },
  big: {
    fontSize: 30,
  },
  small: {
    fontSize: 15,
  },
  light: {
    fontFamily: "ubuntu-light",
  },
  centered: {
    textAlign: "center"
  }
});
