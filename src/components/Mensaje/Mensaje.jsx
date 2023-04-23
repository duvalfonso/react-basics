import { useState } from "react"
import "./Mensaje.css"

const Mensaje = () => {
  const [mensaje, setMensaje] = useState(false);

  const manejadorMensaje = () => {
    setMensaje(!mensaje);
  }

  return (
    <div className="contenedor-mensaje">
      <button onClick={manejadorMensaje}> {mensaje ? "Ocultar" : "Mostrar"} </button>
      {mensaje && <h2>Este es el mensaje oculto</h2>}
    </div>
  )
}

export default Mensaje
