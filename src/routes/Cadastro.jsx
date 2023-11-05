import './css/Cadastro/Cadastro.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { enviarFormulario, validarSenha } from '../jsx/validacao.jsx';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
  const [usuarios, setUsuarios] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    dataHoraCadastro: '',
    gender: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuarios({
      ...usuarios,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validarSenha();
    enviarFormulario()
    /*
    if (enviarFormulario() == false){
      console.log("Não foi possível cadastrar o usuário")
      return;
    }
    */
    // Certifique-se de que a senha e a confirmação de senha correspondem antes de continuar
    if (usuarios.senha !== usuarios.confirmarSenha) {
      alert('As senhas não correspondem');
      return;
    }

    const post_data = {
      nome: usuarios.nome,
      email: usuarios.email,
      senha: usuarios.senha,
      dataHoraCadastro: usuarios.dataHoraCadastro,
      gender: usuarios.gender,
    };

    fetch('http://localhost:5000/usuarios', {
      method: 'POST',
      body: JSON.stringify(post_data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        console.log('STATUS DA REQUISIÇÃO: ' + response.status);
        if (response.status === 201) {
          alert('Usuário cadastrado com sucesso!');
          // Redirecionar para outra página após o cadastro bem-sucedido
          navigate('/login');
        } else {
          alert('Erro ao adicionar o usuário');
        }
      })
      .catch((error) => console.error(error)); // Corrigido erro de sintaxe aqui
  };

  return (
    <div id="cadastro" className="cadastro">
      <form id="formCadast" className="formCadast" onSubmit={handleSubmit}>
        <h1 id="CadastroTitulo">Cadastro</h1>
        <label htmlFor="username">Nome de usuário:</label><br />
        <input
          type="text"
          id="username"
          name="nome"
          value={usuarios.nome}
          onChange={handleChange}
        /><br />
        <label htmlFor="email">E-mail:</label><br />
        <input
          type="email"
          id="email"
          name="email"
          value={usuarios.email}
          onChange={handleChange}
        /><br />
        <label htmlFor="password">Senha:</label><br />
        <input
          type="password"
          id="password"
          name="senha"
          value={usuarios.senha}
          onChange={handleChange}
        /><br />
        <label htmlFor="confirm-password">Confirme a senha:</label><br />
        <input
          type="password"
          id="confirm-password"
          name="confirmarSenha"
          value={usuarios.confirmarSenha}
          onChange={handleChange}
        /><br /><br />
        <label htmlFor="dob">Data de Nascimento:</label><br />
        <input
          type="date"
          id="dob"
          name="dataHoraCadastro"
          value={usuarios.dataHoraCadastro}
          onChange={handleChange}
        /><br /><br />
        <label htmlFor="gender">Gênero:</label><br />
        <select
          id="gender"
          name="gender"
          value={usuarios.gender}
          onChange={handleChange}
        >
          <option value="">Selecione</option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="other">Outro</option>
        </select><br /><br />
        <input id="cadastrar" type="submit" value="Cadastrar" />
        <p id="jaTem">Já possui uma conta? <Link id="links" to="/Login">CLIQUE AQUI</Link></p>
      </form>
    </div>
  );
}
