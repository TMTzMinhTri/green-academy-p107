import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import AuthLayout from "./layout/AuthLayout";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UpdateProfilePage from "./pages/UpdateProfilePage";


//side effect
// change state

// main: render UI

function RequiredAuth({ children }) {
    const { currentUser } = useContext(AuthContext); // object
    const location = useLocation()
    if (!currentUser) return <Navigate to="/login" />;
    console.log(currentUser)
    if (
        location.pathname !== '/update-profile'
        && !currentUser.displayName
        && !currentUser.photoURL
    )
        return <Navigate to='/update-profile' />

    return children;
}

function NoRequiredAuth({ children }) {
    const { currentUser } = useContext(AuthContext); // object
    if (currentUser) {
        return <Navigate to="/" />;
    }
    return children;
}

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route
                        path="/"
                        element={
                            <RequiredAuth>
                                <HomePage />
                            </RequiredAuth>
                        }
                    />
                </Route>
                <Route element={<AuthLayout />}>
                    <Route
                        path="/login"
                        element={
                            <NoRequiredAuth>
                                <LoginPage />
                            </NoRequiredAuth>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <NoRequiredAuth>
                                <RegisterPage />
                            </NoRequiredAuth>
                        }
                    />
                </Route>
                <Route
                    path='update-profile'
                    element={<RequiredAuth>
                        <UpdateProfilePage />
                    </RequiredAuth>} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
