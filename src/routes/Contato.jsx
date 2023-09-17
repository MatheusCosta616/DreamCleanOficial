import './Contato.css'
import React from 'react';

export default function Contato(){
    return (
        <div className="container-contato">
          <form id="contato-form">
            <div className="contato">
              <h1 id="titulo-contato">Contato</h1>
              <label id="nome-contato" htmlFor="nome">Nome:</label><br/>
              <input type="text" id="nome" name="nome" required /><br/>
              <label id="email-contato" htmlFor="email">E-mail:</label><br/>
              <input type="email" id="email" name="email" required /><br/>
              <label id="msn-contato" htmlFor="mensagem">Mensagem:</label><br/>
              <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
              <br />
              <input id="btnEnviar" type="submit" value="Enviar" />
            </div>
          </form>
        </div>
      );
    }
    