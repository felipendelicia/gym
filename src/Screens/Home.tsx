import React from "react";
import TabContainer from "../components/TabContainer";
import StyledText from "../components/StyledText";

export default function Home() {
  return (
    <TabContainer>
      <StyledText big bold>
        Tus entrenamientos
      </StyledText>
      <StyledText big bold>
        Tus rutinas
      </StyledText>
    </TabContainer>
  );
}
