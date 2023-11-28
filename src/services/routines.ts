import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getRoutines() {
  const routines = await AsyncStorage.getItem("routines");
  return routines;
}
function getRoutine() {}
function postRoutine(routine: Routine) {}
function removeRoutine() {}
function putRoutine() {}
