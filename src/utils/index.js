export const displayStars = (evaluate) => {
    let arr = [];
    let a = evaluate;
    do {
        if (a!==0.5) {
            arr.push(1);
        } else {
            arr.push(0);
        }
        a -= 1;
    } while(a > 0) 

    return arr;
}

export const transferDate = (str) => {
    const date = new Date(str);
    return date.getDate() + "/" + (date.getMonth()*1+1) + "/" + date.getFullYear() +" "+ date.getHours()+":"+date.getMinutes();
}

export const spliceString = (str,num) => {
    str=str.trim()
    const isLonger = str.length > num;
    if (isLonger) {
        let result = str.slice(0,num);

        for (let i = num; i< str.length; i++ ) {
            if (str[i] === " ") {
                return result + "...";
            } else {
                result += str[i];
            }
        }
    } else {
        return str;
    }
}