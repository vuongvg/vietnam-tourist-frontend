export const spliceString = (str, num) => {
   if (!str) return;
   if (typeof str === "object") return JSON.stringify(str);
   if (typeof str === "number") return str.toLocaleString();
   str = str.trim();

   const isLonger = str.length > num;
   let result = str.slice(0, num);
   for (let i = num; i < str.length; i++) {
      if (str[i] === " ") {
         return result + "...";
      } else if (i < num) {
         return (result += str[i]);
      } else {
         return result;
      }
   }

   return str;

   // const isLonger = str.length > num;
   // if (isLonger) {
   //    let result = str.slice(0, num);

   //    for (let i = num; i < str.length; i++) {
   //       if (str[i] === " ") {
   //          return result + "...";
   //       } else if (i < num) {
   //        return  result += str[i];
   //       } else {
   //          return result;
   //       }
   //    }
   // } else {
   //    return str;
   // }
};
