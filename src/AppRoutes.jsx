import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function RequiredAuth({ children, currentUser }) {
    if (!currentUser)
        return <Navigate to='/login' />
    return children
}
function NoRequiredAuth({ children, currentUser }) {
    if (currentUser) {
        return <Navigate to='/' />
    }
    return children
}


const AppRoutes = ({ currentUser }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={
                        <RequiredAuth currentUser={currentUser}>
                            <HomePage />
                        </RequiredAuth>}
                />
                <Route element={<AuthLayout />}>
                    <Route path='/login' element={
                        <NoRequiredAuth currentUser={currentUser}>
                            <LoginPage />
                        </NoRequiredAuth>} />
                    <Route path='/register' element={
                        <NoRequiredAuth currentUser={currentUser}>
                            <RegisterPage />
                        </NoRequiredAuth>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes