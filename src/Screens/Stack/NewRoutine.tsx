import React from "react";
import TabContainer from "../../components/TabContainer";
import StyledText from "../../components/StyledText";
import StyledInput from "../../components/StyledInput";
import { Modal } from "react-native";

export default function NewRoutine() {
  return (
    <TabContainer>
      <StyledText bold big>
        Nueva rutina
      </StyledText>
      <StyledInput placeholder="Nombre de la rutina" />
      <StyledText bold>Grupo muscular principal</StyledText>
    </TabContainer>
  );
}
