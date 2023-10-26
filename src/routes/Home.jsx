import Cabecalho from '../components/cabecalho/cabecalho'
import './css/Homes/Home.css'
import ContainerHome from '../components/componentesPesonalizados/homeContainer'
import Rodape from '../components/rodape/rodape'

export default function Home() {

  return (
    <>
    <div id="grid-container">
        <div id="grid-item2">
        <ContainerHome/>
        </div>
      </div>
    </>
  )
}