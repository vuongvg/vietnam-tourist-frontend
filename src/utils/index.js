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

export const convertDateForm = (str) => {
    const date = new Date(str);
    return date.getDate() + "/" + (date.getMonth()*1+1) + "/" + date.getFullYear() +" "+ date.getHours()+":"+date.getMinutes();
}

export const spliceString = (str,num) => {
    str=str.trim();
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

export const displayPrice = (number) => {
    let a = [...String(number)].reverse().join(""), b = '';
    for (let i = 0; i < a.length; i++) {
        b += a[i];
        if ((i + 1) % 3 === 0 && (i + 1) !== a.length) {
            b += '.';
        }
    }

    return [...b].reverse().join("") + " VNĐ";
}

export const getToken = () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
        return false;
    } else {
        return token;
    }
}

export const provincesList = [
    {value:"Ha Noi",label:"Hanoi"},
    {value:"Ho Chi Minh",label:"Ho Chi Minh"},
    {value:"An Giang",label:"An Giang"},
    {value:"Ba Ria",label:"Ba Ria"},
    {value:"Vung Tau",label:"Vung Tau"},
    {value:"Bac Lieu",label:"Bac Lieu"},
    {value:"Bac Giang",label:"Bac Giang"},
    {value:"Bac Kan",label:"Bac Kan"},
    {value:"Bac Ninh",label:"Bac Ninh"},
    {value:"Ben Tre",label:"Ben Tre"},
    {value:"Binh Duong",label:"Binh Duong"},
    {value:"Binh Dinh",label:"Binh Dinh"},
    {value:"Binh Phuoc",label:"Binh Phuoc"},
    {value:"Binh Thuan",label:"Binh Thuan"},
    {value:"Ca Mau",label:"Ca Mau"},
    {value:"Cao Bang",label:"Cao Bang"},
    {value:"Can Tho",label:"Can Tho"},
    {value:"Da Nang",label:"Da Nang"},
    {value:"Dak Lak",label:"Dak Lak"},
    {value:"Dak Nong",label:"Dak Nong"},
    {value:"Dien Bien",label:"Dien Bien"},
    {value:"Dong Nai",label:"Dong Nai"},
    {value:"Dong Thap",label:"Dong Thap"},
    {value:"Gia Lai",label:"Gia Lai"},
    {value:"Ha Giang",label:"Ha Giang"},
    {value:"Ha Nam",label:"Ha Nam"},
    {value:"Ha Tinh",label:"Ha Tinh"},
    {value:"Hai Duong",label:"Hai Duong"},
    {value:"Hai Phong",label:"Hai Phong"},
    {value:"Hau Giang",label:"Hau Giang"},
    {value:"Hoa Binh",label:"Hoa Binh"},
    {value:"Hung Yen",label:"Hung Yen"},
    {value:"Cam Ranh",label:"Khanh Hoa"},
    {value:"Kien Giang",label:"Kien Giang"},
    {value:"Kon Tum",label:"Kon Tum"},
    {value:"Lao Cai",label:"Lao Cai"},
    {value:"Lam Dong",label:"Lam Dong"},
    {value:"Long An",label:"Long An"},
    {value:"Nam Dinh",label:"Nam Dinh"},
    {value:"Nghe An",label:"Nghe An"},
    {value:"Ninh Binh",label:"Ninh Binh"},
    {value:"Ninh Thuan",label:"Ninh Thuan"},
    {value:"Phu Tho",label:"Phu Tho"},
    {value:"Phu Yen",label:"Phu Yen"},
    {value:"Quang Binh",label:"Quang Binh"},
    {value:"Quang Nam",label:"Quang Nam"},
    {value:"Quang Ngai",label:"Quang Ngai"},
    {value:"Quang Ninh",label:"Quang Ninh"},
    {value:"Quang Tri",label:"Quang Tri"},
    {value:"Soc Trang",label:"Soc Trang"},
    {value:"Son La",label:"Son La"},
    {value:"Tay Ninh",label:"Tay Ninh"},
    {value:"Thai Binh",label:"Thai Binh"},
    {value:"Thai Nguyen",label:"Thai Nguyen"},
    {value:"Thanh Hoa",label:"Thanh Hoa"},
    {value:"Thua Thien Hue",label:"Thua Thien Hue"},
    {value:"Tien Giang",label:"Tien Giang"},
    {value:"Tra Vinh",label:"Tra Vinh"},
    {value:"Tuyen Quang",label:"Tuyen Quang"},
    {value:"Vinh Long",label:"Vinh Long"},
    {value:"Vinh Phuc",label:"Vinh Phuc"},
    {value:"Yen Bai",label:"Yen Bai"}
];

