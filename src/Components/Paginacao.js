import { useSelector , useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
// import{retornar_Lista_De_HQ_Pginadas} from '../Redux/PaginacaoSlice'
import {envia_Lista_De_HQ_Paginadas} from '../Redux/CardsSlice'

export default function Paginacao() {

    const dispatch = useDispatch();

    const [lista_De_HQ, setLista_De_HQ] = useState([]);
    const [itensPorPagina, setItensPorPagina] = useState(6);
    const [paginaAtual, setPaginaAtual] = useState(0);

    const paginas = Math.ceil(lista_De_HQ.length / itensPorPagina)
    const inicio = paginaAtual * itensPorPagina
    const fim = inicio + itensPorPagina
    const tota_De_Pagignas = lista_De_HQ.slice(inicio, fim)

    const retorno_De_Todas_As_QH = useSelector(state => state.paginacao.obj);



    useEffect(() => {
        setLista_De_HQ(retorno_De_Todas_As_QH);
    }, [retorno_De_Todas_As_QH , paginaAtual]);

    useEffect(() => {

        dispatch(envia_Lista_De_HQ_Paginadas(tota_De_Pagignas));

    }, [paginaAtual , lista_De_HQ]);

    

    return (
        <>
            {
                Array.from(Array(paginas), (item, index) => {

                    return <button value={index} onClick={(event) => { setPaginaAtual(Number(event.target.value)) }} key={index + 1}>{index + 1}</button>

                })
            } 
        </>
    )
}