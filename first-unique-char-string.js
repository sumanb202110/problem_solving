var firstUniqChar = function(s) {
    let map1 = new Map();

    for(let i = 0; i < s.length; i++){
        if(!map1.get(s[i])){
            map1.set(s[i], 1);
        }else{
            map1.set(s[i], map1.get(s[i])+1);
        }
    }
    for(let i = 0; i < s.length; i++){
        if(map1.get(s[i]) == 1){
            return i;
        }
    }
    return -1;
};

console.log(firstUniqChar("aabb"));