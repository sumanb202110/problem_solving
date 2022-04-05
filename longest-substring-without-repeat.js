const validParan = (str) => {
    let largestLength = 0;
    let window =  new Map();
    let windowStr = "";
    for(let i = 0; i < str.length; i++){
        if(windowStr.length > largestLength){
            largestLength = windowStr.length;
        }
        if(window.get(str[i]) == true){
            let j = 0;
            while(window.get(str[i]) == true && j <= windowStr.length){
                window.delete(windowStr[j]);
                windowStr = windowStr.substring(1);
                j++;
            }
        }
        window.set(str[i], true);
        windowStr = windowStr+str[i];
    }
    return largestLength;
}


console.log(validParan("bbbbb"));