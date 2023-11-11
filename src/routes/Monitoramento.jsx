import React, { useEffect, useState } from 'react';
import './css/Monitoramento/Monitoramento.css';
import mapa1 from '../img/mapa1.png';

export default function Monitoramento() {
  const [distanceData, setDistanceData] = useState(null);
  const [weightData, setWeightData] = useState(null);

  const fetchData = async () => {
    try {
      // Fetch para a distância
      const distanceResponse = await fetch(
        'http://46.17.108.113:1026/v2/entities/urn:ngsi-ld:DreamClean:008/attrs/distance',
        {
          method: 'GET',
          headers: {
            'fiware-service': 'smart',
            'fiware-servicepath': '/',
            accept: 'application/json',
          },
          redirect: 'follow',
        }
      );

      if (!distanceResponse.ok) {
        throw new Error(`Erro na requisição de distância: ${distanceResponse.status}`);
      }

      const distanceResult = await distanceResponse.json();
      setDistanceData(distanceResult.value);

      // Fetch para o peso
      const weightResponse = await fetch(
        'http://46.17.108.113:1026/v2/entities/urn:ngsi-ld:DreamClean:008/attrs/weight',
        {
          method: 'GET',
          headers: {
            'fiware-service': 'smart',
            'fiware-servicepath': '/',
            accept: 'application/json',
          },
          redirect: 'follow',
        }
      );

      if (!weightResponse.ok) {
        throw new Error(`Erro na requisição de peso: ${weightResponse.status}`);
      }

      const weightResult = await weightResponse.json();
      setWeightData(weightResult.value);

      console.log('Dados da API (distância):', distanceResult);
      console.log('Dados da API (peso):', weightResult);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
    variacao();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container-monitor">
        <h1 id="monitoramento-titulo">Monitoramento de Bueiro:</h1>
        <div className='container-imagens'>
          <form onSubmit={handleSubmit}>
            <input id="btnMonitorar" type="submit" value="Monitorar" />
          </form>
          {distanceData && (
            <p id="distanciaRetorno">
              Distância: {distanceData} Cm {distanceData.unidade}
            </p>
          )}
          <p id="pesoRetorno">Peso: {weightData && <span>{weightData}</span>} KG</p>
          {/* <p id="pontos">Pontos de atenção de chuva forte:</p>
          <img className="image-monitor" id="img-mapa1" src={mapa1} alt="mapa1" /> */}
        </div>
      </div>
    </>
  );
}
