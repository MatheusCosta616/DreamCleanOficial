import './Cadastro.css';
import React from 'react';
import { Link } from "react-router-dom";
import { enviarFormulario, validarSenha } from '../js/validacao';

export default function Cadastro() {

  // Função de callback que chama ambas as funções de validação
  const handleSubmit = (e) => {
    e.preventDefault();
    enviarFormulario();
    validarSenha();
  };

  return (
    <div id="cadastro" className="cadastro">
      <form id="formCadast" className="formCadast" onSubmit={handleSubmit}>
        <h1 id="CadastroTitulo">Cadastro</h1>
        <label htmlFor="username">Nome de usuário:</label><br />
        <input type="text" id="username" name="username" /><br />
        <label htmlFor="email">E-mail:</label><br />
        <input type="email" id="email" name="email" /><br />
        <label htmlFor="password">Senha:</label><br />
        <input type="password" id="password" name="password" /><br />
        <label htmlFor="confirm-password">Confirme a senha:</label><br />
        <input type="password" id="confirm-password" name="confirm-password" /><br /><br />
        <label htmlFor="dob">Data de Nascimento:</label><br />
        <input type="date" id="dob" name="dob" /><br /><br />
        <label htmlFor="gender">Gênero:</label><br />
        <select id="gender" name="gender">
          <option value="select">Selecione</option>
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
