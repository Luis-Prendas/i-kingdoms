import { SHEET } from '@/lib/sheet-default-values/sheet-default-values'
import { useState } from 'react'

export function useSheet() {
    const [sheet, setSheet] = useState<Sheet>(SHEET)

    const opdateFiel = ({ field, value }: { field: keyof Sheet, value: string | number }) => {
        setSheet({ ...sheet, [field]: value })
    }

    const changeCharacteristic = ({ characteristic, value }: { characteristic: string, value: number }) => {
        if (!value) return
        const currentCharacteristic = sheet.characteristicPoints.find((c) => c.name === characteristic)
        if (!currentCharacteristic) return

        const savingThrow = currentCharacteristic.isCompetent ? Math.floor(((value - 10) / 2) + sheet.campetenceBonus) : Math.floor((value - 10) / 2)

        setSheet({
            ...sheet,
            characteristicPoints: sheet.characteristicPoints.map((c) => {
                if (c.name === characteristic) {
                    return { ...c, points: value, savingsThoroughs: savingThrow }
                }
                return c
            })
        })
    }

    const changeCompetency = ({ characteristic, value }: { characteristic: string, value: boolean }) => {
        const currentCharacteristic = sheet.characteristicPoints.find((c) => c.name === characteristic)
        if (!currentCharacteristic) return

        const savingThrow = value ? Math.floor(((currentCharacteristic.points - 10) / 2) + sheet.campetenceBonus) : Math.floor((currentCharacteristic.points - 10) / 2)

        setSheet({
            ...sheet,
            characteristicPoints: sheet.characteristicPoints.map((c) => {
                if (c.name === characteristic) {
                    return { ...c, isCompetent: value, savingsThoroughs: savingThrow }
                }
                return c
            })
        })
    }

    return {
        sheet,
        opdateFiel,
        changeCharacteristic,
        changeCompetency
    }
}