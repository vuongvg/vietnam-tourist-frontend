export const spliceString = (str, num) => {
   str = str.trim();
   const isLonger = str.length > num;
   if (isLonger) {
      let result = str.slice(0, num);

      for (let i = num; i < str.length; i++) {
         if (str[i] === " ") {
            return result + "...";
         } else {
            result += str[i];
         }
      }
   } else { 
      return str;
   }
};
