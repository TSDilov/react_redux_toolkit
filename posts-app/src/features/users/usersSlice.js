import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Tsvetelin Dilov' },
    { id: '1', name: 'John Atanasov' },
    { id: '2', name: 'Albert Einstein' }
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;