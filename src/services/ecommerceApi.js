import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { base_url } from "../Firebase/database"

export const ecommerceApi = createApi({
    reducerPath: "ecommerceApi",
    baseQuery: fetchBaseQuery({
        baseUrl: base_url,
    }),
    endpoints: (builder) =>({
        getCategories: builder.query({
            query: () => "categories.json"
        }),
        getProducts: builder.query({
            query: () => "products.json"
        }),
        getImage:builder.query({
            query: () => "image.json"
        }),
        putImage: builder.mutation({
            query: (image) => ({
                url: "image.json",
                method: "PUT",
                body: image,
            }),
        })
    })
})

export const { useGetCategoriesQuery, useGetProductsQuery, useGetImageQuery, usePutImageMutation } = ecommerceApi