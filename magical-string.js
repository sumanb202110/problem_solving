var magicalString = function(n) {
    let str = "122";
    let i = 2;
    let j = 2;

    while(j < n){
        let ch = str[j] == '1' ? '2' : '1';

        let times = str[i] - '0';

        for(let k = 0; k < times; k++){
            str += ch;
            j++;
        }
        i++;
    }

    let count = 0;
    for(let k = 0; k < n; k++){
        if(str[k] == '1'){
            count++;
        }
    }
    console.log(count);
};

magicalString(6);