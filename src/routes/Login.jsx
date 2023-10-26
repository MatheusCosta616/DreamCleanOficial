import React from 'react';
import './css/Login/Login.css';
import { Link } from 'react-router-dom';
import { realizarLogin } from '../js/login';

export default function Login() {

  return (
    <div id="formLogin" className="formLogin">
      <h1 id="LoginTitulo">Login</h1>
      <form id="formLogin" className="formCom" onSubmit={realizarLogin}>
        <label htmlFor="usuario">Nome de usuário:</label><br />
        <input type="text" id="usuario" required /><br />
        <label htmlFor="senha">Senha:</label><br />
        <input type="password" id="senha" required /><br /><br />
        <input type="submit" id="entrar" value="Entrar" />
      </form>
      <p id="pForm">Ainda não possui uma conta? <Link id="links" to="/Cadastro">CLIQUE AQUI</Link></p>
    </div>
  );
}
