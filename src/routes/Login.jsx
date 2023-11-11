import React, { useState, useEffect } from 'react';
import './css/Login/Login.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const carregarUsuarios = async () => {
      try {
        const resposta = await fetch('http://localhost:5000/usuarios');
        if (!resposta.ok) {
          throw new Error(`Erro: ${resposta.status}`);
        }
        const dados = await resposta.json();
        setUsuarios(dados);
      } catch (erro) {
        console.error(erro);
      }
    };

    carregarUsuarios();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nomeInput = document.getElementById('usuario');
    const senhaInput = document.getElementById('senha');

    const nome = nomeInput.value.trim().toLowerCase();
    const senha = senhaInput.value;

    // Verifica se é o admin
    if (nome === 'admin' && senha === '123456') {
      alert('Login realizado com sucesso como admin!');
      e.target.reset();
      navigate("/Adm");
      return;
    }

 
    const usuario = usuarios.find(user => user.nome.toLowerCase() === nome && user.senha === senha);

    if (usuario) {
      alert('Login realizado com sucesso!');
      sessionStorage.setItem(nomeInput.value, senhaInput.value);
      e.target.reset();
      navigate("/Monitoramento");
      return;
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
