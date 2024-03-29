import { createSlice, configureStore } from '@reduxjs/toolkit';

export type votesState = Readonly<{
    upVotes: number;
    downVotes: number;
    result: number;
    itemsList: Array<{id: string, result: number}>;
}>

const initialState: votesState = {upVotes: 0, downVotes: 0, result: 0, itemsList: []}

const votesSlice = createSlice({
    name: 'votes',
    initialState: initialState,
    reducers: {
        upVote(state, action) {
            state.upVotes++;
            state.result++;
            const obj = {id: action.payload, result: state.result}
            state.itemsList.push(obj)
        },
        downVote(state) {
            state.downVotes++
            state.result--;
        }
    }
})

const store = configureStore({
    reducer: votesSlice.reducer
})

export const voteActions = votesSlice.actions

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;