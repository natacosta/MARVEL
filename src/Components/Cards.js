import { CardsContainer, HQS, ContainerPaginacao, ContainerDeBotoesCards } from '../Style/Cards/Cards';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { obter_Lista_De_HQ } from '../Redux/PaginacaoSlice'
import { envia_Dados_De_Detlahes } from '../Redux/DetalhesSlice'
import { envia_Dados_Para_Carrinho } from '../Redux/CarrinhoSlice'
import Loader from '../Components/Loader'
import Paginacao from './Paginacao';
import axios from 'axios'
import CryptoJS from "crypto-js";

export default function Cards() {

    const dispatch = useDispatch();

    const Todas_As_HQ_Paginadas = useSelector(state => state.cards.obj)


    const [fetch_HQ_Data, setFetch_HQ_Data] = useState([]);
    const [lista_De_HQ, setLista_De_HQ] = useState([]);
    const [loading, setLoading] = useState(true)
    const [itemFoiAdicionado, setItemFoiAdicionado] = useState(false)



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
                setFetch_HQ_Data(resposta.data.data.results);
            } catch (error) {
                console.log("Não foi possível obter a lista de HQs.", error);
            }
        }
        fetchHQ();
    }, []);

    useEffect(() => {
        function Gerar_Objeto_Produto() {

            const lista = []

            for (let index = 0; index < fetch_HQ_Data.length; index++) {

                const criadores = fetch_HQ_Data[index].creators.items.map(item => item.name);
                const imagens = fetch_HQ_Data[index].images?.[0]
                const precos = fetch_HQ_Data[index].prices.map(item => item.price)

                const obj = {
                    id: fetch_HQ_Data[index].id,
                    titulo: fetch_HQ_Data[index].title,
                    criador: criadores,
                    imagem: imagens?.path,
                    descricao: fetch_HQ_Data[index].description,
                    preco: precos
                }
                lista.push(obj)
                setLoading(false)
            }
            setLista_De_HQ(lista)
            dispatch(obter_Lista_De_HQ(lista))
        }
        Gerar_Objeto_Produto();

    }, [fetch_HQ_Data]);


    return (
        <>

            {loading ? <Loader></Loader> : <div></div>}


            <ContainerPaginacao>
                <Paginacao></Paginacao>
            </ContainerPaginacao>

            <CardsContainer id='revistas'>

                {Todas_As_HQ_Paginadas.map((item, index) => (

                    <HQS>
                        <img
                            key={item.id}
                            src={item.imagem ? item.imagem + '/portrait_uncanny.jpg' : 'https://via.placeholder.com/300x450.png?text=Imagem+de+espa%C3%A7o+reservado'}
                            alt={`Imagem de ${item.title}`}
                        />
                        <p>{item.titulo}</p>

                        <ContainerDeBotoesCards>
                            <NavLink to='detalhes'>
                                <button
                                
                                    id={index} 
                                    value={item.id}
                                    key={item.id}
                                    onClick={(event) => {
                                        const idClicado = event.target.value;
                                        const hqClicada = Todas_As_HQ_Paginadas.find(item => item.id === Number(idClicado));
                                        dispatch(envia_Dados_De_Detlahes(hqClicada))
                                    }}
                                >
                                    Detalhes
                                </button>
                            </NavLink>
                            <button
                            
                                id={item.id}
                                value={item.id}
                                key={item.id}
                                onClick={(event) => {
                                    const idClicado = event.target.value;
                                    const hqClicada = Todas_As_HQ_Paginadas.find(item => item.id === Number(idClicado));
                                    dispatch(envia_Dados_Para_Carrinho([hqClicada]))
                                }}
                            >
                                Adicionar
                            </button>
                        </ContainerDeBotoesCards>
                    </HQS>
                ))}
            </CardsContainer>
        </>

    )
}