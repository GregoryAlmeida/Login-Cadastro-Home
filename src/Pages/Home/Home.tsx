import { Link } from "react-router-dom";
import './Home.css'

export default function Home() {
  const userlogado = localStorage.getItem('UserLogado')
  const senhaLogado = localStorage.getItem('SenhaLogado')

  return (
    <div className="div-home">
      <h1>Bem vindo</h1>
      <p style={{textAlign: 'center'}}>⭐{userlogado}⭐</p>
      <p>Sua senha é: {senhaLogado}</p>
      <p>
        Teste também: <Link to='/'>Login</Link> | <Link to='/cadastrar'>Cadastro</Link>
      </p>
    </div>
  )
}
