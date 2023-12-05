import React, { useState } from "react";
import TabContainer from "../../components/TabContainer";
import StyledText from "../../components/StyledText";
import StyledInput from "../../components/StyledInput";
import { AddButton } from "../../components/AddButton";

export default function NewRoutine({ navigation }: any) {
  const handleOnPressAddExercise = () => {
    navigation.navigate("AddExerciseToRoutine");
  };

  return (
    <TabContainer>
      <StyledText bold big>
        Nueva rutina
      </StyledText>
      <StyledInput placeholder="Nombre de la rutina" />
      <StyledText bold>Ejercicios</StyledText>
      <AddButton action={handleOnPressAddExercise} />
    </TabContainer>
  );
}
