import Cabecalho from '../components/cabecalho'
import './Monitoramento.css'
import ContainerHome from '../components/componentesPesonalizados/homeContainer'
import Rodape from '../components/rodape'
import mapa1 from '../img/mapa1.png'
import mapa2 from '../img/mapa2.png'

export default function Monitoramento() {

  return (
    <>
    <div className="container-monitor">
      <h1 id="monitoramento-titulo">Monitoramento de área:</h1>
      <div className='container-imagens'>
      <p id="pontos">Pontos de atenção de chuva forte:</p>
      <img className="image-monitor" id="img-mapa1"src={mapa1} alt="mapa1"/> 
    </div>
    </div>
    </>
  )
}