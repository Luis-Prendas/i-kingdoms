import { create } from 'zustand'

interface SessionStore {
    isLoggedIn: boolean
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const useSessionStore = create<SessionStore>()(set => ({
    isLoggedIn: false,
    setIsLoggedIn(isLoggedIn: boolean) {
        set({ isLoggedIn })
    }
}))