import { useState, type ChangeEvent, type FormEvent } from "react";

const Formulario = () => {

    //   Valor = estado do input, set valor = função que altera o estado do input
    const [valor, setValor] = useState<string>("");
    const [resultado, setResultado] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValor(e.target.value);
    }

    const handleCick = () => {
        setResultado(valor)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResultado(valor);
    }


    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={valor}
                    placeholder="Digite algo"
                    onChange={handleChange} />
                <button onClick={handleCick}>Enviar formulario</button>

                {resultado && <p>Você digitou: {resultado}</p>}
            </form>
        </>
    )
}

export default Formulario;