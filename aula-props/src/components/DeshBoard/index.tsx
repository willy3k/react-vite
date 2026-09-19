import './DashBoard.css';


type DeshBoardProps = {
    username : string | number;
}

const DashBoard = ({username} : DeshBoardProps) => {
    return (
        <div>
            {username ? (
                <h1>Bem-Vindo {username}</h1>
            ): (
                <h2 className="not-logged">Você precisa fazer login.</h2>
            )}
        </div>
    )
}

export default DashBoard;