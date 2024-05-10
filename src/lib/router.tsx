import Home from '../screens/Home.tsx'
import ForgotPassword from '../screens/ForgotPassword.tsx'
import Authentication from '../screens/Authentication.tsx'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/authentication",
        element: <Authentication />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/forgotpassword",
        element: <ForgotPassword />
    }
])

export default router;