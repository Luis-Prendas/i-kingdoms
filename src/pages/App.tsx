import { Link } from 'react-router-dom'

export default function App() {
  return (
    <main className='w-full h-full flex justify-center items-center'>
      <section className='bg-card rounded p-2'>
        <ul className='flex flex-col gap-2'>
          <li>
            <Link to='/create'>Create Sheet</Link>
          </li>
        </ul>
      </section>
    </main>
  )
}