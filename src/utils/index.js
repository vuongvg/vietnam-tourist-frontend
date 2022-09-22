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