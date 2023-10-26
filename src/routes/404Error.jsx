import React from 'react'
import './css/404Error/404Error.css'
import Cabecalho from '../components/cabecalho/cabecalho'
import Rodape from '../components/rodape/rodape'

export default function Erro404() {
  return (
    <>
    <div className="cabecalho404">
    <Cabecalho/>
    </div>
    <center><div>
        <h1 id="Error404">Erro404 NÃO FOI POSSÍVEL ENCONTRAR SUA PÁGINA</h1>
    </div></center>
    <div className="rodape404">
    <Rodape/>
    </div>
    </>
  )
}

