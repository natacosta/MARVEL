import { CardsContainer, Produto } from '../Style/Cards/Cards';
import axios from 'axios'
import CryptoJS from "crypto-js";
import { useEffect, useState } from 'react';


export default function Cards() {

    const [dados, setDados] = useState([]);
    const [produtos, setProdutos] = useState([]);

    const Url = "http://gateway.marvel.com/v1/public/comics?";
    const chavePrivada = "a6a2f0343d2ca99dff11e3be77ae0f6024938f9f";
    const chavePublica = "b78f45e960f0bcd47b4363a541df7457";

    useEffect(() => {
        async function fetchHQ() {

            const timestamp = Number(new Date());
            const hashString = timestamp + chavePrivada + chavePublica;
            const hash = CryptoJS.MD5(hashString).toString();

            try {
                const resposta = await axios.get(`${Url}ts=${timestamp}&apikey=${chavePublica}&hash=${hash}`);
                setDados(resposta.data.data.results);
            } catch (error) {
                console.log("Não foi possível obter a lista de HQs.", error);
            }
        }

        fetchHQ();
    }, []);

    useEffect(() => {
        function Gerar_Objeto_Produto() {

            const listaDeProdutos = []

            for (let index = 0; index < dados.length; index++) {

                const criadores = dados[index].creators.items.map(item => item.name);
                const imagens = dados[index].images?.[0]
                const precos = dados[index].prices.map(item => item.price)

                const obj = {
                    id: dados[index].id,
                    titulo: dados[index].title,
                    criador: criadores,
                    imagem: imagens?.path,
                    descricao: dados[index].description,
                    preco: precos
                }
                listaDeProdutos.push(obj)
            }
            setProdutos(listaDeProdutos)

        }
        Gerar_Objeto_Produto();
    }, [dados]);


    return (
        <>

            <CardsContainer>
                <Produto>

                    {produtos.map(item => (
                        <img
                            src={item.imagem ?  item.imagem + '/portrait_uncanny.jpg' : 'https://via.placeholder.com/300x450.png?text=Imagem+de+espa%C3%A7o+reservado'}
                        />
                    ))}
                </Produto>
            </CardsContainer>

        </>
    )
}