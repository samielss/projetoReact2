import { useState } from "react"
import "./InputUseState.css"
function InputUseState(){
    let [usuario,setUsuario] = useState()
    let [senha,setSenha] = useState()
    const [vLogin, setVlogin] = useState();
    function verifyUser(e){
        e.preventDefault();
        if(usuario.toLowerCase === 'samuel' && senha === "123"){
            setVlogin(true);
        }else{
            setVlogin(false);
        }
    }
    return(
        <>
            <main>
                <form action="">
                    <label htmlFor="">Login</label>
                    <input type="text" value={usuario} onChange={(e)=> setUsuario(e.target.value)}/>
                    <label htmlFor="">Senha</label>
                    <input type="password" value={senha} onChange={(e)=> setSenha(e.target.value)}/>
                    <button onClick={verifyUser}>Logar</button>
                    {
                        vLogin === true
                            ? <p>Logado com sucesso</p>
                            :""
                    }
                    {
                        vLogin === false
                            ?<p>Login inválido!</p>
                            : ""
                    }
                </form>
            </main>
        </>
    )
}
export default InputUseState