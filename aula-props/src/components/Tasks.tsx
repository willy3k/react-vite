import NewTask from "./NewTask"

const Tasks = () => {
    return (
        <div>
            <h2>Lista de Tarefas</h2>
            <NewTask description="Estudar React Nos Finais de semana"></NewTask>
            <NewTask description="Fazer bolo de chocolate "></NewTask>
        </div>
    )
}

export default Tasks;