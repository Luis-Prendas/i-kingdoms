import { useSession } from '@clerk/clerk-react'
import Loader from '../ui/loader'
import { useSessionStore } from '@/lib/store/session-store'
import { useEffect } from 'react'

export default function SessionProvider({ children }: { children: React.ReactNode }) {
    const { isLoaded, isSignedIn } = useSession()
    const { setIsLoggedIn } = useSessionStore()

    useEffect(() => {
        if (isLoaded) {
            setIsLoggedIn(isSignedIn)
        }
    }, [isLoaded, isSignedIn, setIsLoggedIn])

    if (!isLoaded) {
        return <Loader />
    }

    return <>{children}</>
}
