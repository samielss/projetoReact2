import { useState } from "react";

function Eventos (){
    let [conta, setConta] = useState(0);
    const [nome, setNome] = useState();
    function enviaNome(e) {
        e.preventDefault();
        console.log(`Nome: ${nome} enviado com sucesso`)
    }
    return (
        <>
        <form action="">
            <p>O botão foi clicado {conta} vezes</p>
            <button onClick={() => setConta(conta ++)}>Click Here</button>
            <input type="text" 
            value={nome}
            onChange={(e) => setNome(e.target.value)}/>
            <button type="submit" 
            onClick={enviaNome}>
            Enviar
            </button>
            <p>O nome é: {nome}</p>
        </form>
        </>
    )
}
export default Eventos;