import axios from "axios";
import React, { useEffect } from "react";

function Admin() {
   useEffect(() => {
      const token = localStorage.getItem("token");
      // axios.get(`${process.env.REACT_APP_DATABASE_HOST}/admin`, { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
      axios.get(`http://localhost:5001/api/admin`, { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
         const elm = document.createElement("script");
         elm.type = "text/javascript";
         elm.id = "javascript";
         elm.innerHTML = res.data;
         document.head.append(elm);
      });
      // return document.getElementById("javascript").innerHTML=''
   }, []);

   return <div id="admin" className="mt-5"></div>;
}

export default Admin;
