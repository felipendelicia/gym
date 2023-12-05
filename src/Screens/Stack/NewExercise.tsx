import React, { useState } from 'react'
import TabContainer from '../../components/TabContainer'
import StyledText from '../../components/StyledText'
import StyledInput from '../../components/StyledInput'
import OpenSelectButton from '../../components/OpenSelectButton'
import Select from '../../components/Select'
import { getMuscleNames } from '../../constants'

const MUSCLE_NAMES = getMuscleNames()

export default function NewExercise() {
    const [mainMuscle, setMainMuscle] = useState<string>()
    const [extraMuscles, setExtraMuscles] = useState<string[]>([])
    const [isMainMuscleSelect, setMainMuscleSelect] = useState(false)
    const [isExtraMusclesSelect, setExtraMusclesSelect] = useState(false)

    const extraMusclesPlaceholder = () => {
        if (extraMuscles?.length == 0 || extraMuscles == undefined) {
            return;
        }
        const placeholder = extraMuscles?.length + " seleccionados"
        return placeholder
    }

    const handleSetMainMuscle = (muscle: string) => {
        setMainMuscle(muscle)
    }

    const handleSetExtraMuscles = (muscles: string[]) => {
        setExtraMuscles(muscles)
    }

    return (
        <TabContainer>
            <StyledText big bold>
                Nuevo ejercicio
            </StyledText>
            <StyledInput placeholder="Nombre del ejercicio" />
            <StyledText bold>
                Musculos involucrados
            </StyledText>
            <OpenSelectButton title="Musculo principal" selectedItem={mainMuscle} onTouch={() => setMainMuscleSelect(true)} />
            {
                isMainMuscleSelect
                    ? <Select
                        title="Selecciona el ejercicio"
                        setItem={(muscle: string) => handleSetMainMuscle(muscle)}
                        items={MUSCLE_NAMES}
                        close={() => setMainMuscleSelect(false)} />
                    : <></>
            }
            <OpenSelectButton title="Musculos aislados" selectedItem={extraMusclesPlaceholder()} onTouch={() => setExtraMusclesSelect(true)} />
            {
                isExtraMusclesSelect
                    ? <Select
                        title="Selecciona el ejercicio"
                        setItem={(muscles: string[]) => handleSetExtraMuscles(muscles)}
                        items={MUSCLE_NAMES}
                        multipleChoice={true}
                        selectedItems={extraMuscles}
                        close={() => setExtraMusclesSelect(false)} />
                    : <></>
             }
            

        </TabContainer>
    )
}