import { create } from 'zustand'
import { SHEET } from '../sheet-default-values/sheet-default-values'

interface SheetStore {
    sheetList: Sheet[]
    sheet: Sheet
    setSheet: ({ sheetId }: { sheetId: string }) => void
}

export const useSheetStore = create<SheetStore>()((set, get) => ({
    sheetList: [],
    sheet: SHEET,
    setSheet: ({ sheetId }) => {
        const sheet = get().sheetList.find(sheet => sheet.id === sheetId)
        if (sheet) {
            set({ sheet })
        }
    }
}))