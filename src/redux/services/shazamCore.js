import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const shazamCoreAPI = createApi({
   reducerPath: "shazamCoreAPI",
   baseQuery: fetchBaseQuery({
      baseUrl: "https://shazam.p.rapidapi.com",
      prepareHeaders: (headers) => {
         headers.set('X-RapidAPI-Key', 'dbea243470msh4d5985740ff1426p18ca4ejsnb3333337d54d');
         return headers;
      }
   }),
   endpoints: (builder) => ({
      getTopCharts: builder.query({ query: () => "/charts/track" })
   })
});

export const {
   useGetTopChartsQuery
} = shazamCoreAPI;