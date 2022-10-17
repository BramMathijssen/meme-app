import { configureStore } from '@reduxjs/toolkit';

import memeSlice from './meme-slice'

const store = configureStore({
    reducer: { memes: memeSlice.reducer}
})

export default store;