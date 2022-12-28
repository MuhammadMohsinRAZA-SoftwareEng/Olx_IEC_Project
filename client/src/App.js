import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/footer.css'

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ActivateAccount from './pages/ActivateAccount'
import ChangePassword from './pages/ChangePassword'
import FindAccount from './pages/FindAccount'
import { Toaster } from 'react-hot-toast'
import { PublicRoute } from './utilities/ProtectedRoute'


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signin"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path="/activate/:token"
            element={
              <PublicRoute>
                <ActivateAccount />
              </PublicRoute>
            }
          />
          <Route
            path="/change-password/:token"
            element={
              <PublicRoute>
                <ChangePassword />
              </PublicRoute>
            }
          />
          <Route
            path="/find-account"
            element={
              <PublicRoute>
                <FindAccount />
              </PublicRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>

      <Toaster />
    </div>
  )
}

export default App
