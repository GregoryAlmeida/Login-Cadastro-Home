import { useState } from "react"
import Input from "../../Components/Input/Input"
import Button from "../../Components/Button/Button"
import { Link, useNavigate } from "react-router-dom"
import './Login.css'

export default function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')    
  const navigate = useNavigate()


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (user.trim() === '' || password.trim() === '') {
      setError('Preencha os campos acima!')
    } else {
      if (localStorage.getItem(user) === null || localStorage.getItem(password) === null) {
        setError('Usuário ou Senha inexistente!')
      } else {
        localStorage.setItem('UserLogado', user)
        localStorage.setItem('SenhaLogado', password)
        navigate('/home')
      }
    }
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)} >
      <div>
        <h1>Login</h1>
        <Input 
          label="Usuário" 
          type="text" 
          name='username' 
          value={user}  
          onChange={({target}) => setUser(target.value)} 
        />
        <Input 
          label="Senha" 
          type='password' 
          name="password"
          value={password}
          onChange={({target}) => setPassword(target.value)}
        />
        <Button>Acessar</Button>
      </div>
      <div>
        <p>Ainda não cadastrado? Clique <Link to='/cadastrar'>Aqui!</Link></p>
        {error && <p style={{color: 'red', fontWeight: 'bolder'}}>{error}</p>}
      </div>
    </form>
  )
}
