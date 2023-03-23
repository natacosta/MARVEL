import {configureStore} from '@reduxjs/toolkit'
import PaginacaoSlice from './PaginacaoSlice'
import CardsSlice from './CardsSlice'

const store = configureStore({

    reducer:{

        paginacao: PaginacaoSlice,
        cards : CardsSlice
    }
})
export default store