import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function RoutinesList(newRoutine: { newRoutine?: boolean }) {
  const [routines, setRoutines] = useState<Routine[]>([]);

  return (
    <View>
      {routines
        ? routines.map((routine, i) => {
            return <Text key={i}>{routine.name}</Text>;
          })
        : null}
    </View>
  );
}
