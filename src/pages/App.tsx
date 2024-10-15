import { SignedIn, SignedOut, SignInButton, UserButton, useSession } from '@clerk/clerk-react'

export default function App() {
  const { isLoaded } = useSession()

  if (!isLoaded) {
    return <p>Loading...</p>
  }

  return (
    <main className='w-full h-full flex justify-center items-center'>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </main>
  )
}