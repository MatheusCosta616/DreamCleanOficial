import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {AiFillEdit as Editar} from "react-icons/ai"
import {AiFillDelete as Excluir} from "react-icons/ai"
import ModalAction from "../components/ModalAction/ModalAction";

export default function Adm() {
  document.title = "Lista de Usuários";

  const [ListaUsuariosLocal, setListaUsuariosLocal] = useState([{}]);
const recarga = ()=>{
  fetch("http://localhost:5000/usuarios")
  .then((response)=> response.json())
  .then((response)=> setListaUsuariosLocal(response))
  .catch(error =>console.log(error))

}
  

  
  useEffect(() => {
    fetch("http://localhost:5000/usuarios") 
    .then((response)=> response.json()) 
    .then((response)=> setListaUsuariosLocal(response)) 
    .catch(error =>console.log(error))
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1>Lista de Produtos</h1>

      <ModalAction open={open} setClose={setOpen} reacarga={recarga}/>
    {/ Muda esse ngc de open modal pra o que ele for ser usado/}
      <button onClick={()=> setOpen(true)}>OPEN-MODAL</button>

      <div>
        <table className="tblEstilo">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>PREÇO</th>
              <th>EDITAR / EXCLUIR</th>
            </tr>
          </thead>
          <tbody>
            {setListaUsuariosLocal.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.desc}</td>
                <td>{item.preco}</td>
                <td>
                  <Link to={`/editar/produtos/${item.id}`}><Editar/> </Link> |
                  <Link to={`/excluir/produtos/${item.id}`}> <Excluir/></Link>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5}>PRODUTOS INFORMÁTICOS - QTD = {listaProdutosLocal.length}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
