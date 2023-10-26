import Cabecalho from "../components/cabecalho/cabecalho";
import Rodape from "../components/rodape/rodape";
import logoImage from '../img/logo.png'
import './css/QmSomos/QmSomos.css'
import Alagamento from '../img/alagamento.png'
import Alagamento2 from '../img/alagamento2.jpg'
import Alagamento3 from '../img/alagamento3.jpg'


export default function QuemSomos(){
    return(
        <>
        <div className="containerGrid">
            <div className="containerQmSomos">
                <h2>Quem somos?</h2>
                <p className="txtPadr">Somos a empresa <txt className="dC">Dream Clean</txt>, nosso foco é manter a cidade mais limpa
                fornecendo sistemas de bueiros inteligentes com o foco de diminuir 
                    as enchentes nas grandes metropoles, tornando as cidades mais limpas e fornecendo uma vida
                    melhor e mais saudável para todos.</p>
                    <img src={logoImage} alt="logo"/> 
            </div>
            <div className="maisQmSomos">
                <h2 className="umProblema">Um problema pouco visto:</h2>
                <p className="txtPadr2">A Dream Clean, inspirada pela 
                apresentação da IBM sobre cidades inteligentes, concentra-se 
                em desenvolvimento sustentável e monitoramento de poluição. Eles 
                destacam um problema frequentemente negligenciado: o descarte 
                inadequado de lixo nas ruas, que afeta o meio ambiente e entope 
                as redes de drenagem. A Dream Clean busca soluções criativas para 
                este desafio vital nas cidades inteligentes.</p>
            </div>
            <div className="divisaoInfo">
                    <p className="txtPadr3">
                        A seguir, observe o resultado deste problema:
                    </p>
            </div>
            
            <img id="alagamentoCidade" src={Alagamento} alt="Alagamento em metropole" />
            <img id="alagamento2" src={Alagamento2} alt="Alagamento em sp" />
            <img id="alagamento3" src={Alagamento3} alt="Alagamento em sp" />

            <div className="continuacao">
                <p className="txtPadr4">O descarte inadequado de lixo nas ruas gera graves problemas, 
                como poluição das galerias pluviais, enchentes, danos ambientais em rios e praias, 
                e aumento na proliferação de insetos transmissores de doenças. Embora haja falta de 
                dados precisos, a frequente necessidade de limpeza das tubulações e a presença de 
                materiais não naturais indicam uma preocupação séria. A conscientização e a mudança 
                de hábitos de descarte são essenciais para solucionar este problema crescente.</p>
            </div>
            <div className="continuacao2">
                <h2 className="umProblema">Como pretendemos solucionar esse problema?</h2>
                <p className="txtPadr2">
                Apresentamos uma solução inovadora para a gestão eficiente de resíduos urbanos: 
                nosso dispositivo de coleta inteligente para galerias pluviais. Este sistema de 
                fácil instalação monitora, coleta e pesa o lixo que escorre para as galerias, 
                fornecendo alertas precisos para a manutenção. Além de contribuir para a sustentabilidade, 
                nosso aplicativo sincronizado fornece dados valiosos sobre os padrões de acumulação de lixo, 
                permitindo a tomada de decisões informadas para otimizar o gerenciamento de resíduos urbanos.
                </p>
            </div>
        </div>
        </>
    )
}