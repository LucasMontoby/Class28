interface Saludo {
    nombre: string;
}

const Saludo: React.FC<Saludo> = ({nombre}) => {
    return <div>Hola, {nombre}!</div>;
}

export default Saludo;