import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<HomePage />} />
                <Route element={<AuthLayout />}>
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes