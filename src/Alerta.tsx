import { constants } from "buffer";

const Alerta: React.FC = () => {

    const mostrarMensaje = ( )=> {
        alert('¡Hola! Soy un mensaje de alerta');
    }
    return(
        
        <button onClick={mostrarMensaje}>Mostrar alerta</button>

    )

}

export default Alerta;