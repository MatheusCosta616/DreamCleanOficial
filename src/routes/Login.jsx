import React from 'react';
import './css/Login/Login.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const nomeInput = document.getElementById('usuario');
    const senhaInput = document.getElementById('senha');
  
    const nome = nomeInput.value.trim().toLowerCase();
    const senha = senhaInput.value;
  
    if (nome === 'admin' && senha === '123456') {
      alert('Login realizado com sucesso!');
      e.target.reset();
      navigate("/Adm");
      return;
    }
  
    const usuariosArmazenados = localStorage.getItem('usuarios');
    if (usuariosArmazenados === null) {
      alert('Usuário não encontrado. Por favor, faça o cadastro primeiro.');
      return;
    }
  
    const usuarios = JSON.parse(usuariosArmazenados);
    const usuario = usuarios.find(user => user.nome.toLowerCase() === nome && user.senha === senha);
  
    if (usuario) {
      alert('Login realizado com sucesso!');
      e.target.reset();
    } else {
      alert('Nome de usuário ou senha incorretos. Por favor, tente novamente.');
    }
  }

  return (
    <div id="formLogin" className="formLogin">
      <h1 id="LoginTitulo">Login</h1>
      <form id="formLogin" className="formCom" onSubmit={handleSubmit}>
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
