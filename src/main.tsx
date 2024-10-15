import './styles/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import SessionProvider from './components/providers/session-provider'
import CreatePage from './pages/create/create'

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/create',
    element: <CreatePage />,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='bg-background text-primary w-full h-screen flex justify-center items-center'>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
        <SessionProvider>
          <RouterProvider router={router} />
        </SessionProvider>
      </ClerkProvider>
    </div>
  </StrictMode>,
)
