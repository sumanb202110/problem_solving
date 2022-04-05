const palindromNum = (num) => {
    if(num < 0){
        return false;
    }

    let tempNum = num;
    let digit = [];
    let i = 0;
    while(tempNum > 0){
        digit[i] = tempNum%10;
        tempNum = Math.floor(tempNum / 10);
        i++;
    }
    i = 0;
    let j = digit.length-1;
    while(i<j){
        if(digit[i] != digit[j]){
            return false
        }
        i++;
        j--;
    }

    return true;
}




console.log(palindromNum(5888));