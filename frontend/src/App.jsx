import { Outlet } from 'react-router'
function App() {
  return (
    <>
    <nav>NavBar</nav>
    <main>
        <Outlet />
    </main>
    <footer>Footer</footer>
     </>
  )
}

export default App
