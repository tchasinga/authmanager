import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import FloatingShapes from './components/FloatingShapes.jsx'

import './App.css'
import Home from './components/Home.jsx'
import Singup from './components/Singup.jsx'
import Singin from './components/Singin.jsx'
import ForgetPassword from './components/Pages/ForgetPassword.jsx'
import VerifiedEmail from './components/Pages/VerifiedEmail.jsx'

import { useAuthStore } from './store/authStore.js';
import { useEffect } from 'react';
import LoadingSpinner from './components/Pages/LoadingSpinner.jsx';
import Resetpassword from './components/Resetpassword.jsx';

const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (isAuthenticated && user.isVerified) {
		return <Navigate to='/' replace />;
	}

	return children;
};

// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to='/singin' replace />;
	}

	if (!user.isVerified) {
		return <Navigate to='/verify-email' replace />;
	}

	return children;
};

function App() {
  const {isCheckingAuth, checkAuth} = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-emerald-900 flex items-center justify-center relative overflow-hidden">
     <FloatingShapes color='bg-green-500' size='w-64 h-64' top='-5%' left='10%' delay={0} />
			<FloatingShapes color='bg-emerald-500' size='w-48 h-48' top='70%' left='80%' delay={5} />
			<FloatingShapes color='bg-lime-500' size='w-32 h-32' top='40%' left='-10%' delay={2} />
      <Toaster />
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
            <Home />
          </ProtectedRoute>
          } />
          <Route path="/singup" element={
            <RedirectAuthenticatedUser>
              <Singup />
            </RedirectAuthenticatedUser>
          } />
          <Route path="/singin" element={
            <RedirectAuthenticatedUser>
            <Singin />
          </RedirectAuthenticatedUser>
          } />
          <Route path='/forgot-password' element={
            <RedirectAuthenticatedUser>
               <ForgetPassword />
            </RedirectAuthenticatedUser>
          } />
          <Route path='/verify-email' element={<VerifiedEmail />}/>
          <Route
					path='/reset-password/:token'
					element={
						<RedirectAuthenticatedUser>
							<Resetpassword />
						</RedirectAuthenticatedUser>
					}
				/>
          <Route path='/*' element={"404 Page Not Found"} />
        </Routes>
    </div>
  )
}
 
export default App
