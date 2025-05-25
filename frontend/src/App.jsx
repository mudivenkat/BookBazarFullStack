
import { Outlet } from 'react-router'
import './App.css'
import NavBar from './components/navbar'
function App() {
  return (
    <>
      <NavBar />
      
       <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-secondary '>
        <Outlet />
    </main>
    <footer>Footer</footer>
     </>
  )
}

export default App
