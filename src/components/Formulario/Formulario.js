import { useState } from "react";

function Formulario () {
    let [usuario , setUsuario] = useState()
    let [senha , setSenha] = useState()
    function verifyUser(e){
        e.preventDefault();
        if (usuario === "SamuqinhaGameplays" && senha === 'samuelzinho12345')
        {console.log("Ta certo")}
        else {
            console.log('ta errado')
        }
}
    return (
        <>
            <form action="">
            <p>digite o seu usúario:</p>
            <input type="email" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
            <p>Digite sua senha:</p>
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            <button onClick={verifyUser}> Logar</button>
            </form>
        </>
    )
}
export default Formulario;