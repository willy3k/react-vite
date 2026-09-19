type CardProps = {
    titulo: string;
    description: string;
}

const Card = ({titulo, description}: CardProps) => {
    return (
        <div style={{border: "1px solid #ccc", padding:"10px", margin: "10px"}}>
            <h2>{titulo}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Card;