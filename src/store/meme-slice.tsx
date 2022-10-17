import { createSlice } from "@reduxjs/toolkit";

// How to RTK + TS
// https://www.youtube.com/watch?v=SM3uwYgGxNE&t=392s
// https://github.com/gopinav/Redux-Toolkit-Tutorials/blob/master/react-rtk-ts-demo/src/features/cake/cakeSlice.ts 
export type votesState = Readonly<{
    memesList: Array<{id: string, upvotes: number, }>;
}>

const initialState: votesState = {memesList: []}

const memeSlice = createSlice({
    name: 'meme',
    initialState,
    reducers:
    {}
})

export const memeActions = memeSlice.actions
export default memeSlice