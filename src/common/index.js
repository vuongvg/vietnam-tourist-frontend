export const spliceString = (str, num) => {
   if (!str) return;
   if (typeof str === "object")
      return (
         <>
            {str.slice(0, 2).map((img, index) => (
               <img key={index} src={img.src} height="50"></img>
            ))}
         </>
      );

   if (typeof str === "number") return str.toLocaleString();
   str = str.trim();

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
};
