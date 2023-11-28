import React from "react";
import TabContainer from "../components/TabContainer";
import StyledText from "../components/StyledText";
import RoutinesList from "../components/RoutinesList";
import { AddRoutine } from "../components/AddRoutine";
import { createStackNavigator } from "@react-navigation/stack";
import NewRoutine from "./Stack/NewRoutine";

const Stack = createStackNavigator();

function Routines({ navigation }: { navigation: any }) {
  const handleOnPressAddRoutine = () => {
    navigation.navigate("NewRoutine");
  };

  return (
    <TabContainer>
      <StyledText big bold>
        Tus rutinas
      </StyledText>
      <AddRoutine action={handleOnPressAddRoutine} />
      <RoutinesList />
    </TabContainer>
  );
}

export default function RoutineStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StackBase" component={Routines} />
      <Stack.Screen name="NewRoutine" component={NewRoutine} />
    </Stack.Navigator>
  );
}
