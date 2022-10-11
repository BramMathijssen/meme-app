import { createSlice, configureStore } from '@reduxjs/toolkit';

export type votesState = Readonly<{
    upVotes: number;
    downVotes: number;
    result: number
}>

const initialState: votesState = {upVotes: 0, downVotes: 0, result: 0}

const votesSlice = createSlice({
    name: 'votes',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.upVotes++;
            state.result++;
        },
        decrement(state) {
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