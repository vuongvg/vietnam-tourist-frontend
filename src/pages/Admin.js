import { Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";

function Admin() {
   useEffect(() => {
      const token = localStorage.getItem("token");
      axios.get(`${process.env.REACT_APP_DATABASE_HOST}/admin`, { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
         // axios.get(`http://localhost:5001/api/admin`, { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
         const elm = document.createElement("script");
         elm.type = "text/javascript";
         elm.id = "javascript";
         elm.innerHTML = res.data;
         document.head.append(elm);
      });
   }, []);

   return (
      <div id="admin" className="mt-5">
         <div className="d-flex container pt-5">
            <div className="col col-2 me-4">
               <Skeleton height={50} />
               <Skeleton height={50} />
               <Skeleton height={50} />
               <Skeleton height={50} />
               <Skeleton height={50} />
            </div>
            <div className="col col-10">
               <Skeleton height={100} />
               <Skeleton height={100} />
               <Skeleton height={100} />
               <Skeleton height={100} />
               <Skeleton height={100} />
            </div>
         </div>
      </div>
   );
}

export default Admin;
