import './Vista.css'
import { useState } from "react"


const Vista = () => {
  const [modoOscuro, setModoOscuro] = useState(false);

  const cambiarModo = () => {
    setModoOscuro(!modoOscuro);
  }

  const estilo = modoOscuro ? "oscuro" : "claro";

  return (
    <div className={estilo}>
      <button onClick={ cambiarModo }> {modoOscuro ? "Claro" : "Oscuro" } </button>
      <h2>Cambiar Vista</h2>
      <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita fugit, non culpa repudiandae iste enim atque tempora nam id quam dicta harum repellendus, cumque optio suscipit, ipsam consequatur impedit nostrum eligendi. Placeat quia, nihil cumque aut ipsum aperiam dolorum soluta.</p>
    </div>
  )
}

export default Vista
