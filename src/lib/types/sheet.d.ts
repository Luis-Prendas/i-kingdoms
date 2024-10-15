interface Sheet {
    id: string
    name: string
    description: string
    level: number
    race: string
    class: string
    campetenceBonus: number
    characteristicPoints: CharacteristicPoints[]
}

interface CharacteristicPoints {
    name: string
    shortName: string
    upperName: string
    upperShortName: string
    points: number
    savingsThoroughs: number
    isCompetent: boolean
}
