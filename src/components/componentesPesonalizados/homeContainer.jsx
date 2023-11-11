import imgLogo from '../../img/logo.png'
import './homeContainer.scss'

export default function ContainerHome(){
    return (
        <div className="containerMain">
             <img src={imgLogo} alt="logo"/>
            <h1 id="TituloHome">Venha conhecer a Dream Clean</h1>
            <p id="SubtituloHome">O futuro te espera!</p>
        </div>
    )
}