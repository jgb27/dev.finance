import Overview from '../screens/Overview.tsx'
import ForgotPassword from '../screens/ForgotPassword.tsx'
import SignIn from '../screens/SignIn.tsx'
import { createBrowserRouter } from 'react-router-dom'
import SignUp from '../screens/SignUp.tsx'
import Transactions from '../screens/Transactions.tsx'
import Bills from '../screens/Bills.tsx'
import Expense from '../screens/Expense.tsx'

const router = createBrowserRouter([
    {
        path: "*",
        element: <SignIn />
    },
    {
        path: "/signin",
        element: <SignIn />,
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/forgotpassword",
        element: <ForgotPassword />
    },
    {
        path: "/overview",
        element: <Overview />
    },
    {
        path: "/transactions",
        element: <Transactions />
    },
    {
        path: "/expense",
        element: <Expense />
    },
    {
        path: "/bills",
        element: <Bills />
    }

])

export default router;