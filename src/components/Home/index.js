import {useState} from 'react'

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const onLogin = () => {
    setIsLoggedIn(true)
  }

  const onLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <div className="card-container">
          <h1 className = "heading">Welcome User</h1>
          <button className="button" onClick={onLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="card-container">
          <h1 className = "heading">Please Login</h1>
          <button className="button" onClick={onLogin}>
            Login
          </button>
        </div>
      )}
    </div>
  )
}

export default Home
