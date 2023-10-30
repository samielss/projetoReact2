import { useState } from "react";
import axios from 'axios';
import './consumindoApi.css'
function ConsumindoAPI(){
    const [buscaCep, setBuscaCep] = useState();
    const [data, setData] = useState([])
    const [erro, setErro] = useState()
    const api = `https://viacep.com.br/ws/${buscaCep}/json/ `
    function buscaAPI(e){
        e.preventDefault();
        axios.get(api)
        .then(response => {
            console.log(response.data);
            setErro(``);
            setData(response.data);
        }).catch(() => {
            setData([]);
            setErro(`Insira um CEP por favor!`);
        })
        console.log(data.bairro)
    }
    return(
        <>
        <header>
            <h1>Seu CEP!!</h1>
        </header>
        <main>
            <form action="">
                <label htmlFor="">Pesquisar usuário:</label>
                <input type="text" value={buscaCep} onChange={(e) => setBuscaCep(e.target.value)}/>
                <button onClick={buscaAPI}>Pesquisar</button>
                <p>Bairro: {data.bairro} {erro}</p>
                <p>CEP: {data.cep}</p>
                <p>Complemento: {data.complemento}</p>
                <p>DDD:{data.ddd}</p>
                <p>GIA:{data.gia}</p>
                <p>IBGE: {data.ibge}</p>
                <p>Localidade: {data.localidade}</p>
                <p>Logadouro: {data.logradouro}</p>
                <p>SIAFI: {data.siafi}</p>           
            </form>
        </main>
        </>
    )
}
export default  ConsumindoAPI;