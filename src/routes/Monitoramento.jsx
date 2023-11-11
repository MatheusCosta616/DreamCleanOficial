import React, { useEffect } from 'react';
import './css/Monitoramento/Monitoramento.css';
import mapa1 from '../img/mapa1.png';

export default function Monitoramento() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        var myHeaders = new Headers();
        myHeaders.append("fiware-service", "smart");
        myHeaders.append("fiware-servicepath", "/");
        myHeaders.append("accept", "application/json");

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        const response = await fetch(`http://46.17.108.113:1026/v2/entities/urn:ngsi-ld:DreamClean:008/attrs/distance`, requestOptions);

        if (!response.ok) {
          throw new Error(`Erro: ${response.status}`);
        }
        const result = await response.json();
        console.log('Dados da API:', result);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container-monitor">
        <h1 id="monitoramento-titulo">Monitoramento de área:</h1>
        <div className='container-imagens'>
          <p id="pontos">Pontos de atenção de chuva forte:</p>
          <img className="image-monitor" id="img-mapa1" src={mapa1} alt="mapa1" />
        </div>
      </div>
    </>
  );
}
