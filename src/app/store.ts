import { configureStore } from '@reduxjs/toolkit'
import { disneyApi } from '../api/disney.api'

export const store = configureStore({
  reducer: {
    [disneyApi.reducerPath]: disneyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(disneyApi.middleware),
})
