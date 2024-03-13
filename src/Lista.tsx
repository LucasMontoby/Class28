
interface Lista{
    items: string[];
}

const Lista: React.FC<Lista> =  ({items}) => {
    return(
        <ul>
            {items.map((item, index) =>(

            <li key={index}>{item}</li>

            ))}
        </ul>
    )
}

export default Lista;