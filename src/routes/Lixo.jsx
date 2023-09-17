import './Lixo.css'
import bueiro from '../img/bueirolixo.jpg'

export default function Lixo() {

    return(
        <>
        <div className="lixoPag">
            <div className="containerLixo">

                <h1 className="dDiv">Como o lixo é descartado:</h1>

                <p className="txtPadr">Através de nossos bueiros inteligentes, dos quais possuem o mecanismo de filtração de água,
                    conseguimos monitorar as regiões que possuem mais lixo acumulado, com isso nós temos acesso a estas áreas
                    podendo coletar o lixo com nossos caminhões de coleta, fazendo com que as ruas mantenham seu fluxo de escoamento
                    de água, impedindo que futuras enchentes ocorram nas cidades.
                </p>
            </div>

            <div className="fundoImg">
            <img className="bueiroImg" src={bueiro}/></div>
        </div>
        </>
    )
}