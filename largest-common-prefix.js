const validParan = (strArr) => {
    let output = "";
    let length = strArr[0].length;
    for(let j = 0; j < strArr.length; j++){
        if(strArr[j].length > length){
            length = strArr[j].length;
        }
    }
    for(let i = 0; i < length; i++){
        let status = true;
        let char = strArr[0][i];
        for(let j = 0; j < strArr.length; j++){
            if(strArr[j][i] != char){
                status = false;
            }
        }
        if(status){
            output = output + char;
        }
    }
    return output;
}


console.log(validParan(["dog","racecar","car"]));