import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { RegisterPage } from "./pages/register"
import { LoginPage } from "./pages/login"
import { HomePage } from "./pages/home"


const routerConfig = createBrowserRouter([
  {
    path: '/register',
    element: <RegisterPage/>
  },
   {
    path: '/login',
    element: <LoginPage/>
   },
   {
    path: '/',
    element: <HomePage/>
   }
   
])
function App() {
  return (
    <>
     <RouterProvider router={routerConfig}/>
    </>
  )
}

export default App
