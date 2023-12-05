import React from "react";
import TabContainer from "../components/TabContainer";
import StyledText from "../components/StyledText";
import RoutinesList from "../components/RoutinesList";
import { AddButton } from "../components/AddButton";
import { createStackNavigator } from "@react-navigation/stack";
import NewRoutine from "./Stack/NewRoutine";
import AddExerciseToRoutine from "./Stack/AddExerciseToRoutine";
import NewExercise from "./Stack/NewExercise";

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
      <AddButton action={handleOnPressAddRoutine} />
      <RoutinesList />
    </TabContainer>
  );
}

export default function RoutineStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StackBase" component={Routines} />
      <Stack.Screen name="NewRoutine" component={NewRoutine} />
      <Stack.Screen name="AddExerciseToRoutine" component={AddExerciseToRoutine} />
      <Stack.Screen name="NewExercise" component={NewExercise} />
    </Stack.Navigator>
  );
}
