import React from 'react'
import './css/Monitoramento/Monitoramento.css'


export default function Monitoramento() {
const handleSubimit = (e) => { 
  const myHeaders = new Headers();
  myHeaders.append("fiware-service", "smart");
  myHeaders.append("fiware-servicepath", "/");
  myHeaders.append("accept", "application/json");
  
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch(`http://46.17.108.113:1026/v2/entities/urn:ngsi-ld:DreamClean:008/attrs/distance`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}

  return (
    <>
    <div className="container-monitor">
      <h1 id="monitoramento-titulo">Monitoramento de área:</h1>
      <div className='container-imagens'>
      <form action="subimit" onSubmit={handleSubimit}>
        <h1>Bueiro: </h1>
        <input id="monitorar" type="submit" value="Monitorar" />
      </form>
    </div>
    </div>
    </>
  )
}