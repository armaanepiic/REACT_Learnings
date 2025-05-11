import { useState } from "react"

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const handleLogin = () => {
        setIsLogin(!isLogin);
    }
  return (
    <div className="component">
          <p>{isLogin ? <p>WelCome Back!</p> : <p>Logged In</p>}</p>
          <button onClick={handleLogin}>{isLogin ? 'Log Out' : 'Log In'}</button>
    </div>
  )
}
