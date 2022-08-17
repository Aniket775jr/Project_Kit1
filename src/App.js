import './App.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
// import Navbar from './components/Navbar'
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Project from './pages/project/Project'
import Create from './pages/create/Create'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { useAuthContext } from './hooks/useAuthContext'
import OnlineUsers from './components/OnlineUsers'

function App() {
  const { user, authIsReady } = useAuthContext()
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/">
                {!user && <Redirect to="/login"></Redirect>}
                {user && <Dashboard />}
              </Route>
              <Route path="/create">
                {!user && <Redirect to="/login"></Redirect>}
                {user && <Create />}
              </Route>
              <Route path="/projects/:id">
                {!user && <Redirect to="/login"></Redirect>}
                {user && <Project />}
              </Route>
              <Route path="/login">
                {user && <Redirect to="/"/>}
                {!user && <Login />}
              </Route>
              <Route path="/signup">
                {user && <Redirect to="/"/>}
                {!user && <Signup />}
              </Route>
            </Switch>
          </div>
          {user && <OnlineUsers/>}
        </BrowserRouter>
      )}

    </div>
  );
}

export default App

