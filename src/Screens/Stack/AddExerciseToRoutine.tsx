import React, { useState } from 'react'
import TabContainer from '../../components/TabContainer'
import OpenSelectButton from '../../components/OpenSelectButton'
import { Exercise } from '../../types'
import Select from '../../components/Select'

export default function AddExerciseToRoutine({ navigation }: any) {

    const [exercise, setExercise] = useState<Exercise>()
    const [isSelect, setIsSelect] = useState(false)

    const handleCloseSelect = () => setIsSelect(false)
    const handleOpenSelect = () => setIsSelect(true)
    const handleSetExercise = (exercise: string) => {
        // Buscar ejercicio por nombre,
        // Seleccionarlo
    }
    const handleOnPressNewExercise = () => {
        navigation.navigate("NewExercise");
    };

    return (
        <TabContainer>
            <OpenSelectButton title="Ejercicios" selectedItem={exercise?.name} onTouch={() => handleOpenSelect()} />
            {
                isSelect
                    ? <Select
                        title="Selecciona el ejercicio"
                        setItem={(exerciseName: string) => handleSetExercise(exerciseName)}
                        items={["Test", "Test"]}
                        create={() => handleOnPressNewExercise()}
                        close={() => handleCloseSelect()} />
                    : <></>
            }
        </TabContainer>
    )
}