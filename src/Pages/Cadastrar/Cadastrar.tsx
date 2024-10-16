import { Link, useNavigate } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import Input from '../../Components/Input/Input'
import { useState } from 'react'

export default function Cadastrar() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (user.trim() === '' || password.trim() === '' || repassword.trim() === '') {
      setError('Preencha os campos acima!')
    } else {
      if (password != repassword) {
        setError('As Senhas não são iguais!')
      } else {
        localStorage.setItem(user, user)
        localStorage.setItem(password, password)
        navigate('/home')
      }
    }

  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} >
      <div>
        <h1>Cadastrar</h1>
        <Input 
          label='Usuário' 
          type='text' 
          name='username' 
          value={user}
          onChange={({target}) => setUser(target.value)} 
        />
        <Input 
          label='Senha' 
          type='password' 
          name='password' 
          value={password}
          onChange={({target}) => setPassword(target.value)} 
        />
        <Input 
          label='Reescreva a Senha' 
          type='password' 
          name='re-password' 
          value={repassword}
          onChange={({target}) => setRepassword(target.value)} 
        />
        <Button>Cadastrar</Button>
      </div>
      <div>
        <p>Já é cadastrado? Clique <Link to='/' >Aqui!</Link></p>
        {error && <p style={{color: 'red', fontWeight: 'bolder'}}>{error}</p>}
      </div>
    </form>
  )
}
