import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'

// files imports
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import AdminAuth from './adminpages/AdminAuth'
import AdminPanel from './adminpages/AdminPanel'
import UserCreation from './adminpages/UserCreation'
import UsersList from './adminpages/UsersList'
import UserUpdate from './adminpages/UserUpdate'
import UserProtectedRoutes from './protectedroutes/UserProtectedRoutes'
import AdminProtectedRoutes from './protectedroutes/AdminProtectedRoutes'
import CreatyCity from './adminpages/CreatyCity'
import CityLists from "./adminpages/CityLists"

// css import
import './App.scss'

axios.defaults.baseURL = "https://mern-stack-app-ymxk.onrender.com";
axios.defaults.withCredentials = true;

function App() {
    return (
        <>
            <Toaster position='bottom-center' toastOptions={{ duration: 2000 }} />
            <Routes>
                <Route path='/' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route element={<UserProtectedRoutes />}>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/profile' element={<Profile />} />
                </Route>
                <Route path='/admin-auth' element={<AdminAuth />} />
                <Route element={<AdminProtectedRoutes />}>
                    <Route path='/admin-panel' element={<AdminPanel />} />
                    <Route path='/admin-create-user' element={<UserCreation />} />
                    <Route path='/admin-get-users' element={<UsersList />} />
                    <Route path='/admin-user-update' element={<UserUpdate />} />
                    <Route path='/admin-get-city' element={<CityLists />} />
                    <Route path='/admin-create-city' element={<CreatyCity />} />
                </Route>
            </Routes>
        </>
    )
}

export default App

