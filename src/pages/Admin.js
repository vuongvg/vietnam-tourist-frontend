/* eslint-disable no-unused-vars */
import * as React from "react";
import { Admin, Resource, EditGuesser, ListGuesser, fetchUtils } from "react-admin";
import simpleRestProvider, { restClient } from "ra-data-simple-rest";
import { UserList } from "../component/Admin/users";
import { HotelCreate, HotelEdit, HotelsList } from "../component/Admin/hotels";
import { stringify } from "query-string";
import axios from "axios";
import { spliceString } from "../common";
import { TourCreate, TourEdit, ToursList } from "../component/Admin/tours";
import { storage, storageRef } from "../common/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { async } from "@firebase/util";
import { PostCreate, PostEdit, PostList } from "../component/Admin/basePost";

function StoreAdmin() {
   const httpClient = (url, options = {}) => {
      options.headers = new Headers({ Accept: "application/json" });
      options.headers.set("Authorization", "abcxyz");
      options.headers.set("X-Custom-Header", "foobar");
      // return fetchUtils.fetchJson(url, options);

      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return axios(url, null, options).then((response) => response);
   };

   const apiUrl = process.env.REACT_APP_DATABASE_HOST;
   const dataProvider = simpleRestProvider(apiUrl);

   const data = {
      ...dataProvider,
      getList: async (resource, query) => {
         const url = `${apiUrl}/${resource}?limit=${query.pagination.perPage}&page=${query.pagination.page}`;
         const result = await httpClient(url);

         let records = result.data.map((record) => ({
            id: record._id,
            ...record,
         }));
         return {
            data: records,
            total: +result.headers["x-total-count"],
         };
      },
      getOne: async (resource, params) => {
         const url = `${apiUrl}/${resource}/${params.id}`;
         const result = await httpClient(url);
         return { data: { ...result.data, id: result.data._id } };
      },
      update: async (resource, dataUpdate) => {
         const url = `${apiUrl}/${resource}/${dataUpdate.id}`;
         const result = await axios.put(url, dataUpdate.data);
         return result;
      },
      delete: async (resource, dataDelete) => {
         const url = `${apiUrl}/${resource}/${dataDelete.id}`;
         const result = await axios.delete(url, dataDelete.data);
         return result;
      },
      create: async (resource, dataCreate) => {
         const url = `${apiUrl}/${resource}`;
         const storageRef = ref(storage, "avatar/" + Date.now() + dataCreate.data.avatar.title);
         const uploadTask = uploadBytesResumable(storageRef, dataCreate.data.avatar.rawFile);
         return new Promise((response, rej) => {
            uploadTask.on(
               "state_changed",
               null,
               (error) => console.log(`  ~ error`, error),
               () =>
                  getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                     const result = await axios.post(url, { ...dataCreate.data, avatar: downloadURL });
                     result.data.id = result.data._id;
                     response(result);
                  })
            );
         });
      },
   };
   const listFieldTour = [
      { prop: "content", name: "Content" },
      { prop: "location", name: "Location" },
      { prop: "price", name: "Price" },
      { prop: "regularPrice", name: "Regular" },
   ];
   const listFieldHotel = [
      { prop: "email", name: "Email" },
      { prop: "phone", name: "Phone" },
      { prop: "city", name: "City" },
      { prop: "fullLocation", name: "Location" },
   ];
   const listFieldRestaurant = [
      { prop: "email", name: "Email" },
      { prop: "phone", name: "Phone" },
      { prop: "album", name: "Album" },
      { prop: "city", name: "City" },
      { prop: "fullLocation", name: "Location" },
      { prop: "gmaplink", name: "Gmaplink" },
   ];
   const listFieldBlog = [{ prop: "content", name: "Content" }];
   const listFieldLocation = [];
   return (
      <Admin basename="/admin" dataProvider={data}>
         <Resource name="admin" list={<p>hello</p>} />
         {/* <Resource name="hotel" list={HotelsList} edit={EditGuesser} create={HotelCreate} /> */}
         <Resource name="hotel" list={PostList(listFieldHotel)} edit={PostEdit(listFieldHotel)} create={PostCreate(listFieldHotel)} />
         {/* <Resource name="tour" list={Tourist} edit={TourEdit} create={TourCreate} /> */}
         <Resource name="tour" list={PostList(listFieldTour)} edit={PostEdit(listFieldTour)} create={PostCreate(listFieldTour)} />
         <Resource name="blog" list={PostList(listFieldBlog)} edit={PostEdit(listFieldBlog)} create={PostCreate(listFieldBlog)} />
         <Resource name="location" list={PostList(listFieldLocation)} edit={PostEdit(listFieldLocation)} create={PostCreate(listFieldLocation)} />
         <Resource name="restaurant" list={PostList(listFieldRestaurant)} edit={PostEdit(listFieldRestaurant)} create={PostCreate(listFieldRestaurant)} />

         {/* <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} /> */}
      </Admin>
   );
}

export default StoreAdmin;
