import { createSlice } from '@reduxjs/toolkit';

const DetalhesSlice = createSlice({
    name: 'detalhes',

    initialState: {
        obj: []
    },
    reducers: {
        
        envia_Dados_De_Detlahes(state, action){

            state.obj = action.payload;
        }
        
    }
});

export const { envia_Dados_De_Detlahes } = DetalhesSlice.actions;
export default DetalhesSlice.reducer;
