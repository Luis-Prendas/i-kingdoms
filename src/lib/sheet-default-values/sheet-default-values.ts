export const CHARACTERISTICS: CharacteristicPoints[] = [
    {
        name: 'Strength',
        shortName: 'Str',
        upperName: 'STRENGTH',
        upperShortName: 'STR',
        isCompetent: false,
        points: 0,
        savingsThoroughs: 0
    },
    {
        name: 'Dexterity',
        shortName: 'Dex',
        upperName: 'DEXTERITY',
        upperShortName: 'DEX',
        isCompetent: false,
        points: 0,
        savingsThoroughs: 0
    },
    {
        name: 'Constitution',
        shortName: 'Con',
        upperName: 'CONSTITUTION',
        upperShortName: 'CON',
        isCompetent: false,
        points: 0,
        savingsThoroughs: 0
    },
    {
        name: 'Intelligence',
        shortName: 'Int',
        upperName: 'INTELLIGENCE',
        upperShortName: 'INT',
        isCompetent: false,
        points: 0,
        savingsThoroughs: 0
    },
    {
        name: 'Wisdom',
        shortName: 'Wis',
        upperName: 'WISDOM',
        upperShortName: 'WIS',
        isCompetent: false,
        points: 0,
        savingsThoroughs: 0
    },
    {
        name: 'Charisma',
        shortName: 'Cha',
        upperName: 'CHARISMA',
        upperShortName: 'CHA',
        isCompetent: false,
        points: 0,
        savingsThoroughs: 0
    }
]

export const SHEET: Sheet = {
    id: '[user]-sheet-[id]',
    name: '',
    description: '',
    level: 1,
    race: '',
    class: '',
    campetenceBonus: 2,
    characteristicPoints: CHARACTERISTICS,
}