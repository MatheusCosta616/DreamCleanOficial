import Cabecalho from '../components/cabecalho/cabecalho'
import './css/Projectarduino/Projectarduino.css'
import ContainerHome from '../components/componentesPesonalizados/homeContainer'
import Rodape from '../components/rodape/rodape'
import projeto from '../img/projeto.png'





export default function Projectarduino(){
    return(
        <>
        <div className="projetoPag">
        <div className="container-projeto">
            <h1>O projeto:</h1>
            <p>Será um dispositivo que pode ser acoplado de forma simples em 
                qualquer entrada que leva até as galerias pluviais, que usando uma rede irá 
                coletar o lixo que escorre até elas e mede o peso, assim avisando o usuário 
                quando será necessário esvaziar a “lixeira”, já que prezamos pela 
                sustentabilidade a rede é reutilizável além de que caso fique danificada
                 pode facilmente ser costurada, e em último caso facilmente substituível,
                  prezando pela viabilidade e facilidade do usuário. Além de com um aplicativo 
                  que irá ficar sincronizado com o endereço e o produto, pode enviar todos os 
                  dados coletados como em quais períodos certo lugar recebe mais lixo e quais 
                  entradas costumam encher com mais facilidade assim podendo propor futuras 
                  soluções mais avançadas.</p>
                 

        </div>

        <img className="image-projeto" id="img-projeto" src={projeto} alt="projetoImagem"/> 
        </div>
        </>
    )
}