export const citiesList = [
    {value:"Ha Noi",label:"Hanoi"},
    {value:"Ho Chi Minh",label:"Ho Chi Minh"},
    {value:"Chau Doc",label:"Chau Doc"},
    {value:"Ba Ria",label:"Ba Ria"},
    {value:"Vung Tau",label:"Vung Tau"},
    {value:"Bac Lieu",label:"Bac Lieu"},
    {value:"Bac Giang",label:"Bac Giang"},
    {value:"Bac Kan",label:"Bac Kan"},
    {value:"Bac Ninh",label:"Bac Ninh"},
    {value:"Ben Tre",label:"Ben Tre"},
    {value:"Di An",label:"Di An"},
    {value:"Quy Nhon",label:"Quy Nhon"},
    {value:"Nga Bay",label:"Nga Bay"},
    {value:"Binh Phuoc",label:"Binh Phuoc"},
    {value:"Binh Thuan",label:"Binh Thuan"},
    {value:"Ca Mau",label:"Ca Mau"},
    {value:"Cao Bang",label:"Cao Bang"},
    {value:"Can Tho",label:"Can Tho"},
    {value:"Da Nang",label:"Da Nang"},
    {value:"Dak Lak",label:"Dak Lak"},
    {value:"Dak Nong",label:"Dak Nong"},
    {value:"Dien Bien",label:"Dien Bien"},
    {value:"Long Khanh",label:"Long Khanh"},
    {value:"Dong Thap",label:"Dong Thap"},
    {value:"Gia Lai",label:"Gia Lai"},
    {value:"Ha Giang",label:"Ha Giang"},
    {value:"Ha Nam",label:"Ha Nam"},
    {value:"Ha Tinh",label:"Ha Tinh"},
    {value:"Chi Linh",label:"Hai Duong"},
    {value:"Hai Phong",label:"Hai Phong"},
    {value:"Hau Giang",label:"Hau Giang"},
    {value:"Hoa Binh",label:"Hoa Binh"},
    {value:"Hung Yen",label:"Hung Yen"},
    {value:"Khanh Hoa",label:"Khanh Hoa"},
    {value:"Ha Tien",label:"Ha Tien"},
    {value:"Kon Tum",label:"Kon Tum"},
    {value:"Lao Cai",label:"Lao Cai"},
    {value:"Bao Loc",label:"Lam Dong"},
    {value:"Long An",label:"Long An"},
    {value:"Mong Cai",label:"Mong Cai"},
    {value:"Nam Dinh",label:"Nam Dinh"},
    {value:"Nghe An",label:"Nghe An"},
    {value:"Ninh Binh",label:"Ninh Binh"},
    {value:"Ninh Thuan",label:"Ninh Thuan"},
    {value:"Phu Tho",label:"Phu Tho"},
    {value:"Phu Yen",label:"Phu Yen"},
    {value:"Phu Quoc",label:"Phu Quoc"},
    {value:"Phuc Yen",label:"Phuc Yen"},
    {value:"Sa Dec",label:"Sa Dec"},
    {value:"Sam Son",label:"Sam Son"},
    {value:"Song Cong",label:"Song Cong"},
    {value:"Tam Diep",label:"Tam Diep"},
    {value:"Thuan An",label:"Thuan An"},
    {value:"Uong Bi",label:"Uong Bi"},
    {value:"Quang Binh",label:"Quang Binh"},
    {value:"Hoi An",label:"Quang Nam"},
    {value:"Quang Ngai",label:"Quang Ngai"},
    {value:"Cam Pha",label:"Quang Ninh"},
    {value:"Quang Tri",label:"Quang Tri"},
    {value:"Soc Trang",label:"Soc Trang"},
    {value:"Son La",label:"Son La"},
    {value:"Tay Ninh",label:"Tay Ninh"},
    {value:"Thai Binh",label:"Thai Binh"},
    {value:"Thai Nguyen",label:"Thai Nguyen"},
    {value:"Thanh Hoa",label:"Thanh Hoa"},
    {value:"Thua Thien Hue",label:"Thua Thien Hue"},
    {value:"Tien Giang",label:"Tien Giang"},
    {value:"Tra Vinh",label:"Tra Vinh"},
    {value:"Tuyen Quang",label:"Tuyen Quang"},
    {value:"Vinh Long",label:"Vinh Long"},
    {value:"Vinh Phuc",label:"Vinh Phuc"},
    {value:"Yen Bai",label:"Yen Bai"}
];