import React from "react";
import StyledModal from "../StyledModal";
import StyledText from "../StyledText";
import { ScrollView, StyleSheet } from "react-native";
import { RenderItem } from "./components";
import theme from "../../theme";
import { TouchableOpacity } from "react-native";

interface ISelect {
  title: string,
  setItem: (item: string) => void
  items: string[],
  create?: () => void,
  close: () => void
}

export default function Select({ title, setItem, items, close, create }: ISelect) {

  const handleTouch = (item: string) => {
    setItem(item)
    close()
  }

  const handleCreateTouch = () => {
    close()
    if (create) create()
  }

  return (
    <StyledModal>
      <StyledText black centered bold aditionalStyles={styles.title}>{title}</StyledText>
      <ScrollView>
        {
          items.map((item, i) => {
            return (
              <RenderItem item={item} key={i} onTouch={(item: string) => handleTouch(item)} />
            )
          })
        }
      </ScrollView>
      {
        create
          ? <TouchableOpacity onPress={handleCreateTouch} style={styles.create_button}>
            <StyledText centered bold black>Crear nuevo</StyledText>
          </TouchableOpacity>
          : <></>
      }
      <TouchableOpacity onPress={() => close()} style={styles.cancel_button}>
        <StyledText centered bold >Cancelar</StyledText>
      </TouchableOpacity>
    </StyledModal>
  )
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 20
  },
  cancel_button: {
    backgroundColor: theme.color.black,
    padding: 5,
    borderRadius: theme.borderRadius
  },
  create_button: {
    padding: 5,
    borderRadius: theme.borderRadius,
    marginBottom: 5
  }
})