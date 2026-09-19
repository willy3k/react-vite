type TaskProps = {
    description?: String;
};

const NewTask = ({description = "Nenhuma tarefa cadasstrada"}: TaskProps) => {
    return <p>Tarefa: {description}</p>
}

export default NewTask;
