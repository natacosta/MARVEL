import { ContainerDetalhes, ContainerBotaoVoltar, ImagemDetlahes } from '../Style/Detalhamento/DetalhamentoStyle'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';



export default function Detalhamento() {

    const [hq, setHq] = useState([])

    const hq_Filtrada_detalhes = useSelector(state => state.detalhes.obj)

    useEffect(() => {
        setHq([hq_Filtrada_detalhes])
    }, []);


    console.log(hq)

    return (
        <>
            <ContainerBotaoVoltar>
                <NavLink to="/">
                    <button>Voltar</button>
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

                </ContainerDetalhes>
            ))}


        </>
    )

}