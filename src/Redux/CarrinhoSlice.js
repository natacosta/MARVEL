import { createSlice } from '@reduxjs/toolkit';

const CarrinhoSlice = createSlice({
    name: 'carrinho',

    initialState: {
        obj: []
    },
    reducers: {
        
        envia_Dados_Para_Carrinho(state, action){

            state.obj = [...state.obj, ...action.payload];
        }
        
    }
});

export const { envia_Dados_Para_Carrinho } = CarrinhoSlice.actions;
export default CarrinhoSlice.reducer;
