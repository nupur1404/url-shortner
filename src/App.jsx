import { createBrowserRouter } from "react-router-dom"
import AppLayout from "./layouts/app-layout"

const router = createBrowserRouter([
  {
    element:<AppLayout />,
    children:[
      {
        path: '/',
        element: <LandingPage />
      }
    ]
  }
])

function App() {
  return (
    <div>
      hii
    </div>
  )
}

export default App