import {configureStore} from '@reduxjs/toolkit'
import PaginacaoSlice from './PaginacaoSlice'
import CardsSlice from './CardsSlice'
import DetalhesSlice from './DetalhesSlice'

const store = configureStore({

    reducer:{

        paginacao: PaginacaoSlice,
        cards : CardsSlice,
        detalhes:DetalhesSlice
    }
})
export default store