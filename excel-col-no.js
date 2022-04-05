var titleToNumber = function(columnTitle) {
    let num  = 0;
    for(let i = 0; i < columnTitle.length-1; i++){
        num = num + (26*(columnTitle[i].charCodeAt(0)- 64));
    }
    num = num + columnTitle[columnTitle.length-1].charCodeAt(0) - 64;

    return num;
};

console.log(titleToNumber("AA"))