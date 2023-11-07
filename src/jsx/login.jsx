import { useNavigate } from 'react-router-dom';

export function realizarLogin() {
    const navigate = useNavigate()
    const nomeInput = document.getElementById('usuario');
    const senhaInput = document.getElementById('senha');
  
    const nome = nomeInput.value.trim().toLowerCase();
    const senha = senhaInput.value;
  
    if (nome === 'admin' && senha === '123456') {
      alert('Login realizado com sucesso!');
      document.getElementById('formLogin').reset();
      navigate("/Adm")
      return
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
      document.getElementById('formLogin').reset();
    } else {
      alert('Nome de usuário ou senha incorretos. Por favor, tente novamente.');
    }
  }
  