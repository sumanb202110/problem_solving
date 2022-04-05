var sortString = function(s) {
    let output = "";

    let map1 = new Map();
    let chars = [];

    for(let i = 0; i < s.length; i++){
        if(!map1.get(s[i])){
            map1.set(s[i], 1);
            chars.push(s[i]);
        }else{
            map1.set(s[i], map1.get(s[i])+1);
        }
    }
    chars.sort();

    let i = 0;
    while(i < s.length){
        let j = 0;
        while(j < chars.length && i < s.length){
            if(map1.get(chars[j]) > 0){
                output+= chars[j];
                map1.set(chars[j], map1.get(chars[j])-1);
                i++;
                j++;
            }else{
                break;
            }
        }
        j = chars.length-1;
        while(j >= 0 && i < s.length){
            if(map1.get(chars[j]) > 0){
                output+= chars[j];
                map1.set(chars[j], map1.get(chars[j])-1);
                i++;
                j--;
            }else{
                break
            }
        }
    }

    console.log(output);
};
    
sortString("aaaabbbbcccc");