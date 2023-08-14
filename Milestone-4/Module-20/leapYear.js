function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
    return true;
    }
    else{
        return false;
    }
}

const isMyYear = isLeapYear(2001);
console.log(isMyYear);

const isHerYera = isLeapYear(2008);
console.log(isHerYera);
