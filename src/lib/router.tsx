import Home from '../screens/Home.tsx'
import ForgotPassword from '../screens/ForgotPassword.tsx'
import SignIn from '../screens/SignIn.tsx'
import { createBrowserRouter } from 'react-router-dom'
import SignUp from '../screens/SignUp.tsx'

const router = createBrowserRouter([
    {
        path: "/signin",
        element: <SignIn />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/overview",
        element: <Home />
    },
    {
        path: "/forgotpassword",
        element: <ForgotPassword />
    }
])

export default router;