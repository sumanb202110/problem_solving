const romanInt = (str) => {
    let output = 0;
    let charArr = [];

    const map1 = new Map();
    map1.set('I', 1);
    map1.set('V', 5);
    map1.set('X', 10);
    map1.set('L', 50);
    map1.set('C', 100);
    map1.set('D', 500);
    map1.set('M', 1000);

    charArr = str.split("");

    let prev = null;
    for(let i = 0; i < charArr.length; i++){
        if(prev == 'I' && (charArr[i] == 'V' || charArr[i] == 'X')){
            output = output + map1.get(charArr[i]) -2 * map1.get(prev);
        }else if(prev == 'X' && (charArr[i] == 'L' || charArr[i] == 'C')){
            output = output + map1.get(charArr[i]) -2 * map1.get(prev);
        }else if(prev == 'C' && (charArr[i] == 'D' || charArr[i] == 'M')){
            output = output + map1.get(charArr[i]) -2 * map1.get(prev);
        }else{
            output = output + map1.get(charArr[i]);
        }
        prev = charArr[i];
    }



    console.log(output);
}


romanInt("XII");

