import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'



export const productsApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com/"}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products",
        }),
    }),
})



export const { useGetAllProductsQuery } = productsApi
