import { createSlice } from "@reduxjs/toolkit";

// How to RTK + TS
// https://www.youtube.com/watch?v=SM3uwYgGxNE&t=392s
// https://github.com/gopinav/Redux-Toolkit-Tutorials/blob/master/react-rtk-ts-demo/src/features/cake/cakeSlice.ts 
export type votesState = Readonly<{
    upVotes: number;
    downVotes: number;
    result: number;
    itemsList: Array<{id: string, result: number}>;
}>

const initialState: votesState = {upVotes: 0, downVotes: 0, result: 0, itemsList: []}