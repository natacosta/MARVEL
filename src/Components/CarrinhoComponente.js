import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { ContainerCarrinho, ImagemCarrinho, ConatinerDetalhesParaMobileCarrinho, ContainerBotaoVoltar, ContainerCarrinhoVazio } from '../Style/Carrinho/CarrinhoStyle'
import { NavLink } from 'react-router-dom';

export default function CarrinhoComponente() {

    const [hq, setHq] = useState([])
    const [existemProdutos, setExistemProdutos] = useState(false)


    const recebe_hq = useSelector(state => state.carrinho.obj);

    useEffect(() => {
        if (recebe_hq.length > 0) {
            setHq(recebe_hq);
            setExistemProdutos(true);
        }
    }, [recebe_hq]);

    return (
        <>

            <ContainerBotaoVoltar>
                <NavLink to="/">
                    <button>Voltar para os produtos</button>
                </NavLink>
            </ContainerBotaoVoltar>

            {existemProdutos ? (
                hq.map(item => (
                    <ContainerCarrinho key={item.id}>

                        <ContainerCarrinho key={item.id}>
                            <ImagemCarrinho
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

                            <ConatinerDetalhesParaMobileCarrinho>
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
                            </ConatinerDetalhesParaMobileCarrinho>

                        </ContainerCarrinho>
                    </ContainerCarrinho>
                ))
            ) : (

                <ContainerCarrinhoVazio>
                    <p>o carrinho está vazio.</p>
                </ContainerCarrinhoVazio>
            )}

        </>
    )
}