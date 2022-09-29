/* eslint-disable no-unused-vars */
import * as React from "react";
import { Admin, Resource, EditGuesser, ListGuesser, fetchUtils } from "react-admin";
import simpleRestProvider, { restClient } from "ra-data-simple-rest";
import { UserList } from "../component/Admin/users";
import { PostCreate, PostEdit, PostIcon, PostList } from "../component/Admin/posts";
import { HotelCreate, HotelEdit, HotelsList } from "../component/Admin/hotels";
import { stringify } from "query-string";
import axios from "axios";
import { spliceString } from "../common";

function StoreAdmin() {
   const httpClient = (url, options = {}) => {
      options.headers = new Headers({ Accept: "application/json" });
      options.headers.set("Authorization", "abcxyz");
      options.headers.set("X-Custom-Header", "foobar");
      // return fetchUtils.fetchJson(url, options);

      return axios.get(url, null, options).then((response) => response);
   };
   //    const dataJsonProvider = jsonServerProvider(process.env.REACT_APP_DATABASE_HOST);
   //    console.log(`  ~ dataJsonProvider`, dataJsonProvider);
   const apiUrl = process.env.REACT_APP_DATABASE_HOST;
   const dataProvider = simpleRestProvider(apiUrl);

   //    console.log(`  ~ dataProvider`, dataProvider.getList())

   const data = {
      ...dataProvider,
      getList: async (resource, query) => {
         const url = `${apiUrl}/${resource}?limit=${query.pagination.perPage}&page=${query.pagination.page}`;
         const result = await httpClient(url);

         let records = result.data.map((record) => ({ id: record.barcode, ...record, description: spliceString(record.description, 50) }));
         return {
            data: records,
            total: +result.headers["x-total-count"],  
         };
      },
      getOne: async (resource, params) => {
         const url = `${apiUrl}/${resource}/${params.id}`;
         const result = await httpClient(url);
         return result;
      },
   };

   return (
      <Admin basename="/admin" dataProvider={data}>
         <Resource name="admin" list={<p>hello</p>} />
         <Resource name="hotel" list={HotelsList} edit={HotelEdit} create={HotelCreate} />
         <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
      </Admin>
   );
}

export default StoreAdmin;
