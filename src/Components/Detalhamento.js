import { ContainerDetalhes, ContainerBotaoVoltar, ImagemDetlahes, ConatinerDetalhesParaMobile } from '../Style/Detalhamento/DetalhamentoStyle'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {envia_Dados_Para_Carrinho} from '../Redux/CarrinhoSlice'
import Loader from '../Components/Loader'


export default function Detalhamento() {

    const dispatch = useDispatch();

    const [hq, setHq] = useState([])
    const [loading, setLoading] = useState(false)

    const hq_Filtrada_detalhes = useSelector(state => state.detalhes.obj)

    useEffect(() => {
        setHq([hq_Filtrada_detalhes])
        setLoading(false)
    }, []);

    return (
        <>
            {loading ? <Loader></Loader>: <div></div>}
             
            <ContainerBotaoVoltar>
                <NavLink to="/">
                    <button>Voltar</button>
                </NavLink>
                <NavLink to='/carrinho'>
                    <button onClick={()=>{dispatch(envia_Dados_Para_Carrinho(hq))}}>Adicionar ao carrinho</button>
                </NavLink>
            </ContainerBotaoVoltar>

            {hq.map(item => (
                <ContainerDetalhes key={item.id}>
                    <ImagemDetlahes
                        src={item.imagem ? item.imagem + '/portrait_uncanny.jpg' : 'https://via.placeholder.com/300x450.png?text=Imagem+de+espa%C3%A7o+reservado'}
                        alt={`Imagem de ${item.title}`}
                    />

                    <table>
                        <caption>Tabela informações</caption>
                        <thead>
                            <tr>
                                <th >Título</th>
                                <th >Criador</th>
                                <th >Descrição</th>
                                <th >Preço</th>
                                <th >ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{item.titulo}</td>
                                <td>{item.criador}</td>
                                <td>{item.descricao}</td>
                                <td>{item.preco}</td>
                                <td>{item.id}</td>
                            </tr>
                        </tbody>
                    </table>
                    <ConatinerDetalhesParaMobile>
                        <article>
                            <h3 >Título:</h3>
                            <span>{item.titulo}</span>
                            <h3 >Criador:</h3>
                            <span>{item.criador}</span>
                            <h3 >Descrição:</h3>
                            <span>{item.descricao}</span>
                            <h3 >Preço:</h3>
                            <span>{item.preco}</span>
                            <h3>ID</h3>
                            <span>{item.id}</span>
                        </article>
                    </ConatinerDetalhesParaMobile>

                </ContainerDetalhes>
            ))}
        </>
    )

}