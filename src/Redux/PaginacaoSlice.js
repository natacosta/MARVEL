import { createSlice } from '@reduxjs/toolkit';

const PaginacaoSlice = createSlice({
    name: 'paginacao',

    initialState: {
        obj: []
    },
    reducers: {
        obter_Lista_De_HQ(state, action) {
            state.obj = action.payload;
        },  
         
    }
});

export const { obter_Lista_De_HQ , retornar_Lista_De_HQ_Pginadas } = PaginacaoSlice.actions;
export default PaginacaoSlice.reducer;




