import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Layout from './Components/Layout/Layout'
import StartFramework from './Components/StartFramework/StartFramework'
import NotFoundPage from './Components/NotFoundPage/NotFoundPage'

function App() {
  const router = createBrowserRouter([
  {Path : "", element : <Layout/>, children: 
    [
      {path : '', element: <StartFramework/>},
      {path : 'about', element: <About/>},
      {path : 'portfolio', element: <Portfolio/>},
      {path : 'contact', element: <Contact/>},
      {path : '*', element: <NotFoundPage/>}
    ]
  }
]);


  return <>
    <RouterProvider router={router}></RouterProvider>
  </>
}
export default App
