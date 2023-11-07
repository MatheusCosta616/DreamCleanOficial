import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {AiFillEdit as Editar} from "react-icons/ai"
import {AiFillDelete as Excluir} from "react-icons/ai"
import '../routes/css/Administrador/Administrador.scss'
import { format } from "date-fns";

export default function Adm() {
  document.title = "Lista de Usuários";

  const [ListaUsuariosLocal, setListaUsuariosLocal] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:5000/usuarios") 
    .then((response)=> response.json()) 
    .then((response)=> setListaUsuariosLocal(response)) 
    .catch(error =>console.log(error))
  }, []);

  function formatarData(data) {
    const dataNasc = new Date(data);
    const dia = dataNasc.getDate().toString().padStart(2, '0');
    const mes = (dataNasc.getMonth() + 1).toString().padStart(2, '0');
    const ano = dataNasc.getFullYear();
    return `${dia}-${mes}-${ano}`;
  }
  

  return (
    <div className="adm">
      <h1>Lista de Usuários</h1>

      <div>
        <table className="tblEstilo">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>EMAIL</th>
              <th>DATA DE NASCIMENTO</th>
              <th>EXCLUIR</th>
            </tr>
          </thead>
          <tbody>
            {ListaUsuariosLocal.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.email}</td>
                <td>{formatarData(item.dataNasc)}</td>
                <td>
                  <Link to={`/excluir/usuarios/${item.id}`}> <Excluir/></Link>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5}>USUÁRIOS CADASTRADOS - QTD = {ListaUsuariosLocal.length}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
