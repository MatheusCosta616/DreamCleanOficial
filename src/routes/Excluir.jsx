import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react'


export default function excluirUsuarios() {

    //Recuperando o parâmetro ID com o HOOK useParams();

    const {id} = useParams();
    const navigate = useNavigate()

    document.title = "EXCLUIR USUÁRIOS " + id;

    useEffect(() => {
      fetch(`http://localhost:5000/usuarios/${id}`)
        .then((response)=> response.json())
        .catch(error => console.log(error))
    }, [id])

    const handleSubmit = (e) =>{
      e.preventDefault()

      fetch(`http://localhost:5000/usuarios/${id}`, {
        method: "DELETE", 
        headers:{
          "Content-Type": "application/json"
        },
      })
      .then((response) => {
        console.log("STATUS DA REQUISIÇÃO: " + response.status);
        if (response.status === 200) {
          alert("Usuário excluído com sucesso");
          // Redirect
          navigate("/produtos");
        } else {
          alert("Erro ao excluir o usuário");
        }
      })
      .catch(error => console.log(error))
    }
    
    const handleSubmit2 = (e) => {
      e.preventDefault()

      alert("usuário não excluído")
      navigate("/home")
    }

  return (
    <div className='container'>
      <h1>Excluir Produto</h1>
      <h2>Deseja excluir o usuário?</h2>
      <button className='sim' onClick={handleSubmit}>Sim</button>
      <button className='nao' onClick={handleSubmit2}>Não</button>
    </div>

  )
}