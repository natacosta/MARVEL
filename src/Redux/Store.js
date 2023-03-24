import {configureStore} from '@reduxjs/toolkit'
import PaginacaoSlice from './PaginacaoSlice'
import CardsSlice from './CardsSlice'
import DetalhesSlice from './DetalhesSlice'
import CarrinhoSlice from './CarrinhoSlice'

const store = configureStore({

    reducer:{

        paginacao: PaginacaoSlice,
        cards : CardsSlice,
        detalhes:DetalhesSlice,
        carrinho:CarrinhoSlice
    }
})
export default store