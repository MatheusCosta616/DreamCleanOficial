export function enviarFormulario() {
    const nomeInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('password');
    const confPassInput = document.getElementById('confirm-password');
    const dobInput = document.getElementById("dob");
    const genderSelect = document.getElementById("gender");
  
    const nome = nomeInput.value.toLowerCase();
    const email = emailInput.value;
    const senha = senhaInput.value;
    const conf = confPassInput.value;
    const dob = dobInput.value;
    const gender = genderSelect.value;
  
    let formularioValido = true;
  
    // Função para remover a classe 'campo-invalido' de todos os campos
    const limparValidacao = () => {
      nomeInput.classList.remove('campo-invalido');
      emailInput.classList.remove('campo-invalido');
      senhaInput.classList.remove('campo-invalido');
      confPassInput.classList.remove('campo-invalido');
      dobInput.classList.remove('campo-invalido');
      genderSelect.classList.remove('campo-invalido');
    };
  
    // Função para mostrar alerta e marcar campo como inválido
    const mostrarAlerta = (campo, mensagem) => {
      campo.classList.add('campo-invalido');
      alert(mensagem);
      formularioValido = false;
    };
  
    // Validação do nome
    if (nome.trim() === '') {
      mostrarAlerta(nomeInput, 'Digite o nome');
    }
  
    // Validação do e-mail
    if (email.trim() === '') {
      mostrarAlerta(emailInput, 'Digite o email');
    }
  
    // Validação da senha
    if (senha.trim() === '') {
      mostrarAlerta(senhaInput, 'Digite a senha');
    }
  
    // Validação da confirmação de senha
    if (conf !== senha) {
      mostrarAlerta(confPassInput, 'As senhas não coincidem');
    }
  
    // Validação da data de nascimento
    if (dob.trim() === '') {
      mostrarAlerta(dobInput, 'Digite a data de nascimento');
    }
  
    // Validação do gênero
    if (gender === '') {
      mostrarAlerta(genderSelect, 'Selecione o gênero');
    }
    
    if (formularioValido) {
      let usuarios = localStorage.getItem('usuarios');
  
      if (usuarios === null) {
        usuarios = [];
      } else {
        usuarios = JSON.parse(usuarios);
      }
  
      // Gerar um token aleatório como ID do usuário
      const token = Math.random().toString(36).substring(2);
  
      // Obter a data e hora atual do computador
      const dataHoraAtual = new Date().toLocaleString();
  
      const usuario = {
        id: token,
        nome: nome,
        email: email,
        senha: senha,
        dataHoraCadastro: dataHoraAtual
      };
  
      usuarios.push(usuario);
  
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
  
      alert('Cadastro realizado com sucesso!');
      document.querySelector('form').reset();
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
      limparValidacao();
    }
  }

  export function validarSenha() {
    const senhaInput = document.getElementById('password');
    const confPassInput = document.getElementById('confirm-password');
  
    const senha = senhaInput.value;
    const confirmaSenha = confPassInput.value;
    const confirmaSenhaInput = document.getElementById('confirm-password'); // Adicione esta linha para selecionar o campo de confirmação de senha
  
    if (senha !== confirmaSenha || confirmaSenha !== senha) {
      confirmaSenhaInput.style.backgroundColor = 'red';
    } else {
      confirmaSenhaInput.style.backgroundColor = ''; // Remove a cor de fundo vermelha quando as senhas coincidem
    }
  }
  