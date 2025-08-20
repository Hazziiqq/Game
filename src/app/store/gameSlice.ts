import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    noteSolved: false,
    deskSolved: false,
    bookShelfSolved: false,
}

export const gameSlice = createSlice ({
    name : 'game',
    initialState,
    reducers: {
        solveNote:(state) => {
            state.noteSolved = true
        },
        solveDesk:(state) => {
            state.deskSolved = true
        },
        solveBookShelf: (state) => {
            state.bookShelfSolved = true
        },
        resetGame: (state) => {
            state.noteSolved = false;
            state.deskSolved = false;
            state.bookShelfSolved = false;
        },
    }
})

export const {solveNote, solveDesk, solveBookShelf,resetGame} = gameSlice.actions
export default gameSlice.reducer