import './css/Cadastro/Cadastro.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { enviarFormulario, validarSenha } from '../jsx/validacao.jsx';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
  const navigate = useNavigate();

  const [usuarios, setUsuarios] = useState({
    id: null,
    nome: '',
    email: '',
    senha: '',
    dataHoraCadastro: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUsuarios({ ...usuarios, [name]: value });
  };

  // Função de callback que chama ambas as funções de validação
  const handleSubmit = (e) => {
    e.preventDefault();
    enviarFormulario();
    validarSenha();
  };

  const cadastrarUsuario = () => {
    fetch('http://localhost:5000/usuarios')
      .then((response) => response.json())
      .then((data) => {
        const existingIds = data.map((usuario) => usuario.id);
        const maxId = existingIds.length > 0 ? Math.max(...existingIds) : 0;
        const id = maxId + 1;

        const post_data = {
          id,
          nome: usuarios.nome,
          email: usuarios.email,
          senha: usuarios.senha,
          dataHoraCadastro: usuarios.dataHoraCadastro,
        };

        fetch('http://localhost:5000/usuarios', {
          method: 'POST',
          body: JSON.stringify(post_data),
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => {
            console.log("STATUS DA REQUISIÇÃO: " + response.status);
            if (response.status === 201) {
              alert("Usuário cadastrado com sucesso!");
              // Redirecionar para outra página após o cadastro bem-sucedido
              navigate('/usuarios');
            } else {
              alert("Erro ao adicionar o usuário");
            }
          })
          .then((data) => {
            console.log(data);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div id="cadastro" className="cadastro">
      <form id="formCadast" className="formCadast" onSubmit={handleSubmit}>
        <h1 id="CadastroTitulo">Cadastro</h1>
        <label htmlFor="username">Nome de usuário:</label><br />
        <input type="text" id="username" name="nome" onChange={handleChange} value={usuarios.nome} /><br />
        <label htmlFor="email">E-mail:</label><br />
        <input type="email" id="email" name="email" onChange={handleChange} value={usuarios.email} /><br />
        <label htmlFor="password">Senha:</label><br />
        <input type="password" id="password" name="senha" onChange={handleChange} value={usuarios.senha} /><br />
        <label htmlFor="confirm-password">Confirme a senha:</label><br />
        <input type="password" id="confirm-password" name="confirmarSenha" /><br /><br />
        <label htmlFor="dob">Data de Nascimento:</label><br />
        <input type="date" id="dob" name="dataHoraCadastro" onChange={handleChange} value={usuarios.dataHoraCadastro} /><br /><br />
        <label htmlFor="gender">Gênero:</label><br />
        <select id="gender" name="gender">
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
