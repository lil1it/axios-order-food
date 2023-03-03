import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstace } from '../../lib/axiosInstace'

export const getBasket = createAsyncThunk('basket/getBasket', async () => {
    const { data } = await axiosInstace.get('/basket')
    return data.data.items
})
