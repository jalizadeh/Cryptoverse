import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const headers = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'ffc1a643ebmshd7bf7b2e020d736p103d84jsn8442a50d755a'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers })

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos : builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
})


// define a hook -> 'use' + 'GetCryptos' + 'Query'
export const {
    useGetCryptosQuery
} = cryptoApi

// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       tiers: '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': 'ffc1a643ebmshd7bf7b2e020d736p103d84jsn8442a50d755a'
//     }
//   };

