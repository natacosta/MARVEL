import { createSlice } from '@reduxjs/toolkit';

const CardsSlice = createSlice({
    name: 'cards',

    initialState: {
        obj: []
    },
    reducers: {
        
        envia_Lista_De_HQ_Paginadas(state, action){

            state.obj = action.payload;

        }
        
    }
});

export const { envia_Lista_De_HQ_Paginadas } = CardsSlice.actions;
export default CardsSlice.reducer;
