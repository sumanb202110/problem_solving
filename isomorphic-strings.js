var isIsomorphic = function(s, t) {
    let map1 = new Map();

    if(s.length != t.length){
        return false;
    }

    for(let i = 0; i < s.length; i++){
        if(!map1.has(s[i])){
            map1.set(s[i], t[i]);
        }else{
            if(map1.get(s[i]) != t[i]){
                return false;
            }
        }
    }

    return true;
};

console.log(isIsomorphic("paper", "title"));