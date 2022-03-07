import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const headers = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'ffc1a643ebmshd7bf7b2e020d736p103d84jsn8442a50d755a'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers })

export const cryptoNewsApi = createApi({
    reducerPath : 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews : builder.query({
            query: ({newsCategory, count}) => createRequest(
                `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Row&freshness=Day&count=${count}`
            )
        })
    })
})


// define a hook -> 'use' + 'GetCryptoNews' + 'Query'
export const {
    useGetCryptoNewsQuery
} = cryptoNewsApi