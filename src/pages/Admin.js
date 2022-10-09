import axios from "axios";
import React, { useEffect } from "react";

function Admin() {
   useEffect(() => {
      const token = localStorage.getItem("token");
      axios.get(`${process.env.REACT_APP_DATABASE_HOST}/admin`, { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
         const elm = document.createElement("script");
         elm.type = "text/javascript";
         elm.id = "java";
         elm.innerHTML = res.data;
         document.head.append(elm);
      });
   }, []);

   return <div id="admin"></div>;
}

export default Admin;
