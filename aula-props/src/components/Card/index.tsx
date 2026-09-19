import './card.css';

type CardProps = {
    children?: React.ReactNode
}

const Card = ({ children }: CardProps) => {
    return <div className="card">{children || <p>Nunhum conteúdo disponível</p>}</div>;
}

export default Card;